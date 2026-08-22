import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { FlaskConical, Scale, BookOpen, Monitor, Hospital, UserCheck } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../../data/kmgiData';

export const CampusPreview = () => {
  const facilityIcons = [
    FlaskConical,
    Scale,
    BookOpen,
    Monitor,
    Hospital,
    UserCheck
  ];

  return (
    <section className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Campus Experience"
          title="World-Class Learning Infrastructure"
          subtitle="Modern laboratories, smart classrooms, moot court hall, and comprehensive student support in Greater Noida."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPUS_FACILITIES.map((facility, idx) => {
            const Icon = facilityIcons[idx % facilityIcons.length];
            return (
              <Card key={idx} className="p-8 space-y-4 group hover:border-[#0F2537] border-2 border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2537]/10 flex items-center justify-center text-[#0F2537] group-hover:bg-[#0F2537] group-hover:text-[#D4AF37] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#C59B27] uppercase tracking-wider bg-[#C59B27]/10 px-2.5 py-1 rounded-full">
                    {facility.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold font-serif-prestige text-[#0F2537] group-hover:text-[#C59B27] transition-colors">
                  {facility.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {facility.description}
                </p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
