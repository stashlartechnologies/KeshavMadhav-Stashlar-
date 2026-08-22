import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Footer = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t-4 border-[#1D4ED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center border border-slate-700">
                <img 
                  src={INSTITUTION_INFO.logo} 
                  alt="KMGI Emblem" 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <div>
                <h4 className="text-lg font-bold font-serif-prestige text-white tracking-wide">
                  KESHAV MADHAV
                </h4>
                <p className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider">Group of Institutions</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Established in 2012 under the aegis of Keshav Madhav Shikshan Sansthan (Trust), Greater Noida. Committed to multidisciplinary academic excellence and holistic value-based education.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#1E293B] px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
              <Award className="w-4 h-4 text-[#60A5FA]" />
              <span className="font-semibold text-white">{INSTITUTION_INFO.certification}</span>
            </div>
          </div>

          {/* Column 2: Academic Schools */}
          <div>
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#1D4ED8] pl-2.5">
              Academic Schools
            </h5>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link to="/academics#law" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Keshav Madhav College of Law (BCI)
                </Link>
              </li>
              <li>
                <Link to="/nursing" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Institute of Nursing (ABVMU / State Med)
                </Link>
              </li>
              <li>
                <Link to="/academics#pharmacy" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                  College of Pharmacy (PCI Approved)
                </Link>
              </li>
              <li>
                <Link to="/academics#vocational" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                  School of Vocational & Skill Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Council Approvals & Affiliations */}
          <div>
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#1D4ED8] pl-2.5">
              Recognitions & Affiliations
            </h5>
            <div className="space-y-2 text-xs">
              {INSTITUTION_INFO.affiliations.map((aff, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-[#1E293B] border border-slate-800">
                  <span className="text-slate-200">{aff.name}</span>
                  <span className="text-[10px] font-bold text-[#60A5FA] uppercase bg-[#1D4ED8]/20 px-1.5 py-0.5 rounded border border-[#1D4ED8]/40">
                    {aff.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Campus Address */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#1D4ED8] pl-2.5">
              Campus Contact
            </h5>
            <div className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
              <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>{INSTITUTION_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
              <Phone className="w-4 h-4 text-[#3B82F6] shrink-0" />
              <span>{INSTITUTION_INFO.phone} / {INSTITUTION_INFO.altPhone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
              <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
              <span>{INSTITUTION_INFO.admissionsEmail}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Request Prospectus 2026-27
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-light">
          <p>© 2026 Keshav Madhav Group of Institutions (KMGI), Greater Noida. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white transition-colors cursor-pointer">Mandatory Disclosure</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
