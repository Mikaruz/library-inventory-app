import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .min(5, {
      message: "El correo electrónico debe tener al menos 5 caracteres",
    })
    .max(255, {
      message: "El correo electrónico no debe exceder los 255 caracteres",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(5, {
      message: "La contraseña debe tener al menos 5 caracteres",
    })
    .max(16, {
      message: "La contraseña debe tener como máximo 16 caracteres",
    }),
});
