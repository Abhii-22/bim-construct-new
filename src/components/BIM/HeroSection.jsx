import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import giphy from "../../assets/IMAGES/bim background.jpg";

import { Eye, Target } from "lucide-react";

const slides = [
  {
    title: "Pioneering the Future with Advanced BIM Solutions",
    description:
      "Leverage our expertise in Building Information Modeling to enhance project efficiency, collaboration, and outcomes from concept to completion.",
  },
  {
    title: "Precision BIM for Flawless Execution",
    description:
      "Our detailed 3D models and data-rich visualizations empower you to make informed decisions, minimizing risks and costly rework.",
  },
  {
    title: "Integrated BIM for Sustainable & Smart Buildings",
    description:
      "We integrate BIM with sustainable design principles to deliver high-performance buildings that are both eco-friendly and future-proof.",
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
      }, 2000);
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={giphy}
          alt="BIM construction process GIF"
          className="w-full h-full object-cover object-center md:w-full md:h-full"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center text-left">
        <div className="w-full px-4">
          <div className="max-w-4xl ml-16 p-8">
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

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <BimHeroSection />
    </div>
  );
};

export default App;
