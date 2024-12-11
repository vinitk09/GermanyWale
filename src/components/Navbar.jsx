import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container-div">
          <Link to="/" className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links">
          <Link
            to="/"
            className="navbar-link active"
            style={{ "--delay": "0s" }}
          >
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/services" className="navbar-link">
            Services
          </Link>
          <Link to="/reviews" className="navbar-link">
            Reviews
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="mobile-link" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/services" className="mobile-link" onClick={toggleMenu}>
          Services
        </Link>
        <Link to="/reviews" className="mobile-link" onClick={toggleMenu}>
          Reviews
        </Link>
        <Link to="/contact" className="mobile-link" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
