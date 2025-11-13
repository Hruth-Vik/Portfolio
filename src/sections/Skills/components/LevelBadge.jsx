import React from 'react';

// A compact, unique-looking badge that shows skill level
// Design: diamond badge + diamond segmented meter (no perpetual animations)
const LevelBadge = ({ value = 0 }) => {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));
  const segments = 8;
  const filled = Math.round((safe / 100) * segments);

  return (
    <div className="flex items-center gap-3 select-none">
      {/* diamond badge */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 origin-center rotate-45 rounded-[10%] bg-gradient-to-br from-[var(--grad1)] to-[var(--grad2)] shadow-[0_8px_20px_-10px_rgb(var(--glow)/0.45)]" />
        <div className="absolute inset-[2px] origin-center rotate-45 rounded-[8%] bg-white/5 border border-white/10" />
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/90" style={{ transform: 'rotate(-45deg)' }}>
          <span className="font-mono">{safe}%</span>
        </div>
      </div>
      {/* segmented meter - small diamonds */}
      <div className="flex items-center gap-1">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={`block w-2.5 h-2.5 rotate-45 rounded-[12%] ${i < filled ? 'bg-[var(--grad2)]' : 'bg-white/12'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelBadge;
