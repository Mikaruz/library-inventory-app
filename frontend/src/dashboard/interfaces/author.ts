import { Book } from "./book";

export interface Author {
  id: string;
  name: string;
  quantity: number;
  books?: Book[];
}
