import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Network,
  Cpu,
  ArrowRight,
  Database,
  BarChart3,
  Binary,
  Globe,
} from "lucide-react";

const Certifications = () => {
  const certsData = [
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "LinkedIn Learning",
      icon: <Award size={26} />,
      link: "https://drive.google.com/file/d/1mYMXJK_8n9oSgtLldwP4tWr2kku-wrPA/view?usp=drive_link",
    },
    {
      title: "SkillsBuild Certificate",
      provider: "IBM",
      icon: <Cpu size={26} />,
      link: "https://drive.google.com/file/d/1zvrFPA3HXpVinHYTLr9uEo04UwniMGVu/view?usp=drive_link",
    },
    {
      title: "Demystifying Networking",
      provider: "NPTEL",
      icon: <Network size={26} />,
      link: "https://drive.google.com/file/d/1GjwNsDaQN8P9PDQbAD13s7kzr_ZMc0ba/view?usp=drive_link",
    },
    {
      title: "Systems and Usable Security",
      provider: "NPTEL",
      icon: <ShieldCheck size={26} />,
      link: "https://drive.google.com/file/d/1I2ikpkt7PO4dLAz-oCXGe7IMzGybgDdl/view?usp=drive_link",
    },
    {
      title: "Database Foundations: Administration",
      provider: "LinkedIn Learning",
      icon: <Database size={26} />,
      link: "https://drive.google.com/file/d/1NPeFwkDyY7755XKMcyjXuQoc_eugJVDn/view?usp=sharing",
    },
    {
      title: "Learning Data Analytics: Foundations",
      provider: "LinkedIn Learning",
      icon: <BarChart3 size={26} />,
      link: "https://drive.google.com/file/d/1vejjyQlU0CBvWh4f7x5J5aSozMooZl1j/view?usp=sharing",
    },
    {
      title: "Learning Python",
      provider: "LinkedIn Learning",
      icon: <Binary size={26} />,
      link: "https://drive.google.com/file/d/1CZ9Qz8F3eRNchbX6O2lfJt-GOmadGWRL/view?usp=sharing",
    },
    {
      title: "Networking Foundations: IP Addressing",
      provider: "LinkedIn Learning",
      icon: <Network size={26} />,
      link: "https://drive.google.com/file/d/1bfN-HvBkt1tJoFDphpu0YiNHUXjUHvXY/view?usp=sharing",
    },
    {
      title: "Networking Foundations: Networking Basics",
      provider: "LinkedIn Learning",
      icon: <Globe size={26} />,
      link: "https://drive.google.com/file/d/1MbdNxPq_NCZbWN8wrC7n3_jLRaydYDmF/view?usp=sharing",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <section id="certifications" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Verified Skills</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <motion.div
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card cert-card glow-border"
              whileHover={{ y: -6 }}
            >
              <div className="cert-icon-wrapper">{cert.icon}</div>

              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-provider">{cert.provider}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
              >
                Verify Credential
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;