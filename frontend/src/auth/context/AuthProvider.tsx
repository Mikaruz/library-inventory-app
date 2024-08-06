import { useEffect, useReducer } from "react";
import { AuthState } from "../interfaces";
import { authReducer } from "./authReducer";
import { loginRequest, logoutRequest, verifyTokenRequest } from "../api/auth";
import { AuthContext } from "./AuthContext";

const INITIAL_STATE: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const singIn = async (email: string, password: string) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const user = await loginRequest(email, password);
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Error al ingresar" });
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();

      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "LOGIN_START" });

    const checkLogin = async () => {
      try {
        const user = await verifyTokenRequest();

        if (!user)
          return dispatch({
            type: "LOGIN_FAILURE",
            payload: "Error al ingresar",
          });

        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: "Error al ingresar" });
        console.log(error);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, singIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
