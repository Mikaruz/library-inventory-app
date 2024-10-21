export interface Reader {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
  ocupation: string;
}

export type ReaderCreate = Omit<Reader, "id">;
