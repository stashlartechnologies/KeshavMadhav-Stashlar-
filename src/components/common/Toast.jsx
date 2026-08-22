import React, { useEffect } from 'react';
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react';

export const Toast = ({
  show,
  onClose,
  title = "Success!",
  message = "Operation completed successfully.",
  type = "success",
  duration = 4000
}) => {
  useEffect(() => {
    if (show && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#0F263B] border border-[#C59B27]/50 text-white rounded-xl shadow-2xl p-4 flex items-start gap-3 animate-slide-up backdrop-blur-md">
      {icons[type]}
      <div className="flex-grow space-y-0.5">
        <h4 className="text-sm font-bold font-serif-prestige text-white">{title}</h4>
        <p className="text-xs text-slate-300 font-light leading-relaxed">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
