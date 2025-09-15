import React from "react";
import Card from "../Components/Card/card";
import img1 from "/Gym Image/trainer1.png";
import img2 from "/Gym Image/trainer2.png";
import img3 from "/Gym Image/trainer3.png";
import img4 from "/Gym Image/trainer4.png";
import img5 from "/Gym Image/trainer5.png";
import img6 from "/Gym Image/trainer7.png";

const Trainers = () => {
  const trainersData = [
    {
      image: img1,
      name: "James August",
      degree: "Expert Dietitian",
      description:
        "Helping you achieve health goals with tailored nutrition plans backed by science and experience.",
      aos: "zoom-out",
    },
    {
      image: img2,
      name: "Sarah Logan",
      degree: "Mental Health Specialist",
      description:
        "Guiding your fitness journey with a focus on both mental and physical well-being.",
      aos: "zoom-out",
    },
    {
      image: img3,
      name: "Stipe Miocic",
      degree: "Targeted Training Expert",
      description:
        "Designing custom strength and conditioning programs to push your limits safely.",
      aos: "zoom-out",
    },
    {
      image: img4,
      name: "Victoria Cross",
      degree: "Physical Health Coach",
      description:
        "Building endurance, flexibility, and balance through innovative, sustainable methods.",
      aos: "zoom-out",
    },
    {
      image: img5,
      name: "Kate Hudson",
      degree: "Yoga Instructor",
      description:
        "Empowering you through mindfulness, balance, and advanced yoga practices.",
      aos: "zoom-out",
    },
    {
      image: img6,
      name: "Jessica Johnson",
      degree: "Zumba Instructor",
      description:
        "Bringing energy and fun to every session with calorie-burning dance workouts.",
      aos: "zoom-out",
    },
  ];

  return (
    <div className="w-full bg-neutral-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background text */}
         <h1
          className="absolute top-5 text-[4rem] md:text-[10rem] font-extrabold text-transparent 
          [text-stroke:2px_rgb(34,211,238)] [-webkit-text-stroke:2px_rgb(34,211,238)]
          tracking-widest opacity-10 select-none pointer-events-none"
        >
          EVOLVE
        </h1>

        {/* Main heading */}
        <h2
          className="relative text-[2rem] md:text-[3.5rem] font-extrabold text-cyan-400 tracking-wide z-10"
          data-aos="zoom-in"
        >
          Meet Our <span className="text-cyan-500">Expert Trainers</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 max-w-xl text-center text-lg z-10">
          A team of professionals dedicated to guiding you towards your ultimate
          fitness journey.
        </p>
      </section>

      {/* Trainers Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
            <Card
              key={index}
              image={trainer.image}
              name={trainer.name}
              degree={trainer.degree}
              description={trainer.description}
              aos={trainer.aos}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
