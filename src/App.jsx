import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";
import GlobalPresence from "./components/GlobalPresence";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonials";
import Testimonials from "./components/Testimonials";

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
                  <GlobalPresence />
                  <Testimonials />
                  <Services />
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
