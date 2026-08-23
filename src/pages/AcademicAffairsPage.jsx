import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { FileText, ShieldCheck, Bell, CreditCard, Calendar, BookOpen, Download, CheckCircle } from 'lucide-react';
import { ACADEMIC_AFFAIRS_DATA, INSTITUTION_INFO } from '../data/kmgiData';

export const AcademicAffairsPage = () => {
  const [activeTab, setActiveTab] = useState('circulars');

  const tabs = [
    { id: 'terms', name: 'Terms & Conditions', icon: FileText },
    { id: 'recognition', name: 'Recognitions & Approvals', icon: ShieldCheck },
    { id: 'circulars', name: 'Circulars & Notices', icon: Bell },
    { id: 'fees', name: 'Fees Structure', icon: CreditCard },
    { id: 'exams', name: 'Exam Notifications', icon: Calendar },
    { id: 'syllabus', name: 'Syllabus Downloads', icon: BookOpen },
    { id: 'papers', name: 'Question Papers Archive', icon: Download }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Academic Operations Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            Academic Affairs & Resources
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            Official portal for notices, council recognitions, fee rules, syllabus downloads, and examination archives.
          </p>
        </div>
      </section>

      {/* Main Tabbed Interface Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Bar for Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-2.5 rounded-2xl border border-[#E2E8F0] shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1D4ED8] text-white font-bold shadow-md'
                      : 'text-slate-700 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1D4ED8]'}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="animate-fade-in">
            
            {/* 1. Terms & Conditions */}
            {activeTab === 'terms' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Terms, Regulations & Code of Conduct
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Official guidelines for students enrolled at KMGI</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ACADEMIC_AFFAIRS_DATA.terms.map((term, idx) => (
                    <div key={idx} className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-2">
                      <h4 className="text-base font-bold font-serif-prestige text-[#0F172A] flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
                        {term.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {term.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 2. Recognitions & Approvals */}
            {activeTab === 'recognition' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Council Recognitions & Affiliations
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Official status with national and state regulatory bodies</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ACADEMIC_AFFAIRS_DATA.recognitions.map((rec, idx) => (
                    <div key={idx} className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold font-serif-prestige text-[#0F172A]">
                          {rec.council}
                        </h4>
                        <Badge variant="blue" className="text-[10px]">{rec.status}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {rec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 3. Circulars & Notices */}
            {activeTab === 'circulars' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Live Circulars & Official Notices
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Recent announcements for all academic streams</p>
                </div>

                <div className="space-y-4">
                  {ACADEMIC_AFFAIRS_DATA.circulars.map((circ, idx) => (
                    <div key={idx} className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#1D4ED8]/40 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-white bg-[#1D4ED8] px-2 py-0.5 rounded uppercase">
                            {circ.category}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{circ.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#0F172A] font-serif-prestige">
                          {circ.title}
                        </h4>
                      </div>
                      <Button variant="secondary" size="sm" className="text-xs self-start md:self-auto">
                        View Notice PDF
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 4. Fees Structure */}
            {activeTab === 'fees' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Tuition Fees & Payment Guidelines
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl font-light">
                    {ACADEMIC_AFFAIRS_DATA.feesInfo.note}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ACADEMIC_AFFAIRS_DATA.feesInfo.breakdown.map((fee, idx) => (
                    <div key={idx} className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-2">
                      <h4 className="text-base font-bold font-serif-prestige text-[#0F172A]">
                        {fee.stream}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {fee.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#F1F5F9] text-[#0F172A] rounded-xl border border-[#E2E8F0]">
                  <p className="text-xs text-slate-600 font-light">
                    Need fee installment details or scholarship guidance? Contact our admissions office at <strong className="text-[#0F172A] font-semibold">{INSTITUTION_INFO.admissionsEmail}</strong> or helpline <strong className="text-[#0F172A] font-semibold">{INSTITUTION_INFO.phone}</strong>.
                  </p>
                </div>
              </Card>
            )}

            {/* 5. Exam Notifications */}
            {activeTab === 'exams' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Examination Schedules & Rules
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Mid-term, semester, and university exam timetables</p>
                </div>

                <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-3">
                  <h4 className="text-base font-bold font-serif-prestige text-[#0F172A]">
                    End-Semester Examination Schedule 2026
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Exams for CCSU Law, ABVMU B.Sc Nursing, and PCI Pharmacy courses are conducted as per respective university date-sheets. Admit cards are issued to students meeting 75% attendance criteria.
                  </p>
                  <Button variant="secondary" size="sm" className="text-xs">
                    Download Exam Rules PDF
                  </Button>
                </div>
              </Card>
            )}

            {/* 6. Syllabus Downloads */}
            {activeTab === 'syllabus' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Course Syllabus Downloads
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Official curriculum as per BCI, PCI, ABVMU, and CCSU norms</p>
                </div>

                <div className="space-y-3">
                  {ACADEMIC_AFFAIRS_DATA.syllabusList.map((syl, idx) => (
                    <div key={idx} className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between gap-4 hover:border-[#1D4ED8]/40 transition-colors">
                      <div>
                        <span className="text-[10px] font-bold text-white bg-[#1D4ED8] px-2 py-0.5 rounded uppercase">
                          {syl.stream}
                        </span>
                        <h4 className="text-sm font-bold text-[#0F172A] font-serif-prestige mt-1">
                          {syl.program}
                        </h4>
                      </div>
                      <Button variant="outlineBlue" size="sm" className="text-xs shrink-0" icon={Download}>
                        {syl.pdfName}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 7. Question Papers Archive */}
            {activeTab === 'papers' && (
              <Card className="p-8 space-y-6 bg-white border border-[#CBD5E1] shadow-xl">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
                    Previous Year Question Papers Repository
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">Sample test papers and previous university exam question banks</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ACADEMIC_AFFAIRS_DATA.questionPapers.map((qp, idx) => (
                    <div key={idx} className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500">Session {qp.year}</span>
                        <Badge variant="blue" className="text-[10px]">Exam Paper</Badge>
                      </div>
                      <h4 className="text-base font-bold font-serif-prestige text-[#0F172A]">
                        {qp.title}
                      </h4>
                      <Button variant="secondary" size="sm" className="w-full text-xs" icon={Download}>
                        Download {qp.file}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
