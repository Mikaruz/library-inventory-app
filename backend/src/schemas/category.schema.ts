import { z } from "zod";

export const categorySchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, {
        message: "Name must be at least 2 characters",
      })
      .max(25, {
        message: "Name must be at most 20 characters",
      }),
  })
  .strict({
    message: "No additional properties allowed",
  });
