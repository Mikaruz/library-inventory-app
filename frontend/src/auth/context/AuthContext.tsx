import { createContext } from "react";

type AuthContextProps = {
  singIn: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);
