import { Prisma, Reader } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getReadersFromPrisma = async () => {
  return await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getReaderFromPrisma = async (id: string) => {
  const reader = await prisma.reader.findUnique({
    where: {
      id: id,
    },
  });

  if (!reader) throw new Error(`Reader with id '${id}' not found`);

  return reader;
};

export const postReaderToPrisma = async (reader: Reader) => {
  try {
    const readerCreated = await prisma.reader.create({
      data: reader,
    });

    return readerCreated;
  } catch (error) {}
};
