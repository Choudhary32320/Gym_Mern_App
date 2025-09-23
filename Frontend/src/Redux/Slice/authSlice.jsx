// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialName = JSON.parse(localStorage.getItem("name")) || null;
const initialToken = localStorage.getItem("token") || null;

const initialState = {
  name: initialName,
  token: initialToken,
  isAuthenticated: !!initialToken, // ✅ Automatically true if token exists
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.isAuthenticated = true;

      // Save to localStorage
      localStorage.setItem("name", JSON.stringify(action.payload.name));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.name = null;
      state.token = null;
      state.isAuthenticated = false;

      // Clear localStorage
      localStorage.removeItem("name");
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
