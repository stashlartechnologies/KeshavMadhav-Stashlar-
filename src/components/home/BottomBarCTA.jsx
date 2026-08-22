import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const BottomBarCTA = ({ onOpenEnquiry }) => {
  return (
    <section className="bg-[#0A1724] border-y border-[#132F48] text-white py-4 shadow-xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          
          {/* Left Column: Managed by Trust */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div className="p-2 rounded-lg bg-[#0F263B] text-[#E5B238] border border-[#C59B27]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Managed by <strong className="text-white font-bold">Keshav Madhav Shikshan Sansthan (Trust)</strong>
            </p>
            <span className="bg-[#0F263B] text-[#E5B238] border border-[#C59B27]/40 text-[11px] font-bold px-3 py-1 rounded-full">
              Registered Trust • Estd. 2012
            </span>
          </div>

          {/* Center Column: Admissions Open Callout */}
          <div className="hidden xl:block text-left border-l border-[#132F48] pl-6">
            <span className="block text-[11px] font-extrabold text-[#E5B238] uppercase tracking-wider">
              ADMISSIONS OPEN
            </span>
            <p className="text-xs text-slate-300 font-medium">
              Applications Invited for Law, Nursing, Pharmacy & Vocational Courses
            </p>
          </div>

          {/* Right Column: CTA Button */}
          <div>
            <Button
              variant="gold"
              size="md"
              onClick={onOpenEnquiry}
              className="text-xs font-bold text-[#0A1724] px-5 py-2.5 bg-[#E5B238] hover:bg-[#D4AF37]"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
