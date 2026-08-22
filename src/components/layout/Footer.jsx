import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Footer = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#081826] text-slate-300 pt-16 pb-8 border-t-4 border-[#C59B27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#173752]">
          
          {/* Column 1: Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center border border-[#C59B27]/40">
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
                <p className="text-xs font-semibold text-[#D4AF37]">Group of Institutions</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 2012 under the aegis of Keshav Madhav Shikshan Sansthan (Trust), Greater Noida. Committed to multidisciplinary academic excellence and holistic value-based education.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#0F2537] px-3 py-1.5 rounded-lg border border-[#C59B27]/30 text-xs">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-semibold text-white">{INSTITUTION_INFO.certification}</span>
            </div>
          </div>

          {/* Column 2: Programmes & Faculties */}
          <div>
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Academic Schools
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/programmes#law" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                  Keshav Madhav College of Law (BCI)
                </Link>
              </li>
              <li>
                <Link to="/programmes#nursing" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                  Institute of Nursing (ABVMU / State Med)
                </Link>
              </li>
              <li>
                <Link to="/programmes#pharmacy" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                  College of Pharmacy (PCI Approved)
                </Link>
              </li>
              <li>
                <Link to="/programmes#vocational" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                  School of Vocational & Skill Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Council Approvals & Affiliations */}
          <div>
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Recognitions & Affiliations
            </h5>
            <div className="space-y-2 text-xs">
              {INSTITUTION_INFO.affiliations.map((aff, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-[#0F2537]/60 border border-[#173752]">
                  <span className="text-slate-200">{aff.name}</span>
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase bg-[#C59B27]/10 px-1.5 py-0.5 rounded">
                    {aff.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Campus Address */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold font-serif-prestige text-white uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Campus Contact
            </h5>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <span>{INSTITUTION_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>{INSTITUTION_INFO.phone} / {INSTITUTION_INFO.altPhone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>{INSTITUTION_INFO.admissionsEmail}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full text-xs font-bold text-[#081826] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] py-2 px-4 rounded-lg shadow hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
              >
                Request Prospectus 2026-27
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
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
