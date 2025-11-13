import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative" style={{ '--grad1': '#06B6D4', '--grad2': '#8B5CF6' }}>
      <div className="container-width section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and impact</p>
        </motion.div>

        <div className="mt-10 space-y-6">
          {experience.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="p-6 rounded-xl glass-panel border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-on-bg font-semibold text-xl">{exp.role} <span className="text-primary-400">@ {exp.company}</span></h3>
                <div className="text-secondary-300 light:text-secondary-600">{exp.period}</div>
              </div>
              <div className="text-secondary-400 light:text-secondary-700">{exp.location}</div>
              <ul className="mt-4 ml-4 list-disc text-secondary-300 space-y-2">
                {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
