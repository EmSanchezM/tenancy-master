<script setup lang="ts">
import { ref, reactive } from "vue";
import { z } from "zod";
definePageMeta({ layout: "auth" });

const state = reactive({
  password: "",
  confirmPassword: "",
});

const schema = z.object({
  password: z.string().min(3, "Contraseña es requerida"),
  confirmPassword: z.string().min(6, "Contraseña de confirmación es requerida"),
});

type Schema = z.infer<typeof schema>;

const form = ref();

const onSubmit = (evt: any) => {
  console.log(evt);
};
</script>

<template>
  <h1 class="text-2xl font-bold text-center">Cambiar la contraseña</h1>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-6"
    @submit="onSubmit"
  >
    <UFormGroup name="password" label="Contraseña">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup name="confirmPassword" label="Repita su contraseña">
      <UInput v-model="state.confirmPassword" type="password" />
    </UFormGroup>

    <UButton block type="submit" label="Restablecer contraseña" />
  </UForm>
</template>
