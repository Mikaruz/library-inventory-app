import { Book } from "./book";

export interface Author {
  id: string;
  name: string;
  quantity?: number;
  books?: Book[];
}

export type AuthorCreate = Pick<Author, "name">;

export type AuthorUpdate = Pick<Author, "id" | "name">;
