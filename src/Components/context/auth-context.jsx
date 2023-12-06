import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useCart } from "./CartContext";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
  emailHand: (email) => {},
});
export const AuthContextProvider = (props) => {
  // const { prod } = useCart();
  const [token, setToken] = useState(localStorage.getItem("idToken"));
  const [email, setEmail] = useState(null);

  const userIsLoggedIn = !!token;

  const emailHandler = (email) => {
    setEmail(email);
  };

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("idToken");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
    emailHand: emailHandler,
  };
  // console.log("value of email inside authcontext is ", email);

  // console.log("Prod in authcontext", prod);

  // localStorage.setItem("CartItem", JSON.stringify(prod));

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
