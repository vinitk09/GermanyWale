import React from "react";
import PartnersHeader from "./PartnersHeader";
import WavePattern from "./WavePattern";
import PartnerLogo from "./partnerLogo";
import a from "../../assets/axis.png";
import tw from "../../assets/partner/topWave.png";
import dw from "../../assets/partner/downWave.png";
import p1 from "../../assets/partner/p1.png";
import p2 from "../../assets/partner/p2.png";
import p3 from "../../assets/partner/p3.png";
import p4 from "../../assets/partner/p4.png";
import p5 from "../../assets/partner/p5.png";
import p6 from "../../assets/partner/p6.png";
import { SiPlaystation5 } from "react-icons/si";

const partners = [
  {
    name: "Axis Bank",
    logo: p1,
  },
  {
    name: "Flywire",
    logo: p2,
  },
  {
    name: "RemitOut",
    logo: p3,
  },
  {
    name: "HDFC Credila",
    logo: p4,
  },
  {
    name: "Commerzbank",
    logo: p5,
  },
  {
    name: "Bajaj Allianz",
    logo: p6,
  },
];

const Partners = () => {
  return (
    <section
      className="text-white "
      style={{
        background: "#000000",
      }}
    >
      {/* <WavePattern /> */}
      <div
        className="w-full"
        style={{
          position: "relative",
          // top: "50px",
        }}
      >
        <img
          src={tw}
          alt="Wave Pattern"
          className="object-cover w-full h-16 "
        />
      </div>
      <div
        className="container mx-auto px-4"
        style={{
          position: "relative",
          zIndex: "10",
        }}
      >
        <PartnersHeader />

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center mt-8 md:mt-12 lg:mt-16">
            {partners.map((partner) => (
              <div key={partner.name} className="w-full flex justify-center">
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full flex"
        style={{
          position: "relative",
          top: "-10px",
        }}
      >
        <img
          src={dw}
          alt="Wave Pattern"
          className="object-cover w-full h-16 "
        />
      </div>
    </section>
  );
};

export default Partners;
