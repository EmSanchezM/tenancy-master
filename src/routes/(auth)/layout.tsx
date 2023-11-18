import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import styles from "./auth-layout.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <main class="wrapper">
      <section class="container" aria-label="content-auth">
        <header class="title" role="heading" aria-label="auth-title">
          <h1>Bienvenido a Tenancy Master!</h1>
        </header>
        <Slot />
      </section>
    </main>
  );
});
