import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const NoDataUsers = component$(() => {
  return (
    <article class="container mx-auto flex flex-wrap py-6 bg-gray-100">
      <main class="m-auto text-center">
        <h3 class="font-semibold leading-7 text-gray-900">
          Todavía no tienes usuarios
        </h3>
        <p class="m-3 text-base leading-6 text-gray-600">
          Para administrar los restaurantes necesitas usuarios.
        </p>
        <div class="my-8">
          <Link
            href="/create"
            class="sm:ml-3 mt-4 sm:mt-0 px-6 py-3 bg-blue-800 hover:bg-blue-700 focus:outline-none rounded"
          >
            <span class="text-sm font-medium leading-none text-white">
              Crear usuario
            </span>
          </Link>
        </div>
      </main>
    </article>
  );
});
