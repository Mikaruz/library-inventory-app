import { Book } from "@prisma/client";
import { prisma } from "../database/db";

export const getBooksFromPrisma = async () => {
  return await prisma.book.findMany();
};

export const postBookToPrisma = async (book: Book) => {
  return await prisma.book.create({
    data: book,
  });
};
