import React from 'react';

export const Badge = ({ children, variant = 'navy', className = '' }) => {
  const variants = {
    navy: "bg-[#0F2537] text-white border border-[#173752]",
    gold: "bg-[#F4E8C1] text-[#997416] border border-[#C59B27]/40",
    burgundy: "bg-[#800020]/10 text-[#800020] border border-[#800020]/20",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
