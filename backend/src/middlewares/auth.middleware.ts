import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { unauthorizedException } from "../utils/error.handle";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { access_token } = req.cookies;
    console.log(access_token);

    if (!access_token)
      unauthorizedException(res, "No token, authorization denied");

    const decoded = verifyToken(`${access_token}`);

    if (!decoded) {
      unauthorizedException(res, "Decoded token is empty");
    } else {
      next();
    }
  } catch (error) {
    unauthorizedException(res, "Token is invalid");
  }
};
