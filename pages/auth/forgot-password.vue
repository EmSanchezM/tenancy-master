<script setup lang="ts">
import { reactive, ref } from "vue";
import { z } from "zod";

const state = reactive({
  email: "",
});

const schema = z.object({
  email: z.string().min(3, "Es requerido"),
});

const form = ref();

const onSubmit = (evt: any) => {
  console.log(evt);
};
</script>
<template>
  <NuxtLayout name="auth">
    <h1 class="text-2xl font-bold text-center">Recuperar contraseña</h1>
    <p class="text-sm text-gray-600 text-center mt-8 mb-6">
      Introduce tu correo electrónico para restablecer tu contraseña
    </p>
    <UForm
      ref="form"
      :schema="schema"
      :state="state"
      class="space-y-6"
      @submit="onSubmit"
    >
      <UFormGroup name="email" label="Email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink
            to="auth/login"
            class="text-sm text-blue-600 hover:underline"
            >Volver a iniciar sesión</NuxtLink
          >
        </div>
      </div>
      <UButton block type="submit" label="Enviar" />
    </UForm>
  </NuxtLayout>
</template>
