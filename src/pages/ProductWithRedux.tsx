import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "./Products";
import NumberInput from "../components/ui/number-input/NumberInput";
import "./product.css";
import Button from "../components/ui/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { cartItem, updateCart } from "../teafures/cart/cartSlice";

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

const ProductWithRedux = () => {
  const params = useParams();
  const [product, setProduct] = useState<null | ProductType>(null);
  const [num, setNum] = useState(1);
  const cartState = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

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
                onClick={() => dispatch(updateCart({ num, product }))}
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

export default ProductWithRedux;
