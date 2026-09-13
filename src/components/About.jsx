import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Cloud,
  CheckSquare,
} from "lucide-react";

// Improved CountUp Component
const CountUp = ({ start = 0, end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const endValue = parseInt(end, 10);

    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    let current = start;
    const step = start < endValue ? 1 : -1;
    const totalSteps = Math.abs(endValue - start);

    if (totalSteps === 0) {
      setCount(endValue);
      return;
    }

    const incrementTime = Math.max(
      (duration * 1000) / totalSteps,
      30
    );

    const timer = setInterval(() => {
      current += step;
      setCount(current);

      if (current === endValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    {
      icon: <GraduationCap size={28} />,
      number: 2027,
      start: 2000 ,
      label: "Graduation Year",
      description: "B.E. Computer Engineering Student",
      suffix: "",
    },
    {
      icon: <CheckSquare size={28} />,
      number: 5,
      start: 0,
      label: "Projects Completed",
      description: "",
      suffix: "+",
    },
    {
      icon: <Code size={28} />,
      number: "React",
      label: "Developer Profile",
      description: "SPA & Frontend Build",
      suffix: "",
    },
    {
      icon: <Cloud size={28} />,
      number: "AWS",
      label: "Cloud Learner",
      description: "Practitioner Skills",
      suffix: "",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">
            Get To Know Me
          </span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card about-card"
          >
            <p style={{ marginBottom: "1.5rem" }}>
              I am a{" "}
              <strong>
                Final Year Computer Science & Engineering
              </strong>{" "}
              student at{" "}
              <strong>A. C. Patil College of Engineering</strong>,
              affiliated with the{" "}
              <strong>University of Mumbai</strong>. I am highly
              passionate about Web Development, Cloud Computing,
              and Software Engineering.
            </p>

            <p>
              I enjoy designing and building modern,
              high-performance web applications, solving
              real-world problems, and continuously upgrading my
              tech stack. I am eager to begin my career as a
              Software Engineer, collaborate with talented teams,
              and contribute to impactful products.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={cardVariants}
              >
                <div className="stat-icon">{stat.icon}</div>

                <div className="stat-number">
                  {typeof stat.number === "string" &&
                  isNaN(parseInt(stat.number)) ? (
                    <span>{stat.number}</span>
                  ) : (
                    <CountUp
                      start={stat.start || 0}
                      end={stat.number}
                      duration={1.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                <div className="stat-label">{stat.label}</div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.4rem",
                  }}
                >
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