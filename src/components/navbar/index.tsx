import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const NavBar = component$(() => {
  const links = [
    { href: "/", title: "Restaurantes" },
    { href: "/users", title: "Usuarios" },
  ];

  return (
    <nav class="w-full py-4 border-t border-b bg-gray-100">
      <div class="block sm:hidden">
        <Link
          href="/"
          class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
        >
          Configuraciones{" "}
          <i class="open ? 'fa-chevron-down': 'fa-chevron-up' fas ml-2"></i>
        </Link>
      </div>
      <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          {links.map(({ href, title }) => (
            <Link
              key={title}
              href={href}
              class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
});
//class="open ? 'block': 'hidden'"
