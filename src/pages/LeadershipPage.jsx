import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Quote, User, Award, GraduationCap } from 'lucide-react';
import { LEADERSHIP } from '../data/kmgiData';

export const LeadershipPage = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Visionary Direction
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            Institutional Leadership
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Inspiring guidance from our Founder, Vice Chairman, Director of Law, and Executive Directorate.
          </p>
        </div>
      </section>

      {/* Leadership Messages List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {LEADERSHIP.map((leader, idx) => (
            <Card
              key={leader.id}
              className="p-8 md:p-12 border-2 border-slate-200/80 hover:border-[#C59B27]/50 shadow-xl bg-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Photo / Avatar Column */}
                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative mx-auto max-w-xs rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0F2537] bg-[#0F2537]">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-84 object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-84 bg-gradient-to-br from-[#173752] to-[#081826] flex flex-col items-center justify-center text-slate-300 p-6 text-center">
                        <User className="w-20 h-20 text-[#D4AF37] mb-2" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Leadership Member</span>
                      </div>
                    )}

                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#081826] via-[#081826]/90 to-transparent p-4 text-white text-center">
                      <h3 className="text-lg font-bold font-serif-prestige text-[#D4AF37]">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-200">{leader.role}</p>
                      <p className="text-[10px] text-slate-400">{leader.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Content Column */}
                <div className={`lg:col-span-8 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="flex items-center gap-2 text-[#C59B27]">
                    <Quote className="w-8 h-8 opacity-40 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F2537]">
                      {leader.role} Message
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-serif-prestige text-[#0F2537] italic leading-snug">
                    "{leader.highlight}"
                  </h2>

                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    {leader.quote}
                  </p>

                  <div className="p-4 bg-[#FAFAFC] border-l-4 border-[#C59B27] rounded-r-lg text-xs font-medium text-[#0F2537] italic">
                    "{leader.invitation}"
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-sm font-bold text-[#0F2537] block">{leader.name}</span>
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
