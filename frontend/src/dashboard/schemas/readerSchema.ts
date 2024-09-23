import { z } from "zod";

export const readerCreateSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, {
        message: "Name must be at least 2 characters",
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
    phone: z.string({
      required_error: "Phone is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    ocupation: z
      .string({
        required_error: "Ocupation is required",
      })
      .optional(),
  })
  .strict({
    message: "No additional properties allowed",
  });
