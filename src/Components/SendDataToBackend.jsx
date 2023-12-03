import React, { createContext, useContext, useEffect } from "react";
import AuthContext from "./context/auth-context";

import { useCart } from "./context/CartContext";

const SendDataToBackend = () => {
  const athCtx = useContext(AuthContext);
  // console.log("athCtx value in senddatatobackend fun is ", athCtx);
  // console.log("athCtx email value in senddatatobackend fun is ", athCtx.email);

  const { prod } = useCart();
  console.log("prod value inside sendDatatobackend", prod);

  function cleanGmailAddress(emailid) {
    if (emailid) {
      return emailid.replaceAll(`@`, "").replaceAll(".", "");
    }
  }
  let name = cleanGmailAddress(athCtx.email) || "userdata";
  // let name = athCtx.email || "userdata";

  // console.log("email ", name);

  // localStorage.setItem(name, JSON.stringify(prod));

  const postUser = async () => {
    let data = prod || [];
    console.log("data for sending ", prod);
    // let url = "https://crudcrud.com/api/8a21801bb71f4cd1b7309f0a8ba32554/${name}";
    console.log("Before try block");
    try {
      let response = await fetch(
        `https://react-http-8fe4c-default-rtdb.firebaseio.com/data/${name}`,
        {
          method: "POST",
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      let result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  // useEffect(() => {
  //   postUser();
  // }, [prod]);

  return <p></p>;
};

export default SendDataToBackend;
