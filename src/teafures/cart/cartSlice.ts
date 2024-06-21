import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../pages/Products";

export type cartItem = {
  amount: number;
  product: ProductType;
};

const initialState: {
  value: cartItem[];
} = {
  value: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (
      state,
      {
        payload: { num, product },
      }: PayloadAction<{ num: number; product: ProductType }>
    ) => {
      // num === 0
      if (num === 0) {
        const newCartState = state.value.filter(
          (item) => item.product.id !== product.id
        );
        state.value = newCartState;
      }

      // 1+ -----------------------
      if (num >= 1) {
        const index = state.value.findIndex(
          (item) => item.product.id === product.id
        );

        if (index > -1) {
          state.value[index].amount = num;
        } else {
          state.value.push({
            amount: num,
            product: product,
          });
        }
      }
    },

    clearCart: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart, clearCart } = counterSlice.actions;

export default counterSlice.reducer;
