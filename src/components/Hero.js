import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
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
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ '--grad1': '#FF7A18', '--grad2': '#A100FF' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-primary-500/10 via-accent-500/5 to-primary-500/10 blur-3xl light:opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-accent-500/10 via-primary-500/5 to-accent-500/10 blur-3xl light:opacity-25"
        />
      </div>

      {/* Content */}
      <div className="container-width section-padding relative z-10">
          {/* Copy with parallax */}
          <motion.div style={{ y: ySlow }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-4xl mx-auto pb-20"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-secondary-300 font-mono"
          >
            👋 Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95]"
          >
            <span className="gradient-text">Hruthvik Naik</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-200"
          >
            <TypewriterEffect
              words={[
                'Data Engineer Intern @ Target',
                'Full Stack Developer',
                'Problem Solver',
                'Innovation Enthusiast',
              ]}
              className="gradient-text"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences with clean code and innovative design. 
            Passionate about building scalable data pipelines and intelligent systems that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-secondary flex items-center gap-2"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;