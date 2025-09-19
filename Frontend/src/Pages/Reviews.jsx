import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/Gym Image/customer-1.png";
import img2 from "/Gym Image/customer-5.png";
import img3 from "/Gym Image/customer-3.png";
import img4 from "/Gym Image/customer-4.png";
import img6 from "/Gym Image/customer-6.png";

const Reviews = () => {
  const reviewData = [
    {
      image: img1,
      name: "Paul Smith",
      comment:
        "The trainers here are top-notch! My fitness journey completely transformed thanks to their expert guidance.",
    },
    {
      image: img2,
      name: "John Doe",
      comment:
        "Amazing atmosphere, supportive community, and high-end facilities. I couldn't ask for a better gym experience.",
    },
    {
      image: img3,
      name: "Sarah Lee",
      comment:
        "I love how personal the approach is. My coach listens and customizes every session for my goals.",
    },
    {
      image: img4,
      name: "James Hudson",
      comment:
        "Hands down, the best place to get motivated and stay consistent. Truly life-changing!",
    },
    {
      image: img6,
      name: "Emma Watson",
      comment:
        "The classes are fun, the staff is friendly, and I’ve seen incredible progress in just a few months.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full text-gray-100 py-16">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center px-6">
        {/* Background text */}
        <h1
          className="absolute top-5 text-[3rem] md:text-[8rem] font-extrabold text-transparent 
          [text-stroke:2px_rgb(34,211,238)] [-webkit-text-stroke:2px_rgb(34,211,238)]
          tracking-widest opacity-10 select-none pointer-events-none"
        >
          REVIEWS
        </h1>

        {/* Main heading */}
        <h2
          className="relative text-[2rem] md:text-[3.5rem] font-extrabold text-green-400 tracking-wide z-10"
          data-aos="zoom-in"
        >
          Your <span className="text-green-500">Feedback</span> Matters
        </h2>
        <p className="mt-4 text-gray-400 max-w-lg text-center text-lg z-10">
          Hear from our members who’ve transformed their fitness journey with
          us.
        </p>
      </section>

      {/* Reviews Slider */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mt-10">
        <Slider {...settings}>
          {reviewData.map((review, index) => (
            <div key={index} className="px-3">
              <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-700 hover:border-green-600 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-30 h-30 drop-shadow-lg drop-shadow-green-300  mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Reviews;
