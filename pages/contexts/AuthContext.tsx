import { createContext, useCallback, useState } from "react";
import api from "../api/api";

interface AuthContext {
  isAuthenticated: boolean;
  handleLogin: (user: Login) => void;
};

interface AuthProvider {
  children: React.ReactNode
};

interface Login {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContext);

export const AuthProvider = ({children}: AuthProvider) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = useCallback(async (user: Login) => {
    const isLogged = await api.post(`/users/login`, {user});

    console.log(isLogged);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        handleLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};