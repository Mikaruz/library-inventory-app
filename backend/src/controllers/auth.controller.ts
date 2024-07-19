import { Request, Response } from "express";
import {
  loginUserToPrisma,
  registerUserToPrisma,
  verifiedTokenToPrisma,
} from "../services/auth.service";
import {
  badRequestResponse,
  unauthorizedException,
} from "../utils/error.handle";

export const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerUserToPrisma(body);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) badRequestResponse(res, error.message);
  }
};

export const loginUser = async ({ body }: Request, res: Response) => {
  try {
    const { userResponse, token } = await loginUserToPrisma(body);

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    res.status(200).send(userResponse);
  } catch (error) {
    if (error instanceof Error) unauthorizedException(res, error.message);
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const { access_token } = req.cookies;

    if (!access_token) return res.send(false);

    const response = await verifiedTokenToPrisma(access_token);

    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) unauthorizedException(res, error.message);
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
