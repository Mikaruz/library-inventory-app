import { Navigate } from "react-router-dom";
import { useAuth } from "@/auth/hooks/useAuth";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PrivateRouter = ({ children }: props) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};
