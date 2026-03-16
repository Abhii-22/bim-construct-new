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
      description: "We constantly push boundaries with cutting-edge BIM technology and creative solutions.",
      points: [
        "Pioneering BIM technologies and methodologies",
        "Continuous research and development",
        "Creative problem-solving approaches",
        "Forward-thinking design solutions",
        "Embracing digital transformation"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working together with clients to achieve shared goals and exceptional results.",
      points: [
        "Partnership-driven project approach",
        "Open communication channels",
        "Multi-disciplinary team coordination",
        "Client-centric decision making",
        "Stakeholder engagement strategies"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project we undertake.",
      points: [
        "Industry-leading quality standards",
        "Rigorous quality assurance processes",
        "Attention to detail in every phase",
        "Continuous improvement mindset",
        "Award-winning project delivery"
      ]
    },
  ];

  const timeline = [
    {
      title: "Foundation",
      description: "Started with a vision to revolutionize construction through BIM technology.",
      achievements: [
        "Established BIM Construct with pioneering vision",
        "Assembled core team of BIM specialists",
        "Launched first BIM implementation projects",
        "Developed proprietary BIM methodologies",
        "Built foundation for digital transformation"
      ]
    },
    {
      title: "Growth",
      description: "Expanded our team and services to meet growing industry demands.",
      achievements: [
        "Expanded team to 25+ BIM professionals",
        "Opened new office locations",
        "Diversified service offerings",
        "Established strategic partnerships",
        "Achieved 50+ successful project deliveries"
      ]
    },
    {
      title: "Innovation",
      description: "Introduced advanced BIM solutions and sustainable design practices.",
      achievements: [
        "Launched sustainable BIM design framework",
        "Integrated AI-powered clash detection",
        "Implemented cloud-based collaboration tools",
        "Achieved LEED certification expertise",
        "Pioneered 4D and 5D BIM solutions"
      ]
    },
    {
      title: "Excellence",
      description: "Recognized as industry leaders in BIM-driven construction solutions.",
      achievements: [
        "Recognized as top BIM consultant nationally",
        "Completed 150+ landmark projects",
        "Received multiple industry excellence awards",
        "Expanded to international markets",
        "Set new standards for BIM implementation"
      ]
    },
  ];

  const expertise = [
    {
      title: "BIM Implementation",
      description: "Comprehensive BIM integration from conceptual design to construction documentation",
      icon: "🏗️",
      features: [
        "Complete project lifecycle management",
        "Standardized BIM protocols and templates",
        "Multi-disciplinary coordination",
        "Quality assurance and control processes",
        "Custom BIM execution plans"
      ]
    },
    {
      title: "3D Visualization",
      description: "Advanced 3D modeling and rendering for realistic project visualization",
      icon: "🎨",
      features: [
        "Photorealistic renderings and walkthroughs",
        "Virtual reality (VR) experiences",
        "Real-time visualization solutions",
        "Material and lighting simulations",
        "Interactive 3D models for client presentations"
      ]
    },
    {
      title: "Clash Detection",
      description: "Proactive identification and resolution of design conflicts before construction",
      icon: "🔍",
      features: [
        "Automated clash detection algorithms",
        "Interference checking across all disciplines",
        "Coordination meeting support",
        "Issue tracking and resolution workflows",
        "Reduced rework and cost savings"
      ]
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly solutions that minimize environmental impact and maximize efficiency",
      icon: "🌱",
      features: [
        "LEED certification support",
        "Energy analysis and optimization",
        "Carbon footprint calculations",
        "Green material recommendations",
        "Sustainable design strategies"
      ]
    },
    {
      title: "Cost Optimization",
      description: "Data-driven analysis to reduce construction costs and improve ROI",
      icon: "💰",
      features: [
        "5D BIM cost estimation",
        "Value engineering analysis",
        "Material quantity takeoffs",
        "Lifecycle cost analysis",
        "Budget tracking and forecasting"
      ]
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination using BIM-based workflows",
      icon: "📊",
      features: [
        "BIM-based project scheduling",
        "Resource planning and allocation",
        "Progress monitoring and reporting",
        "Stakeholder collaboration platforms",
        "Risk management and mitigation"
      ]
    }
  ];

  const technologies = [
    "Revit Architecture", "AutoCAD", "Navisworks", "3ds Max", "SketchUp", 
    "V-Ray Rendering", "Lumion", "BIM 360", "Bluebeam", "Solibri"
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
          <div className="max-w-7xl mx-auto mt-20">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="relative group">
                {/* Animated Frame */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -inset-4 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                ></motion.div>
                
                {/* Main Image Container */}
                <motion.div
                  initial={{ opacity: 0, rotateY: 15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl shadow-2xl"
                >
                  <motion.img
                    src="/IMAGES/Corporate 11.jpg"
                    alt="BIM Construct Office"
                    className="w-full h-[400px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'%3E%3Crect fill='%23f97316' width='1200' height='400'/%3E%3Ctext fill='%23ffffff' font-size='48' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EBIM Construct%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  ></motion.div>
                  
                  {/* Animated Side Gradient */}
                  <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"
                  ></motion.div>
                  
                  {/* Corner Accents */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/50 rounded-tl-xl"
                  ></motion.div>
                  <motion.div
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/50 rounded-br-xl"
                  ></motion.div>
                  
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: -30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="absolute bottom-8 left-8 right-8"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100px" }}
                      transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4"
                    ></motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                      className="text-white text-3xl font-bold mb-2"
                    >
                      Building the Future
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="text-white/90 text-lg"
                    >
                      Innovative BIM solutions for modern construction
                    </motion.p>
                    
                    {/* Animated Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      viewport={{ once: true }}
                      className="flex gap-6 mt-6"
                    >
                      {[
                        { number: "150+", label: "Projects" },
                        { number: "10+", label: "Years" },
                        { number: "80+", label: "Clients" }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="text-center"
                        >
                          <p className="text-white font-bold text-xl">{stat.number}</p>
                          <p className="text-white/70 text-sm">{stat.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Vision & Mission Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.15)"
                }}
                className="bg-white rounded-xl shadow-lg border border-orange-100 p-8 hover:border-orange-300 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Eye className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Vision</h3>
                    <p className="text-sm text-gray-500 mb-6">Looking toward tomorrow</p>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-700 mb-6 leading-relaxed"
                  >
                    To redefine construction by becoming a global leader in BIM-driven innovation — creating smarter, faster, and more sustainable projects.
                  </motion.p>
                  
                  {/* Animated Bullet Points */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {[
                      "Pioneering digital transformation in construction",
                      "Setting new standards for BIM excellence globally",
                      "Creating sustainable infrastructure for future generations",
                      "Empowering construction through technological innovation"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                          className="text-orange-500 mr-3 mt-1 text-lg"
                        >
                          ▸
                        </motion.span>
                        <span className="text-gray-600">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                className="bg-white rounded-xl shadow-lg border border-blue-100 p-8 hover:border-blue-300 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Target className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Mission</h3>
                    <p className="text-sm text-gray-500 mb-6">Delivering excellence today</p>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-700 mb-6 leading-relaxed"
                  >
                    To deliver BIM technologies that enhance collaboration, reduce costs, and maximize efficiency, while ensuring transparency and long-term value for our partners.
                  </motion.p>
                  
                  {/* Animated Bullet Points */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {[
                      "Deliver cutting-edge BIM solutions with precision",
                      "Foster seamless collaboration across project teams",
                      "Optimize project timelines and reduce construction costs",
                      "Ensure complete transparency throughout project lifecycle",
                      "Create sustainable value for all stakeholders"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                          className="text-blue-500 mr-3 mt-1 text-lg"
                        >
                          ▸
                        </motion.span>
                        <span className="text-gray-600">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
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
                className="bg-white rounded-xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
                    <div className="text-orange-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{value.description}</p>
                </div>
                <div className="border-t border-orange-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">How We Live It:</h4>
                  <ul className="space-y-2">
                    {value.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xs">▸</span>
                        <span className="text-gray-600 text-xs leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: -360 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-3xl opacity-30"
        ></motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="inline-block px-6 py-3 text-sm font-semibold text-orange-700 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6 shadow-lg border border-orange-200"
            >
              Our Evolution
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our Journey Through <motion.span 
                initial={{ color: "#ea580c" }}
                animate={{ color: ["#ea580c", "#dc2626", "#ea580c"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              >Time</motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              A decade of innovation, growth, and excellence in transforming the construction industry through BIM technology.
            </motion.p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            {/* Animated Timeline Line with Pulse */}
            <motion.div 
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-orange-400 via-orange-500 to-amber-500 origin-top rounded-full"
            >
              <motion.div
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-50 rounded-full"
              ></motion.div>
            </motion.div>
            
            {/* Timeline Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-40 bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-40 blur-2xl"
            ></motion.div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.2, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8 md:pr-12' : 'text-left pl-8 md:pl-12 order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotateY: index % 2 === 0 ? -25 : 25, rotateX: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateX: -5,
                      boxShadow: "0 30px 60px rgba(251, 146, 60, 0.25)"
                    }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-orange-100 hover:border-orange-400 transition-all duration-700 relative overflow-hidden group"
                  >
                    {/* Animated Background Pattern */}
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 2, delay: 1 + index * 0.2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: -360 }}
                      transition={{ duration: 2, delay: 1.2 + index * 0.2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg"
                      >
                        {item.description}
                      </motion.p>
                      
                      {/* Achievements with enhanced staggered animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                        viewport={{ once: true }}
                        className="border-t border-gradient-to-r from-orange-100 to-amber-100 pt-6"
                      >
                        <motion.h4 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
                          viewport={{ once: true }}
                          className="text-sm font-semibold text-gray-700 mb-6 flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3"
                          ></motion.div>
                          Key Achievements
                        </motion.h4>
                        <motion.ul 
                          initial="hidden"
                          whileInView="visible"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.15
                              }
                            }
                          }}
                          viewport={{ once: true }}
                          className="space-y-3"
                        >
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              variants={{
                                hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.8 },
                                visible: { opacity: 1, x: 0, scale: 1 }
                              }}
                              whileHover={{ x: 8, scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              className="flex items-start group/item"
                            >
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 1.4 + index * 0.2 + achievementIndex * 0.15, type: "spring" }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 180, scale: 1.3 }}
                                className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-lg"
                              >
                                <span className="text-white text-xs font-bold">✓</span>
                              </motion.div>
                              <span className="text-gray-600 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Timeline Dot with Advanced Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2, type: "spring" }}
                  whileHover={{ scale: 2, rotate: 180 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-orange-500 shadow-2xl z-30"
                >
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 2.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.8 }}
                    className="absolute inset-0 bg-orange-400 rounded-full opacity-20"
                  ></motion.div>
                </motion.div>
                
                {/* Connection Lines */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-orange-400 to-transparent' : 'from-transparent to-orange-400'
                  } ${index % 2 === 0 ? 'right-full' : 'left-full'}`}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our BIM Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized skills and capabilities that set us apart in the BIM construction industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="border-t border-orange-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xs">▸</span>
                        <span className="text-gray-600 text-xs leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage industry-leading software and tools to deliver exceptional BIM solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-200 text-gray-800 font-medium shadow-md"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why BIM Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your construction projects with the power of Building Information Modeling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reduced Errors",
                description: "Minimize costly mistakes through clash detection and coordinated design",
                icon: <CheckCircle className="w-8 h-8 text-green-600" />,
                points: [
                  "Early conflict detection",
                  "Reduced rework costs",
                  "Improved quality control",
                  "Enhanced accuracy"
                ]
              },
              {
                title: "Time Savings",
                description: "Accelerate project timelines with streamlined workflows and automation",
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                points: [
                  "Faster decision making",
                  "Automated documentation",
                  "Quick design iterations",
                  "Reduced approval times"
                ]
              },
              {
                title: "Cost Efficiency",
                description: "Optimize resources and reduce waste through precise planning",
                icon: <Target className="w-8 h-8 text-orange-600" />,
                points: [
                  "Accurate cost estimation",
                  "Material optimization",
                  "Reduced waste",
                  "Better ROI tracking"
                ]
              },
              {
                title: "Better Collaboration",
                description: "Enhance team coordination with shared, accessible project data",
                icon: <Users className="w-8 h-8 text-purple-600" />,
                points: [
                  "Real-time coordination",
                  "Centralized information",
                  "Improved communication",
                  "Stakeholder alignment"
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
                <div className="border-t border-orange-100 pt-3 mt-3">
                  <ul className="space-y-1">
                    {benefit.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-center justify-center">
                        <span className="text-orange-500 mr-2 text-xs">•</span>
                        <span className="text-gray-600 text-xs">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
