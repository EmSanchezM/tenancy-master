<script setup lang="ts">
import { createUserSchemaValidation, type CreateUserSchema } from '~/lib/validations';
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
},{
  label: 'Restaurantes',
  icon: 'i-heroicons-user',
  to: '/restaurants'
},{
  label: 'Create',
  icon: 'i-heroicons-user-plus',
}]

const form = ref();

const state = reactive({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
})

const onSubmit = (event: CreateUserSchema) => {
  console.log(event);
}
</script>

<template>
  <section class="flex flex-col justify-center item-center">
    <UBreadcrumb :links="links" class="my-2" />
    <UCard>
      <template #header>
        <h2 class="font-bold text-xl mt-2">Control de usuarios</h2>
        <p class="text-balance">Creación de usuarios para gestión de tenants</p>
      </template>
      <UForm 
        ref="form"
        :schema="createUserSchemaValidation"
        :state="state"
        @submit="onSubmit"
        class="space-y-6"
      >
        <UFormGroup label="Username" name="name" eager-validation>
          <UInput v-model="state.username" placeholder="Ingresa un nombre del restaurante" />
        </UFormGroup>
        <UFormGroup label="Nombre" name="firstName" eager-validation>
          <UInput v-model="state.firstName" placeholder="John" />
        </UFormGroup>
        <UFormGroup label="Apellido" name="lastName" eager-validation>
          <UInput v-model="state.lastName" placeholder="Doe" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" eager-validation>
          <UInput type="email" v-model="state.email" placeholder="johndoe@gmail.com" />
        </UFormGroup>
        <UFormGroup label="Contraseña" name="password" eager-validation>
          <UInput type="password" v-model="state.password" placeholder="Ingresa tu contraseña"  />
        </UFormGroup>
        <UFormGroup label="Repetir contraseña" name="logo" eager-validation>
          <UInput type="password" v-model="state.passwordConfirm" placeholder="Repetir contraseña"  />
        </UFormGroup>
        <UButton block type="submit" label="Guardar" />
      </UForm>
    </UCard>
  </section>
</template>