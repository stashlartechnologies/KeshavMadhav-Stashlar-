import React from 'react';
import { HeartPulse, Hospital, CheckCircle2 } from 'lucide-react';
import { NURSING_HIGHLIGHTS } from '../../data/kmgiData';

export const NursingHighlights = () => {
  return (
    <section className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white text-[#0F172A] rounded-3xl p-8 md:p-14 shadow-2xl border border-[#CBD5E1] relative overflow-hidden">
          
          {/* Subtle Decorative Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1E40AF] uppercase tracking-wider">
                <HeartPulse className="w-4 h-4 text-[#1D4ED8]" />
                <span>Featured Healthcare School</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif-prestige text-[#0F172A] tracking-tight">
                {NURSING_HIGHLIGHTS.title}
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                {NURSING_HIGHLIGHTS.description}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-3 pt-2">
                {NURSING_HIGHLIGHTS.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Stats & Council Grid */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {NURSING_HIGHLIGHTS.stats.map((st, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 text-center space-y-1 hover:border-[#1D4ED8]/40 transition-colors">
                    <span className="block text-xl md:text-2xl font-extrabold font-serif-prestige text-[#1D4ED8]">
                      {st.value}
                    </span>
                    <span className="block text-xs font-semibold text-slate-700">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hospital Affiliation Callout */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <Hospital className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-serif-prestige">Hospital Internship Tie-ups</h4>
                  <p className="text-xs text-slate-600 font-light">Hands-on clinical training at top regional multispecialty hospitals & healthcare centers.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
