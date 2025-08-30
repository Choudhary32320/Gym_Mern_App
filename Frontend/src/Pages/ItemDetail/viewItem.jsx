import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const { id } = useParams(); // this will be the product._id
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/item/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-96 bg-white shadow-md rounded-2xl p-6 text-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
        <p className="text-gray-700 mb-2">{item.description}</p>
        <p className="text-lg font-semibold text-green-600 mb-4">
          ${item.price}
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
