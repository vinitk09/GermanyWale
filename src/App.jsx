import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Services from "./components/Services";
import Contact from "./components/Contact";
// import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";
import GlobalPresence from "./components/GlobalPresence";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonials";
import Testimonials from "./components/Testimonials";
// import Partners from "./components/Partners";
import Universities from "./components/Universities";
import Mentor from "./components/Mentor";
import ChooseUs from "./components/ChooseUs";
import "./assets/fonts.css";
import Transparency from "./components/Transparency";
import MentorSection from "./components/mentor/MentorSection";
import Services from "./components/service/Services";
import Partners from "./components/partners/Partners";
import ChooseUs2 from "./components/ChooseUs2";
// import Partners from "./components/partners/Partners";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* <ChooseUs /> */}
                  <ChooseUs2 />
                  <GlobalPresence />
                  <Testimonials />
                  {/* <Services /> */}
                  <Services />
                  {/* <Partners /> */}
                  {/* <Partners /> */}
                  <Partners />
                  <Transparency />
                  <Universities />
                  {/* <Mentor /> */}
                  <MentorSection />
                  {/* <TestimonialSlider /> */}
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
