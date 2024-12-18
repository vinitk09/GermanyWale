import React from "react";
import "./ChooseUs2.css";
const ChooseUs2 = () => {
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
        <div className="card-container cont1">
          {/* Front Side */}
          <div className="card-common">
            <span className="card-content">96% Admits from TU9</span>
            <p>
              Admits from TU9 are highly sought after for their rigorous
              academic programs and innovative research opportunities.
            </p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <span className="card-content">96% Admits from TU9</span>
            <p>
              Admits from TU9 are highly sought after for their rigorous
              academic programs and innovative research opportunities.
            </p>{" "}
          </div>

          {/* Small Card */}
          <div className="small-card">
            <span className="icon ri-file-line"></span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-container cont2">
          {/* Front Side */}
          <div className="card-common">
            <span className="card-content">100% Visa Acceptance</span>
            <p>
              Study in Germany with a 100% visa acceptance rate. Unlock a world
              of opportunities with a German education.
            </p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <span className="card-content">100% Visa Acceptance</span>
            <p>
              Study in Germany with a 100% visa acceptance rate. Unlock a world
              of opportunities with a German education.
            </p>{" "}
          </div>

          {/* Small Card */}
          <div className="small-card">
            <span className="icon ri-passport-line"></span>{" "}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-container cont3">
          {/* Front Side */}
          <div className="card-common">
            <span className="card-content">100% Admission Rate</span>
            <p>
              100% college acceptance rate guaranteed. Secure your admission to
              top German universities.
            </p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <span className="card-content">100% Admission Rate</span>
            <p>
              100% college acceptance rate guaranteed. Secure your admission to
              top German universities.
            </p>{" "}
          </div>

          {/* Small Card */}
          <div className="small-card">
            <span className="icon ri-numbers-line"></span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs2;
