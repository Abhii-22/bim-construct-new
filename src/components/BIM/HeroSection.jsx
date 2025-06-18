import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Innovative Interior & Exterior Design Solutions",
    description:
      "Transform your spaces with our cutting-edge design solutions that blend aesthetics with functionality.",
  },
  {
    title: "Expert BIM Modeling & Visualization",
    description:
      "Experience your design before construction with our detailed 3D models and immersive visualizations.",
  },
  {
    title: "Sustainable Architecture & Design",
    description:
      "Create eco-friendly spaces that reduce environmental impact while maximizing comfort and efficiency.",
  },
];

const BimHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f936eccf-80f9-4886-8476-ba89a630b7b6.png"
          alt="Revit Architecture Background, modern building with glass and steel structure"
          className="w-full h-full object-cover object-center"
          onError={(e) => (e.target.style.display = "none")}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full pl-8 sm:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24 pr-4">
          <div className="max-w-4xl">
            <motion.h1
              key={slides[currentIndex].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg"
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-6 md:mb-8 drop-shadow-md max-w-3xl"
            >
              {slides[currentIndex].description}
            </motion.p>
            <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-500/30 rounded-full text-amber-600 text-sm font-medium mb-6">
              BIM Construct - Excellence in Design
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-base font-medium text-white transition-all duration-500 hover:shadow-amber-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 shadow-lg shadow-amber-700/30 group"
              >
                <span className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              {/* <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
              >
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-28 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-6 bg-amber-500"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const services = [
  {
    title: "Architectural Design",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f47d6fe-df2d-4c41-8a89-a20a59e5f096.png",
    description:
      "Discover our architectural design services tailored to your needs.",
  },
  {
    title: "Interior Design",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b0751a3-8f39-4e01-bd05-da2e724c8bd3.png",
    description: "Innovative interior design solutions for beautiful spaces.",
  },
  {
    title: "3D Modeling",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65930a7f-a2c3-403d-bbb9-0d10b7d659ee.png",
    description:
      "Experience detailed and precise 3D models to bring your project to life.",
  },
  {
    title: "Site Planning",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c950fe85-0663-497c-ab7b-fb1b2ed8637a.png",
    description: "Comprehensive site planning for efficient and sustainable layouts.",
  },
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                boxShadow:
                  "6px 6px 15px rgb(212 212 212), -6px -6px 15px rgb(255 255 255)",
              }}
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.image}
                alt={`${service.title} - detailed preview showcasing service style and quality`}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Button Modal */}
        {selectedService && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-xl">
              <img
                src={selectedService.image}
                alt={`${selectedService.title} image`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">
                Register for {selectedService.title}
              </h3>
              <p className="mb-4">
                Thank you for your interest in our {selectedService.title} service. Please click the button below to register.
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  to="/register"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-base font-medium text-white transition-all duration-500 hover:shadow-amber-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  Register Now
                </Link>
                <button
                  onClick={handleClose}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-base font-medium text-white transition-all duration-500 hover:shadow-amber-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <BimHeroSection />
      <ServiceSection />
    </div>
  );
};

export default App;
