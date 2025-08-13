// File: src/App.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/';
// import Contact from './components/Contact/';
import Loader from './components/Loader/Loader';
import ParticleBackground from './components/3D/ParticleBackground';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="main-content"
          >
            <ParticleBackground mousePosition={mousePosition} />
            <Navigation />
            
            <main>
              
              <Hero />
              <About />
              <Skills />
              {/* <Projects /> */}
              {/* <Contact /> */}
            </main>
            
            {/* Custom Cursor */}
            <motion.div
              className="custom-cursor"
              animate={{
                x: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2 - 10,
                y: -mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2 - 10
              }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;