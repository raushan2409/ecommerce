import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "./ProductList";

export default function UserDetailsAfterClick() {
  let { productId } = useParams();

  const pr = productsArr.find((prod) => prod.id == productId);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "3px solid black"
      }}
    >
      <img style={{ width: "200px" }} src={pr.imageUrl} alt="product_image" />

      <h1>Product Title : {pr.title}</h1>
      <h2>price : {pr.price}</h2>
    </div>
  );
}
