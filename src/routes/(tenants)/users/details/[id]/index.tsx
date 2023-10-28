import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { getAllUsers } from "~/lib/services/users";
import { UserCard } from "~/views/users";

export const useUsers = routeLoader$(async ({ cookie }) => {
  const jwtCookie = cookie.get("jwt");
  //TODO: get user by id 
  //const { id } = params;

  const { data } = await getAllUsers(jwtCookie?.value);
  return data;
});

export default component$(() => {
  const user = useUsers();

  return <UserCard user={user.value[0]} />;
});
