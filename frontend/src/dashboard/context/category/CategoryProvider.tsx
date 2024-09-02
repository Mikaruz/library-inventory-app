import {
  createCategoryRequest,
  deleteCategoryRequest,
  updateCategoryRequest,
} from "@/dashboard/api/data";
import { CategoryContext } from "./CategoryContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CategoryProvider = ({ children }: Props) => {
  const createCategory = async (name: string) => {
    try {
      await createCategoryRequest(name);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id: string, name: string) => {
    try {
      await updateCategoryRequest(id, name);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await deleteCategoryRequest(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{ createCategory, updateCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
