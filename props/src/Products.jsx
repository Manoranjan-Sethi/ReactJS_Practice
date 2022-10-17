import React from "react";

function Products({ name, description, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <i>${price}</i>
      </p>
    </div>
  );
}

export default Products;
