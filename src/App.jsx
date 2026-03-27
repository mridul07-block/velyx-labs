import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

const SMOOTH_SPRING = [0.16, 1, 0.3, 1]

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-base font-body text-white overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Global atmospheric layers */}
      <ParticleBackground />
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: SMOOTH_SPRING }}
            style={{ minHeight: '100vh' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
