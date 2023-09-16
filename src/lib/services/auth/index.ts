import {
  type UserAuthenticate,
  type LoginRequestData,
  type ProfileUser,
} from "~/lib/models/auth";

import { type ApiError } from "~/lib/models/response-data.model";

import { api, apiPrivate } from "~/lib/api";

const getProfile = async (cookie: string) => {
  try {
    const { data } = await apiPrivate(cookie).get<ProfileUser>("auth-tenants/profile");

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = { message: error.message, status: error.status } as ApiError;
    throw { success: false, data };
  }
};

const Login = async (payload: LoginRequestData) => {
  try {
    const { emailOrUsername, password } = payload;

    const payloadData: any = {
      password,
    };

    if (emailOrUsername.includes("@")) {
      payloadData.email = emailOrUsername;
    } else {
      payloadData.username = emailOrUsername;
    }

    const { data } = await api.post<UserAuthenticate>(
      "auth-tenants/login",
      payloadData
    );

    return {
      success: data.id ? true : false,
      data,
    };
  } catch (error: any) {
    const data = { message: error.message, status: error.status } as ApiError;
    throw { success: false, data };
  }
};

export { getProfile, Login };
