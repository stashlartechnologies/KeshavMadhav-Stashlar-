import React from 'react';

export const Button = ({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variants = {
    gold: "bg-[#E5B238] hover:bg-[#D4AF37] text-[#0A1724] focus:ring-[#E5B238] shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-[#E5B238]/30",
    blue: "bg-[#E5B238] hover:bg-[#D4AF37] text-[#0A1724] focus:ring-[#E5B238] shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-[#E5B238]/30",
    primary: "bg-[#0A1724] hover:bg-[#0F263B] text-white focus:ring-[#0A1724] shadow-md border border-[#C59B27]/40",
    secondary: "bg-[#0F263B] hover:bg-[#132F48] text-white border border-[#C59B27]/30 focus:ring-[#C59B27]",
    outline: "bg-[#0A1724] text-white border-2 border-[#C59B27] hover:bg-[#0F263B] focus:ring-[#C59B27]",
    outlineGold: "bg-[#0A1724] text-white border-2 border-[#C59B27] hover:bg-[#0F263B] focus:ring-[#C59B27]",
    outlineBlue: "bg-[#0A1724] text-white border-2 border-[#C59B27] hover:bg-[#0F263B] focus:ring-[#C59B27]"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5"
  };

  const selectedVariant = variants[variant] || variants.gold;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : size === 'lg' ? "w-5 h-5" : "w-4 h-4"} />}
      {children}
    </button>
  );
};
