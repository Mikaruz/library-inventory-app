import {
  loginRequest,
  logoutRequest,
  verifyTokenRequest,
} from "@/auth/api/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../interfaces/user";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const singIn = async (email: string, password: string) => {
    try {
      const user = await loginRequest(email, password);

      setUser(user);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();

      setIsLoading(false);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const user = await verifyTokenRequest();

        if (!user) return setIsAuthenticated(false);

        setUser(user);
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        console.log(error);

        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, singIn, isAuthenticated, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
