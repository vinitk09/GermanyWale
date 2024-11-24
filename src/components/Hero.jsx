import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSectionImage from "../assets/heroSection.jpg";
import Tesla from "../assets/Tesla.png";
import Audi from "../assets/Audi.png";
import BMW from "../assets/BMW.png";
import Lufthansa from "../assets/Lufthansa.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="relative inset-0 bg-blue-50 h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroSectionImage})`,
        filter: "brightness(0.9)",
      }}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 custom-left-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1
            style={{
              fontFamily: "Denton Test",
              fontSize: "72px",
              fontWeight: "700",
              lineHeight: "90px",
              letterSpacing: "0.01em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
            className="text-gray-900 sm:text-5xl md:text-6xl responsive-text"
          >
            <span className="block">Empowering Dreams</span>
            <span className="block">of Studying in</span>
            <span className="block gradient-text">Germany</span>
          </h1>

          <div className="mt-4">
            <Link
              to="/contact"
              style={{
                background: "linear-gradient(90deg, #D63715 0%, #FF9422 100%)",
                width: "240.13px", // Width
                height: "47.52px", // Height

                borderRadius: "11.09px", // Radius
              }}
              className="inline-flex items-center justify-center border border-transparent text-base font-medium text-white hover:bg-blue-700 md:text-lg"
            >
              Call for free Counselling
            </Link>

            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our students work at global offices of
            </p>
          </div>
          <div className="flex items-left gap-2 py-0">
            {[Tesla, Audi, Lufthansa, BMW].map((logo, index) => (
              <div
                key={index}
                className="relative w-20 h-20 bg-white/10 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  src={logo}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
