import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductType } from "./Products";
import NumberInput from "../components/ui/number-input/NumberInput";
import "./product.css";
import { CartContext, cartContextType } from "../context/CartContext";

export const getProdCurrNumber = (cartState, product) => {
  const prod = cartState.find((prod) => prod.product.id === product?.id);
  if (prod) {
    return prod.amount;
  }
  return 0;
};

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState<null | ProductType>(null);
  // const [num, setNum] = useState(0);
  const { cartState, updateCart } = useContext(CartContext) as cartContextType;

  const getData = async () => {
    const res = await fetch(
      "http://localhost:3000/products/" + params.productId
    );

    const data = await res.json();

    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container product-inner-container">
        <img width={400} src={`/${product?.image.desktop}`} alt="image" />
        <div>
          <h1>Product - {params.productId}</h1>
          <p>product category - {product?.category}</p>
          <p>product name - {product?.name}</p>
          {product && (
            <NumberInput
              maxQuantity={50}
              number={getProdCurrNumber(cartState, product)}
              setNumber={(num: number) => updateCart(num, product)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
