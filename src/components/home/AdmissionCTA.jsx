import React from 'react';
import { Button } from '../common/Button';
import { Phone, Mail, GraduationCap, ShieldCheck } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const AdmissionCTA = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Decorative Soft Blue Blur Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-slate-700 text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-[#60A5FA]" />
          <span>Admissions Open 2026-27</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-prestige tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Begin Your Educational Journey at Keshav Madhav Group of Institutions
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Approved by BCI, PCI, State Medical Faculty UP, and affiliated with ABVMU Lucknow & CCSU Meerut. ISO 9001:2015 Certified Institution in Greater Noida.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="blue" size="lg" onClick={onOpenEnquiry} icon={GraduationCap} className="text-white font-bold shadow-lg">
            Submit Admission Enquiry 2026-27
          </Button>
          <a href={`tel:${INSTITUTION_INFO.phone}`}>
            <Button variant="secondary" size="lg" icon={Phone} className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              Call Helpline: {INSTITUTION_INFO.phone}
            </Button>
          </a>
        </div>

        {/* Contact Info Pills */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-slate-300 border-t border-slate-800 max-w-2xl mx-auto font-light">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#60A5FA]" />
            <span>Hotline: {INSTITUTION_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#60A5FA]" />
            <span>Email: {INSTITUTION_INFO.admissionsEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
            <span>ISO 9001:2015 Quality Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
