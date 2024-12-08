import React from "react";
import "./ChooseUs.css";
import "remixicon/fonts/remixicon.css"; // Import Remix icons

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <div className="choose-us-heading-outer-container">
        <div className="choose-us-heading-1">Why Choose Us</div>
        <div className="choose-us-heading-2">
          Endless Possibilities Begin Here
        </div>
      </div>
      <div className="choose-us-card-section">
        {/* Card 1 */}
        <div className="card-container">
          <div className="card1 card-common">
            <span className="card-content">96% Admits from TU9</span>
            <p>
              Admits from TU9, are highly sought after for their rigorous
              academic programs and innovative research opportunities.
            </p>
          </div>
          <div className="small-card">
            <span className="icon ri-file-line"></span> {/* Icon for Card 1 */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-container">
          <div className="card2 card-common">
            <span className="card-content">100% Visa Acceptance</span>
            <p>
              Study in Germany with a 100% visa acceptance rate. Unlock a world
              of opportunities with a German education.
            </p>
          </div>
          <div className="small-card">
            <span className="icon ri-passport-line"></span>{" "}
            {/* Icon for Card 2 */}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-container">
          <div className="card3 card-common">
            <span className="card-content">100% Admission Rate</span>
            <p>
              100% college acceptance rate guaranteed. Secure your admission to
              top German universities.
            </p>
          </div>
          <div className="small-card">
            <span className="icon ri-numbers-line"></span>{" "}
            {/* Icon for Card 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
