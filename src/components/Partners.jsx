import React from "react";
import handshakeImage from "../assets/handshake.png";
import wavePatternImage from "../assets/wave-pattern.png";
import axisBankLogo from "../assets/axis.png";
import flywireLogo from "../assets/flyware.png";
import remitoutLogo from "../assets/remitout.png";
import hdfcCredilaLogo from "../assets/HDFC.png";
import commerzbankLogo from "../assets/commerzanebank.png";
import bajajAllianzLogo from "../assets/bajajalliance.png";

const Partners = () => {
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        background: "#282727",
        color: "#FFFFFF",
        height: "440px",
      }}
    >
      {/* Top Section: Heading and Handshake Image */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full ">
        {/* Heading */}
        <h2
          className=" text-4xl text-center"
          style={{
            // marginBottom: "1rem",
            // marginLeft: "10rem",

            fontFamily: "Gilroy-Bold",
            fontSize: "64px",
            fontHeight: "400",
            lineHeight: "60.95px",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          OUR PARTNERS
        </h2>

        {/* Handshake Image */}
        <img
          src={handshakeImage}
          alt="Handshake"
          style={{
            width: "449px",
            height: "209px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Wave Pattern */}
      <img
        src={wavePatternImage}
        alt="Wave Pattern"
        className="w-full"
        style={{
          height: "156.52px",
        }}
      />

      {/* Partner Logos Section */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-8  "
        style={{
          width: "1200px",
          position: "relative",
          top: "-68.2px",
        }}
      >
        {/* Axis Bank */}
        <img
          src={axisBankLogo}
          alt="Axis Bank"
          style={{
            width: "79.86px",
            height: "79.86px",
            objectFit: "contain",
          }}
        />
        {/* Flywire */}
        <img
          src={flywireLogo}
          alt="Flywire"
          style={{
            position: "relative",
            top: "19px",
            width: "108.16px",
            height: "33.46px",
            objectFit: "contain",
          }}
        />
        {/* RemitOut */}
        <img
          src={remitoutLogo}
          alt="RemitOut"
          style={{
            position: "relative",
            top: "7px",
            width: "104.16px",
            height: "53.46px",

            // gap: 0px;
            // opacity: 0px;
          }}
        />
        {/* HDFC Credila */}
        <img
          src={hdfcCredilaLogo}
          alt="HDFC Credila"
          style={{
            width: "112.2px",
            height: "112.46px",
            position: "relative",
            top: "-22px", // Changed from 0 to make it visible
            objectFit: "contain", // Ensures the image scales properly
          }}
        />
        {/* Commerzbank */}
        <img
          src={commerzbankLogo}
          alt="Commerzbank"
          style={{
            width: "177.57px",
            height: "54.46px",
            objectFit: "contain",
            position: "relative",
            top: "7px",
          }}
        />
        {/* Bajaj Allianz */}
        <img
          src={bajajAllianzLogo}
          alt="Bajaj Allianz"
          style={{
            width: "246.18px",
            height: "33.46px",
            objectFit: "contain",
            position: "relative",
            top: "17px",
            left: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Partners;
