import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { getCookieClient, removeCookieClient } from "~/lib/utils";

interface LinkElements {
  href: string;
  title: string;
}

interface DropdownProps {
  title: string;
  linkElements: LinkElements[];
}

export const Dropdown = component$(
  ({ title = "Account", linkElements }: DropdownProps) => {
    const navigate = useNavigate();
    const activeMenu = useSignal(false);

    const handleToogleMenu = $(() => {
      activeMenu.value = !activeMenu.value;
    });

    const handleLogout = $(() => {
      const jwtCookie = getCookieClient();

      if (!jwtCookie) return;

      removeCookieClient("jwt");
      navigate("/login");
    });

    return (
      <article class="relative inline-block text-left">
        <header>
          <button
            type="button"
            class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-blue-500"
            onClick$={handleToogleMenu}
          >
            <span class="text-gray-800">{title}</span>
          </button>
        </header>
        {activeMenu.value && (
          <main class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1" role="none">
              {linkElements.map((element) => (
                <Link
                  key={element.title}
                  href={element.href}
                  class="text-gray-700 block px-4 py-2 text-sm"
                >
                  {element.title}
                </Link>
              ))}
              <button
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                onClick$={handleLogout}
              >
                Sign out
              </button>
            </div>
          </main>
        )}
      </article>
    );
  },
);
