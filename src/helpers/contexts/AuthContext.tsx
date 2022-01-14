import { IAuth } from "helpers/interfaces";
import { createContext, useState } from "react";

export const AuthContext = createContext<IAuth>({
  auth: {
    isAuthenticated: true,
    user: null,
    type: "EMBARCADOR",
  },
  setAuth: () => {},
});

export default function AuthProvider(props: any) {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    user: null,
    type: "EMBARCADOR",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
