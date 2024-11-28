import React from 'react';
import Slider from 'react-slick';
import MentorCard from './MentorCard';
import SliderArrow from './SliderArrow';
import { mentors } from './mentorData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MentorSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Heading */}
      <div className=""
      >
        <h2 className="m1-heading">
          OUR MENTOR
        </h2>
        <h3 className="m2-heading"
        >
          BEST MENTORS
        </h3>
      </div>

      {/* Slider Container with padding for arrows */}
      <div className="max-w-7xl mx-auto relative px-4 md:px-8">
        <Slider {...settings}>
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MentorSection;