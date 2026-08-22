import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { FlaskConical, CheckCircle2 } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/kmgiData';

export const FacilitiesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            State-of-the-Art Learning Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            Campus Infrastructure & Laboratories
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
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
              <Card key={facility.id} className="p-0 overflow-hidden border border-[#CBD5E1] bg-white group flex flex-col justify-between shadow-lg hover:shadow-2xl">
                
                {/* Facility Image Container */}
                <div className="relative h-64 bg-[#F8FAFC] overflow-hidden flex items-center justify-center">
                  {facility.image ? (
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                      <FlaskConical className="w-16 h-16 text-[#1D4ED8] mb-2 opacity-60" />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        {facility.title} Space
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="blue" className="text-[10px] uppercase font-bold shadow-sm">
                      {facility.category}
                    </Badge>
                  </div>
                </div>

                {/* Facility Details */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif-prestige text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-2">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-light">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                      KMGI Greater Noida Campus
                    </span>
                    <button
                      onClick={onOpenEnquiry}
                      className="text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors cursor-pointer"
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
