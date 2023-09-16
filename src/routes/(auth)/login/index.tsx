import { component$ } from "@builder.io/qwik";
import { Link, Form, routeAction$, zod$, z } from "@builder.io/qwik-city";

import { Exclamation } from "~/components/icons";
import { Alert } from "~/components/ui/alert";
import { Login } from "~/lib/services/auth";

export const useAuthLoginAction = routeAction$(
  async (data, { cookie, redirect, fail }) => {
    const { success, data: response } = await Login(data);

    if (success) {
      cookie.set("jwt", response.token, { secure: true, path: "/" });
      redirect(301, "/");

      return {
        success: true,
        jwt: response.token,
      };
    }

    return fail(500, { message: "Credenciales no validas. Intenta de nuevo" });
  },
  zod$({
    emailOrUsername: z
      .string()
      .min(6, "Correo o nombre de usuario no puede estar vacío"),
    password: z.string().min(6, "Mínimo 6 letras"),
  }),
);

export default component$(() => {
  const action = useAuthLoginAction();

  return (
    <Form class="form" action={action}>
      <div class="field email">
        <div class="input-area">
          <input
            type="text"
            name="emailOrUsername"
            id="emailOrUsername"
            placeholder="Email or username"
          />
          {action.value?.fieldErrors?.emailOrUsername && (
            <Exclamation style="icon-error" />
          )}
        </div>
        {action.value?.fieldErrors?.emailOrUsername && (
          <div class="error-message">
            {action.value.fieldErrors.emailOrUsername[0]}
          </div>
        )}
      </div>
      <div class="field password">
        <div class="input-area">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          {action.value?.fieldErrors?.password && (
            <Exclamation style="icon-error" />
          )}
        </div>
        {action.value?.fieldErrors?.password && (
          <div class="error-message">
            {action.value.fieldErrors.password[0]}
          </div>
        )}
      </div>
      <div class="forgot-link mb-2">
        <Link href="/forgot-password" class="link">
          Forgot password
        </Link>
      </div>
      {action.value?.failed && (
        <Alert
          message={action.value.message || "Credenciales no validas"}
          variant="danger"
        />
      )}
      <input type="submit" value="Login" class="input-submit" />
    </Form>
  );
});
