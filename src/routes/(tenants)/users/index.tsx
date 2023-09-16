import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { Table } from "~/components/ui/table";
import { getAllUsers } from "~/lib/services/users";

export const useUsers = routeLoader$(async ({ cookie }) => {
  const jwtCookie = cookie.get("jwt");
  const { data } = await getAllUsers(jwtCookie?.value);
  return data;
});

export default component$(() => {
  const users = useUsers();

  if (users.value.length === 0) return <p>No hay restuarantes</p>;

  const header = {
    title: "Users",
    action: { href: "/users/create", title: "New User" },
  };

  return (
    <>
      <Table header={header} values={users.value} />
    </>
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
