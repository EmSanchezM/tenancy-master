import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface TableHeaderProps {
  title: string;
  action: { href: string; title: string };
}

export const TableHeader = component$(({ title, action }: TableHeaderProps) => {
  return (
    <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
      <div class="sm:flex items-center justify-between">
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
          {title}
        </p>
        <div>
          <button class="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <Link
              href={action.href}
              class="text-sm font-medium leading-none text-white"
            >
              {action.title}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
});
