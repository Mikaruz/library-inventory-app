import { loginRequest } from "@/api/auth";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const singIn = async (email: string, password: string) => {
    try {
      const response = await loginRequest({ email, password });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ singIn }}>{children}</AuthContext.Provider>
  );
};
