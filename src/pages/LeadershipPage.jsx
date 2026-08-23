import React from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Quote, UserCheck } from 'lucide-react';
import { LEADERSHIP } from '../data/kmgiData';

export const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Visionary Governance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            Institutional Leadership
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Inspiring guidance from our Chairman, Vice Chairman, Director of Law, Director of Pharmacy, and Director of Nursing.
          </p>
        </div>
      </section>

      {/* Leadership Messages List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {LEADERSHIP.map((leader, idx) => (
            <Card
              key={leader.id}
              className="p-8 md:p-12 border border-[#E2E8F0] bg-white shadow-xl hover:border-[#1D4ED8]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Photo / Avatar Column */}
                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative mx-auto max-w-xs rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-80 bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-700 p-6 text-center">
                        <UserCheck className="w-16 h-16 text-[#1D4ED8] mb-3" />
                        <h4 className="text-base font-bold font-serif-prestige text-[#0F172A]">{leader.name}</h4>
                        <p className="text-xs text-[#1D4ED8] font-semibold mt-1">{leader.role}</p>
                      </div>
                    )}

                    {leader.image && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent p-4 text-white text-center">
                        <h3 className="text-lg font-bold font-serif-prestige text-[#60A5FA]">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-200">{leader.role}</p>
                        <p className="text-[10px] text-slate-400">{leader.institution}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote Content Column */}
                <div className={`lg:col-span-8 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="flex items-center gap-2 text-[#1D4ED8]">
                    <Quote className="w-8 h-8 opacity-40 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                      {leader.role} Statement
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-serif-prestige text-[#0F172A] italic leading-snug">
                    "{leader.highlight}"
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {leader.quote}
                  </p>

                  <div className="p-4 bg-[#EFF6FF] border-l-4 border-[#1D4ED8] rounded-r-lg text-xs font-medium text-[#1E40AF] italic">
                    "{leader.invitation}"
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <span className="text-sm font-bold text-[#0F172A] block">{leader.name}</span>
                    <span className="text-xs text-slate-500 block">{leader.role}, {leader.institution}</span>
                  </div>

                </div>

              </div>
            </Card>
          ))}

        </div>
      </section>

    </div>
  );
};
