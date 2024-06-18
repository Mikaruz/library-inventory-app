import { Request, Response } from "express";
import {
  loginUserToPrisma,
  registerUserToPrisma,
} from "../services/auth.service";
import {
  badRequestResponse,
  unauthorizedException,
} from "../utils/error.handle";

export const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerUserToPrisma(body);
    res.send(response);
  } catch (error) {
    if (error instanceof Error) badRequestResponse(res, error.message);
  }
};

export const loginUser = async ({ body }: Request, res: Response) => {
  try {
    const response = await loginUserToPrisma(body);
    res.send(response);
  } catch (error) {
    if (error instanceof Error) unauthorizedException(res, error.message);
  }
};
