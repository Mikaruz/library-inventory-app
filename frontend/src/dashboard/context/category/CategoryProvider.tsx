import { createCategoryRequest } from "@/dashboard/api/data";
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

  return (
    <CategoryContext.Provider value={{ createCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
