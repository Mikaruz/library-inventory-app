import { Response } from "express";

export const notFoundResponse = (res: Response, data?: any) => {
  res.status(200).json({
    statusCode: 404,
    message: "Not found",
    error: data,
  });
};

export const unauthorizedException = (res: Response, data?: any) => {
  res.status(401).json({
    statusCode: 401,
    message: data,
    error: "Unauthorized",
  });
};

export const forbiddenException = (res: Response, data?: any) => {
  res.status(403).json({
    statusCode: 403,
    message: data,
    error: "Forbidden",
  });
};

export const errorException = (res: Response, data?: any) => {
  res.status(500).json({
    statusCode: 500,
    message: data,
    error: "Internal server error",
  });
};
