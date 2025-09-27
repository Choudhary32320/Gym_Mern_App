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
      <h1
        className="absolute top-5 text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-extrabold text-transparent 
          [text-stroke:2px_rgb(34,211,238)] [-webkit-text-stroke:2px_rgb(34,211,238)]
          tracking-widest opacity-10 select-none pointer-events-none"
      >
        EVOLVE...
      </h1>

      <h2
        className="relative z-10 text-2xl md:text-3xl lg:text-5xl font-extrabold text-green-400 text-center mb-16"
        data-aos="zoom-in"
      >
        What We <span className="text-green-500">Offer</span>
      </h2>

      <div className="relative z-10 flex flex-col gap-20 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            <div className="md:w-lg lg:w-[420px] lg:h-[250px] md:border-r-8 md:border-b-8 border-green-400 rounded-4xl">
              <div
                data-aos="fade-up"
                className="group lg:w-[400px] lg:h-[230px] rounded-2xl overflow-hidden shadow-xl shadow-black/40 
              transform hover:scale-100 hover:shadow-green-900/50 transition-all duration-700"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-lg md:text-center lg:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-500 mb-3">
                {service.title}
              </h3>
              <p className="text-green-300 text-sm md:text-lg text-justify">
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
