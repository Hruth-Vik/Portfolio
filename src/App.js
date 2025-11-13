import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';

// Remove inline components and use modular sections instead
/* /* const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          &lt;HN/&gt;
        </div>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li><button className="hire-btn" onClick={() => scrollToSection('contact')}>Hire Me</button></li>
        </ul>
      </div>
    </nav>
  );
}; */

/* const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="greeting">👋 Hello, I'm</p>
          <h1 className="hero-title">Hruthvik Naik</h1>
          <h2 className="hero-subtitle">Data Engineer Intern @ Target</h2>
          <p className="hero-description">
            I craft exceptional digital experiences with clean code and innovative design. 
            Passionate about building scalable data pipelines and intelligent systems that make a difference.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; */

/* const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Data Engineer & Full Stack Developer</h3>
            <p>
              Currently working as a <span className="highlight">Data Engineer Intern at Target</span>, 
              where I build scalable data pipelines using Apache Spark, Scala, and Hadoop-based systems.
            </p>
            <p>
              I've achieved significant milestones including ranking <span className="highlight">44th globally 
              in ICPC Hackathon</span> and securing <span className="highlight">top 327th position in Flipkart Grid 6.0</span>.
            </p>
            <div className="achievements">
              <div className="achievement-card">
                <h4>ICPC Hackathon</h4>
                <p>Ranked 44th globally</p>
              </div>
              <div className="achievement-card">
                <h4>Flipkart Grid 6.0</h4>
                <p>Top 327th position</p>
              </div>
              <div className="achievement-card">
                <h4>Target Intern</h4>
                <p>Data Engineer</p>
              </div>
            </div>
            <button className="btn-primary">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}; */

/* const Skills = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Scala', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 82 },
    { name: 'Apache Spark', level: 88 },
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 87 },
    { name: 'MongoDB', level: 85 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; */

/* const Projects = () => {
  const projects = [
    {
      title: 'TrustCampus',
      description: 'A community-based college platform for verified student interaction.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI SaaS Podcast Platform',
      description: 'AI-powered podcast platform with transcription and analysis.',
      tech: ['Next.js', 'Python', 'TensorFlow'],
      github: '#',
      live: '#'
    },
    {
      title: 'E-Commerce Server',
      description: 'High-performance backend system for production load.',
      tech: ['Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Data Pipeline Analytics',
      description: 'Real-time data processing with Apache Spark and Scala.',
      tech: ['Apache Spark', 'Scala', 'Hadoop'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn-secondary">GitHub</a>
                  <a href={project.live} className="btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; */

/* const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h4>Email</h4>
              <p>hruthviknaik03@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+91 9481323171</p>
            </div>
            <div className="contact-item">
              <h4>Location</h4>
              <p>Bangalore, India</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}; */

/* const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Designed & Developed by Hruthvik Naik</p>
      </div>
    </footer>
  );
}; */

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div className="App relative">
      <ParticlesBackground />
      <Navbar />
      <ScrollIndicator />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;