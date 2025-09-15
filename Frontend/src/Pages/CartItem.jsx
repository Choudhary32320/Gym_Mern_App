// src/Pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../Redux/Slice/cartSlice";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-8 mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Button
            onClick={() => navigate("/shop")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Go to Shop
          </Button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain border rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </Button>
                <span className="font-semibold">{item.quantity}</span>
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </Button>

                <Button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Quantity: <span className="text-blue-700">{totalQuantity}</span>
            </p>
            <p className="text-lg font-semibold">
              Total Amount: <span className="text-green-700">${totalAmount.toFixed(2)}</span>
            </p>

            <div className="mt-4 flex justify-end gap-4">
              <Button
                onClick={() => dispatch(clearCart())}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                Clear Cart
              </Button>
              <Button
                onClick={() => alert("Proceed to checkout!")}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
