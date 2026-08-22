import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { HeartPulse, Hospital, Award, Activity, CheckCircle2, GraduationCap } from 'lucide-react';
import { NURSING_HIGHLIGHTS } from '../../data/kmgiData';

export const NursingHighlights = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0F2537] via-[#173752] to-[#081826] text-white rounded-3xl p-8 md:p-14 shadow-2xl border-2 border-[#C59B27]/40 relative overflow-hidden">
          
          {/* Subtle Decorative Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <HeartPulse className="w-4 h-4 text-[#D4AF37]" />
                <span>Featured Healthcare School</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif-prestige text-white tracking-tight">
                {NURSING_HIGHLIGHTS.title}
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {NURSING_HIGHLIGHTS.description}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-3 pt-2">
                {NURSING_HIGHLIGHTS.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button variant="gold" size="lg" onClick={onOpenEnquiry} icon={GraduationCap}>
                  Apply for Nursing Admissions
                </Button>
              </div>

            </div>

            {/* Right Stats & Council Grid */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {NURSING_HIGHLIGHTS.stats.map((st, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center space-y-1 hover:bg-white/15 transition-colors">
                    <span className="block text-xl md:text-2xl font-extrabold font-serif-prestige text-[#D4AF37]">
                      {st.value}
                    </span>
                    <span className="block text-xs font-semibold text-slate-200">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hospital Affiliation Callout */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C59B27]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Hospital className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-prestige">Hospital Internship Tie-ups</h4>
                  <p className="text-xs text-slate-300">Hands-on clinical training at top regional multispecialty hospitals & healthcare centers.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
