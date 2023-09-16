import { z } from "@builder.io/qwik-city";

export const LoginSchemaValidation = {
  emailOrUsername: z.string().min(6, "Correo o nombre de usuario no puede estar vacío"),
  password: z.string().min(6, "Mínimo 6 letras"),
}