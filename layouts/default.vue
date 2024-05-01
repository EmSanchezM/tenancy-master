<script setup lang="ts"></script>

<template>
  <header
    class="lg:px-16 px-6 shadow-md flex flex-wrap items-center lg:py-0 py-4"
  >
    <div class="flex-1 flex justify-between items-center">
      <NuxtLink to="/" class="flex text-lg font-semibold">
        <span class="mt-3 text-white">Tenancy Master</span>
      </NuxtLink>
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
      <svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0"
        >
          <li class="py-2 lg:py-0">
            <NuxtLink
              class="text-white hover:pb-4 hover:border-b-4 hover:border-blue-600"
              to="/restaurants"
            >
              Restaurantes
            </NuxtLink>
          </li>
          <li class="py-2 lg:py-0">
            <NuxtLink
              class="text-white hover:pb-4 hover:border-b-4 hover:border-blue-600"
              to="/users"
            >
              Usuarios
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="px-16 py-2 lg:px-16">
    <slot />
  </main>
</template>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
