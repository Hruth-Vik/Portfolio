import React from 'react';

const TechTag = ({ children, title }) => (
  <span title={title} className="text-xs px-3 py-1 rounded-full bg-secondary-700/50 text-secondary-300 border border-secondary-600/50 hover:shadow-[0_0_0_3px_rgba(161,0,255,0.15)] transition-shadow">
    {children}
  </span>
);

export default TechTag;
