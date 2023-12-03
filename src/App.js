import "./styles.css";

import Header from "./Components/NavbarComponent/Header";

import { CartProvider } from "./Components/context/CartContext";

import AllRoutes from "./Components/AllRoutes";

function App() {
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
