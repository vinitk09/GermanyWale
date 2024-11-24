import { motion, transform } from "framer-motion";
import { useState } from "react";

const TestimonialCard = ({ testimonial, isMiddle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Back Portion Styles
  const cardBackStyle = {
    width: "372px", // Back portion width
    height: "382px", // Back portion height
    top: "-20px", // Back portion top position
    bottom: "9px",
    // left: "106.11px", // Back portion left position
    gap: "0px", // Gap
    opacity: 1, // Ensure it is visible
    transform: "rotate(6.35deg)", // Apply the angle
    borderRadius: "80px 80px 20px 100px", // Customize the border-radius
    background: "linear-gradient(180deg, #FF9422 0%, #D63715 100%)", // Gradient background
    position: "absolute", // Positioning to overlap with the front
  };

  // Front Portion Styles
  const cardFrontStyle = {
    width: "400px", // Front portion width
    height: "352px", // Front portion height
    borderRadius: "20px 130px 20px 180px ", // Border-radius
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Flip logic
    background: "#FFFFFF", // Front background
    position: "absolute",
    bottom: "12px",
    left: "10px",
    transform: "rotate(6.35deg)", // Apply the angle

    // margin: "10px",
  };

  const cardContainerStyle = {
    perspective: "1000px", // 3D effect for flip
    position: "relative", // Container to stack front and back
    width: "302px",
    height: "342px",
  };

  return (
    <motion.div
      style={cardContainerStyle}
      className="cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Back Portion */}
      <motion.div
        style={cardBackStyle}
        className="shadow-xl transition-all duration-500"
      ></motion.div>

      {/* Front Portion */}
      <motion.div
        style={cardFrontStyle}
        className="shadow-xl p-6 transform-gpu transition-all duration-500"
      >
        <div className="flex flex-col items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {testimonial.role}
          </p>
          <p className="text-sm sm:text-base text-indigo-600 font-medium">
            {testimonial.company}
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-700 text-center line-clamp-4">
            "{testimonial.text}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
