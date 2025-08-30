import React from "react";
import logo from "/Gym Image/Capture.png";

const AuthCard = ({ title, children }) => {
  return (
    <div className="space-y-5 border-2 border-red-600 rounded-md p-10 z-10 bg-black/70 flex flex-col items-center w-[350px]">
      <img src={logo} alt="auth logo" className="w-40 h-24 mb-4" />

      {title && <h1 className="text-xl font-bold">{title}</h1>}

      {/* Dynamic Content (Inputs, Buttons, Links, etc.) */}
      <div className="w-full flex flex-col space-y-4">{children}</div>
    </div>
  );
};

export default AuthCard;
