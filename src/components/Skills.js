import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  const [query, setQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();

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
    

  const categories = useMemo(() => Object.keys(skillCategories), [skillCategories]);

  const filteredSkills = useMemo(() => {
    const list = skillCategories[activeCategory]?.skills || [];
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((s) => String(s.name).toLowerCase().includes(q));
  }, [activeCategory, query, skillCategories]);


  const duration = shouldReduceMotion ? 0 : 0.6;
  const offsetY = shouldReduceMotion ? 0 : 30;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
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
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col items-center gap-4">
              <div
                role="tablist"
                aria-label="Skill categories"
                className="flex flex-wrap justify-center gap-2"
              >
                {categories.map((category, idx) => (
                  <motion.button
                    key={category}
                    role="tab"
                    aria-selected={activeCategory === category}
                    tabIndex={activeCategory === category ? 0 : -1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        const next = (idx + 1) % categories.length;
                        setActiveCategory(categories[next]);
                      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prev = (idx - 1 + categories.length) % categories.length;
                        setActiveCategory(categories[prev]);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                        : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
                    }`}
                  >
                    {skillCategories[category].title}
                  </motion.button>
                ))}
              </div>

              {/* Search/filter */}
              <div className="w-full max-w-md">
                <label htmlFor="skills-search" className="sr-only">Filter skills</label>
                <input
                  id="skills-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search skills (e.g., React, SQL)"
                  className="w-full rounded-lg bg-secondary-900 border border-secondary-700 text-secondary-100 placeholder-secondary-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            // Removed mount/unmount animation to avoid jarring transitions on tab change
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((skill, index) => (
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
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Skills;