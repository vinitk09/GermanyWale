import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import m01 from "../assets/Mentor/mentorcard01.png";
import m1 from "../assets/Mentor/mentorcard1.png";
import m02 from "../assets/Mentor/mentorcard02.svg";
import m2 from "../assets/Mentor/mentorcard2.svg";
import m03 from "../assets/Mentor/mentorcard03.svg";
import m3 from "../assets/Mentor/mentorcard3.png";
import m04 from "../assets/Mentor/mentorcard04.svg";
import m4 from "../assets/Mentor/mentorcard4.svg";
import m05 from "../assets/Mentor/mentorcard05.png";
import m5 from "../assets/Mentor/mentorcard5.png";
import m06 from "../assets/Mentor/mentorcard06.png";
import m6 from "../assets/Mentor/mentorcard6.png";
import p1 from "../assets/Mentor/profile1.png";
import p2 from "../assets/Mentor/profile2.png";
import p3 from "../assets/Mentor/profile3.png";
import p4 from "../assets/Mentor/profile4.png";
import p5 from "../assets/Mentor/profile5.png";
import p6 from "../assets/Mentor/profile6.png";
import "./Mentor.css";
const Arrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        zIndex: 10, // Ensure it stays on top
        // position: "absolute",
        // top: "50%",
        // right: "50%",
        // left: "89.1%",
        // left: "0",
        // Center vertically
        // transform: "translateY(-50%)",
        // [direction === "left" ? "left" : "right"]: "10px", // Position based on direction
        width: "40px", // Set width of the background
        height: "40px", // Set height of the background
        background: "linear-gradient(270deg, #FF9422 0%, #D63715 100%)", // Gradient background
        borderRadius: "50%", // Make it circular
        display: "flex", // Center the arrow inside
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)", // Optional: Add shadow for depth
      }}
    >
      <span
        style={{
          fontSize: "20px", // Arrow size
          color: "#FFFFFF", // Arrow color
        }}
      >
        {direction === "left" ? "◄" : "►"}
      </span>
    </div>
  );
};

const MentorCard = ({
  name,
  role,
  company,
  companyLogo,
  university,
  universityLogo,
  image,
}) => {
  return (
    <div
      className="relative max-w-xs rounded-xl shadow-lg overflow-hidden border flex flex-col items-center justify-between"
      style={{
        height: "408px",
        background: "#FFFFFF",
        width: "376px",
      }}
    >
      <div
        className="bg-gradient-to-r from-orange-500 to-red-500 w-full"
        style={{ height: "103px" }}
      ></div>
      <div className="flex justify-center -mt-14">
        <img
          src={image}
          alt={name}
          className="rounded-full border-white object-cover"
          style={{
            // width: "129px",
            height: "129px",
          }}
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2
          className=""
          style={{
            fontFamily: "Gilroy",
            fontWeight: "700",
            fontSize: "24.3px",
            lineHeight: "30.08px",
            color: "#000000",
          }}
        >
          {name}
        </h2>
        <p
          className=""
          style={{
            fontFamily: "Gilroy",
            fontWeight: "600",
            fontSize: "10.8px",
            lineHeight: "13.23px",
            color: "#969696",
          }}
        >
          {role}
        </p>
      </div>
      <div className="">
        <div
          className="flex justify-between items-center space-x-4" // Add spacing between sections
        >
          {/* Working At Section */}
          <div className="flex flex-col items-center">
            <p
              className=""
              style={{
                fontFamily: "Gilroy",
                fontWeight: "500",
                fontSize: "8.71px",
                // lineHeight: "10.57px",
                color: "#969696",
              }}
            >
              Working at
            </p>
            <img
              src={companyLogo}
              alt={company}
              className=""
              style={{
                height: "30px", // Set desired height
                width: "80px", // Set desired width
                objectFit: "contain", // Ensure the image maintains aspect ratio
              }}
            />
          </div>

          {/* Studied At Section */}
          <div className="flex flex-col items-center">
            <p
              className=""
              style={{
                fontFamily: "Gilroy",
                fontWeight: "500",
                fontSize: "8.71px",
                lineHeight: "10.57px",
                color: "#969696",
              }}
            >
              Studied at
            </p>
            <img
              src={universityLogo}
              alt={university}
              className=""
              style={{
                height: "35px", // Different height
                // width: "70px", // Different width
                objectFit: "cover", // Ensure the image fills the container
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="flex justify-center w-full py-4"
        style={{
          borderRadius: "24.15px",
        }}
      >
        <button className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Mentor = () => {
  const mentors = [
    {
      name: "Dheeraj Dey",
      role: "Product Management",
      company: "AVL",
      companyLogo: m1,
      university: "RWTH Aachen University",
      universityLogo: m01,
      image: p1,
    },
    {
      name: "Jane Doe",
      role: "Data Scientist",
      company: "Google",
      companyLogo: m02,
      university: "MIT",
      universityLogo: m2,
      image: p2,
    },
    {
      name: "John Smith",
      role: "Software Engineer",
      company: "Microsoft",
      companyLogo: m03,
      university: "Stanford University",
      universityLogo: m3,
      image: p3,
    },
    {
      name: "Alice Brown",
      role: "AI Researcher",
      company: "OpenAI",
      companyLogo: m04,
      university: "Harvard",
      universityLogo: m4,
      image: p4,
    },
    {
      name: "David Lee",
      role: "UX Designer",
      company: "Facebook",
      companyLogo: m05,
      university: "Berkeley",
      universityLogo: m5,
      image: p5,
    },
    {
      name: "Sara Kim",
      role: "Cloud Architect",
      company: "Amazon",
      companyLogo: m06,
      university: "Oxford",
      universityLogo: m6,
      image: p6,
    },
  ];

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />, // Custom right arrow
    prevArrow: <Arrow direction="left" />, // Custom left arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // centerMode: true, // Optional: Center slides for better spacing
    // centerPadding: "10px",
  };

  return (
    <div className="relative py-16  bg-transparent min-h-screen">
      <div className="services-heading-m">
        <span className="big-heading-m">OUR MENTOR</span>
        <span className="small-heading-m">BEST MENTORS</span>
      </div>
      <div
        className="relative max-w-7xl mx-auto   sm:px-6 lg:px-8"
        style={{
          left: "40px",
        }}
      >
        <Slider {...settings}>
          {mentors.map((mentor, index) => (
            <div key={index} className="">
              <MentorCard {...mentor} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mentor;
