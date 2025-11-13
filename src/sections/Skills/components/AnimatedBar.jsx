import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBar = ({ level = 0, color = 'from-primary-500 to-accent-500', inView, index = 0 }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative h-3 bg-secondary-700 rounded-full overflow-hidden">
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} rounded-full`}
      />
      <motion.div
        animate={{ x: [-100, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
        className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </div>
  );
};

export default AnimatedBar;
