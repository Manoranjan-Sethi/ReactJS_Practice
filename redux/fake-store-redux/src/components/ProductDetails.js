import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../Redux/action/productAction";

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { image, title, description, category, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectedProducts(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div
          style={{
            display: "flex",
            padding: "50px",
            gap: "30px",
          }}
        >
          <div>
            <img src={image} style={{ width: "90%" }} alt="" />
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "30px" }}>{title}</p>
            <p style={{ fontWeight: "bolder", fontSize: "25px" }}>$ {price}</p>
            <p style={{ fontSize: "20px" }}>{description}</p>
            <p style={{ fontWeight: "light" }}>{category}</p>
            <button
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "15px 20px",
                backgroundColor: "#d9455b",
                color: "white",
                border: "none",
                borderRadius: "7px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
