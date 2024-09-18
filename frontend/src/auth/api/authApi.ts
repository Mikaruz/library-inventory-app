import axios from "../../api/axios";
import { User, UserLogin } from "../interfaces/user";

export const loginRequest = async (user: UserLogin): Promise<User> => {
  const { data } = await axios.post("/auth/login ", {
    email: user.email,
    password: user.password,
  });

  return data;
};

export const verifyTokenRequest = async (): Promise<User> => {
  const { data } = await axios.get(`/auth/verify`);

  return data;
};

export const logoutRequest = async (): Promise<void> =>
  axios.post(`/auth/logout`);
