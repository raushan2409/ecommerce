import "./styles.css";

import Header from "./Components/NavbarComponent/Header";

import { CartProvider } from "./Components/context/CartContext";

import AllRoutes from "./Components/AllRoutes";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const url = `AIzaSyDSAdz79HZaDlV3ROmXP6OdJFdscaXCuaM`;
  

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
