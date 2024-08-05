import axios from "../../api/axios";
import { User } from "../interfaces/user";

export const loginRequest = async (
  email: string,
  password: string,
): Promise<User> => {
  const { data } = await axios.post("/auth/login ", { email, password });
  return data;
};

export const verifyTokenRequest = async (): Promise<User> => {
  const { data } = await axios.get(`/auth/verify`);
  return data;
};

export const logoutRequest = async (): Promise<void> =>
  axios.post(`/auth/logout`);
