import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { Dropdown } from "../ui/drop-down";
import { type ProfileUser } from "~/lib/models/auth";

interface TopBarProps {
  profile?: ProfileUser;
}

export const TopBar = component$(({ profile }: TopBarProps) => {
  const links = [
    { href: "/account-settings", title: "Account settings" },
    { href: "/profile", title: "Profile" },
  ];

  const title = profile?.username || profile?.email || "";

  return (
    <nav class="w-full py-4 bg-blue-800 shadow">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
        <nav>
          <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
            <li>
              <Link href="/" class="hover:text-gray-200 hover:underline px-4">
                TenancyMaster
              </Link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center text-lg no-underline text-white pr-6">
          <Dropdown title={title} linkElements={links} />
        </div>
      </div>
    </nav>
  );
});
