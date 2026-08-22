import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Calendar, ArrowRight, Maximize2 } from 'lucide-react';
import { ALL_GALLERY_IMAGES } from '../../data/galleryData';

export const EventsGalleryPreview = () => {
  const featured = ALL_GALLERY_IMAGES.slice(0, 4);

  return (
    <section className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          badge="Campus Life & Events"
          title="Recent Seminars, Camps & Activities"
          subtitle="Empowering academic engagement, healthcare awareness, and professional skill enhancement."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <Link key={item.id} to="/gallery">
              <Card className="p-0 overflow-hidden border border-[#E2E8F0] hover:border-[#1D4ED8] bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-[#0F172A] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] font-bold text-[#1E40AF] uppercase tracking-wider bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold font-serif-prestige text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors truncate mt-1">
                    {item.title}
                  </h4>
                  {item.date && (
                    <div className="flex items-center gap-1 text-[11px] text-[#1D4ED8] font-semibold">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors group"
          >
            <span>Explore Full Media Gallery (71 Photographs)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
