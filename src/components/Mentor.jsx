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

const Arrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} ${
        direction === "left" ? "left" : "right-2"
      } bg-orange-500  text-white rounded-full flex items-center justify-center shadow-lg`}
      style={{
        ...style,
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Ensure proper centering
        zIndex: 10, // Ensure it is above other elements
      }}
      onClick={onClick}
    >
      {direction === "left" ? "<" : ">"}
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
    <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-20"></div>
      <div className="flex justify-center -mt-14">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full border-4 border-white object-cover"
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <div className="px-6">
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 underline">Working at</p>
            <img src={companyLogo} alt={company} className="h-6 mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 underline">Studied at</p>
            <img src={universityLogo} alt={university} className="h-6 mt-2" />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="w-full py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-100">
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
  };

  return (
    <div className="relative py-16 bg-transparent min-h-screen">
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
        <h2
          className="text-center select-none font-extrabold text-gray-100/50 text-[150px]"
          style={{ color: "#FFD9B17A" }}
        >
          MENTOR
        </h2>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3
            className="mt-20 text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: "#D63715" }}
          >
            Connect with the Best Mentors
          </h3>
        </div>
        <Slider {...settings}>
          {mentors.map((mentor, index) => (
            <div key={index} className="px-4">
              <MentorCard {...mentor} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mentor;
