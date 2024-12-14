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
        width: "184.91px", // Increased by 10px
        height: "67.03px", // Increased by 10px
        opacity: "1",
      },
    },
    {
      src: hoch,
      alt: "Hoch School",
      styles: {
        width: "188.58px", // Increased by 10px
        height: "47.55px", // Increased by 10px
        opacity: "0.5",
      },
    },
    {
      src: rwthUniversity,
      alt: "RWTH University",
      styles: {
        width: "185.82px", // Increased by 10px
        height: "57.98px", // Increased by 10px
        opacity: "0.7",
      },
    },
    {
      src: universityBerlin,
      alt: "Berlin University",
      styles: {
        width: "126.11px", // Increased by 10px
        height: "267.28px", // Increased by 10px
        opacity: "0.8",
      },
    },
    {
      src: universityBonn,
      alt: "Bonn University",
      styles: {
        width: "149.28px", // Increased by 10px
        height: "64.24px", // Increased by 10px
        opacity: "0.6",
      },
    },
    {
      src: universityHamburg,
      alt: "Hamburg University",
      styles: {
        width: "108.01px", // Increased by 10px
        height: "83px", // Increased by 10px
        opacity: "0.9",
      },
    },
    {
      src: universityHamburgRed,
      alt: "Hamburg University (Red)",
      styles: {
        width: "192.03px", // Increased by 10px
        height: "69.81px", // Increased by 10px
        opacity: "0.8",
      },
    },
    {
      src: universityOfEurope,
      alt: "University of Europe",
      styles: {
        width: "163.05px", // Increased by 10px
        height: "54.86px", // Increased by 10px
        opacity: "1",
      },
    },
    {
      src: universityofstut,
      alt: "University of Stuttgart",
      styles: {
        width: "184.44px", // Increased by 10px
        height: "49.64px", // Increased by 10px
        opacity: "0.6",
      },
    },
    {
      src: universityPaderborn,
      alt: "Paderborn University",
      styles: {
        width: "222.61px", // Increased by 10px
        height: "66.27px", // Increased by 10px
        opacity: "0.7",
      },
    },
  ];

  // Split universities into rows
  const firstRow = universities.slice(0, Math.ceil(universities.length / 2));
  const secondRow = universities.slice(Math.ceil(universities.length / 2));

  return (
    <div className="relative py-8 ">
      {/* Background and Heading */}
      <div className="services-heading-u">
        <span className="big-heading-u">UNIVERSITIES</span>
        <span className="small-heading-u">TOP UNIVERSITIES</span>
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
                    // objectFit: "cover",
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
