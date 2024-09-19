import { Prisma, Reader } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getReadersToPrisma = async () => {
  return await prisma.reader.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getReaderToPrisma = async (id: string) => {
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

export const updateReaderToPrisma = async (id: string, reader: Reader) => {
  try {
    return await prisma.reader.update({
      where: {
        id,
      },
      data: reader,
    });
  } catch (error) {}
};

export const deleteReaderToPrisma = async (id: string) => {
  return await prisma.reader.delete({
    where: {
      id,
    },
  });
};
