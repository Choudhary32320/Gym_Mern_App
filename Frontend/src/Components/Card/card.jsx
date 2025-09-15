import React from "react";

const Card = ({ name, description, degree, image, aos = "zoom in" }) => {
  return (
    <>
    <div
  className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 
  rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-900/40 
  p-6 text-center border border-neutral-700"
  data-aos={aos}
>
  <img
    src={image}
    alt={name}
    className="w-28 h-40 drop-shadow-lg drop-shadow-cyan-600  mx-auto mb-4 "
  />
  <h3 className="text-xl font-bold text-gray-100">{name}</h3>
  <p className="text-cyan-400 font-medium mb-3">{degree}</p>
  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
</div>

    </>
  );
};

export default Card;
