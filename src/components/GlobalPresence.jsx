import React from "react";
import Slider from "react-slick";

// Import images using ES6 import syntax
import Country1 from "../assets/Country1.png";
import Country2 from "../assets/Country2.png";
import Country3 from "../assets/Country3.png";
import Country4 from "../assets/Country4.png";
import Country5 from "../assets/Country5.png";
import "./GlobalPresence.css";

const countryImages = [Country1, Country2, Country3, Country4, Country5];

const GlobalPresence = () => {
  // Settings for the right sliding row
  const rightSliderSettings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change image every 2 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="heading-global-presence">GLOBAL PRESENCE</h2>
      <div className="slider-wrapper flex justify-center">
        <Slider
          {...rightSliderSettings}
          className="w-full max-w-7xl"
          style={{
            width: "100%",
          }}
        >
          {countryImages.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              style={{
                background: "transparent",
              }}
            >
              {/* Outer container for padding */}
              <div
                className="p-8"
                style={{
                  borderRadius: "50%",
                  background: "transparent", // Optional background color
                }}
              >
                {/* Image with shadow */}
                <div
                  className="w-32 h-32 shadow-flag"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GlobalPresence;
