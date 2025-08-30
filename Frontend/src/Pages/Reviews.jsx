import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../public/Gym Image/customer-1.png";
import img2 from "../../public/Gym Image/customer-5.png";
import img3 from "../../public/Gym Image/customer-3.png";
import img4 from "../../public/Gym Image/customer-4.png";
import img6 from "../../public/Gym Image/customer-6.png";
import Card from "../Components/Card/card";

const Reviews = () => {
  const reviewData = [
    {
      image: img1,
      name: "Paul Smith",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores harum quam ducimus ea pariatur totam, velit nihil debitis ullam aliquid quibusdam.",
    },
    {
      image: img2,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam deserunt sit assumenda esse.",
    },
    {
      image: img3,
      name: "Sarah Lee",
      comment:
        "Totam, velit nihil debitis ullam aliquid quibusdam. Pariatur, asperiores provident saepe possimus omnis corrupti atque?",
    },
    {
      image: img4,
      name: "James Hudson",
      comment:
        "Dolores harum quam ducimus ea pariatur totam, velit nihil debitis ullam aliquid quibusdam.",
    },
    {
      image: img6,
      name: "Emma Watson",
      comment:
        "Dolores harum quam ducimus ea pariatur totam, velit nihil debitis ullam aliquid quibusdam.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <h1
          className="absolute top-5 text-[5rem] md:text-[12rem] font-extrabold whitespace-nowrap text-transparent 
          [text-stroke:3px_rgba(255,0,0,0.3)] [-webkit-text-stroke:3px_rgba(255,0,0,0.3)]
          select-none pointer-events-none tracking-wider z-0"
        >
          Evolve...
        </h1>
        <h2
          className="relative text-[2.3rem] md:text-[3.5rem] font-extrabold text-gray-400 tracking-wide 
          text-center z-20"
          data-aos="zoom-in"
        >
          Your <span className="text-red-500">Review</span>, Matters
        </h2>
      </div>

      <div className="px-6 md:px-16">
        <Slider {...settings}>
          {reviewData.map((review, index) => (
            <div key={index} className="p-3">
              <Card
                image={review.image}
                name={review.name}
                description={review.comment}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Reviews;
