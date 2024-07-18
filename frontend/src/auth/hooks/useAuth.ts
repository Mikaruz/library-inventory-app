import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { singIn } = useContext(AuthContext);
  return { singIn };
};
