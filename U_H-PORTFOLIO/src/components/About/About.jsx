// File: src/components/About/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Lightbulb, Rocket, Users, Award, Coffee } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Cups of Coffee', icon: Coffee }
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
      color: '#00f5ff'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.',
      color: '#ff0080'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
      color: '#9333ea'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver projects that exceed expectations.',
      color: '#10b981'
    }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">About Me</h2>
            <p className="section-subtitle">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="about-grid">
            {/* Left Column - Story */}
            <motion.div className="about-story" variants={itemVariants}>
              <div className="story-card glass">
                <div className="story-header">
                  <div className="story-avatar">
                    <div className="avatar-placeholder">
                      <Code size={40} className="avatar-icon" />
                    </div>
                    <div className="avatar-status">
                      <div className="status-dot"></div>
                      <span>Available for work</span>
                    </div>
                  </div>
                </div>

                <div className="story-content">
                  <h3>My Journey</h3>
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience 
                    creating exceptional digital experiences. My journey began with curiosity 
                    about how websites work, and it evolved into a love for building 
                    sophisticated web applications.
                  </p>
                  <p>
                    I specialize in the MERN stack and have a keen eye for UI/UX design. 
                    I believe in writing clean, maintainable code and creating user-centric 
                    solutions that make a real impact.
                  </p>

                  <div className="story-highlights">
                    <div className="highlight">
                      <span className="highlight-number">3+</span>
                      <span className="highlight-text">Years of Experience</span>
                    </div>
                    <div className="highlight">
                      <span className="highlight-number">50+</span>
                      <span className="highlight-text">Projects Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div className="about-values" variants={itemVariants}>
              <h3 className="values-title">What I Bring</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`value-card ${activeCard === index ? 'active' : ''}`}
                    onHoverStart={() => setActiveCard(index)}
                    onHoverEnd={() => setActiveCard(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--accent-color': value.color }}
                  >
                    <div className="value-icon">
                      <value.icon size={24} />
                    </div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                    <div className="value-glow"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div className="stats-section" variants={itemVariants}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <motion.div
                      className="stat-number"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="about-cta" variants={itemVariants}>
            <div className="cta-content glass">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                I'm always excited to work on new projects and collaborate with 
                amazing people. Let's turn your ideas into reality!
              </p>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <div className="button-arrow">→</div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="about-bg">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-element bg-element-${i}`}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;