import React from 'react';

export const Badge = ({
  children,
  variant = 'blue',
  className = ''
}) => {
  const variants = {
    blue: "bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] font-bold",
    gold: "bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] font-bold",
    navy: "bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] font-semibold",
    dark: "bg-[#0F172A] text-white font-medium",
    green: "bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold"
  };

  const selectedVariant = variants[variant] || variants.blue;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
};
