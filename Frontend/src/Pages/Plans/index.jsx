import React from "react";
import badge from "/Gym Image/10.png";
import Button from "../../Components/Button/Button";

const Data = [
  {
    price: 25,
    Type: "Monthly Plan",
    Description: [
      "Access to gym equipment",
      "1 personal training session",
      "Free fitness assessment",
      "Access to gym equipment",
      "1 personal training session",
      "Free fitness assessment",
    ],
  },
  {
    price: 30,
    Type: "Yearly Plan",
    Description: [
      "Unlimited gym access",
      "Monthly progress tracking",
      "2 free guest passes",
      "Unlimited gym access",
      "Monthly progress tracking",
      "2 free guest passes",
    ],
  },
  {
    price: 35,
    Type: "Premium Plan",
    Description: [
      "All yearly plan benefits",
      "Unlimited personal training",
      "Access to VIP lounge",
      "All yearly plan benefits",
      "Unlimited personal training",
      "Access to VIP lounge",
    ],
  },
];

const Monthly = () => {
  return (
    <div className="w-full h-screen bg-neutral-900 p-10">
      <div className="flex items-center justify-center p-5 gap-10">
        {Data.map((plan, index) => (
          <div
            key={index}
            className="relative bg-neutral-800 border-2 border-[#FF073A] p-6 rounded-lg shadow-md w-80"
          >
            {/* Badge in top-right corner */}
            <img
              src={badge}
              alt="badge"
              className="absolute -top-5 -right-5 w-25 h-25"
            />

            <h3 className="text-2xl text-yellow-600 font-bold py-5 mb-3 text-center underline ">
              {plan.Type}
            </h3>

            <p className="text-yellow-400 flex text-5xl font-bold pb-5 text-center justify-center">
              $ {plan.price}
            </p>

            {/* Description as bullet points */}
            <ul className="text-green-400 list-disc list-inside space-y-2 text-left">
              {plan.Description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-5 py-5">
              <Button className="border-none rounded-lg px-3 py-1 bg-yellow-500 hover:bg-green-600">
                Join Now
              </Button>
              <Button className="border-none rounded-lg px-3 py-1 bg-green-500 hover:bg-green-600">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monthly;
