import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';
  
  return (
    <div className={`max-w-3xl mb-12 ${alignClass} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          dark 
            ? 'bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/30' 
            : 'bg-[#0F2537]/10 text-[#0F2537] border border-[#0F2537]/20'
        }`}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif-prestige tracking-tight ${
          dark ? 'text-white' : 'text-[#0F2537]'
        }`}>
          {title}
        </h2>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-[#C59B27] to-[#997416] my-4 rounded-full ${
        align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto'
      }`} />
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
