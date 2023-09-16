import { apiPrivate } from "~/lib/api";

import type {
  ProfileUser,
  RegisterUserTenancyRequest,
} from "~/lib/models/auth";

const getAllUsers = async (cookie: string | undefined) => {
  try {
    const { data } = await apiPrivate(cookie).get<ProfileUser[]>("auth-tenants/users");

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

const createUser = async (cookie: string | undefined, payload: RegisterUserTenancyRequest) => {
  try {
    const { data } = await apiPrivate(cookie).post<ProfileUser>(
      "auth-tenants/register",
      payload
    );

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

export { getAllUsers, createUser };
