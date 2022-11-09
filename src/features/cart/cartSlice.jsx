import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
