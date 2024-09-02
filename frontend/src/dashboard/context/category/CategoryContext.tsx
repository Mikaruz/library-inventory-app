import { createContext } from "react";

type Props = {
  createCategory: (name: string) => void;
  updateCategory: (id: string, name: string) => void;
  deleteCategory: (id: string) => void; 
};

export const CategoryContext = createContext<Props>({} as Props);
