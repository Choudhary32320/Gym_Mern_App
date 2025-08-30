import React, { useEffect } from "react";
import img1 from "/Gym Image/img-1.jpg";
import img3 from "/Gym Image/trainerbg2.jpeg";
import img4 from "/Gym Image/img-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  const services = [
    {
      img: img1,
      title: "Healthy Environment",
      desc: "A motivating, clean, and supportive space to help you train at your best without distractions.",
    },
    {
      img: img3,
      title: "Expert Trainers",
      desc: "Get personalized guidance from certified professionals who push you to achieve your fitness goals.",
    },
    {
      img: img4,
      title: "Modern Equipment",
      desc: "Access world-class equipment designed to maximize your strength, endurance, and performance.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Watermark Heading */}
      <h1
        className="absolute top-10 text-[5rem] md:text-[10rem] font-extrabold whitespace-nowrap text-transparent 
        [text-stroke:3px_rgba(255,0,0,0.3)] [-webkit-text-stroke:3px_rgba(255,0,0,0.3)]
        select-none pointer-events-none tracking-wider z-0"
      >
        OUR SERVICE'S
      </h1>

      {/* Section Title */}
      <h2
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-gray-400 text-center mb-16"
        data-aos="zoom-in"
      >
        What We <span className="text-red-500">Offer</span>
      </h2>

      {/* Services Cards */}
      <div className="relative z-10 flex flex-col gap-20 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Card */}
            <div
              data-aos="fade-up"
              className="group w-full lg:w-[400px] rounded-2xl overflow-hidden shadow-xl shadow-black/40 
              transform hover:scale-105 hover:shadow-red-900/50 transition-all duration-700"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Text Content */}
            <div
              data-aos="fade-up"
              className="max-w-lg text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
