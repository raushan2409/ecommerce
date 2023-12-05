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
  const [token, setToken] = useState(localStorage.getItem('idToken'));
  const [email, setEmail] = useState(null);

  // const initialToken = localStorage.getItem("idToken");
  // const initialEmail = localStorage.getItem("email");

  // const [userIsLoggedIn,setUserisLogin] = useState(false)

  const userIsLoggedIn = !!token;
  // const userIsLoggedIn = !!initialToken;

  // useEffect(()=>{
  //   setUserisLogin(!!initialToken)
  // },[token])

  // console.log("userisloggedin",userIsLoggedIn);

  // USER WILL STAY LOGGED IN EVEN AFTER REFRESH

  // console.log("value of initial token is ",initialToken);

  const emailHandler = (email) => {
    setEmail(email);
  };

  const loginHandler = (token) => {
    // setToken(token);
    setToken(token);
    // setUserisLogin(!!initialToken)
  };
  const logoutHandler = () => {
    // setIsLogin(false)
    setToken(null);
    // localStorage.removeItem("email");
    // localStorage.removeItem("idToken");
    // setUserisLogin(false)
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
