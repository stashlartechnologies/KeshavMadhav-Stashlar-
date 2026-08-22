import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-250 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#0F2537] hover:bg-[#173752] text-white focus:ring-[#0F2537] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#173752]",
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#997416] text-[#081826] font-bold focus:ring-[#C59B27] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#F4E8C1]/40",
    secondary: "bg-[#FAFAFC] hover:bg-[#F1F5F9] text-[#0F2537] border border-[#CBD5E1] focus:ring-[#0F2537] shadow-sm hover:shadow",
    outline: "bg-transparent text-[#0F2537] border-2 border-[#0F2537] hover:bg-[#0F2537] hover:text-white focus:ring-[#0F2537]",
    outlineGold: "bg-transparent text-[#C59B27] border-2 border-[#C59B27] hover:bg-[#C59B27] hover:text-[#081826] focus:ring-[#C59B27]"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : size === 'lg' ? "w-5 h-5" : "w-4 h-4"} />}
      {children}
    </button>
  );
};
