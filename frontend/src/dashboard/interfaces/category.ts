import { Book } from "./book";

export interface Category {
  id: string;
  name: string;
  quantity?: number;
  books?: Book[];
}

export type CategoryCreate = Pick<Category, "name">;

export type CategoryUpdate = Pick<Category, "id" | "name">;
