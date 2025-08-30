import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Navbar from "../Navbar/Navbar";
import Plans from "../Pages/Plans/index";
import LandingPage from "../Pages/LandingPage";
import Signin from "../Pages/AuthPages/Signin";
import SignUp from "../Pages/AuthPages/SignUp";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword";
import Otp from "../Pages/AuthPages/Otp";
import Shop from "../Pages/Shop";
import ItemDetails from "../Pages/ItemDetail/viewItem";

const RouteComponent = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("keepLoggedIn")) || false;
  return (
    <BrowserRouter>
      <Routes>
        {/* LandingPage route WITH Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />

        {/* Other routes WITHOUT Navbar */}
        <Route
          path="/plans"
          element={isLoggedIn ? <Plans /> : <Navigate to="/login" />}
        />
        <Route
          path="/shop"
          element={isLoggedIn ? <Shop /> : <Navigate to="/login" />}
        />
                <Route path="/item/:id" element={<ItemDetails />} />


        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
