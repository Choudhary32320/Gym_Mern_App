import React, { useState } from "react";
import InputField from "../../Components/InputField/Input";
import Button from "../../Components/Button/Button";
import background from "/Gym Image/img-3.jpg";
import AuthCard from "../../Components/AuthCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
         VITE_API_BASE_URL + "/auth/sendotp",
        { email },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((result) => {
        console.log(result);
        toast.success("Otp sent successfully!");
        navigate("/otp");
      })
      .catch((err) => {
        console.error("Full error:", err);
        console.error("Error response:", err.response?.data);
        toast.error("Failed to send OTP");
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

        <AuthCard title="Forgot Password">
          <InputField
            type="email"
            placeholder="Enter your registered e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="border-2 border-red-600 rounded-lg px-3 py-1"
          >
            Send Reset Link
          </Button>

          <p className="text-sm text-center">
            Remembered your password?{" "}
            <Button
              className="text-yellow-300"
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </p>
        </AuthCard>
      </div>
    </form>
  );
};

export default ForgotPassword;
