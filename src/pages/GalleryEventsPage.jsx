import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { X, Maximize2, Calendar, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_EVENTS } from '../data/kmgiData';

export const GalleryEventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Cultural & Celebrations', 'Health Camps & Outreach', 'Academic & Exhibitions'];

  const filteredEvents = selectedCategory === 'All'
    ? GALLERY_EVENTS
    : GALLERY_EVENTS.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Campus Vibrancy & Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            Events & Image Gallery
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Capturing academic milestones, health outreach drives, cultural fests, and student celebrations at KMGI.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F2537] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="p-0 overflow-hidden border-2 border-slate-200 hover:border-[#C59B27] bg-white group cursor-pointer"
                onClick={() => setSelectedImage(event)}
              >
                {/* Event Image Box */}
                <div className="relative h-56 bg-[#081826] overflow-hidden flex items-center justify-center">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                      <ImageIcon className="w-12 h-12 text-[#D4AF37] mb-2" />
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {event.title}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0F2537]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" className="text-[10px] uppercase font-bold shadow-md">
                      {event.category}
                    </Badge>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold font-serif-prestige text-[#0F2537] group-hover:text-[#C59B27] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            
            {/* Modal Top Bar */}
            <div className="bg-[#0F2537] text-white p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold font-serif-prestige">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="bg-[#081826] min-h-[350px] flex items-center justify-center p-6 text-center">
              {selectedImage.image ? (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-xl"
                />
              ) : (
                <div className="text-slate-300 space-y-2">
                  <ImageIcon className="w-20 h-20 text-[#D4AF37] mx-auto opacity-70" />
                  <p className="text-sm font-semibold">{selectedImage.title} Photo Archive</p>
                  <p className="text-xs text-slate-400">Institutional Event Media Preview</p>
                </div>
              )}
            </div>

            {/* Modal Description */}
            <div className="p-6 bg-white space-y-2">
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
