import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getBooksFromPrisma, postBookToPrisma } from "../services/books";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const response = await getBooksFromPrisma();
    res.send(response);
  } catch (error) {
    handleHttp(res, "Unable to get books");
  }
};

export const getBook = async ({ params }: Request, res: Response) => {
  try {
    res.send(params);
  } catch (error) {
    handleHttp(res, "Unable to get book");
  }
};

export const postBook = async ({ body }: Request, res: Response) => {
  try {
    const responseBook = await postBookToPrisma(body);
    res.send(responseBook);
  } catch (error) {
    handleHttp(res, "Unable to post books");
  }
};

export const updateBook = async ({ body, params }: Request, res: Response) => {
  try {
    res.send({ ...body, ...params });
  } catch (error) {
    handleHttp(res, "Unable to put books");
  }
};

export const deleteBook = async ({ params }: Request, res: Response) => {
  try {
    res.send(params);
  } catch (error) {
    handleHttp(res, "Unable to delete books");
  }
};
