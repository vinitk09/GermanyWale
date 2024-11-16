import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    id: 2,
    name: "John Davis",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    role: "UI Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Faucibus venenatis felis id augue sit cursus pellentesque enim. Nullam eget felis nunc.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Senior Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: 5,
    name: "Emma Taylor",
    role: "UX Researcher",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visibleIndices = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = testimonials.length - 1;
      if (index >= testimonials.length) index = 0;
      visibleIndices.push(index);
    }
    return visibleIndices;
  };

  return (
    <div className="testimonials-container">
      <div className="text-center mb-12 relative">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[120px] font-bold text-gray-100 whitespace-nowrap select-none"
          style={{ zIndex: 0, color: "#FFD9B1" }}
        >
          TESTIMONIALS
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            WHAT OUR CLIENT SAYS
          </h2>
        </div>
      </div>

      <div className="testimonials-slider">
        <button className="nav-button prev" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="testimonials-content">
          <div className="testimonials-track">
            {getVisibleTestimonials().map((index, position) => (
              <div
                key={testimonials[index].id}
                className={`testimonial-card ${position === 1 ? "center" : ""}`}
              >
                <div className="testimonial-inner">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="testimonial-image"
                  />
                  <h3 className="testimonial-name">
                    {testimonials[index].name}
                  </h3>
                  <p className="testimonial-role">{testimonials[index].role}</p>
                  <p className="testimonial-text">{testimonials[index].text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
