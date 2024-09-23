import { Reader, ReaderCreate } from "../interfaces/reader";
import { create, getAll, getOne, remove, update } from "./dashboardApi";

export const getAuthors = () => getAll<Reader>("reader");

export const getAuthor = (readerId: string) =>
  getOne<Reader>("reader", readerId);

export const createAuthor = (reader: ReaderCreate) =>
  create<void, ReaderCreate>("reader", reader);

export const updateAuthor = (reader: Reader) =>
  update<void, Reader>("reader", reader);

export const deleteAuthor = (readerId: string) =>
  remove<void>("reader", readerId);
