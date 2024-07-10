import { Category, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getCategoriesToPrisma = async () => {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const getCategoryToPrisma = async (term: string) => {
  let categoryFound;

  if (!categoryFound) {
    categoryFound = await prisma.category.findUnique({
      where: {
        id: term.toLowerCase().trim(),
      },
      include: {
        books: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  if (!categoryFound) {
    categoryFound = await prisma.category.findUnique({
      where: {
        name: term.toLowerCase().trim(),
      },
      include: {
        books: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  if (!categoryFound) throw new Error(`Category with term '${term}' not found`);

  return categoryFound;
};

export const postCategoryToPrisma = async (category: Category) => {
  try {
    const categoryCreated = await prisma.category.create({
      data: category,
    });

    return categoryCreated;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error(
          `Category with name '${category.name}' is already exists`
        );
      }
    }
  }
};

export const updateCategoryToPrisma = async (
  id: string,
  category: Category
) => {
  try {
    return await prisma.category.update({
      where: {
        id,
      },
      data: {
        ...category,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Category with id '${id}' not found`);
      }
    }
  }
};

export const deleteCategoryToPrisma = async (id: string) => {
  try {
    return await prisma.category.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Category with id '${id}' not found`);
      }
    }
  }
};
