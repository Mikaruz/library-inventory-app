import {
  Category,
  CategoryCreate,
  CategoryUpdate,
} from "../interfaces/category";
import { create, getAll, getOne, remove, update } from "./dashboardApi";

export const getCategories = () => getAll<Category>("category");

export const getCategory = (categoryId: string) =>
  getOne<Category>("category", categoryId);

export const createCategory = (category: CategoryCreate) =>
  create<void, CategoryCreate>("category", category);

export const updateCategory = (category: CategoryUpdate) =>
  update<void, CategoryUpdate>("category", category);

export const deleteCategory = (categoryId: string) =>
  remove<void>("category", categoryId);
