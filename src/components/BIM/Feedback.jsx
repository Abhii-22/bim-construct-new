"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const BimFeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProjectImages, setSelectedProjectImages] = useState([])

  const testimonials = [
    {
      name: "Abhishek",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "BIM Construct transformed our outdated home into a modern masterpiece. Their attention to detail and innovative design solutions exceeded our expectations.",
    },
    {
      name: "Kiran Kumar",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with BIM Construct on our restaurant redesign was an exceptional experience. Their team understood our vision perfectly and created a space that receives countless compliments.",
    },
    {
      name: "Karthik Kumar",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a property developer, BIM Construct stands out for professionalism and innovation. Their BIM expertise streamlined our construction process and saved us both time and money.",
    },
    {
      name: "Sneha Gowda",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Our office renovation completely transformed our workspace. The design improved workflow and employee satisfaction. 3D visualizations were incredibly helpful.",
    },
  ]

  const projects = [
    {
      title: "Modern Minimalist Home",
      category: "Residential Interior",
      images: ["/IMAGES/Residential 1.jpg", "/IMAGES/Corporate 4.jpg", "/IMAGES/Residential 3.jpg"],
    },
    {
      title: "Luxury Restaurant",
      category: "Commercial Interior",
      images: ["/IMAGES/Restarant 2.jpg", "/IMAGES/Restarant 3.jpg", "/IMAGES/Restraunt 4.jpg"],
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial Exterior",
      images: ["/IMAGES/Corporate 6.jpg", "/IMAGES/Corporate 5.jpg", "/IMAGES/Corporate 10.jpg"],
    },
  ]

  // autoplay
  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 6000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const openModal = (images) => {
    setSelectedProjectImages(images)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProjectImages([])
  }

  // close modal with Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="relative">
      {/* Heading */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-200/50 backdrop-blur-md rounded-full mb-4"
          >
            Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-600 text-lg"
          >
            Discover how BIM Construct has helped clients reimagine their spaces with innovative design
            and BIM-driven solutions.
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="absolute -top-12 -left-12 text-indigo-200 opacity-30">
            <Quote size={100} />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md shadow-xl p-10 md:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed max-w-2xl animate-fadeIn">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="font-semibold text-xl text-indigo-800">{testimonials[currentIndex].name}</h4>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-indigo-700 hover:bg-indigo-50 transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-indigo-700 hover:bg-indigo-50 transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-indigo-600 w-8 animate-pulse"
                    : "bg-gray-300 w-3 hover:bg-indigo-400"
                }`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {[
            { value: 150, label: "Projects Completed" },
            { value: 40, label: "Happy Clients" },
            { value: 12, label: "Design Awards" },
            { value: 8, label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-gray-800"
            >
              <motion.div
                initial={{ textContent: 0 }}
                whileInView={{ textContent: stat.value }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2 animate-bounce"
              >
                {stat.value}+
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white py-20">
        <div className="text-center mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-3 text-gray-900"
          >
            Featured Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            A glimpse into some of our finest design transformations
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
              onClick={() => openModal(project.images)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-amber-300">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 max-w-6xl bg-white rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProjectImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="rounded-lg shadow-lg object-cover max-h-[70vh] hover:scale-105 transition-transform"
                  />
                ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-6 block mx-auto px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default BimFeedbackSection
