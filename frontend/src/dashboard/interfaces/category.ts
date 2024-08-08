import { Book } from "./book";

export interface Category {
  id: string;
  name: string;
  quantity: number;
  books?: Book[];
}
