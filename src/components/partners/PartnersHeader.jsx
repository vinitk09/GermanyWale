import React from "react";
import hd from "../../assets/handshake.png";

const PartnersHeader = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-16">
    <h2
      className="text-4xl md:text-5xl lg:text-6xl partners-header tracking-tight"
      style={{
        fontFamily: "Gilroy-Bold",
        fontSize: "64px",
        fontWeight: 400,
        lineHeight: "60.95px",
        letterSpacing: "-0.02em",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      OUR PARTNERS
    </h2>

    <img
      src={hd}
      alt="Handshake"
      className=""
      style={{
        width: "478.97px",
        height: "205.11px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  </div>
);

export default PartnersHeader;
