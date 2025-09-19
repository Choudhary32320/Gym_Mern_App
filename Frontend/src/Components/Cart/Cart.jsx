import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";

const Cart = ({ count = 0, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="cart"
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-neutral-800 transition-colors duration-300"
    >
      {/* Cart Icon */}
      <TfiShoppingCart />

      {/* Badge */}
      {count > 0 && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border border-neutral-900 shadow-md">
          {count}
        </span>
      )}
    </button>
  );
};

export default Cart;
