import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .max(15, {
      message: "Name must be at most 15 characters",
    }),
  lastName: z
    .string({
      required_error: "LastName is required",
    })
    .min(2, {
      message: "LastName must be at least 2 characters",
    })
    .max(15, {
      message: "LastName must be at most 15 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(255, { message: "Email must not exceed 255 characters" })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(5, {
      message: "Password must be at least 5 characters",
    })
    .max(16, {
      message: "Password must be at most 16 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(255, { message: "Email must not exceed 255 characters" })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(5, {
      message: "Password must be at least 5 characters",
    })
    .max(16, {
      message: "Password must be at most 16 characters",
    }),
});
