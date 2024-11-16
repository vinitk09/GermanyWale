import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full font-gilroy bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span
              className="text-2xl font-bold  bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${Logo})`,
                filter: "brightness(0.9)",

                width: "168.39px",
                height: "200px",
                top: "28px",
                left: "24.88px",
              }}
            ></span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/services"
              className="gradient-text"
              style={{
                background:
                  "linear-gradient(93.62deg, #EA7D06 2.89%, #D63715 98.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Gilroy-Bold",
                fontSize: "19.73px",
                fontWeight: "400",
                lineHeight: "30.42px",
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              Home
            </Link>
            <Link to="/universities" className="navbar-link">
              About Us
            </Link>
            <Link to="/german-language" className="navbar-link">
              Services
            </Link>
            <Link to="/visa" className="navbar-link">
              Reviews
            </Link>
            <Link to="/contact" className="navbar-link">
              Contact Us
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={24} color="#525252" />
            ) : (
              <FaBars size={24} color="#525252" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/services"
                className="gradient-text"
                style={{
                  background:
                    "linear-gradient(93.62deg, #EA7D06 2.89%, #D63715 98.07%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Gilroy-Bold",
                  fontSize: "19.73px",
                  fontWeight: "400",
                  lineHeight: "30.42px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                Home
              </Link>
              <Link to="/universities" className="navbar-link">
                About Us
              </Link>
              <Link to="/german-language" className="navbar-link">
                Services
              </Link>
              <Link to="/visa" className="navbar-link">
                Reviews
              </Link>
              <Link to="/contact" className="navbar-link">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
