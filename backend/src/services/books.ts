import { Book } from "@prisma/client";
import { prisma } from "../database/db";

export const getBooksToPrisma = async () => {
  return await prisma.book.findMany();
};

export const getBookToPrisma = async (id: string) => {
  return await prisma.book.findUnique({
    where: {
      id,
    },
  });
};

export const postBookToPrisma = async (book: Book) => {
  return await prisma.book.create({
    data: book,
  });
};

export const updateBookToPrisma = async (id: string, book: Book) => {
  return await prisma.book.update({
    where: {
      id,
    },
    data: book,
  });
};

export const deleteBookToPrisma = async (id: string) => {
  return await prisma.book.delete({
    where: {
      id,
    },
  });
};
