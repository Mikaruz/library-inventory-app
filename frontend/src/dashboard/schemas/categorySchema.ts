import { z } from "zod";

export const categoryCreateSchema = z.object({
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
});

export const categoryUpdateSchema = z.object({
  id: z.string(),
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
});
