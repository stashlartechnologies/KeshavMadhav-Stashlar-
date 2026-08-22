import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Scale, HeartPulse, Pill, Wrench, Clock, CheckCircle, GraduationCap, BookOpen } from 'lucide-react';
import { PROGRAMMES } from '../data/kmgiData';

export const AcademicsPage = ({ onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const icons = {
    law: Scale,
    nursing: HeartPulse,
    pharmacy: Pill,
    vocational: Wrench
  };

  const filteredProgrammes = selectedFilter === 'all'
    ? PROGRAMMES
    : PROGRAMMES.filter(p => p.id === selectedFilter);

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Multidisciplinary Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            Academic Programmes & Faculties
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Career-focused professional education in Law, Pharmacy, Nursing, and Technical ITI / Vocational Trades.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#0F2537] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Schools
            </button>
            {PROGRAMMES.map((prog) => {
              const Icon = icons[prog.id];
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedFilter(prog.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    selectedFilter === prog.id
                      ? 'bg-[#0F2537] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span>{prog.title}</span>
                </button>
              );
            })}
          </div>

          {/* Programmes Grid */}
          <div className="space-y-12">
            {filteredProgrammes.map((prog) => {
              const Icon = icons[prog.id];
              return (
                <Card key={prog.id} className="p-8 space-y-6 border-2 border-slate-200 bg-white">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-6 h-6 text-[#0F2537]" />
                        <h2 className="text-2xl md:text-3xl font-bold font-serif-prestige text-[#0F2537]">
                          {prog.name}
                        </h2>
                      </div>
                      <Badge variant="gold" className="mt-1">{prog.approval}</Badge>
                      <p className="text-xs text-slate-600 max-w-3xl mt-1">
                        {prog.description}
                      </p>
                    </div>

                    <Button variant="gold" size="sm" onClick={onOpenEnquiry} icon={GraduationCap}>
                      Apply for Admission
                    </Button>
                  </div>

                  {/* Course Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prog.courses.map((course, idx) => (
                      <div key={idx} className="bg-[#FAFAFC] border border-slate-200 rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#0F2537] uppercase bg-[#0F2537]/10 px-2 py-0.5 rounded">
                            {course.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                            <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                            {course.duration}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                          {course.name}
                        </h3>

                        <div className="text-xs text-slate-600 pt-2 border-t border-slate-200">
                          <p><strong className="text-slate-800">Eligibility:</strong> {course.eligibility}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features Bar */}
                  <div className="bg-[#0F2537] text-white rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </Card>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
