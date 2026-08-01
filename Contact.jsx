import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';

const GithubIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate sending message
    setIsSubmitted(true);
    setError('');
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <div>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                I am currently looking for opportunities to contribute, learn, and grow as a software engineer. Whether you have a project collaboration, job opening, or just want to say hi, feel free to drop a message!
              </p>
            </div>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-detail-item">
                <a href="mailto:janhavipatil305@gmail.com" className="contact-detail-icon">
                  <Mail size={22} />
                </a>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email</span>
                  <a href="mailto:janhavipatil305@gmail.com" className="contact-detail-value">
                    janhavipatil305@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-detail-item">
                <a href="https://linkedin.com/in/janhavi-patil-116578252" target="_blank" rel="noreferrer" className="contact-detail-icon">
                  <LinkedinIcon size={22} />
                </a>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/janhavi-patil-116578252" target="_blank" rel="noreferrer" className="contact-detail-value">
                    linkedin.com/in/janhavi-patil-116578252
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-detail-item">
                <a href="https://github.com/janhavi315" target="_blank" rel="noreferrer" className="contact-detail-icon">
                  <GithubIcon size={22} />
                </a>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">GitHub</span>
                  <a href="https://github.com/janhavi315" target="_blank" rel="noreferrer" className="contact-detail-value">
                    github.com/janhavi315
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card contact-form-container"
          >
            {isSubmitted ? (
              <div className="toast-message" style={{ margin: '3rem 0' }}>
                <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={20} /> Success!
                </h4>
                <p>Thank you, Janhavi has received your message. She will get back to you shortly!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && (
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {error}
                  </div>
                )}
                
                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">Subject</label>
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="form-label">Your Message</label>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
