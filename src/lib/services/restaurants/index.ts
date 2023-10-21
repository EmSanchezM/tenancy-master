import { apiPrivate } from "~/lib/api";

import {
  type Restaurant,
  type RestaurantRequestData,
} from "~/lib/models/restaurants";

const getAllRestaurants = async (cookie: string | undefined) => {
  try {
    const { data } = await apiPrivate(cookie).get<Restaurant[]>("tenants");

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

const getRestaurantByName = async (
  cookie: string | undefined,
  name: string
) => {
  try {
    const { data } = await apiPrivate(cookie).get<Restaurant>(
      `tenants/${name}`
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

const createRestaurant = async (
  cookie: string | undefined,
  payload: RestaurantRequestData
) => {
  try {
    const { data } = await apiPrivate(cookie).post("tenants", payload);

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

const uploadLogoRestaurant = async (cookie: string | undefined, logo: File) => {
  try {
    const formData = new FormData();
    formData.append("file", logo);

    const response = await apiPrivate(cookie, "multipart/form-data").post(
      "tenants/files/logo",
      formData
    );

    const data = response.data as { url: string };

    return {
      success: true,
      data: data.url,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

export {
  getAllRestaurants,
  getRestaurantByName,
  createRestaurant,
  uploadLogoRestaurant,
};
