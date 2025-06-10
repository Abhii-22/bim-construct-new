import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import BIMHome from "./pages/BIM/Home"
import BIMAbout from "./pages/BIM/About"
import BIMContact from "./pages/BIM/Contact"
import Header from "./components/Header3"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<BIMHome />} />
            <Route path="/about" element={<BIMAbout />} />
            <Route path="/contact" element={<BIMContact />} />
            <Route path="/services" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                  <p className="text-gray-600 mb-6">We offer a comprehensive range of BIM services to support your construction projects from concept to completion.</p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                      { title: 'BIM Modeling', icon: '📐' },
                      { title: '3D Visualization', icon: '🖥️' },
                      { title: 'Clash Detection', icon: '🔍' },
                      { title: '4D/5D BIM', icon: '📊' },
                      { title: 'BIM Coordination', icon: '🤝' },
                      { title: 'Facility Management', icon: '🏢' }
                    ].map((service, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            } />
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
                  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                  <p className="text-gray-600 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
                  <a 
                    href="/" 
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Back to Home
                  </a>
                </div>
              }
            />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

