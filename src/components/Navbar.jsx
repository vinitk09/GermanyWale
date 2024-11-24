import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import "./Navbar.css";
// import "../assets/fonts.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links">
          <Link to="/" className="navbar-link active">
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
      {isOpen && (
        <div className="mobile-menu">
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
      )}
    </nav>
  );
};

export default Navbar;
