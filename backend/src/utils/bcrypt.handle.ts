import { hash, compare } from "bcryptjs";

export const encrypt = async (password: string) => {
  return await hash(password, 10);
};

export const verified = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
};
