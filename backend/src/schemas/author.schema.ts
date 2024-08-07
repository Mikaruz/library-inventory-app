import { z } from "zod";

export const authorSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, {
        message: "Name must be at least 2 characters",
      })
      .max(50, {
        message: "Name must be at most 15 characters",
      }),
  })
  .strict({
    message: "No additional properties allowed",
  });
