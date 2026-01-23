import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import BIMHome from "./pages/BIM/Home"
import BIMAbout from "./pages/BIM/About"
import BIMContact from "./pages/BIM/Contact"
import BIMServices from "./pages/BIM/Services"
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
            <Route path="/services" element={<BIMServices />} />
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

