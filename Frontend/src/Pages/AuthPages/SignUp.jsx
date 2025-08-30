import React, { useState } from "react";
import InputField from "../../Components/InputField/Input";
import Button from "../../Components/Button/Button";
import background from "/Gym Image/img-3.jpg";
import AuthCard from "../../Components/AuthCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending:", { name, email, password });

    axios
      .post(
        VITE_API_BASE_URL + "/auth/",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
        toast.success("User Registered successful!");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Full error:", err);
        console.error("Error response:", err.response?.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center bg-neutral-950 w-full h-screen text-white relative">
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <AuthCard title="Register">
          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Enter an e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className="border-2 border-red-600 rounded-lg px-3 py-1"
          >
            Register
          </Button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Button className="text-yellow-300">Login</Button>
          </p>
        </AuthCard>
      </div>
    </form>
  );
};

export default Signup;
