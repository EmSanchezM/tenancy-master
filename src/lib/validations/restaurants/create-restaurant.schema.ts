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
  branches: z.number().positive(),
  contactInformation: z.object({
    email: z.string(),
    phoneNumbers: z.string(),
    website: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
  }),
  taxesInformation: z.object({
    invoiceNumber: z.string(),
    vatNumber: z.string(),
    taxRate: z.number().positive(),
    taxType: z.string(),
    taxExempt: z.boolean()
  })
}