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
    <section id="programmes" className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Offerings"
          title="Multidisciplinary Professional Programmes"
          subtitle="Accredited degrees and diplomas designed for clinical excellence, legal precision, and modern career readiness."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 my-12">
          {PROGRAMMES.map((prog) => {
            const Icon = icons[prog.id];
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1D4ED8] text-white font-bold shadow-md ring-2 ring-[#1D4ED8]/30'
                    : 'bg-white text-slate-700 hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1D4ED8]'}`} />
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Programme Display */}
        {PROGRAMMES.filter((p) => p.id === activeTab).map((prog) => (
          <div key={prog.id} className="space-y-8 animate-fade-in">
            
            {/* Programme Banner Card */}
            <Card className="bg-white border border-[#CBD5E1] p-8 space-y-6 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
                <div>
                  <Badge variant="blue" className="mb-2">{prog.approval}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif-prestige text-[#0F172A]">
                    {prog.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-3xl font-light">
                    {prog.description}
                  </p>
                </div>
                <Button variant="blue" size="md" onClick={onOpenEnquiry} icon={GraduationCap} className="text-white font-bold">
                  Apply for Admission
                </Button>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prog.courses.map((course, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 space-y-3 hover:border-[#1D4ED8]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#1E40AF] uppercase tracking-wider bg-[#EFF6FF] px-2.5 py-0.5 rounded border border-[#BFDBFE]">
                        {course.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        {course.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-serif-prestige text-[#0F172A]">
                      {course.name}
                    </h4>

                    <div className="pt-2 border-t border-[#E2E8F0] text-xs text-slate-600 space-y-1 font-light">
                      <p><strong className="text-[#0F172A]">Eligibility:</strong> {course.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features Bar */}
              <div className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {prog.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#1D4ED8] shrink-0" />
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
