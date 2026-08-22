import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { FlaskConical, Hospital, BookOpen, Monitor, Scale, UserCheck, ShieldCheck, GraduationCap, CheckCircle2 } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/kmgiData';

export const FacilitiesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            State-of-the-Art Learning Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            Campus Infrastructure & Laboratories
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Modern laboratories, simulation centers, digital library, and clinical hospital exposures in Greater Noida.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            badge="Academic Facilities"
            title="Advanced Practical Infrastructure"
            subtitle="Engineered to provide real-world simulation, clinical practice, and interactive academic development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAMPUS_FACILITIES.map((facility) => (
              <Card key={facility.id} className="p-0 overflow-hidden border-2 border-slate-200 hover:border-[#0F2537] bg-white group flex flex-col justify-between">
                
                {/* Facility Image Container */}
                <div className="relative h-64 bg-[#081826] overflow-hidden flex items-center justify-center">
                  {facility.image ? (
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                      <FlaskConical className="w-16 h-16 text-[#D4AF37] mb-2" />
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                        {facility.title} Space
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" className="text-[10px] uppercase font-bold shadow-md">
                      {facility.category}
                    </Badge>
                  </div>
                </div>

                {/* Facility Details */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif-prestige text-[#0F2537] group-hover:text-[#C59B27] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-2">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                      KMGI Greater Noida Campus
                    </span>
                    <button
                      onClick={onOpenEnquiry}
                      className="text-xs font-bold text-[#0F2537] hover:text-[#C59B27] transition-colors cursor-pointer"
                    >
                      Enquire Facilities →
                    </button>
                  </div>
                </div>

              </Card>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
