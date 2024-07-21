import {
  loginRequest,
  logoutRequest,
  verifyTokenRequest,
} from "@/auth/api/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const singIn = async (email: string, password: string) => {
    try {
      const response = await loginRequest(email, password);
      setUser(response.data);
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
        const response = await verifyTokenRequest();

        if (!response.data) return setIsAuthenticated(false);

        setUser(response.data);
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
