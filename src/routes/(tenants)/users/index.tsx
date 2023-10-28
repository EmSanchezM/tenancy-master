import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { getAllUsers } from "~/lib/services/users";

import { UserCard, HeaderUser, NoDataUsers } from "~/views/users";

export const useUsers = routeLoader$(async ({ cookie }) => {
  const jwtCookie = cookie.get("jwt");
  const { data } = await getAllUsers(jwtCookie?.value);
  return data;
});

export default component$(() => {
  const users = useUsers();

  if (users.value.length === 0) return <NoDataUsers />;

  return (
    <section class="w-full sm:px-6">
      <HeaderUser />
      <main class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <section class="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.value.map((user) => {
            return (
              <UserCard key={user.id} user={user} />
            );
          })}
        </section>
      </main>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Usuarios | Tenancy Master",
  meta: [
    {
      name: "description",
      content: "Mantenimiento y control de usuarios",
    },
  ],
};
