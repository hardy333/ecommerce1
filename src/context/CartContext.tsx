import { Dispatch, ReactNode, createContext, useState } from "react";
import { ProductType } from "../pages/Products";

export type cartItem = {
  amount: number;
  product: ProductType;
};

export type cartContextType = {
  cartState: cartItem[];
  setCartState: Dispatch<React.SetStateAction<cartItem[]>>;
  updateCart: (num: number, prod: ProductType) => void;
  clearCart: () => void;
};

export const CartContext = createContext<null | cartContextType>(null);

type Props = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [cartState, setCartState] = useState<cartItem[]>([]);

  // 0
  // 1+

  const clearCart = () => {
    setCartState([]);
  };

  const updateCart = (num: number, prod: ProductType) => {
    // 0 -----------------------
    if (num === 0) {
      const newCartState = cartState.filter(
        (item) => item.product.id !== prod.id
      );
      setCartState(newCartState);
    }

    // 1+ -----------------------
    if (num >= 1) {
      const item = cartState.find((item) => item.product.id === prod.id);

      if (item) {
        const newCartState = cartState.map((item) =>
          item.product.id !== prod.id ? item : { ...item, amount: num }
        );
        setCartState(newCartState);
      } else {
        setCartState((currState) => [
          ...currState,
          { amount: num, product: prod },
        ]);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cartState, setCartState, updateCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
