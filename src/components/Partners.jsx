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
      }}
    >
      {/* Top Section: Heading and Handshake Image */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between w-full px-8 py-8"
        style={{
          maxWidth: "1287px",
        }}
      >
        {/* Heading */}
        <h2
          className="font-bold text-4xl text-left"
          style={{
            marginBottom: "1rem",
          }}
        >
          OUR PARTNERS
        </h2>

        {/* Handshake Image */}
        <img
          src={handshakeImage}
          alt="Handshake"
          style={{
            maxWidth: "50%",
            height: "auto",
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
          width: "1172.91px",
          height: "146.52px",

          opacity: "0.1px",

          // marginBottom: "0rem",
        }}
      />

      {/* Partner Logos Section */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-8 pb-8"
        style={{
          maxWidth: "1287px",
        }}
      >
        {/* Axis Bank */}
        <img
          src={axisBankLogo}
          alt="Axis Bank"
          style={{
            width: "79.86px",
            height: "79.86px",
          }}
        />
        {/* Flywire */}
        <img
          src={flywireLogo}
          alt="Flywire"
          style={{
            width: "108.16px",
            height: "73.46px",
            objectFit: "contain",
          }}
        />
        {/* RemitOut */}
        <img
          src={remitoutLogo}
          alt="RemitOut"
          style={{
            // width: "112.2px",
            // height: "112.86px",
            objectFit: "contain",
            width: "104.16px",
            height: "73.46px",
            top: "4918.2px",
            left: "426.35px",
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
            height: "83.46px",
            // position: "absolute", // Needed for top and left positioning
            top: "4883.22px", // Adjusted as per requirement
            left: "562.04px", // Adjusted as per requirement
            opacity: 1, // Changed from 0 to make it visible
            objectFit: "contain", // Ensures the image scales properly
          }}
        />
        {/* Commerzbank */}
        <img
          src={commerzbankLogo}
          alt="Commerzbank"
          style={{
            width: "177.57px",
            height: "73.46px",
            objectFit: "contain",
            top: "4916.22px", // Adjusted as per requirement
            left: "698.04px",
          }}
        />
        {/* Bajaj Allianz */}
        <img
          src={bajajAllianzLogo}
          alt="Bajaj Allianz"
          style={{
            width: "246.18px",
            height: "73.46px",
            objectFit: "contain",
            top: "4923.22px", // Adjusted as per requirement
            left: "562.04px",
          }}
        />
      </div>
    </div>
  );
};

export default Partners;
