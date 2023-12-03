import { Routes, Route, Navigate } from "react-router-dom";
import Store from "./NavbarComponent/Store";
import About from "./NavbarComponent/About";
import Login from "./NavbarComponent/LoginPage";
import AuthContext from "./context/auth-context";
import { useContext } from "react";
import Home from "./NavbarComponent/Home";
import ContactUsPage from "./NavbarComponent/ContactUsPage";
import UserDetailsAfterClick from "./UserDetailsAfterClick";

export default function AllRoutes() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  // console.log("Isloggedin status in allroutes", isLoggedIn);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}

      {isLoggedIn ? (
        <Route path="/contact" element={<ContactUsPage />} />
      ) : (
        <Route path="/contact" element={<Navigate to="/login" />} />
      )}

      {isLoggedIn ? (
        <Route path="/store" element={<Store />} />
      ) : (
        <Route path="/store" element={<Navigate to="/login" />} />
      )}
      {isLoggedIn ? (
        <Route path="/about" element={<About />} />
      ) : (
        <Route path="/about" element={<Navigate to="/login" />} />
      )}

      <Route path="/login" element={<Login />} />
      <Route path="/store/:productId" element={<UserDetailsAfterClick />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
