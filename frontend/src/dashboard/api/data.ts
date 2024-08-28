import axios from "../../api/axios";
import { Category } from "../interfaces/category";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get(`/category`);

  return data;
};

export const getCategory = async (categoryId: string): Promise<Category> => {
  const { data } = await axios.get(`/category/${categoryId}`);

  return data;
};

export const createCategory = async (category: Category): Promise<Category> => {
  const { data } = await axios.post(`/category`, category);

  return data;
};
