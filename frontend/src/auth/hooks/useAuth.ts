import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, singIn, isAuthenticated, logout } = useContext(AuthContext);

  return { user, singIn, isAuthenticated, logout };
};
