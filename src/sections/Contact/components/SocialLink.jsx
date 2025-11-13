import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, Icon, className = '' }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className={`p-3 rounded-lg bg-secondary-800/50 border border-secondary-700/50 text-secondary-400 transition-all duration-300 hover:border-primary-500/50 ${className}`}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default SocialLink;
