import React from "react";
import handshakeImage from "../assets/handshake.png";
import wavePatternImage from "../assets/wave-pattern.png";
import axisBankLogo from "../assets/axis.png";
import flywireLogo from "../assets/flyware.png";
import remitoutLogo from "../assets/remitout.png";
import hdfcCredilaLogo from "../assets/HDFC.png";
import commerzbankLogo from "../assets/commerzanebank.png";
import bajajAllianzLogo from "../assets/bajajalliance.png";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners-container">
      {/* Top Section: Heading and Handshake Image */}
      <div className="partners-header">
        {/* Heading */}
        <h2 className="partners-title">OUR PARTNERS</h2>

        {/* Handshake Image */}
        <img src={handshakeImage} alt="Handshake" className="handshake-image" />
      </div>

      {/* Wave Pattern */}
      <img src={wavePatternImage} alt="Wave Pattern" className="wave-pattern" />

      {/* Partner Logos Section */}
      <div className="partners-logos">
        {/* Axis Bank */}
        <img src={axisBankLogo} alt="Axis Bank" className="partner-logo" />
        {/* Flywire */}
        <img src={flywireLogo} alt="Flywire" className="partner-logo" />
        {/* RemitOut */}
        <img src={remitoutLogo} alt="RemitOut" className="partner-logo" />
        {/* HDFC Credila */}
        <img
          src={hdfcCredilaLogo}
          alt="HDFC Credila"
          className="partner-logo"
        />
        {/* Commerzbank */}
        <img src={commerzbankLogo} alt="Commerzbank" className="partner-logo" />
        {/* Bajaj Allianz */}
        <img
          src={bajajAllianzLogo}
          alt="Bajaj Allianz"
          className="partner-logo"
        />
      </div>
    </div>
  );
};

export default Partners;
