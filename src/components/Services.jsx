import { Link } from "react-router-dom";
import ServicesImage1 from "../assets/ServicesImage1.png";
import ServicesImage2 from "../assets/ServicesImage2.png";
import ServicesImage23 from "../assets/ServicesImage23.png";
import ServicesImage4 from "../assets/ServicesImage4.png";
import ServicesImage5 from "../assets/ServicesImage5.png";
import ServicesImage6 from "../assets/ServicesImage6.png";
import ServicesImage7 from "../assets/ServicesImage7.png";
import ServicesImage8 from "../assets/ServicesImage8.png";
import { FaArrowRight } from "react-icons/fa";
import "./Services.css";

// const services = [
//   {
//     title: "Free Counselling",
//     description:
//       "Get Free Expert Guidance on your Study Abroad dream and shortlist courses from a plethora of 500+ Universities and 15,000+ courses.",
//     image: ServicesImage1,
//     link: "/services/university",
//   },
//   {
//     title: "University Shortlisting",
//     description:
//       "50% Applications fail due to wrong choice of university. Apply to multiple institutions in a single application with numerous fee waivers and save your time.",
//     image: ServicesImage2,
//     link: "/services/visa",
//   },
//   {
//     title: "Statement of Purpose",
//     description:
//       "Get an Education Loan without Collateral within 3-5 working days at competitive Interest Rates and clear the financial hurdle.",
//     image: ServicesImage23,
//     link: "/services/language",
//   },
//   {
//     title: "Curriculum Vitae",
//     description:
//       "Unlock your potential with Germanywale - CV enhancement experts for successful university applications.",
//     image: ServicesImage4,
//     link: "/services/language",
//   },
//   {
//     title: "Letter of Recommendation",
//     description: "“Good” to “Great” - Letter of recommendation.",
//     image: ServicesImage5,
//     link: "/services/language",
//   },
//   {
//     title: "University Application",
//     description:
//       "Send your money abroad securely for University Fees, GIC, Living Expenses or a Blocked Account at the Lowest Exchange Rates and fastest processing.",
//     image: ServicesImage6,
//     link: "/services/language",
//   },
//   {
//     title: "Visa Assistance",
//     description:
//       "With our Visa Expert, fulfil the Visa application requirements and apply for the Visa. We have a success rate of more than 95.5%.",
//     image: ServicesImage7,
//     link: "/services/language",
//   },
//   {
//     title: "Accommodation and Travel Assistance",
//     description:
//       "Struggling to find accommodation before moving to a new country? Not anymore. Book your secure accommodation online and stay stress-free.",
//     image: ServicesImage8,
//     link: "/services/language",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="py-16" style={{ background: "#FFFFFF" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="services-heading">
//           <span className="big-heading">SERVICES</span>
//           <span className="small-heading">WHAT WE DO</span>
//         </div>

//         <div className="space-y-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//               } gap-8 items-center`}
//             >
//               <div className="lg:w-1/2">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="rounded-lg object-cover w-full h-[400px] bg-transparent"
//                   style={{
//                     width: "400px",
//                     height: "400px",
//                   }}
//                 />
//               </div>

//               <div className="lg:w-1/2 space-y-4">
//                 <h3
//                   className="text-2xl font-bold text-gray-900"
//                   style={{
//                     fontFamily: "Gilroy-Light",
//                     fontSize: "64px",
//                     fontWeight: "bold",
//                     color: "#101828",
//                     lineHeight: "60.95px",
//                     height: "61px",
//                     // width: "855px",
//                     height:
//                       service.title === "University Shortlisting"
//                         ? "122px"
//                         : "61px",
//                     height:
//                       service.title === "Letter of Recommendation"
//                         ? "163.54px"
//                         : "61px",
//                     height:
//                       service.title === "University Application" ? "" : "",
//                     height:
//                       service.title === "Accommodation and Travel Assistance"
//                         ? ""
//                         : "",
//                   }}
//                 >
//                   {service.title}
//                 </h3>
//                 <p
//                   className="text-lg text-gray-600"
//                   style={{
//                     fontFamily: " Gilroy-Light",
//                     fontSize: "20px",
//                     fontWeight: "400",
//                     lineHeight: "29px",
//                     textAlign: "left",
//                     textUnderlinePosition: "from-font",
//                     // text-decoration-skipink:"none
//                   }}
//                 >
//                   {service.description}
//                 </p>
// <Link
//   to={service.link}
//   className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//   style={{
//     background:
//       "linear-gradient(92deg, #FF9422 6.81%, #D63715 90.38%)",
//   }}
// >
//   Know More
//   <FaArrowRight className="ml-2" />
// </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Services = () => {
  return (
    <div className="services-outer-main-container">
      <div className="services-heading">
        <span className="big-heading">SERVICES</span>
        <span className="small-heading">WHAT WE DO</span>
      </div>
      <div className="main-content-divs">
        <div className="div1 common-div">
          <div className="img-div-1 simg1">
            <img src={ServicesImage1} alt="" />
          </div>
          <div className="img-details-div-1 simgd1">
            <span className="img-details-div-1-heading">Free Counselling</span>
            <span className="img-details-div-1-description">
              Get Free Expert Guidance on your Study Abroad dream and shortlist
              courses from a plethora of 500+ Universities and 15,000+ courses.
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="div1 div2 common-div">
          <div className="img-details-div-1 sim2 simgd2">
            <span className="img-details-div-1-heading ">
              University Shortlisting
            </span>
            <span className="img-details-div-1-description sd2">
              50% Applications fail due to wrong choice of university. Apply to
              multiple institutions in a single application with numerous fee
              waivers and save your time
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="img-div-1 simg2">
            <img src={ServicesImage2} alt="" />
          </div>
        </div>

        <div className="div1 div3 common-div">
          <div className="img-div-1 simg3">
            <img src={ServicesImage23} alt="" />
          </div>
          <div className="img-details-div-1 simgd3">
            <span className="img-details-div-1-heading">
              Statement of Purpose
            </span>
            <span className="img-details-div-1-description">
              Get an Education Loan without Collateral within 3-5 working days
              at competetive Interest Rates and clear the financial hurdle.
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="div1 div4 common-div">
          <div className="img-details-div-1 simgd4">
            <span className="img-details-div-1-heading">Curriculum Vitae</span>
            <span className="img-details-div-1-description">
              Unlock your potential with Germanywale - CV enhancement experts
              for successful university applications
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="img-div-1 simg4">
            <img src={ServicesImage4} alt="" />
          </div>
        </div>

        <div className="div1 div5 common-div">
          <div className="img-div-1 simg5">
            <img src={ServicesImage5} alt="" />
          </div>
          <div className="img-details-div-1 simgd5">
            <span className="img-details-div-1-heading">
              Letter of Recommendation
            </span>
            <span className="img-details-div-1-description">
              "Good" to "Great" - Letter of recommendation
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="div1 div6 common-div">
          <div className="img-details-div-1 simgd6">
            <span className="img-details-div-1-heading">
              University Application
            </span>
            <span className="img-details-div-1-description">
              Send your money abroad securely for University Fees, GIC, LIVING
              Expenses or a Blocked Account at the lowest Exchange Rates and
              fastest processing.
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="img-div-1 simg6">
            <img src={ServicesImage6} alt="" />
          </div>
        </div>
        <div className="div1 div7 common-div">
          <div className="img-div-1 simg7">
            <img src={ServicesImage7} alt="" />
          </div>
          <div className="img-details-div-1 simgd7">
            <span className="img-details-div-1-heading">Visa Assistance</span>
            <span className="img-details-div-1-description">
              With our Visa Expert, fulfil the Visa application requirements and
              apply for the Visa. We have a success rate of more than 95.5%
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Div 8 */}
        {/* Div 8 */}
        {/* Div 8 */}
        {/* Div 8 */}
        {/* Div 8 */}
        {/* Div 8 */}
        {/* Div 8 */}

        <div className="div1 div8 common-div">
          <div className="img-details-div-1 simgd8">
            <span className="img-details-div-1-heading">
              Accomodation and travel assistance
            </span>
            <span className="img-details-div-1-description imd8">
              Struggling to find accommodation before moving to a new
              country?Not anymore. Book your secure accommodation online and
              stay stress-free.
            </span>

            <Link
              // to={service.link}
              className="inline-flex items-center px-6 py-3 text-white  rounded-lg  transition-colors button-know-more"
            >
              Know More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="img-div-1 simg8 ">
            <img src={ServicesImage8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
