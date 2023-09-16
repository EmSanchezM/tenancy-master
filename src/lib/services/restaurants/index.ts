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

const getRestaurantByName = async (cookie: string | undefined, name: string) => {
  try {
    const { data } = await apiPrivate(cookie).get<Restaurant>(`tenants/${name}`);

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const data = error;
    throw { success: false, data };
  }
};

const createRestaurant = async (cookie: string | undefined, payload: RestaurantRequestData) => {
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

export { getAllRestaurants, getRestaurantByName, createRestaurant };
