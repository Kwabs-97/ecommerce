/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

export default store;
