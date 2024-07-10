import { z } from "zod";

const currentYear = new Date().getFullYear();

export const bookCreatedSchema = z
  .object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .min(2, {
        message: "Title must be at least 2 characters",
      })
      .max(50, {
        message: "Title must be at most 15 characters",
      }),
    publisher: z
      .string({
        required_error: "Publisher is required",
      })
      .min(2, {
        message: "Publisher must be at least 2 characters",
      })
      .max(15, {
        message: "Publisher must be at most 15 characters",
      }),
    publicationYear: z
      .number({
        required_error: "Publication year is required",
      })
      .int({ message: "Publication year must be an integer" })
      .min(1000, { message: "Publication year must be at least 1000" })
      .max(currentYear, {
        message: `Publication year must be at most ${currentYear}`,
      }),
    authorId: z
      .string({ required_error: "Author ID is required" })
      .min(1, { message: "Author ID cannot be empty" })
      .uuid({ message: "Author ID must be a valid UUID" }),
    categoryId: z
      .string({ required_error: "Category ID is required" })
      .min(1, { message: "Category ID cannot be empty" })
      .uuid({ message: "Category ID must be a valid UUID" }),
    copiesAvailable: z
      .number({
        required_error: "Copies available is required",
      })
      .min(1, { message: "Copies available must be at least 1" }),
  })
  .strict({
    message: "No additional properties allowed",
  });
