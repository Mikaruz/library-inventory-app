import axios from "axios";
import axiosInstance from "../../api/axios";
import { Category } from "../interfaces/category";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get(`/category`);

  return data;
};

export const getCategory = async (categoryId: string): Promise<Category> => {
  const { data } = await axiosInstance.get(`/category/${categoryId}`);

  return data;
};

export const createCategoryRequest = async (name: string): Promise<void> => {
  const { data } = await axiosInstance.post(`/category`, { name });

  return data;
};
export const createCategory = async (name: string): Promise<void> => {
  try {
    const { data } = await axiosInstance.post(`/category`, { name });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage: string =
        error.response?.data?.message || "Error al crear la categoría";

      throw new Error(errorMessage);
    } else {
      console.log(error);
      throw new Error("Ocurrió un error inesperado al crear la categoría");
    }
  }
};

export const updateCategoryRequest = async (
  id: string,
  name: string,
): Promise<void> => {
  const { data } = await axiosInstance.patch(`/category/${id}`, { name });

  return data;
};

export const deleteCategoryRequest = async (id: string): Promise<void> => {
  const { data } = await axiosInstance.delete(`/category/${id}`);

  return data;
};
