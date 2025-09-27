import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import logo from "/Gym Image/logo-1.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from "../Redux/Slice/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get authentication data from Redux
  const { name, isAuthenticated } = useSelector((state) => state.auth);

  // UI states
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Trainers", id: "trainers" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsMenuOpen(false); // close mobile menu
    }
  };

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900 px-5 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center lg:space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-green-600 font-extrabold text-xl md:text-lg lg:text-2xl">
            Evolve...
          </span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex md:space-x-3 lg:space-x-6 text-green-600 md:text-xs lg:text-lg">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className={`px-2 pb-1 transition ${
                  active === link.id
                    ? "border-b-2 border-green-600"
                    : "hover:border-b-2 hover:border-green-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div
          className="hidden md:flex items-center space-x-4"
          ref={dropdownRef}
        >
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 md:px-2 lg:px-3 lg:py-1 cursor-pointer border-2 rounded-full border-green-400 text-green-600 bg-green-500"
              >
                <span className="md:text-xl lg:text-3xl text-neutral-950 font-semibold">
                  {name[0]}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-neutral-800 border border-green-600 rounded shadow overflow-hidden">
                  <h1 className="text-green-600 text-center font-bold">
                    Welcome! {name}
                  </h1>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white text-green-600"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white text-green-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              className="text-yellow-300 border rounded-full px-4 py-2 border-yellow-300"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-green-600 p-1"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-neutral-900 text-green-600 py-4 px-6">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-lg text-left"
              >
                {link.name}
              </button>
            ))}

            <div className="mt-3">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-5 ">
                    <FaRegCircleUser className="w-6 h-6" />
                    <p className="text-yellow-400 mb-2">{name}</p>
                  </div>
                  <Button
                    onClick={() => {
                      navigate("/profile");
                      setIsMenuOpen(false);
                    }}
                    className="mb-2 text-green-600 border rounded-full px-4 py-2 border-green-600"
                  >
                    Profile
                  </Button>
                  <Button
                    onClick={handleLogout}
                    className="text-red-500 border rounded-full px-4 py-2 border-red-500"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  className="text-yellow-300 border rounded-full px-4 py-2 border-yellow-300"
                >
                  Log In
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
