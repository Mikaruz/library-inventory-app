import { Request, Response } from "express";
import { notFoundResponse } from "../utils/error.handle";
import {
  deleteBookToPrisma,
  getBookToPrisma,
  getBooksToPrisma,
  postBookToPrisma,
  updateBookToPrisma,
} from "../services/books.service";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const response = await getBooksToPrisma();
    res.send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get books");
  }
};

export const getBook = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getBookToPrisma(id);
    res.send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get book");
  }
};

export const postBook = async ({ body }: Request, res: Response) => {
  try {
    const response = await postBookToPrisma(body);
    res.send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to post books");
  }
};

export const updateBook = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;

    const response = await updateBookToPrisma(id, body);
    res.send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to put books");
  }
};

export const deleteBook = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const response = await deleteBookToPrisma(id);
    res.send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to delete books");
  }
};
