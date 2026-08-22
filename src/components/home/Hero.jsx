import React from 'react';
import { ShieldCheck, Award, ArrowRight, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Hero = ({ onOpenEnquiry }) => {
  return (
    <section className="relative bg-navy-gradient text-white overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Institution Badge Bar */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#C59B27]/40 text-xs font-semibold text-[#D4AF37]">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>{INSTITUTION_INFO.certification} | Greater Noida</span>
            </div>

            {/* Prominent Motto Heading */}
            <div className="space-y-2">
              <span className="block text-lg md:text-xl font-semibold text-[#D4AF37] tracking-wider uppercase">
                Welcome to Keshav Madhav Group of Institutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-prestige tracking-tight leading-[1.15] text-white">
                Empowering Minds. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4E8C1] to-[#C59B27]">
                  Transforming Futures.
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              Established in <strong className="text-white font-semibold">2012</strong> under Keshav Madhav Shikshan Sansthan (Trust). Offering premier education in <strong className="text-white font-semibold">Law, Nursing, Pharmacy & Vocational Studies</strong> with national council approvals and state university affiliations.
            </p>

            {/* Council Badges List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl">
              {[
                "Bar Council of India (BCI)",
                "Pharmacy Council of India (PCI)",
                "State Medical Faculty UP",
                "ABVMU, Lucknow",
                "CCSU, Meerut",
                "ISO 9001:2015"
              ].map((council, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-md px-2.5 py-1.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="truncate">{council}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="gold" size="lg" onClick={onOpenEnquiry} icon={GraduationCap}>
                Admission Enquiry 2026-27
              </Button>
              <a href="#programmes">
                <Button variant="outlineGold" size="lg" icon={BookOpen}>
                  Explore Programmes
                </Button>
              </a>
            </div>

          </div>

          {/* Right Visual Card / Emblem Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-[#173752] to-[#081826] p-8 rounded-2xl border-2 border-[#C59B27]/40 shadow-2xl space-y-6">
              
              {/* Emblem Header */}
              <div className="text-center space-y-3">
                <div className="w-24 h-24 bg-white rounded-xl mx-auto p-3 shadow-lg flex items-center justify-center border border-[#C59B27]/50">
                  <img 
                    src={INSTITUTION_INFO.logo} 
                    alt="KMGI Emblem" 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-bold font-serif-prestige text-white">
                  KESHAV MADHAV
                </h3>
                <p className="text-xs text-[#D4AF37] uppercase font-bold tracking-widest">
                  Group of Institutions
                </p>
                <div className="h-0.5 w-16 bg-[#C59B27] mx-auto rounded-full"></div>
              </div>

              {/* Inception & Trust Details */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center space-y-2">
                <p className="text-xs text-slate-300">
                  Managed by <span className="text-white font-semibold">{INSTITUTION_INFO.trust}</span>
                </p>
                <div className="inline-block px-3 py-1 bg-[#C59B27]/20 text-[#D4AF37] rounded-full text-xs font-bold border border-[#C59B27]/40">
                  Registered Trust • Estd. 2012
                </div>
              </div>

              {/* Admission Highlight Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#C59B27]/20 to-transparent border-l-4 border-[#C59B27] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#D4AF37]">
                  Admissions Open
                </span>
                <p className="text-sm font-semibold text-white">
                  Applications Invited for Law, Nursing, Pharmacy & Vocational Courses
                </p>
              </div>

              <Button variant="gold" size="md" className="w-full" onClick={onOpenEnquiry}>
                Apply Online Now →
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
