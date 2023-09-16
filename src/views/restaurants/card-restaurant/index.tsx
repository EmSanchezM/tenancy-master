import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { type Restaurant } from "~/lib/models/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = component$(
  ({ restaurant }: RestaurantCardProps) => {
    return (
      <article class="block w-80 lg:w-72 xl:w-96 rounded-lg bg-gray-100">
        <Link href={`/details/${restaurant.name}`}>
          <img
            class="rounded-t-lg w-full"
            src={
              restaurant.logo ||
              "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            }
            alt={restaurant.name}
            width={200}
            height={200}
          />
        </Link>
        <main class="p-6 bg-gray-100">
          <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800 capitalize">
            {restaurant.name}
          </h5>
          <p class="mb-4 text-base text-gray-700">
            {restaurant.modulesAvailables}
          </p>
          <Link
            href={`/details/${restaurant.name}`}
            class="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-800 hover:bg-blue-700 focus:outline-none rounded"
          >
            <span class="text-sm font-medium leading-none text-white">
              Detalle
            </span>
          </Link>
        </main>
      </article>
    );
  },
);
