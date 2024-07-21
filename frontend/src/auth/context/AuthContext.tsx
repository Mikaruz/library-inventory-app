import { createContext } from "react";
import { User } from "../interfaces/user";

type AuthContextProps = {
  user: User | null;
  singIn: (email: string, password: string) => void;
  isAuthenticated: boolean;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);
