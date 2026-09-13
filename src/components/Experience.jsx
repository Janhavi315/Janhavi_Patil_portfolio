import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const internshipData = [
    {
      role: "Junior Web Developer Intern",
      company: "Shree Reva Tech",
      location: "Pune, Maharashtra",
      duration: "Dec 2025 - Feb 2026",
      points: [
        "Developed and maintained clean, responsive user interfaces using React.js and CSS.",
        "Collaborated with frontend and backend developers to integrate APIs and resolve design bottlenecks.",
        "Optimized website load speed and fixed layout bugs to improve overall user experience across device screens."
      ],
      skills: ["React.js", "HTML", "CSS", "JavaScript"]
    },
    {
      role: "Data Science Intern",
      company: "Imarticus Learning",
      location: "Thane, Maharashtra",
      duration: "June 8 - August 15",
      points: [
        "Performed exploratory data analysis (EDA) and built clean data visualizations for business metrics.",
        "Preprocessed and processed structured datasets using Python, Pandas, and NumPy libraries.",
        "Assisted in creating interactive data reports and Power BI dashboards to track academic networking engagement."
      ],
      skills: ["Python", "Pandas", "NumPy", "Power BI", "SQL"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Professional Growth</span>
          <h2 className="section-title">Internships</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}
        >
          {internshipData.map((intern, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="glass-card glow-border"
              whileHover={{ y: -5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Briefcase size={20} style={{ color: '#00f2fe' }} />
                    {intern.role}
                  </h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: '600', marginTop: '0.25rem' }}>
                    {intern.company}
                  </h4>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} />
                    {intern.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} />
                    {intern.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '0 0.5rem' }}>
                {intern.points.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <CheckCircle2 size={16} style={{ color: '#00f2fe', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                {intern.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.3rem 0.8rem', 
                      background: 'rgba(0, 242, 254, 0.08)', 
                      border: '1px solid rgba(0, 242, 254, 0.2)', 
                      color: 'var(--accent-cyan)', 
                      borderRadius: '20px', 
                      fontWeight: '500' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
