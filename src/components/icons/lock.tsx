import { component$ } from "@builder.io/qwik";

export const Lock = component$(
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
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        class={style}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    );
  },
);
