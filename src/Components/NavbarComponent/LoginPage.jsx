import classes from "../style/LoginPage.module.css";

import React, { useContext, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { useCart } from "../context/CartContext";
// import SendDataToBackend from "../SendDataToBackend";
import axios from "axios";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const { prod } = useCart();

  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSAdz79HZaDlV3ROmXP6OdJFdscaXCuaM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSAdz79HZaDlV3ROmXP6OdJFdscaXCuaM";
    }

    const register = async () => {
      try {
        const response = await axios.post(url, {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        });
        setIsLoading(false);

        if (response.status === 200) {
          const data = response.data;
          authCtx.login(data.idToken);
          localStorage.setItem("idToken", data.idToken);
          localStorage.setItem("email", data.email);
          authCtx.emailHand(data.email);
          navigate("/"); // Redirect to /productList
        } else {
          let errorMessage = "Authentication failed!";
          throw new Error(errorMessage);
        }
      } catch (err) {
        alert("error in login page ", err.message);
      }
    };
    register(url);
  };

  // verify weather user is genuine or not
  useEffect(() => {
    const verifyUser = async () => {
      const idTokon = localStorage.getItem("idToken");
      // console.log("idtoken", idTokon);
      try {
        if (idTokon) {
          const data = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDSAdz79HZaDlV3ROmXP6OdJFdscaXCuaM`,
            { idTokon: idTokon }
          );

          // console.log("data in useEffect", data);
        }
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    verifyUser();
  }, []);

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>

          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
          </div>
          <div className={classes.actions}>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
