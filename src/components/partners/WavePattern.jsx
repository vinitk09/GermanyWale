import React from "react";
import w1 from "../../assets/wave-pattern.png";

const WavePattern = () => (
  <div className="w-full overflow-hidden flex justify-center items-center">
    <img
      src={w1}
      alt="Wave Pattern"
      className="object-cover w-full h-16 md:h-24"
    />
  </div>
);

export default WavePattern;
