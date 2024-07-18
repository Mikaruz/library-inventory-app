import axios, { AxiosResponse } from "axios";

const API = "http://localhost:3000/api";

interface User {
  email: string;
  password: string;
}

export const loginRequest = async (user: User): Promise<AxiosResponse> => {
  const response = await axios.post(`${API}/auth/login`, user);
  return response;
};
