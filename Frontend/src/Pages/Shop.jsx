import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Components/Button/Button";
import Navbar from "../Navbar/Navbar";
import Cart from "../Components/Cart/Cart";
import { addToCart } from "../Redux/Slice/cartSlice";
import { TbShoppingCartDiscount } from "react-icons/tb";

const Shop = () => {
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // Fetch products
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/item/`);
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  return (
    <>
      <div
        className="fixed top-5 right-5 cursor-pointer flex items-center gap-2 z-50"
        onClick={() => navigate("/cart")}
      >
        <TbShoppingCartDiscount className="text-blue-600" />
        {totalQuantity > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {totalQuantity}
          </span>
        )}
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Product Grid
        <div className="mt-20 flex flex-wrap justify-center gap-6 p-6">
          {items.length === 0 ? (
            <p className="text-gray-400 text-lg">No products available.</p>
          ) : (
            items.map((product, index) => (
              <div
                key={index}
                className="w-64 bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center border hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {/* Product Image */}
                <div className="w-42 h-32 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-semibold text-blue-800">
                  {product.name}
                </h2>
                <p className="text-blue-600 mt-1">
                  Price: <span className="font-bold">${product.price}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="mt-4 flex gap-5">
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors duration-300"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => navigate(`/item/${product._id}`)}
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-800 transition-colors duration-300"
                  >
                    View Item
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Shop;
