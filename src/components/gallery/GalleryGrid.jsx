import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Maximize2, Calendar } from 'lucide-react';

export const GalleryGrid = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return (
      <Card className="p-12 text-center text-slate-500 bg-white border border-[#E2E8F0]">
        <p className="text-base font-semibold text-[#0F172A]">No media found for the selected category.</p>
        <p className="text-xs text-slate-500 mt-1">Please select another event category above.</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((item, index) => (
        <Card
          key={item.id}
          className="p-0 overflow-hidden border border-[#E2E8F0] hover:border-[#1D4ED8] bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          onClick={() => onImageClick(index)}
        >
          {/* Image Container */}
          <div className="relative h-60 bg-[#0F172A] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#0F172A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white shadow-lg transform group-hover:scale-110 transition-transform">
                <Maximize2 className="w-5 h-5" />
              </span>
            </div>

            {/* Top Category Badge */}
            <div className="absolute top-3 left-3">
              <Badge variant="blue" className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#1E40AF]">
                {item.category}
              </Badge>
            </div>
          </div>

          {/* Card Description Footer */}
          <div className="p-4 space-y-1.5 flex-grow flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold font-serif-prestige text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors leading-snug line-clamp-1">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 font-light line-clamp-2 mt-1">
                {item.description}
              </p>
            </div>

            {item.date && (
              <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[11px] text-[#1D4ED8] font-semibold">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
