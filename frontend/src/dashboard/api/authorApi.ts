import { Author, AuthorCreate, AuthorUpdate } from "../interfaces/author";
import { create, getAll, getOne, remove, update } from "./dashboardApi";

export const getAuthors = () => getAll<Author>("author");

export const getAuthor = (authorId: string) =>
  getOne<Author>("author", authorId);

export const createAuthor = (author: AuthorCreate) =>
  create<void, AuthorCreate>("author", author);

export const updateAuthor = (authorId: string, author: AuthorUpdate) =>
  update<void, AuthorUpdate>("author", authorId, author);

export const deleteAuthor = (authorId: string) =>
  remove<void>("author", authorId);
