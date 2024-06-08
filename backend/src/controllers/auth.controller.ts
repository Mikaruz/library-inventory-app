import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

export const registerController = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerUser(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Unable to register user");
  }
};

export const loginController = async ({ body }: Request, res: Response) => {
  try {
    const response = await loginUser(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Unable to login user");
  }
};
