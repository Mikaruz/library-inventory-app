import axios from "axios";
import axiosInstance from "../../api/axios";

export const getAll = async <T>(endpoint: string): Promise<T[]> => {
  const { data } = await axiosInstance.get(`/${endpoint}`);
  return data;
};

export const getOne = async <T>(endpoint: string, id: string): Promise<T> => {
  const { data } = await axiosInstance.get(`/${endpoint}/${id}`);
  return data;
};

export const create = async <T, U>(
  endpoint: string,
  body: U,
): Promise<T | undefined> => {
  try {
    const { data } = await axiosInstance.post(`/${endpoint}`, body);
    return data;
  } catch (error) {
    handleError(error, "crear");
    return undefined;
  }
};

export const update = async <T, U>(
  endpoint: string,
  item: U & { id: string },
): Promise<T | undefined> => {
  try {
    const { id, ...body } = item;
    const { data } = await axiosInstance.patch(`/${endpoint}/${id}`, body);
    return data;
  } catch (error) {
    handleError(error, "actualizar");
    return undefined;
  }
};

export const remove = async <T>(
  endpoint: string,
  id: string,
): Promise<T | undefined> => {
  try {
    const { data } = await axiosInstance.delete(`/${endpoint}/${id}`);
    return data;
  } catch (error) {
    handleError(error, "eliminar");
    return undefined;
  }
};

const handleError = (error: unknown, action: string): void => {
  if (axios.isAxiosError(error)) {
    const errorMessage: string =
      error.response?.data?.message || `Error al ${action}`;
    throw new Error(errorMessage);
  } else {
    console.log(error);
    throw new Error("Ocurrió un error inesperado.");
  }
};
