import { component$ } from "@builder.io/qwik";

export const ArrowDown = component$(
  ({
    width = 24,
    height = 24,
    style = "",
  }: {
    width?: number;
    height?: number;
    style?: string;
  }) => {
    return (
      <svg
        width={`${width}px`}
        height={`${height}px`}
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        class={style}
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    );
  },
);
