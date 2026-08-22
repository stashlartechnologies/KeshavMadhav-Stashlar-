import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { ShieldCheck, Award, BookOpen, Users, Lightbulb, Heart, Briefcase, Compass } from 'lucide-react';
import { CORE_VALUES } from '../../data/kmgiData';

export const WhyChooseUs = () => {
  const valueIcons = [
    Award,       // Excellence
    ShieldCheck, // Integrity
    Lightbulb,   // Innovation
    Heart,       // Compassion
    Briefcase,   // Professionalism
    Compass,     // Leadership
    Users,       // Inclusivity
    BookOpen     // Lifelong
  ];

  return (
    <section className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Institutional Framework"
          title="Our Core Values & Strengths"
          subtitle="Guided by discipline, integrity, and innovation to ensure holistic student growth."
        />

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CORE_VALUES.map((val, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            return (
              <Card key={idx} className="p-6 space-y-3 border-t-2 border-t-[#1D4ED8] bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-serif-prestige text-[#0F172A]">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {val.desc}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-16 bg-white text-[#0F172A] rounded-2xl p-8 md:p-12 shadow-xl border border-[#CBD5E1] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-widest">
                Governance & Accreditation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-serif-prestige text-[#0F172A]">
                ISO 9001:2015 Certified Institutional Governance
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed max-w-2xl">
                At Keshav Madhav Group of Institutions, we don't just prepare students for careers—we inspire them to lead with purpose, serve with compassion, and create a lasting impact on society.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-[#F8FAFC] border border-[#BFDBFE] rounded-xl p-6 text-center space-y-2 max-w-xs w-full">
                <ShieldCheck className="w-10 h-10 text-[#1D4ED8] mx-auto" />
                <h4 className="text-lg font-bold text-[#0F172A] font-serif-prestige">ISO 9001:2015</h4>
                <p className="text-xs text-slate-600 font-light">Certified Academic & Operational Quality Standard</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
