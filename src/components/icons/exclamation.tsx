import { component$ } from "@builder.io/qwik";

export const Exclamation = component$(
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
          d="M20.043 21H3.957c-1.538 0-2.5-1.664-1.734-2.997l8.043-13.988c.77-1.337 2.699-1.337 3.468 0l8.043 13.988C22.543 19.336 21.58 21 20.043 21zM12 9v4"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
        <path
          d="M12 17.01l.01-.011"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    );
  },
);
