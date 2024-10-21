import { z } from "zod";

export const readerCreateSchema = z
  .object({
    name: z
      .string({
        message: "El nombre es requerido",
      })
      .min(2, {
        message: "El nombre debe tener al menos 2 caracteres",
      })
      .max(10, {
        message: "Name must be at most 10 characters",
      }),
    lastName: z
      .string({
        required_error: "LastName is required",
      })
      .min(2, {
        message: "LastName must be at least 2 characters",
      })
      .max(10, {
        message: "LastName must be at most 10 characters",
      }),
    dni: z
      .string({
        required_error: "DNI is required",
      })
      .length(8, { message: "DNI must be 8 characters" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email format",
      }),
    phone: z
      .string({
        required_error: "El teléfono es requerido",
      })
      .length(9, {
        message: "El teléfono debe tener 9 caracteres",
      }),
    address: z
      .string({
        required_error: "Address is required",
      })
      .length(10, {
        message: "Address must be at least 10 characters",
      }),
    ocupation: z.string({
      required_error: "Please select a ocupation.",
    }),
  })
  .strict({
    message: "No additional properties allowed",
  });
