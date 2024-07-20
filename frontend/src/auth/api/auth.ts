import { AxiosResponse } from "axios";
import axios from "../../api/axios";

export const loginRequest = async (
  email: string,
  password: string,
): Promise<AxiosResponse> => {
  const response = await axios.post("/auth/login ", { email, password });
  return response;
};

export const verifyTokenRequest = async (): Promise<AxiosResponse> =>
  axios.get(`/auth/verify`);

export const logoutRequest = async (): Promise<AxiosResponse> =>
  axios.post(`/auth/logout`);
