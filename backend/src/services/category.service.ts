import { Category, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";

export const getCategoriesToPrisma = async () => {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
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
        comics: {
          select: {
            id: true,
            title: true,
          },
        },
        mangas: {
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
        comics: {
          select: {
            id: true,
            title: true,
          },
        },
        mangas: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  if (!categoryFound) throw new Error(`Category with term '${term}' not found`);

  const filteredCategory = {
    ...categoryFound,
    comics: categoryFound?.comics?.length ? categoryFound.comics : undefined,
    books: categoryFound?.books?.length ? categoryFound.books : undefined,
    mangas: categoryFound?.mangas?.length ? categoryFound.mangas : undefined,
  };

  return filteredCategory;
};

export const postCategoryToPrisma = async (category: Category) => {
  try {
    const categoryCreated = await prisma.category.create({
      data: category,
    });

    return {
      id: categoryCreated.id,
      name: categoryCreated.name,
      createdAt: categoryCreated.createdAt,
    };
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
      data: category,
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
    const deletedCategory = await prisma.category.delete({
      where: {
        id,
      },
    });

    return {
      message: `Category '${deletedCategory.name}' deleted successfully`,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(`Category with id '${id}' not found`);
      }
    }
  }
};
