import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Quote } from 'lucide-react';
import { LEADERSHIP } from '../../data/kmgiData';

export const LeadershipPreview = () => {
  return (
    <section className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Visionary Guidance"
          title="Messages from Institutional Leadership"
          subtitle="Inspiring words from our Founder, Vice Chairman, and Director of Law on our educational philosophy."
        />

        <div className="space-y-12 mt-12">
          {LEADERSHIP.filter(l => l.image).map((leader, idx) => (
            <Card
              key={leader.id}
              className="p-8 md:p-10 border border-[#E2E8F0] bg-white shadow-xl hover:border-[#1D4ED8]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Leader Photo Box */}
                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative mx-auto max-w-xs rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent p-4 text-white text-center">
                      <h4 className="text-lg font-bold font-serif-prestige text-[#60A5FA]">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-200">{leader.role}</p>
                      <p className="text-[10px] text-slate-400">{leader.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Content Box */}
                <div className={`lg:col-span-8 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="flex items-center gap-2 text-[#1D4ED8]">
                    <Quote className="w-8 h-8 opacity-40 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                      {leader.role} Statement
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-serif-prestige text-[#0F172A] italic leading-snug">
                    "{leader.highlight}"
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {leader.quote}
                  </p>

                  <div className="p-4 bg-[#EFF6FF] border-l-4 border-[#1D4ED8] rounded-r-lg text-xs font-medium text-[#1E40AF] italic">
                    "{leader.invitation}"
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <span className="text-sm font-bold text-[#0F172A] block">{leader.name}</span>
                    <span className="text-xs text-slate-500 block">{leader.role}, {leader.institution}</span>
                  </div>

                </div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
