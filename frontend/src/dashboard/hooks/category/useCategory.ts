import { CategoryContext } from "@/dashboard/context/category/CategoryContext";
import { useContext } from "react";

export const useCategory = () => {
  const { createCategory, updateCategory, deleteCategory } =
    useContext(CategoryContext);

  return { createCategory, updateCategory, deleteCategory };
};
