// File: src/components/Loader/Loader.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingTexts = [
    'Initializing...',
    'Loading Components...',
    'Rendering 3D Elements...',
    'Applying Animations...',
    'Almost Ready...'
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 800);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <div className="loader-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="loader-content">
        {/* Logo Animation */}
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
        >
          <div className="logo-inner">
            <div className="logo-text">DEV</div>
            <div className="logo-dot"></div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <div className="progress-glow" style={{ left: `${progress}%` }} />
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {currentText}
        </motion.div>

        {/* Spinning Elements */}
        <div className="spinning-elements">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="spinner"
              style={{
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i * 120}deg) translateX(80px)`
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;