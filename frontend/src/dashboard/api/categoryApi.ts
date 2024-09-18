import axios from "axios";
import axiosInstance from "../../api/axios";
import {
  Category,
  CategoryCreate,
  CategoryUpdate,
} from "../interfaces/category";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get(`/category`);

  return data;
};

export const getCategory = async (categoryId: string): Promise<Category> => {
  const { data } = await axiosInstance.get(`/category/${categoryId}`);

  return data;
};

export const createCategory = async (
  category: CategoryCreate,
): Promise<void> => {
  try {
    const { data } = await axiosInstance.post(`/category`, {
      name: category.name,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage: string =
        error.response?.data?.message || "Error al crear la categoría";

      throw new Error(errorMessage);
    } else {
      console.log(error);
      throw new Error("Ocurrió un error inesperado.");
    }
  }
};

export const updateCategory = async (
  category: CategoryUpdate,
): Promise<void> => {
  try {
    const { data } = await axiosInstance.patch(`/category/${category.id}`, {
      name: category.name,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage: string = error.response?.data?.message;

      throw new Error(errorMessage);
    } else {
      console.log(error);
      throw new Error("Ocurrió un error inesperado.");
    }
  }
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  try {
    const { data } = await axiosInstance.delete(`/category/${categoryId}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage: string = error.response?.data?.message;

      throw new Error(errorMessage);
    } else {
      console.log(error);
      throw new Error("Ocurrió un error inesperado.");
    }
  }
};
