<script setup lang="ts">
import {
  createRestaurantSchemaValidation,
  type CreateRestaurantSchema,
} from "~/lib/validations";
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Restaurantes",
    icon: "i-heroicons-home-modern",
    to: "/restaurants",
  },
  {
    label: "Crear",
    icon: "i-heroicons-plus",
  },
];

const form = ref();

const state = ref({
  name: "",
  language: "",
  logo: "",
  modulesAvailables: ["BASIC"],
  branches: 0,
  contactInformation: {
    email: "",
    phoneNumbers: "",
    website: "",
    facebook: "",
    instagram: "",
  },
  taxInformation: {
    invoiceNumber: "",
    vatNumber: "",
    taxRate: 0,
    taxType: "",
    taxExempt: false,
  },
});

const modulesAvailablesOptions = ["BASIC", "INVENTORY", "ANALYTICS"];
const languagesOptions = [
  { value: "es", name: "Español" },
  { value: "en", name: "Inglés" },
];

const onSubmit = (event: CreateRestaurantSchema) => {
  console.log(event);
};
</script>

<template>
  <section class="flex flex-col justify-center item-center">
    <UBreadcrumb :links="links" class="my-2" />
    <UCard class="mt-4">
      <template #header>
        <h2 class="font-bold text-xl mt-2">Control de restaurantes</h2>
        <p class="text-balance">
          Creación de restaurantes para gestión de negocios
        </p>
      </template>
      <UForm
        ref="form"
        :schema="createRestaurantSchemaValidation"
        :state="state"
        @submit="onSubmit"
        class="space-y-6"
      >
        <UFormGroup label="Nombre" name="name" eager-validation>
          <UInput
            v-model="state.name"
            placeholder="Ingresa un nombre del restaurante"
          />
        </UFormGroup>
        <UFormGroup label="Idioma" name="language" eager-validation>
          <USelect
            v-model="state.language"
            :options="languagesOptions"
            placeholder="Seleccione el idioma"
            option-attribute="name"
          />
        </UFormGroup>
        <UFormGroup label="Sucursales" name="branches" eager-validation>
          <UInput
            type="number"
            v-model="state.branches"
            placeholder="Sucursales"
          />
        </UFormGroup>
        <UFormGroup
          label="Modulos disponibles"
          name="modulesAvailables"
          eager-validation
        >
          <USelectMenu
            v-model="state.modulesAvailables"
            :options="modulesAvailablesOptions"
            placeholder="Seleccione los modulos disponibles"
            multiple
            searchable
          />
        </UFormGroup>
        <UFormGroup label="Email" name="email" eager-validation>
          <UInput
            type="email"
            v-model="state.contactInformation.email"
            placeholder="Ingresa un correo de contacto"
          />
        </UFormGroup>
        <UFormGroup label="Website" name="website" eager-validation>
          <UInput
            type="url"
            v-model="state.contactInformation.website"
            placeholder="Sitio web del restaurante"
          />
        </UFormGroup>
        <UFormGroup label="Facebook" name="facebook" eager-validation>
          <UInput
            type="url"
            v-model="state.contactInformation.facebook"
            placeholder="Facebook"
          />
        </UFormGroup>
        <UFormGroup
          label="Número de factura"
          name="invoiceNumber"
          eager-validation
        >
          <UInput
            v-model="state.taxInformation.invoiceNumber"
            placeholder="Número de serie de facturación"
          />
        </UFormGroup>
        <UFormGroup
          label="Identificación fiscal"
          name="vatNumber"
          eager-validation
        >
          <UInput
            v-model="state.taxInformation.vatNumber"
            placeholder="Número de identificación fiscal RTN"
          />
        </UFormGroup>
        <UFormGroup
          label="Tipo de impuesto aplicable"
          name="taxType"
          eager-validation
        >
          <UInput
            v-model="state.taxInformation.taxType"
            placeholder="Tipo de impuesto aplicable (IMPUESTO SOBRE VENTA)"
          />
        </UFormGroup>
        <UFormGroup label="Tasa impositiva" name="taxRate" eager-validation>
          <UInput
            type="number"
            v-model="state.taxInformation.taxRate"
            placeholder="Tasa impositiva aplicable al restaurante. (ISV 15%)"
          />
        </UFormGroup>

        <UFormGroup
          label="Excepto de impuestos"
          name="taxExempt"
          eager-validation
        >
          <UToggle
            v-model="state.taxInformation.taxExempt"
            placeholder="Esta excepto"
          />
        </UFormGroup>
        <UFormGroup label="Logo" name="logo" eager-validation>
          <UInput type="file" v-model="state.logo" />
        </UFormGroup>
        <UButton block type="submit" label="Guardar" />
      </UForm>
    </UCard>
  </section>
</template>
