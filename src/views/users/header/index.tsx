import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const HeaderUser = component$(() => {
  return (
    <header class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
      <div class="sm:flex items-center justify-between">
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
          Usuarios
        </p>
        <div>
          <Link
            href="/users/create"
            class="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-800 hover:bg-blue-700 focus:outline-none rounded"
          >
            <span class="text-sm font-medium leading-none text-white">
              Crear usuario
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
});
