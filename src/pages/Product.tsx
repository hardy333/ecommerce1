import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductType } from "./Products";
import NumberInput from "../components/ui/number-input/NumberInput";
import "./product.css";
import { CartContext, cartContextType, cartItem } from "../context/CartContext";
import Button from "../components/ui/button/Button";
import { useQuery } from "@tanstack/react-query";

export const getProdCurrNumber = (
  cartState: cartItem[],
  product: ProductType
) => {
  const prod = cartState.find((prod) => prod.product.id === product?.id);
  if (prod) {
    return prod.amount;
  }
  return 1;
};

const Product = () => {
  const params = useParams();
  // const [product, setProduct] = useState<null | ProductType>(null);
  const { cartState, updateCart } = useContext(CartContext) as cartContextType;
  const [num, setNum] = useState(1);

  const getData = async () => {
    const res = await fetch(
      "http://localhost:3000/products/" + params.productId
    );
    const data = await res.json();

    return data;
  };

  const { data: product } = useQuery<ProductType>({
    queryKey: ["prod", params.productId],
    queryFn: getData,
  });

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    if (!product) return;
    setNum(getProdCurrNumber(cartState, product));
  }, [product, setNum, cartState]);

  return (
    <>
      <div className="container product-inner-container">
        <img width={400} src={`/${product?.image.desktop}`} alt="image" />
        <div>
          <h1>Product - {params.productId}</h1>
          <p>product category - {product?.category}</p>
          <p>product name - {product?.name}</p>
          {product && (
            <>
              <NumberInput maxQuantity={50} number={num} setNumber={setNum} />
              <Button
                onClick={() => {
                  updateCart(num, product);
                }}
                type="primary"
              >
                ADD TO CART
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
