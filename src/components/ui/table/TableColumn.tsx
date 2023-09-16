import { component$ } from "@builder.io/qwik";

export const TableColumn = component$(() => {
  return (
    <td class="pl-12">
      <p class="font-medium">32/47</p>
      <p class="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
    </td>
  );
});
