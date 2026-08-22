import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { Badge } from '../common/Badge';

export const LightboxModal = ({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate
}) => {
  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#081826] rounded-2xl overflow-hidden shadow-2xl border border-[#C59B27]/40 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#0F2537] text-white px-6 py-4 flex items-center justify-between border-b border-[#173752] shrink-0">
          <div className="flex items-center gap-3">
            <Badge variant="gold" className="text-[10px] uppercase font-bold tracking-wider">
              {currentImg.category}
            </Badge>
            {currentImg.date && (
              <span className="flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {currentImg.date}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-300 font-medium">
              Image {currentIndex + 1} of {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Viewer Area */}
        <div className="relative flex-grow bg-black flex items-center justify-center p-4 min-h-[350px] overflow-hidden">
          
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <img
            src={currentImg.image}
            alt={currentImg.title}
            className="max-h-[65vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Bottom Metadata Info Bar */}
        <div className="bg-[#0F2537] text-white p-6 border-t border-[#173752] space-y-1.5 shrink-0">
          <h3 className="text-xl font-bold font-serif-prestige text-white">
            {currentImg.title}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            {currentImg.description}
          </p>
        </div>

      </div>
    </div>
  );
};
