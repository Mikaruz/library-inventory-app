import { Request, Response } from "express";
import {
  deleteCategoryToPrisma,
  getCategoriesToPrisma,
  getCategoryToPrisma,
  postCategoryToPrisma,
  updateCategoryToPrisma,
} from "../services/category.service";
import { conflictException, notFoundResponse } from "../utils/error.handle";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const response = await getCategoriesToPrisma();
    res.status(200).send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get categories");
  }
};

export const getCategory = async ({ params }: Request, res: Response) => {
  try {
    const { term } = params;
    const response = await getCategoryToPrisma(term);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to get category");
    }
  }
};

export const postCategory = async ({ body }: Request, res: Response) => {
  try {
    const response = await postCategoryToPrisma(body);
    res.status(201).send(response);
  } catch (error) {
    if (error instanceof Error) {
      conflictException(res, error.message);
    } else {
      notFoundResponse(res, "Unable to post category");
    }
  }
};

export const updateCategory = async (
  { body, params }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateCategoryToPrisma(id, body);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to update category");
    }
  }
};

export const deleteCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCategoryToPrisma(id);
    res.status(204).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to delete category");
    }
  }
};
