import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { RECENT_EVENTS } from '../../data/kmgiData';

export const EventsGalleryPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Campus Life & Events"
          title="Recent Seminars, Camps & Activities"
          subtitle="Empowering academic engagement, healthcare awareness, and professional skill enhancement."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECENT_EVENTS.map((event) => (
            <Card key={event.id} className="p-6 space-y-4 border-2 border-slate-200/80 hover:border-[#C59B27]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0F2537] bg-[#0F2537]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {event.department}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                  {event.date}
                </span>
              </div>

              <h4 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                {event.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed font-light">
                {event.desc}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
