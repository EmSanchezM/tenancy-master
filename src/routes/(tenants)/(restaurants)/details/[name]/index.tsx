import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { getRestaurantByName } from "~/lib/services/restaurants";
import { RestaurantCard } from "~/views/restaurants/card-restaurant";

export const useRestaurant = routeLoader$(async ({ cookie, params }) => {
  const jwtCookie = cookie.get("jwt");
  const { name } = params;

  const { data } = await getRestaurantByName(jwtCookie?.value, name);
  return data;
});

export default component$(() => {
  const restaurant = useRestaurant();

  return <RestaurantCard restaurant={restaurant.value} />;
});
