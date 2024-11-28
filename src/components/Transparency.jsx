import React from "react";
import tr from "../assets/Transparency/transparency.png";
import "./Transparency.css";
const Transparency = () => {
  return (
    <div className="transaprency-main-container">
      <div className="services-heading-tr">
        <span className="big-heading-tr">TRANSPARENCY</span>
        <span className="small-heading-tr">WHY CHOOSE US</span>
      </div>
      <div className="transparency-img">
        <img src={tr} alt="" />
      </div>
    </div>
  );
};

export default Transparency;
