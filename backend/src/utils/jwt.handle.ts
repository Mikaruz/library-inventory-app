import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token-secret";

export const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return jwt;
};

export const verifyToken = (token: string) => {
  const jwt = verify(token, JWT_SECRET);

  return jwt;
};
