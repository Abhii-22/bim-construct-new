import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About BIM Construct
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforming visions into built reality with cutting-edge Building Information Modeling solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To revolutionize the construction and design industry through innovative BIM solutions that enhance collaboration, reduce costs, and improve project outcomes for our clients worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering exceptional value through cutting-edge technology, expert knowledge, and a client-focused approach that sets new standards in building design and construction.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the global leader in BIM innovation, transforming how buildings are designed, constructed, and maintained through digital excellence and sustainable practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every construction project benefits from seamless digital collaboration, resulting in smarter, more efficient, and environmentally responsible buildings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals behind our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "20+ years in construction technology and BIM implementation.",
                image: "/images/team-1.jpg"
              },
              {
                name: "Sarah Williams",
                role: "Lead Architect",
                bio: "Specializes in sustainable design and BIM coordination.",
                image: "/images/team-2.jpg"
              },
              {
                name: "Michael Chen",
                role: "BIM Manager",
                bio: "Expert in BIM standards and implementation strategies.",
                image: "/images/team-3.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for team member image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    <span>Team Member Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to develop cutting-edge BIM solutions that transform the construction industry.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality work and exceeding client expectations in every project.",
                icon: "⭐"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and open communication to achieve the best results for our clients.",
                icon: "🤝"
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and the highest ethical standards.",
                icon: "🔒"
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible practices that minimize our ecological footprint.",
                icon: "🌱"
              },
              {
                title: "Client Focus",
                description: "We prioritize our clients' needs and work tirelessly to ensure their complete satisfaction.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your construction projects?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how our BIM solutions can benefit your next project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
