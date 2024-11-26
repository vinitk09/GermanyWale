import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3
              className="text-lg  mb-4"
              style={{
                background: "linear-gradient(180deg, #EA7D06 0%, #D63715 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: "26.41px",
                fontFamily: "Gilroy",
                fontWeight: "700",
              }}
            >
              Programs
            </h3>

            <p className="text-sm program-text">
              Your trusted partner for pursuing higher education in Germany. We
              provide end-to-end consultation services to make your dream of
              studying in Germany a reality.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white text-lg font-semibold mb-4"
              style={{
                background: "linear-gradient(180deg, #EA7D06 0%, #D63715 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: "26.41px",
                fontFamily: "Gilroy",
                fontWeight: "700",
              }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  Study Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Accomodation
                </Link>
              </li>
              <li>
                <Link
                  to="/universities"
                  className="hover:text-blue-400 transition-colors"
                >
                  Service in Germany
                </Link>
              </li>
              <li>
                <Link
                  to="/german-language"
                  className="hover:text-blue-400 transition-colors"
                >
                  Service in India
                </Link>
              </li>
              <li></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-white text-lg font-semibold mb-4"
              style={{
                background: "linear-gradient(180deg, #EA7D06 0%, #D63715 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: "26.41px",
                fontFamily: "Gilroy",
                fontWeight: "700",
              }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>+49 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@germanywale.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>
                  123 Business Street,
                  <br />
                  Berlin 10115, Germany
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-white text-lg font-semibold mb-4"
              style={{
                background: "linear-gradient(180deg, #EA7D06 0%, #D63715 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: "26.41px",
                fontFamily: "Gilroy",
                fontWeight: "700",
              }}
            >
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates and tips about studying in
              Germany.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  // width: "382.87px",
                  height: "61.89px",
                  top: "124.6px",
                  left: "668.38px",

                  borderRadius: "13.2px ",
                  border: "0.83px 0px 0px 0px",
                }}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                style={{
                  width: "164.21px",
                  height: "61.89px",
                  top: "124.6px",
                  left: "1060.33px",
                  borderRadius: "13.2px",
                  backgroundColor: "#DC4E10",
                  fontSize: "26.93px",
                  fontWeight: "600",
                  fontFamily: "Gilroy",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Germany Wale. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4 text-sm">
              <Link
                to="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
