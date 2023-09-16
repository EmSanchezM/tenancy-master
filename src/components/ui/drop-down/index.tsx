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
      navigate("login");
    });

    return (
      <article class="relative inline-block text-left">
        <header>
          <button
            type="button"
            class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-blue-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick$={handleToogleMenu}
          >
            <span class="text-gray-800">{title}</span>
          </button>
        </header>
        {activeMenu.value && (
          <main
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div class="py-1" role="none">
              {linkElements.map((element) => (
                <Link
                  key={element.title}
                  href={element.href}
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-0"
                >
                  {element.title}
                </Link>
              ))}
              <button
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
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

/**
 *  <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 focus:ring-blue-500"
            id="user-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Nombre de Usuario
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707a1 1 0 01-1.414-1.414l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <div className="py-1" role="none">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Perfil</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cambiar Contraseña</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cerrar Sesión</a>
            </div>
          </div>
        )}
      </div>
 * 
 */
