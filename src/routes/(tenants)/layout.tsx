import { Slot, component$ } from "@builder.io/qwik";
import { type RequestHandler, routeLoader$ } from "@builder.io/qwik-city";

import { Footer } from "~/components/footer";
import { NavBar } from "~/components/navbar";
import { TopBar } from "~/components/top-bar";

import { type ProfileUser } from "~/lib/models/auth";
import { getProfile } from "~/lib/services/auth";

export const onRequest: RequestHandler = async ({
  cookie,
  redirect,
  sharedMap,
}) => {
  const jwtCookie = cookie.get("jwt");

  if (jwtCookie) {
    const { data } = await getProfile(jwtCookie.value);
    sharedMap.set("user", data);
    return;
  }

  throw redirect(301, "/login");
};

export const useProfileUser = routeLoader$(async ({ sharedMap }) => {
  return sharedMap.get("user") as ProfileUser;
});

export default component$(() => {
  const profile = useProfileUser();

  return (
    <div class="min-h-screen flex flex-col">
      <TopBar profile={profile.value} />
      <NavBar />
      <main class="container mx-auto flex flex-grow py-6">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
