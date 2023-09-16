import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import styles from "./auth-layout.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <main class="wrapper">
      <section class="container">
        <header class="title">Welcome to Tenancy Master!</header>
        <Slot />
      </section>
    </main>
  );
});
