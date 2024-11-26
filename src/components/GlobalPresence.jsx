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
      <h2 className="heading-global-presence">Global Presence</h2>

      <div className="slider-wrapper flex justify-center">
        <Slider {...rightSliderSettings} className="w-full max-w-7xl ">
          {countryImages.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center "
              style={{
                background: "transparent",
              }}
            >
              <div
                className="w-40 h-40 shadow-flag"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  overflow: "hidden", // Ensures only the circular shape is visible
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// const GlobalPresence = () => {
//   return (
//     <div className="slider-main-container">
//       <div className="heading-global-presence">GLOBAL PRESENCE</div>
//       <div className="slider">
//         <div className="slide img1"></div>
//         <div className="slide img2"></div>
//         <div className="slide img3"></div>
//         <div className="slide img4"></div>
//         <div className="slide img5"></div>

//         {/* Duplicate Slide */}
//         <div className="slide img1"></div>
//         <div className="slide img2"></div>
//         <div className="slide img3"></div>
//         <div className="slide img4"></div>
//         <div className="slide img5"></div>
//       </div>
//     </div>
//   );
// };
export default GlobalPresence;
