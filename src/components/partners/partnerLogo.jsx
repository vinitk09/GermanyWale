import React from "react";

const PartnerLogo = ({ logo, name }) => (
  <img
    src={logo}
    alt={name}
    className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform hover:scale-105"
  />
);

export default PartnerLogo;
