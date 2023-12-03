import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";

import "../style/Cart.css";
import { useCart } from "../context/CartContext";
// import SendDataToBackend from "../SendDataToBackend";

function Cart(props) {
  const { prod } = useCart();
  // console.log("Product inside Cart", prod);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("Prod inside Cart.jsx", prod);

  return (
    <>
      <Nav.Link
        variant="primary"
        href="#cart"
        className="cart-holder"
        onClick={handleShow}
      >
        Cart
        <span className="cart-number">{prod.length}</span>
      </Nav.Link>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {prod.map((item, index) => (
            <div key={index}>
              <img
                style={{ width: "60px", borderRadius: "10px" }}
                src={item.url}
                alt="imag"
              />
              <span>
                {" "}
                <span style={{ color: "	#023020", fontWeight: "bold" }}>
                  Title:{" "}
                </span>
                {item.title}
                <span style={{ color: "	#023020", fontWeight: "bold" }}>
                  {" "}
                  Price:{" "}
                </span>
                ${item.price}
                <span style={{ color: "	#023020", fontWeight: "bold" }}>
                  {" "}
                  Quantity:
                </span>
                ${item.quantity}
              </span>
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <p>
            Total: $
            {prod.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <Button variant="primary">PURCHASE</Button>
        </Modal.Footer>
      </Modal>
      {/* {prod && <SendDataToBackend />} */}
    </>
  );
}

export default Cart;
