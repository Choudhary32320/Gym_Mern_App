import React from "react";

const ParallaxSection = ({ image, text, aos = "zoom-in" }) => {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4" data-aos={aos}>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-400">{text}</h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
