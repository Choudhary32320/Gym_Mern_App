import React, { useEffect } from "react";
import image from "/Gym Image/remove.png";
import { CgGym } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 overflow-hidden">
       <h1
          className="absolute top-5 text-[4rem] md:text-[10rem] font-extrabold text-transparent 
          [text-stroke:2px_rgb(34,211,238)] [-webkit-text-stroke:2px_rgb(34,211,238)]
          tracking-widest opacity-10 select-none pointer-events-none"
        >
          EVOLVE
        </h1>

      <h2
        className="relative text-[2.3rem] md:text-[4rem] font-extrabold text-cyan-400 tracking-wide 
        text-center mb-14 z-20"
        data-aos="zoom-in"
      >
        At <span className="text-cyan-500">Evolve</span>, Strength Meets Purpose
      </h2>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[650px] h-[650px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px]"></div>

        <img
          src={image}
          alt="Gym Illustration"
          className="relative w-[750px] max-w-full object-contain opacity-25 scale-105 hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="relative z-20 w-full max-w-5xl">
        <div
          className="bg-cyan-400/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-cyan-400/10"
          data-aos="fade-up"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Train hard, grow stronger",
              "Push limits, see progress",
              "Fitness made simple",
              "Strength with purpose",
              "Real people, real results",
              "Built for every journey",
            ].map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-lg md:text-xl font-bold 
                text-cyan-100 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="bg-cyan-500 p-3 rounded-full shadow-lg shadow-cyan-900/50 hover:scale-110 transition-transform duration-300">
                  <CgGym className="text-black text-xl md:text-2xl" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="relative z-20 mt-12 flex flex-col sm:flex-row gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Button
          onClick={() => navigate("/plans")}
          className="px-8 py-4 rounded-full bg-cyan-500 text-neutral-800 font-bold text-lg shadow-lg shadow-cyan-900/40 hover:bg-cyan-600 hover:scale-105 transition-transform duration-300"
        >
          Registration Plan
        </Button>
      </div>
    </div>
  );
};

export default About;
