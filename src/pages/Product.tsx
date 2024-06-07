import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "./Products";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState<null | ProductType>(null);

  const getData = async () => {
    const res = await fetch(
      "http://localhost:3000/products/" + params.productId
    );

    const data = await res.json();

    setProduct(data);

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Product - {params.productId}</h1>
      <p>product category - {product?.category}</p>
      <p>product name - {product?.name}</p>
    </>
  );
};

export default Product;
