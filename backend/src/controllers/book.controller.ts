import { Request, Response } from "express";
import { badRequestResponse, notFoundResponse } from "../utils/error.handle";
import {
  deleteBookToPrisma,
  getBookToPrisma,
  getBooksToPrisma,
  postBookToPrisma,
  updateBookToPrisma,
} from "../services/book.service";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const response = await getBooksToPrisma();
    res.status(200).send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get books");
  }
};

export const getBook = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getBookToPrisma(id);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) notFoundResponse(res, error.message);
  }
};

export const postBook = async ({ body }: Request, res: Response) => {
  try {
    const response = await postBookToPrisma(body);
    res.status(201).send(response);
  } catch (error) {
    if (error instanceof Error) badRequestResponse(res, error.message);
  }
};

export const updateBook = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;

    const response = await updateBookToPrisma(id, body);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) notFoundResponse(res, error.message);
  }
};

export const deleteBook = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteBookToPrisma(id);
    res.status(204).send(response);
  } catch (error) {
    if (error instanceof Error) notFoundResponse(res, error.message);
  }
};
