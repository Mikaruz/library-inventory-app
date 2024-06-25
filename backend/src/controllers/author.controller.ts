import { Request, Response } from "express";

import {
  deleteAuthorToPrisma,
  getAuthorToPrisma,
  getAuthorsToPrisma,
  postAuthorToPrisma,
  updateAuthorToPrisma,
} from "../services/author.service";
import { notFoundResponse } from "../utils/error.handle";

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const response = await getAuthorsToPrisma();
    res.status(200).send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get authors");
  }
};

export const getAuthor = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getAuthorToPrisma(id);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to get category");
    }
  }
};

export const postAuthor = async ({ body }: Request, res: Response) => {
  try {
    const response = await postAuthorToPrisma(body);
    res.status(201).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to get author");
    }
  }
};

export const updateAuthor = async (
  { body, params }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    console.log(body);
    const response = await updateAuthorToPrisma(id, body);
    console.log("aea namo", response);

    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to update author");
    }
  }
};

export const deleteAuthor = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteAuthorToPrisma(id);
    res.status(204).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to delete author");
    }
  }
};
