import React from "react";
import Slider from "react-slick";

// Import images using ES6 import syntax
import Country1 from "../assets/Country1.png";
import Country2 from "../assets/Country2.png";
import Country3 from "../assets/Country3.png";
import Country4 from "../assets/Country4.png";
import Country5 from "../assets/Country5.png";

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

  // Settings for the left sliding row
  const leftSliderSettings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change image every 2 seconds
    arrows: false,
    rtl: true, // Enable right-to-left scrolling for left slider
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
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Global Presence</h2>

      {/* Right Sliding Row */}
      <Slider {...rightSliderSettings}>
        {countryImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <div
              className="w-32 h-32 rounded-full shadow-[6px_6px_32px_rgba(234,125,6,0.5)]"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Left Sliding Row */}
      <Slider {...leftSliderSettings} className="mt-4">
        {countryImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <div
              className="w-32 h-32 rounded-full shadow-[6px_6px_32px_rgba(234,125,6,0.5)]"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlobalPresence;
