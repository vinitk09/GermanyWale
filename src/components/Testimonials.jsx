// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TestimonialCard from "./TestimonialCard";

// const testimonials = [
//   {
//     id: 1,
//     name: "Hannah Schmitt",
//     role: "Lead Designer",
//     image: "https://randomuser.me/api/portraits/women/75.jpg",
//     text: "Working with this team has been an absolute pleasure. Their attention to detail and creative solutions have exceeded our expectations.",
//     company: "Design Co.",
//   },
//   {
//     id: 2,
//     name: "Saksham Jethwa",
//     role: "Technical Lead",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     text: "The level of professionalism and technical expertise demonstrated by the team is outstanding. They delivered exactly what we needed.",
//     company: "Tech Solutions",
//   },
//   {
//     id: 3,
//     name: "Mia Roberts",
//     role: "Project Manager",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     text: "I've worked with many teams, but this one stands out for their commitment to excellence and ability to meet deadlines consistently.",
//     company: "Project Hub",
//   },
//   {
//     id: 4,
//     name: "John Smith",
//     role: "Marketing Director",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     text: "The impact on our marketing campaigns has been remarkable. Their innovative approach helped us reach new audiences effectively.",
//     company: "Marketing Pro",
//   },
//   {
//     id: 5,
//     name: "Emma Wilson",
//     role: "UX Researcher",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     text: "The user-centric approach and attention to detail in their work has significantly improved our product's user experience.",
//     company: "UX Studio",
//   },
//   {
//     id: 6,
//     name: "Alex Chen",
//     role: "Product Owner",
//     image: "https://randomuser.me/api/portraits/men/22.jpg",
//     text: "Their ability to translate complex requirements into elegant solutions has made them an invaluable partner in our product development.",
//     company: "Tech Innovate",
//   },
// ];
// const Arrow = ({ direction, onClick, disabled }) => {
//   const baseClasses =
//     "absolute top-[455.11px] z-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300";
//   const positionClasses = direction === "left" ? "left-[50px]" : "right-[50px]";
//   const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
//   const style = {
//     width: "23.29px",
//     height: "23.29px",
//     padding: "3.88px",
//     opacity: disabled ? "0.5" : "1",
//     backgroundColor: "#FFFFFF",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//   };

//   return (
//     <motion.div
//       className={`${baseClasses} ${positionClasses} ${disabledClasses}`}
//       onClick={!disabled ? onClick : undefined}
//       style={style}
//     >
//       {direction === "left" ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="23.29px"
//           height="23.29px"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           style={{ padding: "3.88px" }}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="23.29px"
//           height="23.29px"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           style={{ padding: "3.88px" }}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       )}
//     </motion.div>
//   );
// };

// const Testimonials = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;
//   const pageCount = Math.ceil(testimonials.length / itemsPerPage);

//   const getCurrentPageTestimonials = () => {
//     const start = currentPage * itemsPerPage;
//     return testimonials.slice(start, start + itemsPerPage);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < pageCount - 1) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       {/* Responsive Background Text */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
//         <h2
//           className="text-center select-none text-gray-100/50 font-extrabold
//           text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[150px]
//           leading-none sm:leading-none md:leading-none lg:leading-none xl:leading-none
//           mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
//           style={{
//             color: "#FFD9B17A",
//           }}
//         >
//           TESTIMONIALS
//         </h2>
//       </div>

//       {/* Main Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h3
//             className="mt-20 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 relative z-10"
//             style={{
//               color: "#D63715",
//             }}
//           >
//             What Our Clients Say
//           </h3>
//           {/* <div className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
//             helo
//           </div> */}
//         </div>

//         {/* Navigation Arrows */}
//         <Arrow
//           direction="left"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         />
//         <Arrow
//           direction="right"
//           onClick={handleNext}
//           disabled={currentPage === pageCount - 1}
//         />

//         {/* Testimonials Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPage}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             {getCurrentPageTestimonials().map((testimonial, index) => (
//               <TestimonialCard
//                 key={testimonial.id}
//                 testimonial={testimonial}
//                 isMiddle={index === 1}
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* Pagination Dots */}
//         <div className="flex justify-center items-center gap-2 mt-8">
//           {Array.from({ length: pageCount }).map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setCurrentPage(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentPage ? "bg-indigo-600" : "bg-gray-300"
//               }`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import t1 from "../assets/Testimonial/testimonial1.png";
import t2 from "../assets/Testimonial/testimonial2.png";
import t3 from "../assets/Testimonial/testimonial3.png";

import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="maincontainer">
      <div className="heading">
        <h2>Testimonial</h2>
        <h5>What our client says</h5>
      </div>

      <div className="card-section">
        <div class="circle-arrow left-arrow">
          <span class="arrow">&lt;</span>
        </div>
        {/* 1st Card */}
        <div className="cards">
          <div className="back-card"></div>
          <div className="front-card"></div>
          <div className="card-details">
            <div className="card-image">
              <img src={t1} alt="Person 1" />
            </div>
            <div className="card-name">John Doe</div>
            <div className="card-designation">Lead designer</div>
            <div className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quia consequuntur aspernatur id, temporibus adipisci natus aperiam
              accusamus ipsum reprehenderit nobis iure, impedit laboriosam
              illum, iste eligendi nostrum expedita explicabo!
            </div>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="cards">
          <div className="back-card bcm"></div>
          <div className="front-card fcm"></div>
          <div className="card-details">
            <div className="card-image">
              <img src={t2} alt="Person 1" />
            </div>
            <div className="card-name cnm">Hannah Schmitt</div>
            <div className="card-designation cdm">Lead designer</div>
            <div className="card-description cddm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quia consequuntur aspernatur id, temporibus adipisci natus aperiam
              accusamus ipsum reprehenderit nobis iure, impedit laboriosam
              illum, iste eligendi nostrum expedita explicabo!
            </div>
          </div>
        </div>

        {/* 3rd Card */}
        <div className="cards">
          <div className="back-card bcr"></div>
          <div className="front-card fcr"></div>
          <div className="card-details">
            <div className="card-image">
              <img src={t3} alt="Person 1" />
            </div>
            <div className="card-name cnr">John Doe</div>
            <div className="card-designation cdr">Lead designer</div>
            <div className="card-description cddr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quia consequuntur aspernatur id, temporibus adipisci natus aperiam
              accusamus ipsum reprehenderit nobis iure, impedit laboriosam
              illum, iste eligendi nostrum expedita explicabo!
            </div>
          </div>
        </div>
        <div class="circle-arrow right-arrow">
          <span class="arrow">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
