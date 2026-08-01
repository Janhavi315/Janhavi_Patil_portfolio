import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen } from 'lucide-react';

const TimelineItem = ({ item, isLeft }) => {
  const slideDirection = isLeft ? -50 : 50;

  return (
    <div className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'}`}>
      <div className="timeline-dot" />
      <motion.div
        initial={{ opacity: 0, x: slideDirection }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        className="glass-card timeline-content"
      >
        <span className="timeline-date">
          <Calendar size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
          {item.date}
        </span>
        <h3 className="timeline-title">{item.degree}</h3>
        <h4 className="timeline-subtitle">{item.field}</h4>
        
        <div className="timeline-details">
          <p><strong>Institution:</strong> {item.school}</p>
          {item.board && <p><strong>Board/University:</strong> {item.board}</p>}
          <p><strong>Status/Result:</strong> {item.status}</p>
          {item.cgpa && <p><strong>Academic Score:</strong> {item.cgpa}</p>}
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      date: "2023 - 2027 (Expected)",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Engineering",
      school: "A. C. Patil College of Engineering",
      board: "University of Mumbai",
      status: "Final Year Student",
      cgpa: "CGPA: 7.5 / 10"
    },
    {
      date: "2020 - 2022",
      degree: "Senior Secondary (Class XII)",
      field: "Science Stream",
      school: "C. S. Bafna Junior College",
      board: "Maharashtra State Board (MH, Dhule)",
      status: "Completed",
      cgpa: "Percentage: 57.33%"
    }
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline-container">
          {educationData.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              isLeft={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
