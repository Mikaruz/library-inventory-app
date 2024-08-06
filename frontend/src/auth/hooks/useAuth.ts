import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { authState, singIn, logout } = useContext(AuthContext);
  const { user, isAuthenticated, isLoading } = authState;

  return { user, singIn, isAuthenticated, isLoading, logout };
};
