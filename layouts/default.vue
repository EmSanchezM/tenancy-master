<script setup lang="ts">
import Sidebar from "../common/navigation/sidebar.vue";

const menu = [
  { name: "Restaurantes", to: "/restaurants" },
  { name: "Usuarios", to: "/users" },
  { name: "Configuraciones", to: "/settings" },
];
</script>

<template>
  <main class="flex justify-center w-full min-h-screen bg-gray-200">
    <Sidebar />
    <section class="flex min-h-screen flex-1 flex-col bg-gray-800">
      <nav class="flex items-center gap-x-6">NAVBAR</nav>
      <slot />
    </section>
  </main>
</template>
