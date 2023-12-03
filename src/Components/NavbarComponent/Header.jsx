import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../style/Header.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";

export default function Header() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar className="custom-navbar" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/store" className="nav-link">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact Us
          </Nav.Link>

          {!isLoggedIn ? (
            <li>
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login
              </Nav.Link>
            </li>
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              onClick={logoutHandler}
              className="nav-link"
            >
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Container>

      {isLoggedIn && <Cart />}
    </Navbar>
  );
}
