import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../../cart-items";

const initialState = {
  cartItems: cartItem,
  amount: 2,
  total: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
