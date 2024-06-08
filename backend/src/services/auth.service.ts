import { User } from "@prisma/client";
import { prisma } from "../config/prisma";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerUser = async (user: User) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (userExists) throw new Error("User already exists");

  const hashedPassword = await encrypt(user.password);

  return await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: hashedPassword,
    },
  });
};

export const loginUser = async (user: User) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userExists) throw new Error("User does not exist");

  const verifiedPassword = await verified(user.password, userExists.password);

  if (!verifiedPassword) throw new Error("Invalid password");

  const token = generateToken(userExists.id);

  return {
    token,
    user: {
      name: userExists.name,
      email: userExists.email,
    },
  };
};
