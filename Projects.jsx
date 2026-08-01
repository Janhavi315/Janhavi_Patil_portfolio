import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import proj1Img from '../assets/project1.jpg';
import proj2Img from '../assets/project2.jpg';
import proj3Img from '../assets/project3.jpg';
import proj4Img from '../assets/project4.jpg';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Project Card with 3D Tilt Effect
const ProjectCard = ({ project }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Calculate rotation: maximum 12 degrees
    const rX = -(y / (box.height / 2)) * 12;
    const rY = (x / (box.width / 2)) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="project-card glass-card glow-border"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* 3D Content Wrapper */}
      <div style={{ transform: 'translateZ(20px)', height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Project Preview Image */}
        {/* <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-overlay">
            <span style={{ fontSize: '0.85rem', color: '#00f2fe', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Star size={14} fill="#00f2fe" /> Featured Project
            </span>
          </div>
        </div> */}

        {/* Card Content */}
        <div className="project-card-content">
          <h3 className="project-title">
            {project.title}
            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{project.year}</span>
          </h3>

          <p className="project-description">{project.description}</p>

          {/* Features List */}
          <ul className="project-features">
            {project.features.map((feature, idx) => (
              <li key={idx} className="project-feature-item">
                <CheckCircle2 size={14} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Tags */}
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="project-buttons">
            {/* <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noreferrer" 
              className="project-btn demo"
            >
              <ExternalLink size={16} />
              Live Demo
            </a> */}
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="project-btn code"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Cloud Storage Website",
      description: "A premium cloud storage application for uploading, organizing, and accessing files securely, featuring granular directory management and multi-format previewers.",
      year: "2026",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      image: proj1Img,
      features: [
        "Secure User Registration & JWT Authentication",
        "Upload images, videos, and documents",
        "Interactive dashboard with category breakdowns",
        "Fast and robust cloud asset streaming"
      ],
      // demoLink: "https://github.com/Janhavi315/CloudStorageByJanhaviPatil.git",
      githubLink: "https://github.com/Janhavi315/CloudStorageByJanhaviPatil.git"
    },
    
    {
      title: "Brain Buzzz – Coding Quiz",
      description: "An interactive code compiler and educational quiz website for developers to test their syntax skills in multiple popular coding languages.",
      year: "2026",
      tags: ["React.js", "JavaScript", "Node.js"],
      image: proj3Img,
      features: [
        "Quiz countdown timer and dynamic scoreboard",
        "Fully integrated browser code compiler",
        "Private game rooms to invite classmates",
        "Categorized challenges (JS, Python, Java)"
      ],
      // demoLink: "https://github.com/anand04codes/brainbuzz.git",
      githubLink: "https://github.com/anand04codes/brainbuzz.git"
    },
    {
      title: "InfoBook – Student Profile",
      description: "A dedicated academic social networking platform inspired by LinkedIn, tailored for computer engineering students to collaborate on academic topics.",
      year: "2026",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: proj4Img,
      features: [
        "Detailed profile creation with education tracker",
        "Follow classmates and build connections",
        "Interactive feed with posts, likes, and comments",
        "Dynamic updates for project collaborations"
      ],
      // demoLink: "https://github.com/janhavi315",
      // githubLink: "https://github.com/janhavi315"
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Creative Works</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
