import { CategoryContext } from "@/dashboard/context/category/CategoryContext";
import { useContext } from "react";

export const useCategory = () => {
  const { createCategory } = useContext(CategoryContext);

  return { createCategory };
};
