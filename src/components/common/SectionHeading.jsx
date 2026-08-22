import React from 'react';
import { Badge } from './Badge';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left'} ${className}`}>
      {badge && (
        <Badge variant="blue" className="px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
          {badge}
        </Badge>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold font-serif-prestige text-[#0F172A] tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
