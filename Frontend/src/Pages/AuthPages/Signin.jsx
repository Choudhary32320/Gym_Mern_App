import React, { useState } from "react";
import InputField from "../../Components/InputField/Input";
import Button from "../../Components/Button/Button";
import background from "/Gym Image/img-3.jpg";
import AuthCard from "../../Components/AuthCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Slice/authSlice"; 
import "react-toastify/dist/ReactToastify.css";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // loader state

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // start loader

  try {
    const response = await axios.post(
      `${VITE_API_BASE_URL}/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    toast.success("Login successful!");

    const { name, token } = response.data;

    // Dispatch to Redux
    dispatch(loginSuccess({ name, isAuthenticated: true }));

    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("keepLoggedIn", JSON.stringify(true));

    navigate("/");
  } catch (err) {
    console.error("Full error:", err);
    console.error("Error response:", err.response?.data);
    toast.error(err.response?.data?.message || "Login failed!");
  } finally {
    setLoading(false); // stop loader
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center bg-neutral-950 w-full h-screen text-white relative">
        {/* Background */}
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Auth Card */}
        <AuthCard title="Login">
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

          <div className="flex justify-between w-full">
            <Button
              type="submit"
              className="border-2 border-cyan-600 rounded-lg px-3 py-1 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </Button>
            <Button onClick={() => navigate("/forgot-password")}>
              Forgot Password
            </Button>
          </div>

          <p className="text-sm text-center mt-3">
            Don’t have an account?{" "}
            <Button
              onClick={() => navigate("/signup")}
              className="text-yellow-300"
            >
              Register
            </Button>
          </p>
        </AuthCard>
      </div>
    </form>
  );
};

export default Signin;
