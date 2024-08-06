import { createContext } from "react";
import { AuthState } from "../interfaces";

type Props = {
  authState: AuthState;
  singIn: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<Props>({} as Props);
