import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Building, Home, Ruler, Compass } from "lucide-react"

const BimHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    {
      title: "Innovative Interior & Exterior Design Solutions",
      description: "Transform your spaces with our cutting-edge design solutions that blend aesthetics with functionality.",
    },
    {
      title: "Expert BIM Modeling & Visualization",
      description: "Experience your design before construction with our detailed 3D models and immersive visualizations.",
    },
    {
      title: "Sustainable Architecture & Design",
      description: "Create eco-friendly spaces that reduce environmental impact while maximizing comfort and efficiency.",
    },
  ]

  const services = [
    { icon: <Building className="h-8 w-8" />, title: "Architectural Design" },
    { icon: <Home className="h-8 w-8" />, title: "Interior Design" },
    { icon: <Ruler className="h-8 w-8" />, title: "3D Modeling" },
    { icon: <Compass className="h-8 w-8" />, title: "Site Planning" },
  ]

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, 10000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setIsPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/IMAGES/Revit_Architecture.jpg"
          alt="Revit Architecture Background"
          className="w-full h-full object-cover object-center"
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
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Quick Access */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              >
                <div className="p-3 bg-amber-500/10 rounded-full mb-2">
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium text-white">{service.title}</h3>
              </div>
            ))}
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
              currentIndex === index ? 'w-6 bg-amber-500' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default BimHeroSection