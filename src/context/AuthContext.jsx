import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [Auth, SetAuth] = useState({
    isLoggedIn: false,
    id: null,
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const Logout = () => {
    SetAuth({
      isLoggedIn: false,
      id: null,
    });
  };

  return (
    <AuthContext.Provider value={{ Auth, SetAuth, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
