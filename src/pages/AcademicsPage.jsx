import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Scale, HeartPulse, Pill, Wrench, Clock, CheckCircle } from 'lucide-react';
import { PROGRAMMES } from '../data/kmgiData';

export const AcademicsPage = () => {
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
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Multidisciplinary Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            Academic Programmes & Faculties
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
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
                  ? 'bg-[#1D4ED8] text-white font-bold shadow-md'
                  : 'bg-white text-slate-700 hover:bg-[#EFF6FF] border border-[#E2E8F0]'
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
                      ? 'bg-[#1D4ED8] text-white font-bold shadow-md'
                      : 'bg-white text-slate-700 hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${selectedFilter === prog.id ? 'text-white' : 'text-[#1D4ED8]'}`} />
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
                <Card key={prog.id} className="p-8 space-y-6 border border-[#CBD5E1] bg-white shadow-xl">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-6 h-6 text-[#1D4ED8]" />
                        <h2 className="text-2xl md:text-3xl font-bold font-serif-prestige text-[#0F172A]">
                          {prog.name}
                        </h2>
                      </div>
                      <Badge variant="blue" className="mt-1">{prog.approval}</Badge>
                      <p className="text-xs text-slate-600 max-w-3xl mt-1 font-light">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  {/* Course Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prog.courses.map((course, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#1E40AF] uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded border border-[#BFDBFE]">
                            {course.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                            <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                            {course.duration}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold font-serif-prestige text-[#0F172A]">
                          {course.name}
                        </h3>

                        <div className="text-xs text-slate-600 pt-2 border-t border-[#E2E8F0] font-light">
                          <p><strong className="text-[#0F172A]">Eligibility:</strong> {course.eligibility}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features Bar */}
                  <div className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-light">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1D4ED8] shrink-0" />
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
