import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AuthContext from "./auth-context";
import axios from "axios";
// import { json } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const athCtx = useContext(AuthContext);

  function cleanGmailAddress(emailid) {
    if (emailid) {
      return emailid.replaceAll(`@`, "").replaceAll(".", "");
    }
  }

  const [prod, setProd] = useState([]);
  console.log("prod->", prod);
  //update data to firebase
  // useEffect(() => {
  //   const updateCartToFireBase = async (updatedProd) => {
  //     console.log("updatedProd",updatedProd);
  //     try {
  //       let tempName = localStorage.getItem("email");
  //       let name = cleanGmailAddress(athCtx.email) || tempName;

  //       localStorage.setItem("email", name);
  //       console.log("updated before sending", updatedProd);

  //       console.log("prod before sending", prod);
  //       // localStorage.setItem(name, JSON.stringify(updatedProd));

  //       let response = await axios.post(
  //         `https://react-http-8fe4c-default-rtdb.firebaseio.com/${name}.json`,
  //         // updatedProd
  //         prod
  //       );
  //       // let result = await response.json();
  //       let result = response;

  //       console.log("result is", result);
  //     } catch (error) {
  //       console.log("Error is ", error);
  //     }
  //   };

  //   if (prod.length > 0) {
  //     updateCartToFireBase(prod);
  //   }
  // }, [athCtx.email, prod]);

  // add to cart functionality

  const addToCart = async (product) => {
    console.log("product", product);
    const existingProductIndex = prod.findIndex((item) => item.id === product.id);

    
  if (existingProductIndex !== -1) {
    const updatedProducts = [...prod];
    updatedProducts[existingProductIndex].quantity += 1;

    const updatedProduct = updatedProducts[existingProductIndex];

    try {
      const tempName = localStorage.getItem("email");
      const name = cleanGmailAddress(athCtx.email) || tempName;

      await axios.patch(
        `https://react-http-8fe4c-default-rtdb.firebaseio.com/${name}/${updatedProduct.fireBaseId}.json`,
        updatedProduct
      );

      setProd(updatedProducts);
    } catch (error) {
      console.log(error);
    }

      // setProd((prevProd) => {
      //   const updatedCart = prevProd.map((item) =>
      //     item.id === product.id ? { ...item, quantity: item.quantity + 1 }
      //       : item
      //   );
        // console.log("value of updated cart is ", updatedCart);
      

        // return updatedCart;
      // });
    } else {
      // setProd((prevProd) => [...prevProd, { ...product, quantity: 1 }]);

      let tempName = localStorage.getItem("email");
      let name = cleanGmailAddress(athCtx.email) || tempName;
      try {
        let response = await axios.post(
          `https://react-http-8fe4c-default-rtdb.firebaseio.com/${name}.json`,
          // updatedProd
          product
        );

        setProd((prevProd) => [
          ...prevProd,
          { fireBaseId: response.data.name, ...product },
        ]);
        // console.log("response",response);
        // console.log("response.data.name",response.data.name);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // get data from firebase
  const getDataFromFirebase = useCallback(async () => {
    try {
      const userEmail =
        cleanGmailAddress(athCtx.email) || localStorage.getItem("email");
      let url = `https://react-http-8fe4c-default-rtdb.firebaseio.com`;
      // console.log("userEmail", userEmail);

      const response = await fetch(`${url}/${userEmail}.json`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("value of data above if block", data);

      if (data) {
        // const dataArray = Object.values(data);
        const dataArray = Object.keys(data);

        const updatedData = dataArray.map((elem) => {
          // console.log("elem",data[elem]);
          // console.log([{fireBaseId:elem ,...data[elem]}])
          return { fireBaseId: elem, ...data[elem] };
        });
        // console.log("dataArray", dataArray);
        console.log("updatedData", updatedData);
        setProd(updatedData);
      } else {
        console.log("data", data);
      }
    } catch (error) {
      console.log("error in getdata from firebase is ", error);
    }
  }, [athCtx.email]);

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  // console.log("Prod value ",prod)
  return (
    <CartContext.Provider value={{ prod, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
