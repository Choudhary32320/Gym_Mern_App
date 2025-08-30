import React from "react";

const Card = ({ name, description,degree, image, aos = "zoom in" }) => {
  return <>
  
  <div className="border-2 border-red-600 rounded-lg w-sm  items-center justify-center p-5">
 <img
        src={image}
        alt={name}
        className="w-52 h-32 object-contain mx-auto mb-4"
      />
    <div className="text-red-500" data-aos={aos}>
    <h1 className="text-2xl font-bold font-serif whitespace-nowrap">{name}</h1>
    <h2 className="text-xl font-semibold text-amber-300 whitespace-nowrap">{degree}</h2>
    <p className="text-base text-justify text-amber-100 ">{description}</p>
    </div>
        
  </div>
  </>;
};

export default Card;
