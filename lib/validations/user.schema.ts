import { z } from 'zod'

export const createUserSchemaValidation = z.object({
  username: z.string().min(2, "Nombre de usuario mínimo 2 letras"),
  firstName: z.string({ required_error: 'Nombre es requerido' }).min(2, "Mínimo 6 letras"),
  lastName: z.string().min(2, "Mínimo 6 letras"),
  email: z.string().email('Email no valido'),
  password: z.string().min(6, 'Minimo 6 caracteres'),
  passwordConfirm: z.string().min(6, 'Minimo 6 caracteres')
})

export type CreateUserSchema = z.infer<typeof createUserSchemaValidation>;
