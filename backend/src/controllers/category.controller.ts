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

export const getCategory = async (req: Request, res: Response) => {
  try {
    const response = await getCategoryToPrisma(req.params.term);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to get category");
    }
  }
};

export const postCategory = async (req: Request, res: Response) => {
  try {
    const response = await postCategoryToPrisma(req.body);
    res.status(201).send(response);
  } catch (error) {
    if (error instanceof Error) {
      conflictException(res, error.message);
    } else {
      notFoundResponse(res, "Unable to post category");
    }
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const response = await updateCategoryToPrisma(req.params.id, req.body);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to update category");
    }
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const response = await deleteCategoryToPrisma(req.params.id);
    res.status(204).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to delete category");
    }
  }
};
