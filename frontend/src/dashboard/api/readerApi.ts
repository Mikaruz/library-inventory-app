import { Reader, ReaderCreate } from "../interfaces/reader";
import { create, getAll, getOne, remove, update } from "./dashboardApi";

export const getReaders = () => getAll<Reader>("reader");

export const getReader = (readerId: string) =>
  getOne<Reader>("reader", readerId);

export const createReader = (reader: ReaderCreate) =>
  create<void, ReaderCreate>("reader", reader);

export const updateReader = (reader: Reader) =>
  update<void, Reader>("reader", reader);

export const deleteReader = (readerId: string) =>
  remove<void>("reader", readerId);
