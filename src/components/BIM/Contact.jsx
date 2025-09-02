import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Calendar, Clock, MessageSquare } from "lucide-react"

const BimContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll contact you shortly to discuss your project.",
    })

    // Reset form after successful submission
    if (formStatus.success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact information */}
            <div>
              <div className="mb-12">
                <div className="inline-block px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Contact information
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email Us",
                    content: "connect@medini.in",
                    link: "mailto:connect@medini.in",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Call Us",
                    content: "+91 9900081006 ",
                    link: "tel:9900081006 ",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Visit Our Company",
                    content: "#89, 18th main, 15th Cross, Near Post office, MRCR Layout, Vijayanagar, Bangalore",
                    link: "https://maps.google.com",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-full bg-yellow-50 text-yellow-600 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-gray-500 hover:text-gray-800 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Studio hours */}
              <div className="mt-12 bg-yellow-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                  <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                  Studio Hours
                </h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 8:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.06664131103!2d77.5268758285241!3d12.97083321528681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf990d4f7135a5%3A0x8545741652a9316!2sVijayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886369186!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
      </div>
    </section>
  )
}

export default BimContactSection
