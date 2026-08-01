import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Palette, Cpu, Atom, Server, Layers, 
  Database, Table, Binary, Braces, Cloud, 
  Laptop, BarChart3 
} from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Cloud & Tools'];

  const skillsData = [
    // Frontend
    { name: 'HTML', category: 'Frontend', level: 90, icon: <Code2 size={24} /> },
    { name: 'CSS', category: 'Frontend', level: 85, icon: <Palette size={24} /> },
    { name: 'JavaScript', category: 'Frontend', level: 80, icon: <Cpu size={24} /> },
    { name: 'React.js', category: 'Frontend', level: 85, icon: <Atom size={24} /> },
    // Backend
    { name: 'Node.js', category: 'Backend', level: 75, icon: <Server size={24} /> },
    { name: 'Express.js', category: 'Backend', level: 70, icon: <Layers size={24} /> },
    // Database
    { name: 'MongoDB', category: 'Database', level: 75, icon: <Database size={24} /> },
    { name: 'MySQL', category: 'Database', level: 80, icon: <Table size={24} /> },
    // Programming
    { name: 'Python', category: 'Programming', level: 80, icon: <Braces size={24} /> },
    { name: 'C', category: 'Programming', level: 75, icon: <Binary size={24} /> },
    // Cloud & Tools
    { name: 'AWS', category: 'Cloud & Tools', level: 65, icon: <Cloud size={24} /> },
    { name: 'GitHub', category: 'Cloud & Tools', level: 85, icon: <GithubIcon size={24} /> },
    { name: 'VS Code', category: 'Cloud & Tools', level: 90, icon: <Laptop size={24} /> },
    { name: 'Power BI', category: 'Cloud & Tools', level: 70, icon: <BarChart3 size={24} /> }
  ];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 80 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Do</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        {/* Tab Buttons */}
        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`skill-tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card skill-card glow-border"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="skill-info">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>

                <div className="skill-bar-container">
                  <div className="skill-bar-header">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
