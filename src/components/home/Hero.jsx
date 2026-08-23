import React from 'react';
import { Button } from '../common/Button';
import { Award, BookOpen, Calendar } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Hero = () => {
  return (
    <section className="relative bg-[#0A1724] bg-hero-pattern py-14 md:py-20 overflow-hidden border-b border-[#132F48]">
      
      {/* Background Accent Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59B27]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* ISO Certification Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0F263B] border border-[#C59B27]/40 rounded-full px-4 py-1.5 shadow-sm">
              <Award className="w-4 h-4 text-[#E5B238]" />
              <span className="text-xs font-semibold text-[#E5B238]">
                ISO 9001:2015 Certified Institution | Greater Noida
              </span>
            </div>

            {/* Main Title matching reference image */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-prestige tracking-tight text-white leading-[1.12]">
                Empowering Minds.<br />
                <span className="text-[#E5B238] font-serif-prestige">Transforming Futures.</span>
              </h1>
            </div>

            {/* Institutional Description matching reference image */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Established in <strong className="text-white font-bold">2012</strong> under Keshav Madhav Shikshan Sansthan (Trust). Offering premier education in <strong className="text-[#E5B238] font-bold">Law, Nursing, Pharmacy & Vocational Studies</strong> with national council approvals and state university affiliations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#programmes">
                <Button 
                  variant="gold" 
                  size="lg"
                  icon={BookOpen}
                  className="text-sm font-bold text-[#0A1724] px-6 py-3.5 shadow-lg bg-[#E5B238] hover:bg-[#D4AF37]"
                >
                  Explore Programmes
                </Button>
              </a>
            </div>

          </div>

          {/* Right Column Reference Card matching reference screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0F263B] border border-[#C59B27]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-center relative overflow-hidden">
              
              {/* White Emblem Badge */}
              <div className="w-20 h-20 bg-white rounded-2xl p-2 mx-auto shadow-md border border-slate-200 flex items-center justify-center">
                <img 
                  src={INSTITUTION_INFO.logo} 
                  alt="KMGI Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Card Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-prestige text-white tracking-wide uppercase">
                  KESHAV MADHAV
                </h3>
                <span className="block text-xs font-bold text-[#E5B238] tracking-widest uppercase mt-1">
                  GROUP OF INSTITUTIONS
                </span>
              </div>

              {/* Trust Management Box */}
              <div className="bg-[#0A1724] border border-[#132F48] rounded-xl p-4 space-y-2">
                <p className="text-xs text-slate-300 font-medium">
                  Managed by <strong className="text-white font-semibold">Keshav Madhav Shikshan Sansthan (Trust)</strong>
                </p>
                <div className="inline-block bg-[#0F263B] border border-[#C59B27]/30 text-[#E5B238] text-[11px] font-bold px-3 py-1 rounded-full">
                  Registered Trust • Estd. 2012
                </div>
              </div>

              {/* Admissions Open Callout Box matching reference image */}
              <div className="bg-[#0A1724] border border-[#132F48] rounded-xl p-4 text-left space-y-1.5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0F263B] text-[#E5B238] shrink-0 border border-[#C59B27]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold text-[#E5B238] uppercase tracking-wider">
                    ADMISSIONS OPEN
                  </span>
                  <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                    Applications Invited for Law, Nursing, Pharmacy & Vocational Courses
                  </h4>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
