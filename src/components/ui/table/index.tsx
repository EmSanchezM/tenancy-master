import { $, component$, useSignal } from "@builder.io/qwik";
import { TableHeader } from "./TableHeader";
import type { TableHeaderProps } from "./TableHeader";
import { TableRow } from "./TableRow";

interface TableProps {
  header: TableHeaderProps;
  values: any;
}

export const Table = component$(({ header, values }: TableProps) => {
  const show = useSignal<number | null>(null);

  const handleShow = $((index: number | null) => {
    show.value = index;
  });

  return (
    <div class="w-full sm:px-6">
      <TableHeader title={header.title} action={header.action} />
      <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr class="h-16 w-full text-sm leading-none text-gray-800">
              <th class="font-normal text-left pl-4">Usuario</th>
              <th class="font-normal text-left pl-12">Nombre de Usuario</th>
              <th class="font-normal text-left pl-12">Roles</th>
              <th class="font-normal text-left pl-12">Acciones</th>
            </tr>
          </thead>
          <tbody class="w-full">
            {values.map((value: any, index: number) => (
              <TableRow
                key={value.id}
                item={value}
                show={show.value}
                handleShow={handleShow}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
