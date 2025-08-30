import React, { useState, useEffect } from "react";
import Button from "../Components/Button/Button";
import logo from "/Gym Image/logo-1.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Trainers", id: "trainers" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("keepLoggedIn"));
    setIsLoggedIn(loggedIn || false);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="fixed bg-neutral-900 top-0 left-0 w-full flex items-center justify-between px-5 py-3 z-50">
      <div className="flex items-center space-x-1 text-red-600">
        <img src={logo} alt="gym-logo" className="w-14 h-20 object-contain" />
        <h1 className="text-2xl font-bold">Evolve...</h1>
      </div>

      <ul className="hidden md:flex space-x-6 text-red-600">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleScroll(link.id)}
              className={`px-2 pb-1 transition duration-200 ${
                active === link.id
                  ? "border-b-2 border-red-600"
                  : "hover:border-b-2 hover:border-gray-400"
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            className="text-red-600 border rounded-full p-2 border-red-600"
          >
            Log Out
          </Button>
        ) : (
          <Button
            className="text-yellow-300 border rounded-full p-2 border-yellow-300"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        )}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-red-600 focus:outline-none"
        >
          {isMenuOpen ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-neutral-900 text-red-600 flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`text-lg ${
                active === link.id ? "border-b-2 border-red-600" : ""
              }`}
            >
              {link.name}
            </button>
          ))}
          <div>
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="text-red-600 border rounded-full p-2 border-red-600"
              >
                Log Out
              </Button>
            ) : (
              <Button
                className="text-yellow-300 border rounded-full p-2 border-yellow-300"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
