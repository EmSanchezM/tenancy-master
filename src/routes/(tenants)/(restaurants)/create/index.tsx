import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, Form } from "@builder.io/qwik-city";
import { createRestaurant, uploadLogoRestaurant } from "~/lib/services/restaurants";

import { createRestaurantSchemaValidation } from "~/lib/validations/restaurants";

export const useCreateRestaurantAction = routeAction$(
  async (data, { cookie, redirect }) => {
    const jwtCookie = cookie.get("jwt");

    const { data: logo } = await uploadLogoRestaurant(jwtCookie?.value, data.logo);

    const payload = {
      ...data,
      logo,
      modulesAvailables: [data.modulesAvailables],
    };

    const { success } = await createRestaurant(jwtCookie?.value, payload);

    if (success) redirect(301, "/");
  },
  zod$(createRestaurantSchemaValidation),
);

export default component$(() => {
  const action = useCreateRestaurantAction();

  return (
    <Form class="m-auto" action={action}>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Creación de un nuevo restaurante
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Información necesaria para crear la configuración de un tenant o
            restaurante nuevo.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre del restaurante
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {action.value?.fieldErrors?.name && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.name[0]}
                  </div>
                )}
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="branches"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Sucursales
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  name="branches"
                  id="branches"
                  autoComplete="branches"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {action.value?.fieldErrors?.branches && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.branches[0]}
                  </div>
                )}
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="language"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Idioma
              </label>
              <div class="mt-2">
                <select id="language" name="language" autoComplete="language" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option value="es">Español</option>
                  <option value="en">Ingles</option>
                </select>
                {action.value?.fieldErrors?.language && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.language[0]}
                  </div>
                )}
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="modulesAvailables"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Modulos disponibles
              </label>
              <div class="mt-2">
                <select id="modulesAvailables" name="modulesAvailables" autoComplete="modulesAvailables" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option value="BASIC">Basico</option>
                  <option value="INVENTORY">Inventario</option>
                  <option value="ANALYTICS">Analiticas y reportes</option>
                  <option value="EMPLOYEE_MANAGEMENT">Control de empleados</option>
                  <option value="MARKETING">Marketing</option>
                </select>
                {action.value?.fieldErrors?.modulesAvailables && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.modulesAvailables[0]}
                  </div>
                )}
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Logo del restaurante
              </label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="logo"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Subir archivo</span>
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, WEBP, SVG up to 3MB
                  </p>
                </div>
                {action.value?.fieldErrors?.logo && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.logo[0]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Informacion de contacto
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Información de contacto del restaurante.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="contactInformation.email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo eléctronico
              </label>
              <div class="mt-2">
                <input
                  id="contactInformation.email"
                  name="contactInformation.email"
                  type="email"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="contactInformation.phoneNumbers"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Número de telefono
              </label>
              <div class="mt-2">
                <input
                  id="contactInformation.phoneNumbers"
                  name="contactInformation.phoneNumbers"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="contactInformation.facebook"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Facebook
              </label>
              <div class="mt-2">
                <input
                  id="contactInformation.facebook"
                  name="contactInformation.facebook"
                  type="url"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="contactInformation.instagram"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Instagram
              </label>
              <div class="mt-2">
                <input
                  id="contactInformation.instagram"
                  name="contactInformation.instagram"
                  type="url"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Informacion de impuestos
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Datos de requerimientos fiscales del restaurante.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="taxesInformation.invoiceNumber"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Número de factura
              </label>
              <div class="mt-2">
                <input
                  id="taxesInformation.invoiceNumber"
                  name="taxesInformation.invoiceNumber"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="taxesInformation.vatNumber"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Número de identificación fiscal (RTN)
              </label>
              <div class="mt-2">
                <input
                  id="taxesInformation.vatNumber"
                  name="taxesInformation.vatNumber"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="taxesInformation.taxRate"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Impuesto aplicable
              </label>
              <div class="mt-2">
                <input
                  id="taxesInformation.taxRate"
                  name="taxesInformation.taxRate"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="taxesInformation.taxType"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Tipo de impuesto aplicable
              </label>
              <div class="mt-2">
                <input
                  id="taxesInformation.taxType"
                  name="taxesInformation.taxType"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="taxesInformation.taxExempt"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Excepto de impuestos
              </label>
              <div class="mt-2">
                <div class="flex items-center gap-x-3">
                  <input id="taxesInformation.taxExempt" name="taxesInformation.taxExempt" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="taxesInformation.taxExempt" class="block text-sm font-medium leading-6 text-gray-900">Excepto</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </Form>
  );
});
