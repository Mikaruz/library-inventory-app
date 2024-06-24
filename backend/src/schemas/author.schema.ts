import { z } from "zod";

export const authorCreatedSchema = z.object({
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
  lastname: z
    .string({
      required_error: "Lastname is required",
    })
    .min(2, {
      message: "Lastname must be at least 2 characters",
    })
    .max(50, {
      message: "Lastname must be at most 15 characters",
    }),
  biography: z
    .string({
      required_error: "Biography is required",
    })
    .min(10, {
      message: "Biography must be at least 10 characters",
    })
    .max(500, {
      message: "Biography must be at most 500 characters",
    }),
  imageUrl: z
    .string({
      required_error: "Image is required",
    })
    .min(4, {
      message: "Image must be at least 2 characters",
    })
    .max(100, {
      message: "Image must be at most 15 characters",
    })
    .optional(),
});
