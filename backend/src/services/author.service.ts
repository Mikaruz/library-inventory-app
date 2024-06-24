import { Author } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getAuthorsToPrisma = async () => {
  return await prisma.author.findMany({
    select: {
      id: true,
      name: true,
      lastname: true,
    },
  });
};

export const getAuthorToPrisma = async (term: string) => {};

export const postAuthorToPrisma = async (author: Author) => {
  return await prisma.author.create({
    data: author,
  });
};
