import { Request, Response } from "express";

import {
  getAuthorsToPrisma,
  postAuthorToPrisma,
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

export const getAuthor = async (req: Request, res: Response) => {
  try {
    const response = await getAuthorsToPrisma();
    res.status(200).send(response);
  } catch (error) {
    notFoundResponse(res, "Unable to get author");
  }
};

export const postAuthor = async ({ body }: Request, res: Response) => {
  try {
    const response = await postAuthorToPrisma(body);
    res.status(201).send(response);
  } catch (error) {
    console.log(error);

    notFoundResponse(res, "Unable to post author");
  }
};
