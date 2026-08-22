import React from 'react';

export const Card = ({ children, className = '', hover = true, border = true }) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 transition-all duration-300 ${
        border ? 'border border-slate-200/80' : ''
      } ${
        hover ? 'shadow-academic hover:shadow-xl hover:-translate-y-1 hover:border-[#C59B27]/40' : 'shadow-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};
