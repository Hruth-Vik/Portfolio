import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTypescript, SiScala, SiExpress, SiApachespark, SiApachehadoop, SiMongodb, SiPostgresql, SiSupabase, SiLinux, SiGit, SiVisualstudiocode } from 'react-icons/si';
// Removed AnimatedBar in favor of icon-based badges
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('programming');

  // Load skills from data and normalize
  // Expected structure: { categoryKey: { title, skills: [{ name, level?, color? }] } }
  // Fallbacks are applied if level or color are missing
  const { skills: skillsData } = require('../data/skills.js');

  const defaultColors = [
    'from-orange-400 to-red-500',
    'from-red-500 to-pink-500',
    'from-yellow-400 to-orange-500',
    'from-blue-400 to-blue-600',
    'from-green-400 to-teal-500',
  ];

  const skillCategories = Object.entries(skillsData).reduce((acc, [key, list], idx) => {
    const mapKey = key.toLowerCase().replace(/\s&\s|\s+/g, (m) => (m.includes('&') ? ' ' : ''))
      .replace(/\s/g, '')
      .replace('&', '')
      .replace(/[^a-z]/g, '') || `cat${idx}`;
    const title = key;
    const normalized = (Array.isArray(list) ? list : []).map((name, i) => ({
      name,
      level: 75 + ((i * 7) % 20),
      color: defaultColors[i % defaultColors.length],
    }));
    acc[mapKey] = { title, skills: normalized };
    return acc;
  }, {});

    // categories are now built from data above
    // removed hardcoded fallback object
    

  const categories = Object.keys(skillCategories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  // removed unused skillVariants to satisfy eslint
  /* const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };
 */

  return (
    <section id="skills" className="py-20 lg:py-32 relative" style={{ '--grad1': '#F59E0B', '--grad2': '#EC4899' }}>
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
                  }`}
                >
                  {skillCategories[category].title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            // Removed mount/unmount animation to avoid jarring transitions on tab change
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group p-6 rounded-xl glass-panel neon-card hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-on-bg group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                
                {/* Icon-based skill display: tech icon or initials, Apple-like tile */}
                <div className="flex items-center gap-4">
                  {(() => {
                    const map = {
                      React: FaReact,
                      'React.js': FaReact,
                      Next: SiNextdotjs,
                      'Next.js': SiNextdotjs,
                      JavaScript: SiJavascript,
                      TypeScript: SiTypescript,
                      Java: FaJava,
                      Scala: SiScala,
                      Express: SiExpress,
                      'Express.js': SiExpress,
                      Node: FaNodeJs,
                      'Node.js': FaNodeJs,
                      Spark: SiApachespark,
                      Hadoop: SiApachehadoop,
                      MongoDB: SiMongodb,
                      PostgreSQL: SiPostgresql,
                      Supabase: SiSupabase,
                      Linux: SiLinux,
                      Git: SiGit,
                      'VS Code': SiVisualstudiocode,
                    };
                    const name = String(skill.name || '');
                    const key = Object.keys(map).find(k => name.toLowerCase().includes(k.toLowerCase()));
                    const IconComp = key ? map[key] : FaReact; // default generic icon if not mapped
                    return (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[var(--grad1)] to-[var(--grad2)] flex items-center justify-center text-white shadow">
                          <IconComp className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-on-bg font-medium">{name}</span>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className=\"absolute inset-0 -z-10 opacity-30 light:opacity-15\">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Skills;