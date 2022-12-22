import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

function ProductList() {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
}

export default ProductList;
