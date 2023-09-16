import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, Form } from "@builder.io/qwik-city";
import { createRestaurant } from "~/lib/services/restaurants";

import { createRestaurantSchemaValidation } from "~/lib/validations/restaurants";

export const useCreateRestaurantAction = routeAction$(
  async (data, { cookie, redirect }) => {
    const jwtCookie = cookie.get("jwt");

    const payload = {
      ...data,
      logo: "",
      modulesAvailables: [data.modulesAvailables],
    };
    //TODO: Controller object File for save logo and controller moduleAvailables
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
                for="language"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Idioma
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="language"
                  id="language"
                  autoComplete="language"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                <input
                  type="text"
                  name="modulesAvailables"
                  id="modulesAvailables"
                  autoComplete="modulesAvailables"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                    PNG, JPG, GIF up to 10MB
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
