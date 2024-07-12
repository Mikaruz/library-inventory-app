import { z } from "zod";

export const loanSchema = z.object({
  readerId: z.string().uuid({ message: "Reader ID must be a valid UUID" }),
  bookId: z.string().uuid({ message: "Book ID must be a valid UUID" }),
  userId: z.string().uuid({ message: "User ID must be a valid UUID" }),
  loanDate: z
    .date({ required_error: "Loan date is required" })
    .default(() => new Date()),
  returnDate: z.date({ required_error: "Return date is required" }),
});
