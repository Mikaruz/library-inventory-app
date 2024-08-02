import { AxiosResponse } from "axios";
import axios from "../../api/axios";

export const getCategories = async (): Promise<AxiosResponse> =>
  axios.get(`/category`);
