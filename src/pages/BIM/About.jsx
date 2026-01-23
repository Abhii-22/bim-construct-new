import { motion } from "framer-motion";
import { Eye, Target, Users, Award, Lightbulb, Clock, CheckCircle, ArrowRight } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "80+", label: "Happy Clients" },
    { value: "15+", label: "Design Awards" },
    { value: "10+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly push boundaries with cutting-edge BIM technology and creative solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working together with clients to achieve shared goals and exceptional results."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project we undertake."
    },
  ];

  const timeline = [
    {
      title: "Foundation",
      description: "Started with a vision to revolutionize construction through BIM technology."
    },
    {
      title: "Growth",
      description: "Expanded our team and services to meet growing industry demands."
    },
    {
      title: "Innovation",
      description: "Introduced advanced BIM solutions and sustainable design practices."
    },
    {
      title: "Excellence",
      description: "Recognized as industry leaders in BIM-driven construction solutions."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-200 via-orange-100 to-amber-100 text-gray-900">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block px-4 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full mb-4 shadow-md"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Building Tomorrow, <span className="text-orange-600">Today</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
            >
              At BIM Construct, we merge architectural brilliance with cutting-edge
              BIM solutions. Our approach transforms ideas into reality, ensuring
              efficiency, transparency, and future-ready infrastructure.
            </motion.p>
          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <img
                src="/IMAGES/Corporate 11.jpg"
                alt="Modern office with BIM designs"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </motion.div>

            {/* Right Side - Vision & Mission Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-3">
                  <Eye className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600">
                  To redefine construction by becoming a global leader in BIM-driven
                  innovation — creating smarter, faster, and more sustainable
                  projects.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600">
                  To deliver BIM technologies that enhance collaboration, reduce
                  costs, and maximize efficiency, while ensuring transparency and
                  long-term value for our partners.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in transforming spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-orange-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
                  <div className="text-orange-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of innovation and excellence in BIM construction.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural dreams to life with our innovative BIM solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
