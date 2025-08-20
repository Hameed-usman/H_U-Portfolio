import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    const rect = formRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 20);
      mouseY.set((e.clientY - centerY) / 20);

      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'GitHub',
      url: 'https://github.com/yourusername', // Replace with your actual GitHub URL
      color: '#333',
      hoverColor: '#24292e',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      icon: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile', // Replace with your actual LinkedIn URL
      color: '#0077b5',
      hoverColor: '#005885',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/yourhandle', // Replace with your actual Twitter URL
      color: '#1da1f2',
      hoverColor: '#0d8bd9',
      description: 'Follow my tech journey'
    },
    {
      name: 'Discord',
      icon: 'Discord',
      url: 'https://discord.com/users/yourid', // Replace with your actual Discord URL
      color: '#7289da',
      hoverColor: '#5b6eae',
      description: 'Join the community'
    },
    {
      name: 'Email',
      icon: 'Email',
      url: 'mailto:your@email.com', // Replace with your actual email
      color: '#ea4335',
      hoverColor: '#d33b2c',
      description: 'Send me an email'
    },
    {
      name: 'Phone',
      icon: 'Phone',
      url: 'tel:+1234567890', // Replace with your actual phone number
      color: '#34a853',
      hoverColor: '#2d8f47',
      description: 'Call me directly'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.target)
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitStatus('');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    icon: ['💻', '🚀', '⚡', '🎯', '💡', '🔥', '✨', '🌟'][i % 8],
    delay: i * 0.5,
    duration: 8 + (i % 4) * 2
  }));

  return (
    <motion.section
      ref={ref}
      className="contact-section"
      variants={containerVariants}
      animate={controls}
      initial="hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="contact-bg-animation">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(element.id) * 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {element.icon}
          </motion.div>
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="floating-shape"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`
            }}
          />
        ))}
      </div>

      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <motion.h2
            className="contact-title"
            whileHover={{ scale: 1.05 }}
          >
            <span className="title-gradient">Let's Create Something</span>
            <motion.span
              className="title-highlight"
              animate={{
                background: [
                  'linear-gradient(45deg, #667eea, #764ba2)',
                  'linear-gradient(45deg, #f093fb, #f5576c)',
                  'linear-gradient(45deg, #4facfe, #00f2fe)',
                  'linear-gradient(45deg, #667eea, #764ba2)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Amazing Together!
            </motion.span>
          </motion.h2>
          <motion.p
            className="contact-subtitle"
            variants={itemVariants}
          >
            Ready to transform your ideas into digital reality? Let's start a conversation
            that could change everything! 🚀
          </motion.p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-container"
            variants={itemVariants}
            style={{ x, y }}
            ref={formRef}
          >
            <motion.div
              className="form-background"
              animate={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                  rgba(102, 126, 234, 0.1) 0%, 
                  rgba(118, 75, 162, 0.05) 50%, 
                  transparent 100%)`
              }}
            />
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="de0f6d89-9192-4153-9ce8-3124b680c078" // Replace with your actual Web3Forms access key
              />

              <motion.div className="form-title" variants={itemVariants}>
                <h3>Send Me a Message</h3>
                <motion.div
                  className="title-sparkle"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <div className="form-grid">
                <motion.div
                  className={`input-group ${focusedField === 'name' ? 'focused' : ''}`}
                  variants={itemVariants}
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <motion.label
                    animate={{
                      y: formData.name || focusedField === 'name' ? -25 : 0,
                      scale: formData.name || focusedField === 'name' ? 0.8 : 1,
                      color: focusedField === 'name' ? '#667eea' : 'rgba(255, 255, 255, 0.7)'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    👤 Your Name
                  </motion.label>
                  <motion.div
                    className="input-border"
                    animate={{
                      scaleX: focusedField === 'name' ? 1 : 0,
                      background: focusedField === 'name'
                        ? 'linear-gradient(90deg, #667eea, #f093fb)'
                        : 'transparent'
                    }}
                  />
                </motion.div>

                <motion.div
                  className={`input-group ${focusedField === 'email' ? 'focused' : ''}`}
                  variants={itemVariants}
                >
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    animate={{
                      y: formData.email || focusedField === 'email' ? -25 : 0,
                      scale: formData.email || focusedField === 'email' ? 0.8 : 1,
                      color: focusedField === 'email' ? '#667eea' : 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    📧 Email Address
                  </motion.label>
                  <motion.div
                    className="input-border"
                    animate={{
                      scaleX: focusedField === 'email' ? 1 : 0
                    }}
                  />
                </motion.div>
              </div>

              <motion.div
                className={`input-group ${focusedField === 'subject' ? 'focused' : ''}`}
                variants={itemVariants}
              >
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.label
                  animate={{
                    y: formData.subject || focusedField === 'subject' ? -25 : 0,
                    scale: formData.subject || focusedField === 'subject' ? 0.8 : 1,
                    color: focusedField === 'subject' ? '#667eea' : 'rgba(255, 255, 255, 0.7)'
                  }}
                >
                  🎯 Subject
                </motion.label>
                <motion.div
                  className="input-border"
                  animate={{
                    scaleX: focusedField === 'subject' ? 1 : 0
                  }}
                />
              </motion.div>

              <motion.div
                className={`input-group textarea-group ${focusedField === 'message' ? 'focused' : ''}`}
                variants={itemVariants}
              >
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows="5"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.label
                  animate={{
                    y: formData.message || focusedField === 'message' ? -25 : 0,
                    scale: formData.message || focusedField === 'message' ? 0.8 : 1,
                    color: focusedField === 'message' ? '#667eea' : 'rgba(255, 255, 255, 0.7)'
                  }}
                >
                  💭 Your Message
                </motion.label>
                <motion.div
                  className="input-border"
                  animate={{
                    scaleX: focusedField === 'message' ? 1 : 0
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className={`submit-btn ${submitStatus}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  isSubmitting
                    ? {
                        background: [
                          'linear-gradient(45deg, #667eea, #764ba2)',
                          'linear-gradient(45deg, #f093fb, #f5576c)',
                          'linear-gradient(45deg, #4facfe, #00f2fe)',
                          'linear-gradient(45deg, #667eea, #764ba2)'
                        ]
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: isSubmitting ? Infinity : 0 }}
              >
                <motion.span
                  animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? '🚀' : submitStatus === 'success' ? '✅' : '💌'}
                </motion.span>
                {isSubmitting
                  ? 'Sending Magic...'
                  : submitStatus === 'success'
                  ? 'Message Sent!'
                  : submitStatus === 'error'
                  ? 'Try Again'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            variants={itemVariants}
          >
            <motion.div className="contact-details" variants={itemVariants}>
              <h3>Let's Connect</h3>
              <motion.div
                className="detail-item"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <span className="detail-icon">📍</span>
                <span>Peshawar, Pakistan 🌍</span>
              </motion.div>
              <motion.div
                className="detail-item"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <span className="detail-icon">⏰</span>
                <span>Available 24/7 for amazing projects</span>
              </motion.div>
              <motion.div
                className="detail-item"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <span className="detail-icon">🎯</span>
                <span>Response time: Lightning fast!</span>
              </motion.div>
            </motion.div>

            {/* <motion.div className="social-links" variants={itemVariants}>
              <h3>Find Me Online</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: `0 10px 30px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      background: [
                        `${social.color}20`,
                        `${social.hoverColor}30`,
                        `${social.color}20`
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <motion.span
                      className="social-icon"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {social.icon}
                    </motion.span>
                    <div className="social-content">
                      <span className="social-name">{social.name}</span>
                      <span className="social-description">{social.description}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;