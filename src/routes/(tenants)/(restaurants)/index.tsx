import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { getAllRestaurants } from "~/lib/services/restaurants";
import {
  HeaderRestaurant,
  NoDataRestaurants,
  RestaurantCard,
} from "~/views/restaurants";

export const useRestaurants = routeLoader$(async ({ cookie }) => {
  const jwtCookie = cookie.get("jwt");
  const { data } = await getAllRestaurants(jwtCookie?.value);
  return data;
});

export default component$(() => {
  const restaurants = useRestaurants();

  if (restaurants.value.length === 0) return <NoDataRestaurants />;

  return (
    <>
      <section class="w-full sm:px-6">
        <HeaderRestaurant />
        <main class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <section class="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.value.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              );
            })}
          </section>
        </main>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Restaurantes | Tenancy Master",
  meta: [
    {
      name: "description",
      content: "Mantenimiento y control de restaurantes",
    },
  ],
};
