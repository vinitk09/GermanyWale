import React from "react";
import "./Universities.css";
import frankfurt from "../assets/University/frankfurt.png";
import hoch from "../assets/University/hoch.png";
import rwthUniversity from "../assets/University/rwthUniversity.png";
import universityBerlin from "../assets/University/universityBerlin.png";
import universityBonn from "../assets/University/universityBonn.png";
import universityHamburg from "../assets/University/universityHamburg.png";
import universityHamburgRed from "../assets/University/universityHamburgRed.png";
import universityOfEurope from "../assets/University/universityOfEurope.png";
import universityofstut from "../assets/University/universityofstut.png";
import universityPaderborn from "../assets/University/universityPaderborn.png";

const Universities = () => {
  const universities = [
    {
      src: frankfurt,
      alt: "Frankfurt University",
      styles: {
        width: "174.91px",
        height: "57.03px",
        opacity: "1",
      },
    },
    {
      src: hoch,
      alt: "Hoch School",
      styles: {
        width: "178.58px",
        height: "37.55px",
        opacity: "0.5",
      },
    },
    {
      src: rwthUniversity,
      alt: "RWTH University",
      styles: {
        width: "175.82px",
        height: "47.98px",
        opacity: "0.7",
      },
    },
    {
      src: universityBerlin,
      alt: "Berlin University",
      styles: {
        width: "116.11px",
        height: "257.28px",
        opacity: "0.8",
      },
    },
    {
      src: universityBonn,
      alt: "Bonn University",
      styles: {
        width: "139.28px",
        height: "54.24px",
        opacity: "0.6",
      },
    },
    {
      src: universityHamburg,
      alt: "Hamburg University",
      styles: {
        width: "98.01px",
        height: "73px",
        opacity: "0.9",
      },
    },
    {
      src: universityHamburgRed,
      alt: "Hamburg University (Red)",
      styles: {
        width: "182.03px",
        height: "59.81px",
        opacity: "0.8",
      },
    },
    {
      src: universityOfEurope,
      alt: "University of Europe",
      styles: {
        width: "153.05px",
        height: "44.86px",
        opacity: "1",
      },
    },
    {
      src: universityofstut,
      alt: "University of Stuttgart",
      styles: {
        width: "174.44px",
        height: "39.64px",
        opacity: "0.6",
      },
    },
    {
      src: universityPaderborn,
      alt: "Paderborn University",
      styles: {
        width: "212.61px",
        height: "56.27px",
        opacity: "0.7",
      },
    },
  ];

  // Split universities into rows
  const firstRow = universities.slice(0, Math.ceil(universities.length / 2));
  const secondRow = universities.slice(Math.ceil(universities.length / 2));

  return (
    <div className="relative py-16 bg-transparent min-h-screen">
      {/* Background and Heading */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
        <h2
          className="text-center select-none font-extrabold text-gray-100/50
          text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[150px]"
          style={{ color: "#FFD9B17A" }}
        >
          UNIVERSITIES
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3
          className="mt-20 text-3xl sm:text-4xl lg:text-5xl"
          style={{ color: "#D63715" }}
        >
          Top Universities Across the Globe
        </h3>
      </div>

      {/* Infinite Carousel */}
      <div className="carousel-container">
        {/* First Row */}
        <div className="carousel-track">
          <div className="carousel-content">
            {firstRow.map((university, index) => (
              <div key={`row1-1-${index}`} className="carousel-item">
                <img
                  src={university.src}
                  alt={university.alt}
                  className="university-image"
                  style={{
                    ...universities.styles,
                  }}
                />
              </div>
            ))}
            {firstRow.map((university, index) => (
              <div key={`row1-2-${index}`} className="carousel-item">
                <img
                  src={university.src}
                  alt={university.alt}
                  className="university-image"
                  style={{
                    ...universities.styles,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="carousel-track reverse">
          <div className="carousel-content">
            {secondRow.map((university, index) => (
              <div key={`row2-1-${index}`} className="carousel-item">
                <img
                  src={university.src}
                  alt={university.alt}
                  className="university-image"
                  style={{
                    ...universities.styles,
                  }}
                />
              </div>
            ))}
            {secondRow.map((university, index) => (
              <div key={`row2-2-${index}`} className="carousel-item">
                <img
                  src={university.src}
                  alt={university.alt}
                  className="university-image"
                  style={{
                    ...universities.styles,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
