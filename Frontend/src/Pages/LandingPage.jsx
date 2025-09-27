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
import { useNavigate } from "react-router-dom";
import { CgPhone } from "react-icons/cg";

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
    <div className="bg-neutral-950 w-full ">
      {/* Hero Section */}
      <section
        id="home"
        className="relative  h-screen z-10  flex items-center justify-center overflow-hidden"
      >
        <img
          src={background}
          alt="background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center inset-0 bg-black/60">
          <h1
            data-aos="fade-up"
            className="relative z-10 text-xl md:text-3xl lg:text-5xl font-bold text-green-300"
          >
            Don't Just Workout{" "}
            <span
              className="text-[3rem] md:text-[6rem] font-extrabold text-transparent 
  [text-stroke:2px_green] [-webkit-text-stroke:2px_green]"
            >
              Evolve...
            </span>
          </h1>
          <h2
            data-aos="fade-left"
            className="text-green-300 z-10 p-2 text-base text-center md:text-2xl lg:text-5xl md:whitespace-nowrap"
          >
            Forge strength,
            <span
              className="text-[1.5rem] md:text-[3rem] font-extrabold text-transparent 
  [text-stroke:2px_green] [-webkit-text-stroke:1px_green] md:[-webkit-text-stroke:2px_green]"
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
              className="flex justify-center items-center gap-1 text-sm md:text-base lg:text-xl border-1 border-none px-3 py-1  lg:px-4 lg:py-3 rounded-full bg-green-600 hover:bg-green-500"
            >
              <span className="text-red-600 text-lg md:text-xl lg:text-3xl">
                <CgPhone />
              </span>
              Contact Us
            </Button>

            <Button
              onClick={() => {
                const isLoggedIn =
                  JSON.parse(localStorage.getItem("keepLoggedIn")) || false;
                if (isLoggedIn) {
                  navigate("/shop");
                } else {
                  navigate("/login", { state: { from: "/shop" } }); // <-- Pass redirect path
                }
              }}
              className="text-neutral-700 border-1 border-none px-3 py-1 md:px-3 md:py-1 lg:px-4 lg:py-3 text-sm md:text-base lg:text-xl rounded-full bg-green-400 hover:bg-green-200"
            >
              Shop{" "}
              <span className="text-red-600 text-lg md:text-xl lg:text-2xl font-bold">
                @
              </span>{" "}
              Evolve...
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" min-h-screen">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className=" min-h-screen">
        <Services />
      </section>

      <section id="trainers" className=" min-h-screen">
        <Trainers />
      </section>

      <section id="reviews" className=" min-h-screen">
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
        className=" min-h-screen relative z-10 bg-neutral-900"
      >
        <Contact data-aos="fade-left" />
      </section>
    </div>
  );
};

export default LandingPage;
