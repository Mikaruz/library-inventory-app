import { loginRequest, logoutRequest } from "@/auth/api/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const singIn = async (email: string, password: string) => {
    try {
      const response = await loginRequest(email, password);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const response = await logoutRequest();
      console.log(response);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  /*  useEffect(() => {
     const checkLogin = async () => {
       const cookies = Cookies.get();
       if (!cookies.token) {
         setIsAuthenticated(false);
         setLoading(false);
         return;
       }

       try {
         const res = await verifyTokenRequest(cookies.token);
         console.log(res);
         if (!res.data) return setIsAuthenticated(false);
         setIsAuthenticated(true);
         setUser(res.data);
         setLoading(false);
       } catch (error) {
         setIsAuthenticated(false);
         setLoading(false);
       }
     };
     checkLogin();
   }, []); */

  return (
    <AuthContext.Provider value={{ user, singIn, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
