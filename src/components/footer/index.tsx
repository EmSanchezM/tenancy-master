import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class="w-full border-t bg-gray-100 pb-12">
      <div class="w-full container mx-auto flex flex-col items-center">
        <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <Link
            href="/"
            class="uppercase text-gray-800 text-base font-medium leading-tight px-3"
          >
            Restaurantes
          </Link>
          <Link
            href="/users"
            class="uppercase text-gray-800 font-medium leading-tight text-base px-3"
          >
            Usuarios
          </Link>
        </div>
        <div class="uppercase pb-6">&copy; tenancymaster.com</div>
      </div>
    </footer>
  );
});
