import { Request, Response, NextFunction } from "express";
import * as z from "zod";
import { badRequestResponse } from "../utils/error.handle";

export const validateSchema = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((error) => error.message);
        badRequestResponse(
          res,
          errorMessages.length === 1 ? errorMessages[0] : errorMessages
        );
      }
    }
  };
};
