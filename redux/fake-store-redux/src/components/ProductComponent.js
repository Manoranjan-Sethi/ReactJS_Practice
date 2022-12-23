import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        padding: "20px",
        gap: "20px",
      }}
    >
      {products.map((ele) => (
        <Link
          to={`/product/${ele.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "50px",
            }}
            key={ele.id}
          >
            <img src={ele.image} style={{ width: "50%" }} alt="" />
            <p style={{ fontWeight: "bold" }}>{ele.title}</p>
            <p style={{ fontWeight: "bolder" }}>$ {ele.price}</p>
            <p style={{ fontWeight: "light" }}>{ele.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductComponent;
