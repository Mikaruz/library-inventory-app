import { createContext } from "react";
import { AuthState, UserLogin } from "../interfaces";

type Props = {
  authState: AuthState;
  singIn: (user: UserLogin) => void;
  logout: () => void;
};

export const AuthContext = createContext<Props>({} as Props);
