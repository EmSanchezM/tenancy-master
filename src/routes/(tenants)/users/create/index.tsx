import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeAction$, zod$, Form } from "@builder.io/qwik-city";
import { Alert } from "~/components/ui/alert";

import { ROLES } from "~/lib/constants/roles.constants";
import { createUser } from "~/lib/services/users";
import { createUserSchemaValidation } from "~/lib/validations/users";

export const useCreateUserAction = routeAction$(async (data, { cookie }) => {
  const jwtCookie = cookie.get("jwt");

  const payload = {
    ...data,
    roles: [ROLES.TENANT_ADMIN_MASTER],
  };

  const { success, data: response } = await createUser(
    jwtCookie?.value,
    payload,
  );

  return {
    success,
    message: success
      ? `Usuario ${response.firstName} ${response.lastName} agregado exitosamente!`
      : null,
  };
}, zod$(createUserSchemaValidation));

export default component$(() => {
  const action = useCreateUserAction();

  const completedCreate = useSignal({ success: false, message: "" });

  useTask$(async ({ track }) => {
    track(() => action.value);
    completedCreate.value.success = action.value?.success ?? false;
    completedCreate.value.message = action.value?.message ?? "";
  });

  return (
    <>
      <Form class="m-auto" action={action}>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Creación de un nuevo usuario
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Información necesaria para crear un nuevo usuario administrativo
              para control de clientes (Tenants).
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="firstName"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {action.value?.fieldErrors?.firstName && (
                  <div class="text-red-800">
                    {action.value.fieldErrors.firstName}
                  </div>
                )}
              </div>
              <div class="sm:col-span-3">
                <label
                  for="lastName"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre de usuario
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo electronico (Email)
                </label>
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repetir contraseña
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    autoComplete="passwordConfirm"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
            Cancelar
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </Form>
      {completedCreate.value.success && (
        <p class="m-auto flex items-center mt-4">
          <Alert message={completedCreate.value.message} variant="success" />
        </p>
      )}
    </>
  );
});
