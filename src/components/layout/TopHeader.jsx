import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const TopHeader = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-[#081826] text-slate-300 text-xs py-2 border-b border-[#173752] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{INSTITUTION_INFO.location}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{INSTITUTION_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{INSTITUTION_INFO.admissionsEmail}</span>
          </div>
        </div>

        {/* Right Side: Badges & Call to Action */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#0F2537] px-2.5 py-0.5 rounded border border-[#173752]">
            <Award className="w-3.5 h-3.5 text-[#C59B27]" />
            <span className="font-semibold text-white">{INSTITUTION_INFO.certification}</span>
          </div>
          
          <button
            onClick={onOpenEnquiry}
            className="text-xs font-bold text-[#D4AF37] hover:text-white transition-colors underline cursor-pointer"
          >
            Admissions Open 2026-27 →
          </button>
        </div>

      </div>
    </div>
  );
};
