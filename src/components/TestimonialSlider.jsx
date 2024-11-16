import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mueller',
    university: 'Technical University of Munich',
    course: 'Masters in Computer Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    quote: 'Germany Wale made my dream of studying in Germany a reality. Their guidance throughout the application process was invaluable.',
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    university: 'University of Stuttgart',
    course: 'Masters in Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote: 'From SOP writing to visa assistance, their comprehensive support made my journey smooth and successful.',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    university: 'Ludwig Maximilian University',
    course: 'Masters in Business Administration',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    quote: 'The German language courses and cultural preparation helped me adapt quickly to life in Germany.',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Student Success Stories
        </h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                </div>
                <div className="p-8">
                  <div className="text-xl font-semibold text-blue-600">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="mt-2 text-gray-600">
                    {testimonials[currentIndex].university}
                  </div>
                  <div className="text-gray-500">
                    {testimonials[currentIndex].course}
                  </div>
                  <p className="mt-4 text-gray-600 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4">
            <button
              onClick={handlePrevious}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <FaChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4">
            <button
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <FaChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;