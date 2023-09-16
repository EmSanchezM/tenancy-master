import { z } from "@builder.io/qwik-city";

export const createRestaurantSchemaValidation = {
  name: z.string().min(2, "Nombre del restaurante mínimo 2 letras"),
  language: z.string().min(6, "Mínimo 6 letras"),
  logo: z.object({
    size: z.number(),
    type: z.string(),
    name: z.string(),
    lastModified: z.number()
  }),
  modulesAvailables: z.string(),
}