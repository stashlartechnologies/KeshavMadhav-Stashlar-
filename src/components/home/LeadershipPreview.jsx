import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Quote } from 'lucide-react';
import { LEADERSHIP } from '../../data/kmgiData';

export const LeadershipPreview = () => {
  return (
    <section className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Visionary Guidance"
          title="Messages from Institutional Leadership"
          subtitle="Inspiring words from our Founder, Vice Chairman, and Director of Law on our educational philosophy."
        />

        <div className="space-y-12">
          {LEADERSHIP.map((leader, idx) => (
            <Card
              key={leader.id}
              className={`p-8 md:p-10 border-2 border-slate-200/80 hover:border-[#C59B27]/50 shadow-lg ${
                idx % 2 === 1 ? 'bg-gradient-to-r from-[#FAFAFC] to-white' : 'bg-white'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Leader Photo Box */}
                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative mx-auto max-w-xs rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0F2537] bg-[#0F2537]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#081826] via-[#081826]/90 to-transparent p-4 text-white text-center">
                      <h4 className="text-lg font-bold font-serif-prestige text-[#D4AF37]">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-300">{leader.role}</p>
                      <p className="text-[10px] text-slate-400">{leader.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Content Box */}
                <div className={`lg:col-span-8 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="flex items-center gap-2 text-[#C59B27]">
                    <Quote className="w-8 h-8 opacity-40 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F2537]">
                      {leader.role} Statement
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-serif-prestige text-[#0F2537] italic leading-snug">
                    "{leader.highlight}"
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {leader.quote}
                  </p>

                  <div className="pt-3 border-t border-slate-200 text-xs font-medium text-[#C59B27] italic">
                    "{leader.invitation}"
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#0F2537] block">{leader.name}</span>
                    <span className="text-[11px] text-slate-500 block">{leader.role}, {leader.institution}</span>
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
