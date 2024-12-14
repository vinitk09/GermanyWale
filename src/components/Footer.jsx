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
import f1 from "../assets/footer.png";

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

            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  Bachelor in Germany{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Masters in Germany
                </Link>
              </li>
              <li>
                <Link
                  to="/universities"
                  className="hover:text-orange-400 transition-colors"
                >
                  PhD in Germany{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/german-language"
                  className="hover:text-orange-400 transition-colors"
                >
                  MBA in Germany{" "}
                </Link>
              </li>
              <li></li>
            </ul>
            {/* <div className="mt-4 flex space-x-4">
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
            </div> */}
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
                  className="hover:text-orange-400 transition-colors"
                >
                  Service in Germany
                </Link>
              </li>
              <li>
                <Link
                  to="/german-language"
                  className="hover:text-orange-400 transition-colors"
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
              <li className="flex items-center hover:text-orange-400 transition-colors cursor-pointer">
                <FaPhoneAlt className="mr-2" />
                <span>Home</span>
              </li>
              <li className="flex items-center hover:text-orange-400 transition-colors cursor-pointer">
                <FaEnvelope className="mr-2" />
                <span>About</span>
              </li>
              <li className="flex items-start hover:text-orange-400 transition-colors cursor-pointer">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>Contact</span>
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

            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{
                  // width: "382.87px",
                  height: "61.89px",
                  width: "264.21px",
                  // margingLeft: "32px",
                  borderRadius: "13.2px ",
                  // border: "0.83px 0px 0px 0px",
                }}
              />
              <div
                className="mt-4 flex space-x-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  style={{
                    width: "124.21px",
                    height: "51.89px",
                    // top: "124.6px",
                    position: "relative",
                    left: "10.33px",
                    borderRadius: "13.2px",
                    backgroundColor: "#DC4E10",
                    fontSize: "20.93px",
                    fontWeight: "600",
                    fontFamily: "Gilroy",
                    color: "#FFFFFF",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <img
            src={f1}
            style={{
              width: "255.8px",
              height: "64.36px",
              objectFit: "cover",
            }}
          />
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
