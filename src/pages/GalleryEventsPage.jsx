import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { GalleryFilter } from '../components/gallery/GalleryFilter';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { ALL_GALLERY_IMAGES } from '../data/galleryData';

export const GalleryEventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? ALL_GALLERY_IMAGES
    : ALL_GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Authentic Campus Media & Events
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            Events & Photo Gallery
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            Showcasing 71 authentic event photographs across academic exhibitions, health camps, cultural celebrations, and lab practicals at KMGI.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <SectionHeading
            badge="Institutional Media Archive"
            title="Explore Campus Celebrations & Clinical Activities"
            subtitle="Click any photograph to launch the high-resolution lightbox viewer."
          />

          {/* Reusable Category Filter */}
          <GalleryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Reusable Gallery Grid */}
          <GalleryGrid
            images={filteredImages}
            onImageClick={handleOpenLightbox}
          />

        </div>
      </section>

      {/* Reusable Lightbox Modal with Next/Prev Controls */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        images={filteredImages}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />

    </div>
  );
};
