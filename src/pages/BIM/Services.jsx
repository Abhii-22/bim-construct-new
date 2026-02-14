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
    detailedDescription: "Our architectural design services combine creativity with technical expertise to deliver innovative building solutions. We specialize in creating functional, aesthetic, and sustainable designs that meet your specific requirements and exceed expectations.",
    features: [
      "Custom residential and commercial designs",
      "Sustainable and eco-friendly architecture",
      "3D visualization and walkthroughs",
      "Building code compliance documentation",
      "Material specification and selection",
      "Space planning and optimization"
    ],
    benefits: [
      "Innovative design solutions tailored to your vision",
      "Cost-effective space utilization",
      "Enhanced property value through thoughtful design",
      "Sustainable building practices reducing long-term costs",
      "Comprehensive documentation for smooth approvals"
    ],
    process: [
      "Initial consultation and requirement gathering",
      "Site analysis and feasibility study",
      "Concept development and design exploration",
      "Detailed design and documentation",
      "Review and refinement based on feedback",
      "Final delivery and implementation support"
    ]
  },
  {
    title: "Interior Design",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b0751a3-8f39-4e01-bd05-da2e724c8bd3.png",
    description: "Innovative interior design solutions for beautiful spaces.",
    detailedDescription: "Transform your spaces with our expert interior design services. We create harmonious, functional, and visually stunning interiors that reflect your personality and lifestyle while maximizing space efficiency.",
    features: [
      "Space planning and layout optimization",
      "Custom furniture design and selection",
      "Color scheme and material palette development",
      "Lighting design and fixture selection",
      "Decorative elements and artwork coordination",
      "Smart home integration solutions"
    ],
    benefits: [
      "Personalized spaces that reflect your style",
      "Improved functionality and flow",
      "Enhanced comfort and well-being",
      "Increased property value",
      "Professional guidance through the entire process"
    ],
    process: [
      "Lifestyle assessment and style discovery",
      "Space measurement and analysis",
      "Design concept and mood board creation",
      "3D visualization and virtual walkthroughs",
      "Material and furniture selection",
      "Implementation and styling"
    ]
  },
  {
    title: "3D Modeling",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65930a7f-a2c3-403d-bbb9-0d10b7d659ee.png",
    description:
      "Experience detailed and precise 3D models to bring your project to life.",
    detailedDescription: "Our advanced 3D modeling services provide realistic and detailed representations of your projects before construction begins. Using cutting-edge BIM technology, we create accurate models that help visualize, analyze, and optimize your designs.",
    features: [
      "High-resolution 3D models and renderings",
      "Virtual reality (VR) walkthroughs",
      "BIM integration for clash detection",
      "Photorealistic visualization",
      "Animation and fly-through creation",
      "Model analysis and optimization"
    ],
    benefits: [
      "Better visualization before construction",
      "Early detection of design conflicts",
      "Improved stakeholder communication",
      "Reduced construction errors and rework",
      "Enhanced marketing and presentation materials"
    ],
    process: [
      "Project requirements and scope definition",
      "2D drawings and reference collection",
      "3D model creation and development",
      "Material and texture application",
      "Lighting and rendering setup",
      "Quality review and delivery"
    ]
  },
  {
    title: "Site Planning",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c950fe85-0663-497c-ab7b-fb1b2ed8637a.png",
    description: "Comprehensive site planning for efficient and sustainable layouts.",
    detailedDescription: "Our site planning services ensure optimal land use while considering environmental factors, zoning regulations, and project requirements. We create sustainable and efficient site layouts that maximize potential and minimize impact.",
    features: [
      "Land use optimization and zoning analysis",
      "Site grading and drainage planning",
      "Landscape design and outdoor spaces",
      "Parking and circulation design",
      "Utility infrastructure planning",
      "Environmental impact assessment"
    ],
    benefits: [
      "Optimal land utilization and value maximization",
      "Compliance with local regulations and codes",
      "Sustainable design practices",
      "Improved traffic flow and accessibility",
      "Enhanced site functionality and aesthetics"
    ],
    process: [
      "Site analysis and constraints identification",
      "Regulatory requirements and zoning study",
      "Concept development and layout options",
      "Detailed site plan creation",
      "Infrastructure and utility coordination",
      "Final documentation and approval support"
    ]
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

          {/* Service Details Modal */}
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
                className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="overflow-hidden">
                  <motion.img
                    src={selectedService.image}
                    alt={`${selectedService.title} image`}
                    className="w-full h-64 md:h-80 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div className="p-6 md:p-8">
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedService.title}
                  </motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {selectedService.detailedDescription}
                  </motion.p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="bg-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="bg-green-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Process
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.process.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-600 mr-2 mt-1 font-semibold">{index + 1}.</span>
                            <span className="text-gray-700 text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <Link
                      to="/https://register.medinitechnologies.in/"
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
