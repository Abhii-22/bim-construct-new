import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, ShieldCheck } from "lucide-react";

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

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We offer a comprehensive range of BIM services to support your construction projects from concept to completion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Comprehensive Design Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              From concept to completion, we offer a full range of design services powered by cutting-edge BIM technology.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-200 hover:border-slate-300"
                onClick={() => handleServiceClick(service)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - detailed preview showcasing service style and quality`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-slate-600">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4">
                    <div className="text-slate-600 text-lg font-bold">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
            >
              We are dedicated to delivering excellence in every project, ensuring client satisfaction and innovative solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
                  title: "Innovative Solutions",
                  description: "Leveraging the latest BIM technologies to provide cutting-edge and efficient designs."
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Experienced Team",
                  description: "Our team of experts brings years of experience and a passion for precision to every project."
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                  title: "Quality Assurance",
                  description: "Committed to the highest standards of quality and accuracy in all our deliverables."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-600 text-white font-semibold rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Registration Button Modal */}
          {selectedService && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.4, 
                      ease: 'easeInOut', 
                      when: 'beforeChildren',
                      staggerChildren: 0.1 
                    }
                  },
                  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: 'easeOut' } }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-md w-full relative"
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-20"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="overflow-hidden">
                  <motion.img
                    src={selectedService.image}
                    alt={`${selectedService.title} image`}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div className="p-8 text-center">
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-3xl font-bold text-gray-900 mb-3">
                    Register for {selectedService.title}
                  </motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-black mb-8">
                    Thank you for your interest. Click below to register and take the next step with our {selectedService.title} service.
                  </motion.p>
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                    >
                      Register Now
                    </Link>
                    <button
                      onClick={handleClose}
                      className="inline-flex items-center justify-center rounded-full bg-gray-100 px-8 py-3 text-base font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                    >
                      Close
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
