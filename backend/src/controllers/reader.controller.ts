import { Request, Response } from "express";

import { conflictException, notFoundResponse } from "../utils/error.handle";
import {
  deleteReaderToPrisma,
  getReadersToPrisma,
  getReaderToPrisma,
  postReaderToPrisma,
  updateReaderToPrisma,
} from "../services/reader.service";

export const getReaders = async (req: Request, res: Response) => {
  try {
    const response = await getReadersToPrisma();
    res.status(200).send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get categories");
  }
};

export const getReader = async ({ params }: Request, res: Response) => {
  try {
    const { term } = params;
    const response = await getReaderToPrisma(term);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to get category");
    }
  }
};

export const postReader = async ({ body }: Request, res: Response) => {
  try {
    const response = await postReaderToPrisma(body);
    res.status(201).send(response);
  } catch (error) {
    if (error instanceof Error) {
      conflictException(res, error.message);
    } else {
      notFoundResponse(res, "Unable to post category");
    }
  }
};

export const updateReader = async (
  { body, params }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateReaderToPrisma(id, body);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to update category");
    }
  }
};

export const deleteReader = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteReaderToPrisma(id);
    res.status(204).send(response);
  } catch (error) {
    if (error instanceof Error) {
      notFoundResponse(res, error.message);
    } else {
      notFoundResponse(res, "Unable to delete category");
    }
  }
};
