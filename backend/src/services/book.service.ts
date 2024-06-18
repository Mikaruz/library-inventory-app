import { Book, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getBooksToPrisma = async () => {
  return await prisma.book.findMany();
};

export const getBookToPrisma = async (id: string) => {
  const bookFound = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  if (!bookFound) throw new Error(`Book with id '${id}' not found`);

  return bookFound;
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
  try {
    const deletedBook = await prisma.book.delete({
      where: {
        id,
      },
    });

    return {
      message: `Book '${deletedBook.title}' deleted successfully`,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Book with id '${id}' not found`);
      }
    }
  }
};
