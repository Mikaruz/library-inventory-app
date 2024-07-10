import { Book, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";

//TODO: Añadir paginación y búsqueda por título
export const getBooksToPrisma = async () => {
  return await prisma.book.findMany();
};

export const getBookToPrisma = async (id: string) => {
  const bookFound = await prisma.book.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {},
    },
  });

  if (!bookFound) throw new Error(`Book with id '${id}' not found`);

  return bookFound;
};

export const postBookToPrisma = async (book: Book) => {
  try {
    const bookCreated = await prisma.book.create({
      data: book,
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return bookCreated;
  } catch (error) {}
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
