import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        key={id}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: "20px",
        }}
      >
        <Link to={`/product/${id}`}>
          <div>
            <img src={image} style={{ width: "20%" }} alt="" />
            <p style={{ fontWeight: "bold" }}>{title}</p>
            <p style={{ fontWeight: "bolder" }}>$ {price}</p>
            <p style={{ fontWeight: "light" }}>{category}</p>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
