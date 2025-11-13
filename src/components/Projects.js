import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import TechTag from '../sections/Projects/components/TechTag.jsx';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { projects: projectsData } = require('../data/projects.js');
  const projects = projectsData.map((p, i) => ({
    id: i + 1,
    title: p.title,
    subtitle: p.subtitle,
    period: p.period,
    description: p.description,
    image: p.image || '/api/placeholder/600/400',
    tech: p.tags || p.tech || [],
    github: p.github,
    live: p.demo || p.live,
  }));

    /* {
      id: 1,
      title: 'TrustCampus',
      description: 'A community-based college platform for verified student interaction. Built with React.js frontend and Node.js backend, featuring real-time messaging, academic resource sharing, and student verification system.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
      github: 'https://github.com/hruthviknaik/trustcampus',
      live: 'https://trustcampus.vercel.app',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'AI SaaS Podcast Platform',
      description: 'An intelligent podcast platform with AI-powered transcription, content analysis, and recommendation engine. Built with Next.js frontend and Python backend using machine learning algorithms.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/hruthviknaik/ai-podcast-platform',
      live: 'https://ai-podcast-platform.vercel.app',
      category: 'AI/ML',
    },
    {
      id: 3,
      title: 'E-Commerce Scalable Server',
      description: 'A high-performance e-commerce backend system designed for production load. Features include inventory management, order processing, payment integration, and real-time analytics.',
      image: '/api/placeholder/600/400',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Docker'],
      github: 'https://github.com/hruthviknaik/ecommerce-server',
      live: 'https://ecommerce-api-demo.herokuapp.com',
      category: 'Backend',
    },
    {
      id: 4,
      title: 'Data Pipeline Analytics',
      description: 'A robust data processing pipeline using Apache Spark and Scala for real-time analytics. Processes large datasets and provides insights through interactive dashboards.',
      image: '/api/placeholder/600/400',
      tech: ['Apache Spark', 'Scala', 'Hadoop', 'Kafka', 'D3.js'],
      github: 'https://github.com/hruthviknaik/data-pipeline',
      live: 'https://data-analytics-dashboard.vercel.app',
      category: 'Data Engineering',
    },
  ]; */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative" style={{ '--grad1': '#6366F1', '--grad2': '#D946EF' }}>
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
              A showcase of my recent work spanning data engineering, full-stack development, and AI/ML
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl glass-panel neon-card hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 light:from-primary-500/5 light:to-accent-500/5 flex items-center justify-center">
                    <div className="text-center">
                      <HiCode className="w-16 h-16 mx-auto mb-4 text-primary-400" />
                      <p className="text-secondary-400 font-mono">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent light:from-white/85 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-secondary-800/80 rounded-full text-white hover:text-primary-400 transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-secondary-800/80 rounded-full text-white hover:text-primary-400 transition-colors"
                    >
                      <HiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-on-bg group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <span className="tag-badge" style={{ color: 'var(--grad2)' }}>
                        {project.subtitle}
                      </span>
                    )}
                  </div>
                  
                  {Array.isArray(project.description) ? (
                    <ul className="text-secondary-300 mb-4 leading-relaxed list-disc ml-5 space-y-1">
                      {project.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-secondary-300 mb-4 leading-relaxed">{project.description}</p>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tech || []).map((tech, techIndex) => (
                      <TechTag key={techIndex} title={`Tech: ${tech}`}>{tech}</TechTag>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors light:bg-white light:text-slate-900 light:border light:border-slate-200 light:hover:bg-slate-50"
                      >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <HiEye className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 light:opacity-20">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Projects;