// File: src/components/Skills/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Code2, Database, Palette, Server, Smartphone, 
  Cloud, GitBranch, Zap, Globe, Cpu, Shield, Rocket 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    icon: Code2,
    color: '#00f5ff',
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️', description: 'Advanced component architecture & hooks' },
      { name: 'Next.js', level: 75, icon: '▲', description: 'SSR, SSG, and full-stack applications' },
      { name: 'JavaScript ES6+', level: 95, icon: '🟨', description: 'Modern JS features & async programming' },
      { name: 'HTML5 & CSS3', level: 92, icon: '🎨', description: 'Semantic markup & advanced styling' },
      { name: 'Tailwind CSS', level: 90, icon: '💨', description: 'Utility-first CSS framework' },
      { name: 'Framer Motion', level: 85, icon: '🎭', description: 'Smooth animations & interactions' },
      { name: 'Three.js', level: 75, icon: '🎲', description: '3D graphics and WebGL' },
      { name: 'ShadCn', level: 88, icon: '📐', description: 'Responsive UI components' },
      { name: 'Aceternity UI', level: 88, icon: '🎨', description: 'Asthetic Design' } // New instead of TypeScript
 // New instead of TypeScript
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: Server,
    color: '#ff0080',
    skills: [
      { name: 'Node.js', level: 92, icon: '🟢', description: 'Server-side JavaScript runtime' },
      { name: 'Express.js', level: 90, icon: '🚂', description: 'RESTful APIs & middleware' },
      { name: 'MongoDB', level: 88, icon: '🍃', description: 'NoSQL database & aggregation' },
      { name: 'PostgreSQL', level: 82, icon: '🐘', description: 'Relational database & SQL' },
      { name: 'MySQL', level: 85, icon: '🗄️', description: 'Relational database management' },
      { name: 'PHP', level: 75, icon: '🐘', description: 'Backend scripting & dynamic apps' },
      { name: 'Laravel', level: 70, icon: '🎯', description: 'MVC framework for scalable apps' },
      { name: 'JWT Authentication', level: 85, icon: '🔐', description: 'Secure token-based auth' }
    ]
  },
  tools: {
    title: 'Tools & Workflow',
    icon: Cloud,
    color: '#9333ea',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: '🐱', description: 'Version control & collaboration' },
      { name: 'Vercel', level: 88, icon: '▲', description: 'Frontend deployment & CDN' },
      { name: 'Netlify', level: 85, icon: '🌐', description: 'Static hosting & CI/CD' },
      { name: 'Postman', level: 85, icon: '📮', description: 'API testing & documentation' },
      { name: 'cPanel', level: 80, icon: '⚙️', description: 'Web hosting & management' },
      { name: 'VS Code', level: 95, icon: '💙', description: 'IDE customization & extensions' },
      { name: 'NPM & Yarn', level: 88, icon: '📦', description: 'Package management & scripts' },
      { name: 'Chrome DevTools', level: 90, icon: '🛠️', description: 'Debugging & performance optimization' }
    ]
  },
  design: {
    title: 'Design to Code',
    icon: Palette,
    color: '#10b981',
    skills: [
      { name: 'Figma to Code', level: 90, icon: '🎨', description: 'Pixel-perfect conversion into responsive layouts' },
      { name: 'Adobe XD to Code', level: 85, icon: '🔮', description: 'Turning wireframes into functional UI' },
      { name: 'Responsive Design', level: 92, icon: '📱', description: 'Mobile-first implementation' },
      { name: 'Cross-Browser Compatibility', level: 87, icon: '🌍', description: 'Ensuring consistent UI across browsers' },
      { name: 'Performance Optimization', level: 88, icon: '⚡', description: 'Fast-loading & optimized pages' },
      { name: 'Component Reusability', level: 85, icon: '♻️', description: 'Clean, maintainable UI components' },
      { name: 'CSS Animations', level: 82, icon: '✨', description: 'Enhancing interactivity & UX' },
      { name: 'UI Prototyping Integration', level: 84, icon: '🧩', description: 'Seamless transition from design to code' }
    ]
  }
};


  const achievements = [
    { 
      title: 'Full Stack Mastery', 
      description: 'Complete MERN stack proficiency',
      icon: Rocket,
      progress: 92
    },
    { 
      title: 'Performance Optimization', 
      description: 'Advanced optimization techniques',
      icon: Zap,
      progress: 88
    },
    { 
      title: 'Security Best Practices', 
      description: 'Secure coding & data protection',
      icon: Shield,
      progress: 85
    },
    { 
      title: 'Scalable Architecture', 
      description: 'Microservices & system design',
      icon: Cpu,
      progress: 82
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Skills & Expertise</h2>
            <p className="section-subtitle">
              Crafting exceptional digital experiences with cutting-edge technologies
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div className="category-tabs" variants={itemVariants}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--category-color': category.color }}
              >
                <category.icon size={20} />
                <span>{category.title}</span>
                <div className="tab-indicator"></div>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="skills-container" variants={itemVariants}>
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-card ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{ '--skill-color': skillCategories[activeCategory].color }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  
                  <div className="skill-overlay"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div className="achievements-section" variants={itemVariants}>
            <h3 className="achievements-title">Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="achievement-icon">
                    <achievement.icon size={24} />
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <div className="achievement-progress">
                      <div className="achievement-track">
                        <motion.div
                          className="achievement-fill"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${achievement.progress}%` } : {}}
                          transition={{ duration: 2, delay: 1.5 + index * 0.2 }}
                        />
                      </div>
                      <span className="achievement-percentage">{achievement.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Visualization */}
          <motion.div className="tech-stack-viz" variants={itemVariants}>
            <h3 className="viz-title">My Tech Universe</h3>
            <div className="tech-orbit">
              <div className="orbit-center">
                <div className="center-avatar">
                  <Code2 size={30} />
                </div>
              </div>
              
              {/* Rotating Tech Icons */}
              {['⚛️', '🟢', '🍃', '📘', '🎨', '☁️', '🔐', '📱'].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`orbit-item orbit-${index}`}
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className="tech-bubble"
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {tech}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="skills-bg">
        <div className="code-rain">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="code-line"
              animate={{
                y: ['-100vh', '100vh']
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 8 + 8}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`floating-geometry geometry-${i % 4}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;