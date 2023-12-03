import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";

export const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  },
  {
    id: 5,
    title: "Solid Color Background",
    price: 270,
    imageUrl:
      "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Green Leafed Plant",
    price: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1535882686-b1332af6f51e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Ocean Water portrait",
    price: 230,
    imageUrl:
      "https://images.unsplash.com/photo-1518022525094-218670c9b745?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    title: "Old School Cycle",
    price: 360,
    imageUrl:
      "https://images.unsplash.com/photo-1488675577037-0d517feb0b09?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function ProductList() {
  const [arr, setArr] = useState("");
  const [prod, setProd] = useState([]);

  const { addToCart } = useCart();

  const setCart = (product, index) => {
    // console.log("Inside setCart function");
    // console.log("product inside productList", product);
    const newProd = {
      title: product.title,
      url: product.imageUrl,
      price: product.price,
      id: product.id,
      quantity: 1
    };
    addToCart(newProd);
  };

  // const [item, setItems] = useState();

  return (
    <>
      <Container>
        <Row>
          {productsArr.map((product, index) => (
            <Col md={6} key={index}>
              <Card className="mb-2 m-auto mt-2" style={{ maxWidth: "250px" }}>
                <Card.Img
                  src={product.imageUrl}
                  style={{ maxHeight: "200px" }}
                  alt={product.title}
                />
                <Card.Body>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/store/${product.id}`}
                  >
                    <Card.Title>{product.title}</Card.Title>
                  </Link>
                  <p>Price: ${product.price}</p>
                  <Button onClick={() => setCart(product, index)}>
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
