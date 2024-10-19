export interface Reader {
  id: string;
  name: string;
  lastname: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
  ocupation: string;
}

export type ReaderCreate = Omit<Reader, "id">;
