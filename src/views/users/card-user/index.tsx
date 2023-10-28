import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { type ProfileUser } from "~/lib/models/auth";

interface UserCardProps {
  user: ProfileUser;
}

export const UserCard = component$(({ user }: UserCardProps) => {
  return (
    <article class="block w-80 lg:w-72 xl:w-96 rounded-lg bg-gray-100">
      <Link href={`/users/details/${user.id}`}>
        Usuario {user.username}
      </Link>
      <main class="p-6 bg-gray-100">
        <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800 capitalize">
          {user.firstName} {user.lastName}
        </h5>
        <p class="mb-4 text-base text-gray-700">
          {user.roles}
        </p>
        <Link
          href={`/users/details/${user.id}`}
          class="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-800 hover:bg-blue-700 focus:outline-none rounded"
        >
          <span class="text-sm font-medium leading-none text-white">
            Detalle
          </span>
        </Link>
      </main>
    </article>
  );
});
