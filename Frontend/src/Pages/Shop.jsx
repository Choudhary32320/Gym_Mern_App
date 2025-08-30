import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Shop = () => {
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(VITE_API_BASE_URL + "/item/");
        console.log(response);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    getItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-wrap justify-center gap-6 p-6">
        {items.map((product, index) => (
          <div
            key={index}
            className="w-64 bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center border hover:shadow-lg hover:scale-105  transition-transform duration-300 ease-in-out"
          >
            <div className="w-42 h-32 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain max-h-full"
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-1">
              Price: <span className="font-bold">${product.price}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <div className="mt-4 flex gap-5">
              <Button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-800 transition-color duration-300">
                Add to Cart
              </Button>
              <Button
                onClick={() => navigate(`/item/${product._id}`)}
                className="mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-800 transition-color duration-300"
              >
                View Item
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
