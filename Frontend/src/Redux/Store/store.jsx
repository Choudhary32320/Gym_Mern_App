// src/Redux/Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/cartSlice";
import authReducer from "../Slice/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,

  },
});
