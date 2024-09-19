import { Author, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getAuthorsToPrisma = async () => {
  const authors = await prisma.author.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          books: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  /*   return await prisma.author.findMany({
    orderBy: {
      name: "asc",
    },
  });
 */
  return authors.map((author) => ({
    id: author.id,
    name: author.name,
    books: author._count.books,
  }));
};

export const getAuthorToPrisma = async (id: string) => {
  const authorFound = await prisma.author.findUnique({
    where: {
      id,
    },
  });

  if (!authorFound) throw new Error(`Author with id '${id}' not found`);

  return authorFound;
};

export const postAuthorToPrisma = async (author: Author) => {
  try {
    const authorCreated = await prisma.author.create({
      data: author,
    });

    return authorCreated;
  } catch (error) {}
};

export const updateAuthorToPrisma = async (id: string, author: Author) => {
  try {
    return await prisma.author.update({
      where: {
        id,
      },
      data: {
        ...author,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Author with id '${id}' not found`);
      }
    }
  }
};

export const deleteAuthorToPrisma = async (id: string) => {
  try {
    return await prisma.author.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Author with id '${id}' not found`);
      }
    }
  }
};
