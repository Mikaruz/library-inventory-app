import { Response } from "express";

export const badRequestResponse = (res: Response, data?: any) => {
  res.status(400).json({
    statusCode: 400,
    error: data,
    message: "Bad request",
  });
};

export const notFoundResponse = (res: Response, data?: any) => {
  res.status(404).json({
    statusCode: 404,
    error: data,
    message: "Not found",
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
