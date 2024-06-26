import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, {
      message: "Password must be at least 2 characters",
    })
    .max(15, {
      message: "Password must be at most 15 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
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
