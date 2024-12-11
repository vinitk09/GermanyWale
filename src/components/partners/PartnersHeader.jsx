import React from "react";
import hd from "../../assets/handshake.png";
import "./partner.css";
const PartnersHeader = () => (
  <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4">
    <h2
      className="  partners-header tracking-tight p-header"
      style={{
        background: "linear-gradient(90deg, #EA7D06 0%, #D63715 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      OUR PARTNERS
    </h2>
    <p
      className=" text-center p-header-des"
      style={{
        fontFamily: "Gilroy-SemiBold",
        fontWeight: 400,
        lineHeight: "1.5",
        textAlign: "center",
        color: "#E0E0E0",
        maxWidth: "900px",
      }}
    >
      We have collaborate with a diverse array of partners, each bringing unique
      expertise and value to make journey of our student hassle free
    </p>
  </div>
);

export default PartnersHeader;
