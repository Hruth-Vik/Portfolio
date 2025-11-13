import React from 'react';
import { HiTrendingUp, HiAcademicCap, HiCode } from 'react-icons/hi';

const ICONS = { HiTrendingUp, HiAcademicCap, HiCode };

const AchievementsGrid = ({ items = [] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
    {items.map((item, idx) => {
      const Icon = ICONS[item.icon] || HiCode;
      return (
        <div
          key={`${item.title}-${idx}`}
          className="p-4 rounded-xl bg-secondary-800/50 border border-secondary-700/50 backdrop-blur-sm"
        >
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-3`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-white font-semibold">{item.title}</h4>
          <p className="text-secondary-300 text-sm">{item.description}</p>
        </div>
      );
    })}
  </div>
);

export default AchievementsGrid;
