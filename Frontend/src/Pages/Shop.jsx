import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Components/Button/Button";
import Navbar from "../Navbar/Navbar";
import { addToCart } from "../Redux/Slice/cartSlice";
import { TbShoppingCartDiscount } from "react-icons/tb";
import Slider from "react-slick";

// Slider images (from public folder)
import slider1 from "/Gym Image/sale1.jpeg";
import slider2 from "/Gym Image/sale2.jpg";
import slider3 from "/Gym Image/sale3.webp";
import slider4 from "/Gym Image/sale4.jpg";
import slider5 from "/Gym Image/sale5.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shop = () => {
  const sliderData = [
    {
      img: slider1,
      title: "Big Sale",
      subtitle: "Up to 50% Off Gym Equipment",
    },
    {
      img: slider2,
      title: "New Arrivals",
      subtitle: "Latest Fitness Gear Available Now",
    },
    {
      img: slider3,
      title: "Exclusive Offer",
      subtitle: "Buy 1 Get 1 Free on Supplements",
    },
    {
      img: slider4,
      title: "Premium Quality",
      subtitle: "Top Rated Products for Your Gym",
    },
    {
      img: slider5,
      title: "Seasonal Sale",
      subtitle: "Don't Miss Out on Limited Time Deals",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div className="p-2">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full hover:bg-blue-500 transition-all duration-300"></div>
    ),
  };

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // Fetch products
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/item/`);
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
      {/* Hero Slider */}
      <div className="relative">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="w-full h-[70vh] object-cover rounded-b-3xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mt-3">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Cart Button Below Slider */}
      <div className="flex justify-end mt-6 px-10">
        <div
          className="relative bg-white shadow-lg rounded-full p-4 cursor-pointer hover:bg-blue-100 transition duration-300 flex items-center justify-center"
          onClick={() => navigate("/cart")}
        >
          <TbShoppingCartDiscount className="text-blue-600 text-3xl" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs shadow-md">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Product Section
        <section className="mt-12 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.length === 0 ? (
              <p className="text-gray-400 text-lg text-center col-span-full">
                No products available.
              </p>
            ) : (
              items.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center text-center border hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {/* Product Image */}
                  <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 mt-1 font-bold text-xl">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-4 flex gap-3">
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
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-blue-900 text-white text-center py-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gym Store. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Shop;
