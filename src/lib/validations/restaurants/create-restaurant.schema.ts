import { z } from "@builder.io/qwik-city";

const MAX_FILE_SIZE = 3000000;
function checkFileType(file: File) {
  if (file.name) {
    const fileType = file.name.split(".").pop();
    if (["png", "jpg", "webp", "svg"].includes(fileType!)) return true;
  }
  return false;
}

export const createRestaurantSchemaValidation = {
  name: z.string().min(2, "Nombre del restaurante mínimo 2 letras"),
  language: z.string().min(6, "Mínimo 6 letras"),
  logo: z
    .any()
    .refine((file: File) => file.size !== 0, "Logo es requerido")
    .refine((file: File) => file.size <= MAX_FILE_SIZE, "Tamaño máximo es 3MB")
    .refine((file: File) => checkFileType(file), "Formato no valido"),
  modulesAvailables: z.string(),
  branches: z.string().transform((val) => +val),
  contactInformation: z.object({
    email: z.string(),
    phoneNumbers: z.string(),
    website: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
  }),
  taxInformation: z.object({
    invoiceNumber: z
      .string({ required_error: "Número de factura es requerido" })
      .min(6, "Mínimo 6 letras"),
    vatNumber: z.string(),
    taxRate: z.string().transform((val) => +val),
    taxType: z.string(),
    taxExempt: z.boolean().optional().default(false),
  }),
};
