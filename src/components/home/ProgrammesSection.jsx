import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Scale, HeartPulse, Pill, Wrench, CheckCircle, Clock, GraduationCap } from 'lucide-react';
import { PROGRAMMES } from '../../data/kmgiData';

export const ProgrammesSection = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState('law');

  const icons = {
    law: Scale,
    nursing: HeartPulse,
    pharmacy: Pill,
    vocational: Wrench
  };

  return (
    <section id="programmes" className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Offerings"
          title="Multidisciplinary Professional Programmes"
          subtitle="Accredited degrees and diplomas designed for clinical excellence, legal precision, and modern career readiness."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROGRAMMES.map((prog) => {
            const Icon = icons[prog.id];
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2537] text-white shadow-lg shadow-[#0F2537]/20 border border-[#173752]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-[#0F2537]'}`} />
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Programme Display */}
        {PROGRAMMES.filter((p) => p.id === activeTab).map((prog) => (
          <div key={prog.id} className="space-y-8 animate-fade-in">
            
            {/* Programme Banner Card */}
            <Card className="bg-white border-2 border-[#C59B27]/30 p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <Badge variant="gold" className="mb-2">{prog.approval}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif-prestige text-[#0F2537]">
                    {prog.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-3xl">
                    {prog.description}
                  </p>
                </div>
                <Button variant="gold" size="md" onClick={onOpenEnquiry} icon={GraduationCap}>
                  Apply for Admission
                </Button>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prog.courses.map((course, idx) => (
                  <div key={idx} className="bg-[#FAFAFC] border border-slate-200 rounded-xl p-5 space-y-3 hover:border-[#0F2537]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0F2537] uppercase tracking-wider bg-[#0F2537]/10 px-2 py-0.5 rounded">
                        {course.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                        {course.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                      {course.name}
                    </h4>

                    <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-600 space-y-1">
                      <p><strong className="text-slate-800">Eligibility:</strong> {course.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features Bar */}
              <div className="bg-[#0F2537] text-white rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {prog.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </Card>

          </div>
        ))}

      </div>
    </section>
  );
};
