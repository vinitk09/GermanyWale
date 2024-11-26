import React from "react";
import "./ChooseUs.css";
import img1 from "../assets/ChooseUs/image 213.png";
import img2 from "../assets/ChooseUs/image 208.png";
import img3 from "../assets/ChooseUs/image 209.png";
import img4 from "../assets/ChooseUs/image 210.png";
import img5 from "../assets/ChooseUs/image 211.png";
import img6 from "../assets/ChooseUs/image 212.png";

// const ChooseUs = () => {
//   return (
//     <div className="chooseUSmaincontainer">
//       <div className="chooseheading">
//         <h1>Why Choose Us</h1>
//         <h2>Endless Possibilities Begin Here</h2>
//       </div>

//       <div className="imagecontainer">
//         <div className="image1">
//           <div className="image-wrapper img1-container">
//             <img src={img1} alt="Image 1" className="img1" />
//             <div className="text-overlay">
//               <h3>Experience Excellence</h3>
//             </div>
//           </div>
//           <div className="image-wrapper img2-container">
//             <img src={img2} alt="Image 2" className="img2" />
//             <div className="text-overlay">
//               <h3>Innovation Hub</h3>
//             </div>
//           </div>
//         </div>

//         <div className="image2">
//           <div className="image-wrapper img3-container">
//             <img src={img3} alt="Image 3" className="img3" />
//             <div className="text-overlay">
//               <h3>Global Perspective</h3>
//             </div>
//           </div>
//         </div>

//         <div className="image3">
//           <div className="image-wrapper img4-container">
//             <img src={img4} alt="Image 4" className="img4" />
//             <div className="text-overlay">
//               <h3>Creative Growth</h3>
//             </div>
//           </div>
//           <div className="image-wrapper img5-container">
//             <img src={img5} alt="Image 5" className="img5" />
//             <div className="text-overlay">
//               <h3>Future Leaders</h3>
//             </div>
//           </div>
//         </div>

//         <div className="image4">
//           <div className="image-wrapper img6-container">
//             <img src={img6} alt="Image 6" className="img6" />
//             <div className="text-overlay">
//               <h3>Limitless Learning</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
        <div className="card1 card-common">
          <span className="card1-span1">96%</span>
          <span className="card1-span2">Admits from TU9</span>
        </div>
        <div className="card2 card-common">
          <span className="card2-span1">100%</span>
          <span className="card2-span2">Visa Acceptance</span>
        </div>
        <div className="card3 card-common">
          <span className="card3-span1">100%</span>
          <span className="card3-span2">Admission Rate</span>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
