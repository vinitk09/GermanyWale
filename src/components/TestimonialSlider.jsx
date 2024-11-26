// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import t1 from "../assets/Testimonial/testimonial1.png";
// import t2 from "../assets/Testimonial/testimonial2.png";
// import t11 from "../assets/Testimonial/testimonial11.png";
// import t3 from "../assets/Testimonial/testimonial3.png";
// import t4 from "../assets/Testimonial/testimonial4.png";
// import t5 from "../assets/Testimonial/testimonial5.png";
// import t6 from "../assets/Testimonial/testimonial6.png";
// import t7 from "../assets/Testimonial/testimonial7.png";
// import t8 from "../assets/Testimonial/testimonial8.png";
// import t9 from "../assets/Testimonial/testimonial9.png";
// import t10 from "../assets/Testimonial/testimonial10.png";
// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Chief Technology Officer",
//     description:
//       "Leading innovation in AI and machine learning, Sarah brings over 15 years of experience in transforming technological landscapes.",
//     image: t1,
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Lead Product Designer",
//     description:
//       "With a passion for user-centered design, Michael has shaped the visual identity of numerous successful digital products.",
//     image: t2,
//   },
//   {
//     id: 3,
//     name: "Emma Rodriguez",
//     role: "Senior Software Architect",
//     description:
//       "Emma specializes in building scalable cloud solutions and has led the development of enterprise-level applications.",
//     image: t3,
//   },
//   {
//     id: 4,
//     name: "David Kumar",
//     role: "DevOps Engineer",
//     description:
//       "David excels in streamlining deployment processes and implementing robust CI/CD pipelines for optimal efficiency.",
//     image: t4,
//   },
//   {
//     id: 5,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t5,
//   },
//   {
//     id: 6,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t6,
//   },
//   {
//     id: 7,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t7,
//   },
//   {
//     id: 8,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t8,
//   },
//   {
//     id: 9,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t9,
//   },
//   {
//     id: 10,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t10,
//   },
//   {
//     id: 11,
//     name: "Lisa Wang",
//     role: "UX Research Lead",
//     description:
//       "Lisa's expertise in user research has helped shape intuitive and accessible digital experiences for millions of users.",
//     image: t11,
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const getVisibleCards = () => {
//     const cards = [];
//     const prev =
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
//     const next =
//       currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

//     cards.push(testimonials[prev]);
//     cards.push(testimonials[currentIndex]);
//     cards.push(testimonials[next]);

//     return cards;
//   };

//   return (
//     <div className="relative min-h-screen bg-[#FFFFFF] py-20 px-4">
//       <div className="testimonial-outer-heading">
//         <p className="testimonial-heading">TESTIMONIALS</p>
//         <span className="testimonial-outer-heading-2">
//           WHAT OUR CLIENT SAYS
//         </span>
//       </div>
//       <div className="max-w-7xl mx-auto">
//         <div className="relative flex items-center justify-center min-h-[400px]">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             // style={{
//             //   width: "39.5px",
//             //   height: "39.5px",
//             //   zIndex: "3",
//             //   top: "390px",
//             //   // left: "-00.5px",
//             // }}
//             className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 group prevslide"
//           >
//             <ChevronLeft
//               className="w-6 h-6 "
//               style={{
//                 color: " #FFFFFF",
//               }}
//             />
//           </button>

//           {/* Cards */}
//           <div className="flex items-center justify-center gap-4 px-16">
//             {getVisibleCards().map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className={`transform transition-all duration-300 ${
//                   index === 1
//                     ? "scale-110 z-20 opacity-100"
//                     : "scale-90 opacity-50"
//                 }`}
//               >
//                 <div className="bg-[#FFF8F1] rounded-2xl shadow-xl p-6 w-[300px]">
//                   <div className="flex flex-col items-center">
//                     {/* Profile Image */}
//                     <div className="relative mb-4">
//                       <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-indigo-100">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="text-center">
//                       <h3
//                         className=""
//                         style={{
//                           fontFamily: "Gilroy",
//                           fontSize: "18px",
//                           fontWeight: "700",
//                           lineHeight: "22.28px",
//                           textAlign: "center",
//                           color: "#525252",
//                           margin: "1rem",
//                         }}
//                       >
//                         {testimonial.name}
//                       </h3>
//                       <p
//                         style={{
//                           fontFamily: "Gilroy",
//                           fontSize: "12px",
//                           fontWeight: "700",
//                           lineHeight: "14.4px",
//                           textAlign: "center",
//                           color: "#525252",
//                           margin: "0.2rem",
//                         }}
//                       >
//                         {testimonial.role}
//                       </p>
//                       <p
//                         style={{
//                           fontFamily: "Gilroy",
//                           fontSize: "12px",
//                           fontWeight: "700",
//                           lineHeight: "14.4px",
//                           textAlign: "center",
//                           color: "#525252",
//                           margin: "1rem",
//                         }}
//                       >
//                         {testimonial.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 z-10 p-2 rounded-full transition-all duration-200 group nslide"
//           >
//             <ChevronRight
//               className="w-6 h-6"
//               style={{
//                 color: " #FFFFFF",
//               }}
//             />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                 index === currentIndex ? "bg-orange-600 w-4" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
