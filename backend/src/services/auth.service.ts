import { User } from "@prisma/client";
import { prisma } from "../config/prisma";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken, verifyToken } from "../utils/jwt.handle";

export const registerUserToPrisma = async (user: User) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (userExists) throw new Error("Email used by another user");

  const hashedPassword = await encrypt(user.password);

  return await prisma.user.create({
    data: {
      ...user,
      password: hashedPassword,
    },
  });
};

export const loginUserToPrisma = async (user: User) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userExists) throw new Error(`Email '${user.email}' does not exist`);

  const verifiedPassword = await verified(user.password, userExists.password);

  if (!verifiedPassword) throw new Error("Invalid password");

  const token = generateToken(userExists.id);

  const { id, password, ...userResponse } = userExists;

  return {
    token,
    userResponse,
  };
};

export const verifiedTokenToPrisma = async (token: string) => {
  const decoded = verifyToken(token);

  if (!decoded) {
    throw new Error("Decoded token is empty");
  }

  console.log(decoded);

  if (typeof decoded === "string") {
    throw new Error("Decoded token is not an object");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) throw new Error("User not found");

  const { id, password, ...userResponse } = user;

  return userResponse;
};
