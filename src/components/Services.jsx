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

const services = [
  {
    title: "Free Counselling",
    description:
      "Get Free Expert Guidance on your Study Abroad dream and shortlist courses from a plethora of 500+ Universities and 15,000+ courses.",
    image: ServicesImage1,
    link: "/services/university",
  },
  {
    title: "University Shortlisting",
    description:
      "50% Applications fail due to wrong choice of university. Apply to multiple institutions in a single application with numerous fee waivers and save your time.",
    image: ServicesImage2,
    link: "/services/visa",
  },
  {
    title: "Statement of Purpose",
    description:
      "Get an Education Loan without Collateral within 3-5 working days at competitive Interest Rates and clear the financial hurdle.",
    image: ServicesImage23,
    link: "/services/language",
  },
  {
    title: "Curriculum Vitae",
    description:
      "Unlock your potential with Germanywale - CV enhancement experts for successful university applications.",
    image: ServicesImage4,
    link: "/services/language",
  },
  {
    title: "Letter of Recommendation",
    description: "“Good” to “Great” - Letter of recommendation.",
    image: ServicesImage5,
    link: "/services/language",
  },
  {
    title: "University Application",
    description:
      "Send your money abroad securely for University Fees, GIC, Living Expenses or a Blocked Account at the Lowest Exchange Rates and fastest processing.",
    image: ServicesImage6,
    link: "/services/language",
  },
  {
    title: "Visa Assistance",
    description:
      "With our Visa Expert, fulfil the Visa application requirements and apply for the Visa. We have a success rate of more than 95.5%.",
    image: ServicesImage7,
    link: "/services/language",
  },
  {
    title: "Accommodation and Travel Assistance",
    description:
      "Struggling to find accommodation before moving to a new country? Not anymore. Book your secure accommodation online and stay stress-free.",
    image: ServicesImage8,
    link: "/services/language",
  },
];

const Services = () => {
  return (
    <div className="py-16" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[120px] font-bold text-gray-100 whitespace-nowrap select-none"
            style={{ zIndex: 0, color: "#FFD9B1" }}
          >
            SERVICES
          </div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3
                className="mt-20 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 relative z-10"
                style={{
                  color: "#D63715",
                }}
              >
                What Our Clients Say
              </h3>
              {/* <div className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
            helo
          </div> */}
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg object-cover w-full h-[400px] bg-transparent"
                  style={{
                    width: "400px",
                    height: "400px",
                  }}
                />
              </div>

              <div className="lg:w-1/2 space-y-4">
                <h3
                  className="text-2xl font-bold text-gray-900"
                  style={{
                    fontFamily: "Gilroy-Light",
                    fontSize: "64px",
                    fontWeight: "bold",
                    color: "#101828",
                    lineHeight: "60.95px",
                    height: "61px",
                    // width: "855px",
                    height:
                      service.title === "University Shortlisting"
                        ? "122px"
                        : "61px",
                    height:
                      service.title === "Letter of Recommendation"
                        ? "163.54px"
                        : "61px",
                    height:
                      service.title === "University Application" ? "" : "",
                    height:
                      service.title === "Accommodation and Travel Assistance"
                        ? ""
                        : "",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg text-gray-600"
                  style={{
                    // marginRight: "100px",
                    height: "103px",
                    fontFamily: "Gilroy-Light",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "29px",
                    width: "450px",
                    marginBottom: "1rem",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  style={{
                    background:
                      "linear-gradient(92deg, #FF9422 6.81%, #D63715 90.38%)",
                  }}
                >
                  Know More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
