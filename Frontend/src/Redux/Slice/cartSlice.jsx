// src/Redux/Slice/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  addToCart: (state, action) => {
  const item = action.payload;
  const existingItem = state.cartItems.find(cartItem => cartItem._id === item._id);

  // Convert price to number to be safe
  const price = Number(item.price);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice += price;
  } else {
    state.cartItems.push({
      ...item,
      quantity: 1,
      totalPrice: price,
    });
  }

  state.totalQuantity += 1;
  state.totalAmount += price; // ✅ Always a number
},


    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item._id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter(item => item._id !== id);
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item._id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
        } else {
          state.cartItems = state.cartItems.filter(item => item._id !== id);
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
