import { z } from "zod";

export const BookSchema = z.object({
  title: z.string(),
});
