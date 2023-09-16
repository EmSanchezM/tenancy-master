import { Slot, component$ } from "@builder.io/qwik";

interface ButtonProps {
  type: "button" | "submit";
  variant: "primary" | "secondary" | "danger" | "warning";
}

export const Button = component$(({ type, variant }: ButtonProps) => {
  const color = {
    primary: "bg-blue-800 hover:bg-blue-700",
    secondary: "bg-white-100 hover:bg-white-700",
    danger: "bg-red-100 hover:bg-blue-300",
    warning: "bg-yellow-100 hover:bg-yellow-700",
  };

  return (
    <button
      type={type}
      class={`inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 focus:outline-none rounded ${color[variant]} rounded-lg p-4 mb-4 text-sm`}
    >
      <Slot />
    </button>
  );
});
