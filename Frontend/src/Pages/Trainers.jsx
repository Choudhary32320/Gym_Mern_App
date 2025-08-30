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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
    {
      image: img2,
      name: "Sarah Logan",
      degree: "Diploma in Mental Health",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
    {
      image: img3,
      name: "Stipe Miocic",
      degree: "Expert In Targeted Training",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
    {
      image: img4,
      name: "Victoria Cross",
      degree: "Diploma in Physical Health",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
    {
      image: img5,
      name: "kate Hudson",
      degree: "Yoga Instructor",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
    {
      image: img6,
      name: "Jesica Johnson",
      degree: "Zumba Instructor",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iure nemo. Similique quidem vitae aliquid nam.",
      aos: "zoom-out",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
          WE <span className="text-red-500">Got</span>, Your Back Buddy
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-2 justify-center px-5 pb-10 -mt-8">
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
    </>
  );
};

export default Trainers;
