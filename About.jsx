import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cloud, CheckSquare } from 'lucide-react';

// Simple CountUp Component
const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end, 10);
    if (isNaN(endValue)) {
      setCount(end); // Not a number, just set directly
      return;
    }

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { 
      icon: <GraduationCap size={28} />, 
      number: "2027", 
      label: "Graduation Year",
      description: "B.Tech CSE student",
      suffix: ""
    },
    { 
      icon: <CheckSquare size={28} />, 
      number: "5", 
      label: "Projects Completed",
      description: "Web & Python apps",
      suffix: "+"
    },
    { 
      icon: <Code size={28} />, 
      number: "React", 
      label: "Developer Profile",
      description: "SPA & Frontend build",
      suffix: ""
    },
    { 
      icon: <Cloud size={28} />, 
      number: "AWS", 
      label: "Cloud Learner",
      description: "Practitioner skills",
      suffix: ""
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.1 }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Bio Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card about-card"
          >
            <p style={{ marginBottom: '1.5rem' }}>
              I am a <strong>Final Year Computer Science & Engineering</strong> student at 
              {" "}<strong>A. C. Patil College of Engineering</strong>, affiliated with the 
              {" "}<strong>University of Mumbai</strong>. I am highly passionate about Web Development, 
              Cloud Computing, and Software Engineering.
            </p>
            <p>
              I enjoy designing and building modern, high-performance web applications, solving real-world complex problems, and continuously upgrading my tech stack. Eager to launch my career as a Software Engineer, I am constantly looking for opportunities where I can collaborate with skilled professionals, contribute value to impactful products, and grow as a developer.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="about-stats"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {typeof stat.number === 'string' && isNaN(parseInt(stat.number)) ? (
                    <span>{stat.number}</span>
                  ) : (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
export { CountUp };
