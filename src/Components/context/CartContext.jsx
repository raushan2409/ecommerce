import React, { createContext, useContext, useState } from "react";
import SendDataToBackend from "../SendDataToBackend";
import AuthContext from "./auth-context";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const athCtx = useContext(AuthContext);

  function cleanGmailAddress(emailid) {
    if (emailid) {
      return emailid.replaceAll(`@`, "").replaceAll(".", "");
    }
  }

  const [prod, setProd] = useState([]);

  const addToCart = async (product) => {
    const existingProduct = prod.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = prod.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setProd(updatedCart);
    } else {
      setProd([...prod, { ...product, quantity: 1 }]);
    }

    try {
      let name = cleanGmailAddress(athCtx.email) || "userdata";
      let response = await axios.put(
        `https://react-http-8fe4c-default-rtdb.firebaseio.com/${name}`,
        {
           name: "dummyp", quantity: 1 
        }
      );
      // let result = await response.json();
      let result = response;

      console.log("result", result);
    } catch (error) {
      console.log("Error is ", error);
    }

    // localStorage.setItem("CartItem", JSON.stringify(prod));
  };

  return (
    <CartContext.Provider value={{ prod, addToCart }}>
      {children}
      {/* {prod && <SendDataToBackend />} */}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
