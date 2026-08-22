import React from 'react';
import { GALLERY_CATEGORIES } from '../../data/galleryData';

export const GalleryFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto mb-10">
      {GALLERY_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#1D4ED8] text-white shadow-md ring-2 ring-[#1D4ED8]/30 scale-105'
                : 'bg-white text-slate-700 hover:bg-[#EFF6FF] hover:text-[#1D4ED8] border border-[#E2E8F0]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
