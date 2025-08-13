// File: src/components/Hero/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const controls = useAnimation();
  const heroRef = useRef(null);

  const words = ['Full Stack Developer', 'React Specialist', 'MERN Expert', 'UI/UX Enthusiast', 'Problem Solver'];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (typedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, currentWordIndex, words]);

  // Scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', color: '#333' },
    { icon: Linkedin, href: 'https://linkedin.com', color: '#0077b5' },
    { icon: Twitter, href: 'https://twitter.com', color: '#1da1f2' },
  ];

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-shape shape-${i % 3}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        {/* Main Content */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            👋 Hello, I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="name-text gradient-text">Your Name</span>
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            I turn ideas into reality through clean code and innovative solutions.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 245, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <div className="button-glow"></div>
            </motion.button>

            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--hover-color': social.color }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Avatar/Image Placeholder */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar-placeholder">
              <div className="avatar-inner">
                <div className="code-lines">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="floating-element tech-1"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              React
            </motion.div>
            
            <motion.div
              className="floating-element tech-2"
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Node.js
            </motion.div>
            
            <motion.div
              className="floating-element tech-3"
              animate={{
                y: [-5, 15, -5],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              MongoDB
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToNextSection}
      >
        <div className="scroll-text">Scroll Down</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Particle Effects */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;