export interface User {
  email: string;
  password: string;
  name: string;
  lastName: string;
  role: string;
}

export type UserLogin = Pick<User, "email" | "password">;
