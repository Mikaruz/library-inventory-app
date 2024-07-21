import { User } from "./user";

export interface AuthState {
  user: User | null;
  singIn: (email: string, password: string) => void;
  isAuthenticated: boolean;
  logout: () => void;
}
