<script setup lang="ts">
import { ref, reactive } from "vue";
import { z } from "zod";
definePageMeta({ layout: "auth" });

const state = reactive({
  emailOrUsername: "",
  password: "",
});

const schema = z.object({
  emailOrUsername: z.string().min(3, "Email o nombre de usuario es requerido"),
  password: z.string().min(6, "Contraseña es requerida"),
});

type Schema = z.infer<typeof schema>;

const form = ref();

const onSubmit = (evt: Schema) => {
  console.log(evt);
};
</script>

<template>
  <h1 class="text-2xl font-bold text-center">Acceda a su cuenta</h1>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-6"
    @submit="onSubmit"
  >
    <UFormGroup name="emailOrUsername" label="Email o Nombre de usuario">
      <UInput v-model="state.emailOrUsername" />
    </UFormGroup>

    <UFormGroup name="password" label="Contraseña">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink
          to="/auth/forgot-password"
          class="text-sm text-blue-600 hover:underline"
          >Recuperar contraseña</NuxtLink
        >
      </div>
    </div>

    <UButton block type="submit" label="Iniciar sesion" />
  </UForm>
</template>
