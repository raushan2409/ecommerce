import "./styles.css";

import Header from "./Components/NavbarComponent/Header";

import { CartProvider } from "./Components/context/CartContext";

import AllRoutes from "./Components/AllRoutes";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const url = `AIzaSyDSAdz79HZaDlV3ROmXP6OdJFdscaXCuaM`;
  useEffect(() => {
    const verifyUser = async () => {
      const idTokon = localStorage.getItem("idToken");
      console.log("idtoken", idTokon);
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
    <div className="App">
      <CartProvider>
        <Header />
        <AllRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
