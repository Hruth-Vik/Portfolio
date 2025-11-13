import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiDownload } from 'react-icons/hi';
import AchievementsGrid from '../sections/About/components/AchievementsGrid.jsx';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { achievements } = require('../data/achievements.js');
  /* const achievementsLocal = [
    {
      icon: HiTrendingUp,
      title: 'ICPC Hackathon',
      description: 'Ranked 44th globally',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: HiAcademicCap,
      title: 'Flipkart Grid 6.0',
      description: 'Top 327th position',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: HiCode,
      title: 'Target Intern',
      description: 'Data Engineer Intern',
      color: 'from-green-400 to-blue-500',
    },
  ]; */

  const RESUME_VIEW_URL = 'https://drive.google.com/file/d/1xCDLq1BQ6anfhUzlOXFOEVdMfh2mAbAb/view?usp=sharing';
  const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1xCDLq1BQ6anfhUzlOXFOEVdMfh2mAbAb';

  const downloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = RESUME_DOWNLOAD_URL;
      link.setAttribute('download', 'Hruthvik_Naik_Resume.pdf');
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      window.open(RESUME_VIEW_URL, '_blank', 'noopener,noreferrer');
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" style={{ '--grad1': '#14B8A6', '--grad2': '#3B82F6' }}>
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p className="text-lg text-secondary-300 max-w-3xl mx-auto">
              Passionate about turning data into insights and building systems that scale
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl glass-panel neon-card p-1"
                >
                  <div className="w-full h-96 lg:h-[500px] bg-secondary-800 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">HN</span>
                      </div>
                      <p className="text-secondary-400 font-mono">Profile Photo</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full opacity-20 blur-xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Data Engineer & Full Stack Developer
                </h3>
                
                <div className="space-y-4 text-secondary-300 leading-relaxed">
                  <p>
                    Currently working as a <span className="text-primary-400 font-semibold">Data Engineer Intern at Target</span>, 
                    where I build scalable data pipelines using Apache Spark, Scala, and Hadoop-based systems. 
                    My passion lies in transforming raw data into actionable insights.
                  </p>
                  
                  <p>
                    I've achieved significant milestones in competitive programming, ranking <span className="text-accent-400 font-semibold">44th globally 
                    in ICPC Hackathon</span> and securing <span className="text-accent-400 font-semibold">top 327th position in Flipkart Grid 6.0</span>, 
                    competing with leading institutes across the country.
                  </p>
                  
                  <p>
                    With a strong background in <span className="text-primary-400 font-semibold">MERN Stack, TypeScript, 
                    Supabase, Prisma, and Express.js</span>, I enjoy building full-stack applications that solve 
                    real-world problems with clean, maintainable code.
                  </p>
                </div>
              </div>

              {/* Achievements Cards */}
              <AchievementsGrid items={achievements} />

              {/* Download Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="btn-primary flex items-center gap-2 group"
              >
                <HiDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About;