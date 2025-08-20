import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './Project.css'; // FIXED: Changed from Project.css to Projects.css

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Function to generate AI image URLs based on project titles
  const generateAIImage = (title, category) => {
    const baseUrl = 'https://picsum.photos/600/400?random=';
    const seed = title.replace(/\s+/g, '').toLowerCase();
    return `${baseUrl}${seed}`;
  };

  const projects = [
    // ---------- HTML + CSS ----------
    {
      id: 1,
      title: "Tour Website",
      category: "html-css",
      description: "A responsive tour & travel landing page built with modern HTML and CSS.",
      technologies: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-tour-website-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: true,
      stats: { performance: 90, users: "500+", rating: 4.7 }
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      category: "html-css",
      description: "My first personal portfolio website showcasing projects and skills.",
      technologies: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-portfolio-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: true,
      stats: { performance: 95, users: "1K+", rating: 4.8 }
    },
    {
      id: 3,
      title: "Gym Website",
      category: "html-css",
      description: "Responsive fitness and gym landing page with clean UI design.",
      technologies: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-gym-website-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 92, users: "700+", rating: 4.6 }
    },

    // ---------- HTML + CSS + JS ----------
    {
      id: 4,
      title: "Mini Age Calculator",
      category: "html-css-js",
      description: "A simple JavaScript-based age calculator app.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "#", // no live link
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 88, users: "100+", rating: 4.5 }
    },
    {
      id: 5,
      title: "Image Gallery",
      category: "html-css-js",
      description: "Responsive image gallery with lightbox functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-gallery-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 90, users: "200+", rating: 4.6 }
    },
    {
      id: 6,
      title: "BMI Calculator",
      category: "html-css-js",
      description: "BMI calculator app with responsive UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-bmi-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 92, users: "300+", rating: 4.5 }
    },
    {
      id: 7,
      title: "Dual Temp Converter",
      category: "html-css-js",
      description: "Temperature converter between Celsius, Fahrenheit, and Kelvin.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-temp-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 90, users: "200+", rating: 4.5 }
    },
    {
      id: 8,
      title: "To-Do App",
      category: "html-css-js",
      description: "Task management app with local storage support.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-todo-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 93, users: "500+", rating: 4.7 }
    },
    {
      id: 9,
      title: "Digital Clock",
      category: "html-css-js",
      description: "A live digital clock using JavaScript date functions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-clock-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 94, users: "400+", rating: 4.6 }
    },
    {
      id: 10,
      title: "Quiz App",
      category: "html-css-js",
      description: "Interactive quiz app with multiple-choice questions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-quiz-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 91, users: "300+", rating: 4.5 }
    },
    {
      id: 11,
      title: "Weather App",
      category: "html-css-js",
      description: "Weather app fetching real-time data from API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-weather-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: true,
      stats: { performance: 95, users: "800+", rating: 4.8 }
    },
    {
      id: 12,
      title: "Arithmetic Calculator",
      category: "html-css-js",
      description: "Basic arithmetic calculator for addition, subtraction, multiplication, and division.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://your-calculator-link.com",
      sourceCode: "https://github.com/Hameed-usman",
      featured: false,
      stats: { performance: 90, users: "200+", rating: 4.5 }
    },

    // ---------- MERN Stack ----------
    {
      id: 13,
      title: "Project Management App",
      category: "mern",
      description: "MERN-based project management application with authentication and task tracking.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "project-managmnet-kxm1.vercel.app/",
      sourceCode: "https://github.com/Hameed-usman/PROJECT-MANAGMNET",
      featured: true,
      stats: { performance: 96, users: "1K+", rating: 4.9 }
    },
    {
      id: 14,
      title: "AI Blog Platform",
      category: "mern",
      description: "AI-powered blogging platform with user authentication and content management.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "AI API"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "mern-aii-blog.vercel.app/",
      sourceCode: "https://github.com/Hameed-usman/MERN-A.I-Blog",
      featured: true,
      stats: { performance: 94, users: "800+", rating: 4.8 }
    },
    {
      id: 15,
      title: "Hotel Booking Website",
      category: "mern",
      description: "Hotel booking system with search, booking, and payment integration.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=entropy&auto=format",
      liveDemo: "https://mern-hotel-booking-usman.vercel.app/",
      sourceCode: "https://github.com/Hameed-usman/MERN-hotelBookingWeb",
      featured: false,
      stats: { performance: 93, users: "500+", rating: 4.7 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'html-css', label: 'HTML + CSS', icon: '🎨' },
    { id: 'html-css-js', label: 'HTML + CSS + JS', icon: '⚡' },
    { id: 'mern', label: 'MERN Stack', icon: '💻' }
  ];

  // FIXED: Improved filtering logic
  const filteredProjects = React.useMemo(() => {
    console.log('Current filter:', activeFilter); // Debug log
    console.log('Total projects:', projects.length); // Debug log
    
    if (activeFilter === 'all') {
      return projects;
    }
    
    const filtered = projects.filter(project => {
      console.log(`Project: ${project.title}, Category: ${project.category}`); // Debug log
      return project.category === activeFilter;
    });
    
    console.log('Filtered projects:', filtered.length); // Debug log
    return filtered;
  }, [activeFilter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="projects-section"
      variants={containerVariants}
      animate={controls}
      initial="hidden"
    >
      {/* Animated Background */}
      <div className="projects-bg-animation">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-code-block"
            animate={{
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {['</>', '{}', '[]', '()', '&&', '||'][i % 6]}
          </motion.div>
        ))}
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <motion.div className="projects-header" variants={itemVariants}>
          <motion.h2 
            className="projects-title"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="title-gradient">Featured Projects</span>
            <motion.div 
              className="title-underline"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p 
            className="projects-subtitle"
            variants={itemVariants}
          >
            Transforming ideas into digital experiences that push boundaries
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div className="projects-filters" variants={itemVariants}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => {
                console.log('Filter clicked:', category.id); // Debug log
                setActiveFilter(category.id);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-label">{category.label}</span>
              {activeFilter === category.id && (
                <motion.div
                  className="filter-indicator"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Count Display */}
        <motion.div 
          className="projects-count"
          variants={itemVariants}
        >
          <span>
            Showing {filteredProjects.length} 
            {activeFilter === 'all' ? ' projects' : ` ${activeFilter.toUpperCase().replace('-', ' + ')} projects`}
          </span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    onError={(e) => {
                      // Fallback image if the primary fails to load
                      e.target.src = `https://picsum.photos/600/400?random=${project.id}`;
                    }}
                  />
                  <div className="project-overlay">
                    <motion.div
                      className="project-stats"
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredProject === project.id ? 
                        { opacity: 1, y: 0 } : 
                        { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <div className="stat-item">
                        <span className="stat-value">{project.stats.performance}%</span>
                        <span className="stat-label">Performance</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">{project.stats.users}</span>
                        <span className="stat-label">Users</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">{project.stats.rating}⭐</span>
                        <span className="stat-label">Rating</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {project.featured && (
                    <motion.div
                      className="featured-badge"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <motion.h3 
                    className="project-title"
                    whileHover={{ color: "#667eea" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <motion.a
                      href={project.liveDemo}
                      className="action-btn primary"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>🚀 Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.sourceCode}
                      className="action-btn secondary"
                      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>💻 Source Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="project-border"
                  animate={hoveredProject === project.id ? {
                    background: [
                      "linear-gradient(45deg, #667eea, #764ba2)",
                      "linear-gradient(45deg, #f093fb, #f5576c)",
                      "linear-gradient(45deg, #4facfe, #00f2fe)",
                      "linear-gradient(45deg, #667eea, #764ba2)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="no-projects"
              variants={itemVariants}
            >
              <h3>No projects found for this category</h3>
              <p>Try selecting a different filter or check back later!</p>
            </motion.div>
          )}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="projects-footer"
          variants={itemVariants}
        >
          <motion.button
            className="load-more-btn"
            whileHover={{ 
              scale: 1.05, 
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔄
            </motion.span>
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;