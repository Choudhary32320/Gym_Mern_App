import React, { useEffect } from "react";
import About from "./About";
import Services from "../Pages/Services";
import Contact from "./Contact";
import background from "/Gym Image/img-3.jpg";
import parallaxImg from "/Gym Image/contactus2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ParallaxSection from "../Components/Paralax/paralax";
import Trainers from "./Trainers";
import Reviews from "./Reviews";
import Button from "../Components/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen z-10 flex items-center justify-center bg-cyan-200 overflow-hidden"
      >
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center inset-0 bg-black/60">
          <h1
            data-aos="fade-up"
            className="relative z-10 text-5xl font-bold text-cyan-300"
          >
            Don't Just Workout{" "}
            <span
              className="text-[6rem] font-extrabold text-transparent 
  [text-stroke:2px_cyan] [-webkit-text-stroke:2px_cyan]"
            >
              Evolve...
            </span>
          </h1>
          <h2 data-aos="fade-left" className="text-cyan-300 z-10 text-5xl">
            Forge strength,
            <span
              className="text-[3rem] font-extrabold text-transparent 
  [text-stroke:2px_cyan] [-webkit-text-stroke:2px_cyan]"
            >
              {" "}
              Break limits,
            </span>{" "}
            Become unstoppable.
          </h2>
          <div
            data-aos="fade-right"
            className="text-white font-bold flex gap-5 p-5"
          >
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="border-1 border-none px-4 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500"
            >
              Contact Us
            </Button>

            <Button
              onClick={() => navigate("/shop")}
              className="text-neutral-700 border-1 border-none px-4 py-3 rounded-full bg-cyan-400 hover:bg-cyan-200"
            >
              Shop @ Evolve...
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full min-h-screen">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="w-full min-h-screen">
        <Services />
      </section>

      <section id="trainers" className="w-full min-h-screen">
        <Trainers />
      </section>

      <section id="reviews" className="w-full min-h-screen">
        <Reviews />
      </section>

      <ParallaxSection
        image={parallaxImg}
        text="READY TO TRANSFORM YOUR BODY?"
        aos="fade-up"
      />

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full min-h-screen relative z-10 bg-neutral-900"
      >
        <Contact data-aos="fade-left" />
      </section>
    </div>
  );
};

export default LandingPage;
