import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Eye, Target, Compass, Award, CheckCircle2 } from 'lucide-react';
import { VISION, AIM, MISSION_POINTS, CORE_VALUES } from '../data/kmgiData';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-20">
      
      {/* Header Banner */}
      <section className="bg-hero-pattern-light text-[#0F172A] py-16 md:py-24 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Established 2012 • Greater Noida
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight text-[#0F172A]">
            About Keshav Madhav Group of Institutions
          </h1>
          <p className="text-lg text-[#1D4ED8] font-serif-prestige italic max-w-2xl mx-auto font-semibold">
            "Empowering Minds. Transforming Futures."
          </p>
        </div>
      </section>

      {/* Main Content & Trust Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-slate-700 font-light leading-relaxed">
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-widest block">
                Institutional History & Heritage
              </span>
              <h2 className="text-3xl font-bold font-serif-prestige text-[#0F172A]">
                A Premier Multidisciplinary Educational Hub
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Established in <strong className="text-[#0F172A]">2012</strong> under the aegis of <strong className="text-[#0F172A]">Keshav Madhav Shikshan Sansthan (Trust)</strong>, Greater Noida, Keshav Madhav Group of Institutions (KMGI) is committed to shaping the next generation of professionals through quality, value-based education.
              </p>

              <p className="text-slate-600 font-light">
                At KMGI, education is more than earning a degree—it's about discovering potential, building character, and creating opportunities. We believe that every student possesses unique abilities, and our mission is to nurture those abilities through academic excellence, practical learning, innovation, and holistic development.
              </p>

              <p className="text-slate-600 font-light">
                With programmes in <strong className="text-[#0F172A]">Law, Nursing, Pharmacy, and Vocational Education</strong>, we provide a dynamic learning environment where knowledge is complemented by hands-on experience, industry exposure, and ethical leadership.
              </p>
            </div>

            {/* Quality & Accreditation Card */}
            <div className="lg:col-span-5">
              <Card className="bg-white text-[#0F172A] p-8 space-y-6 shadow-xl border border-[#CBD5E1]">
                <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
                  <Award className="w-10 h-10 text-[#1D4ED8]" />
                  <div>
                    <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">ISO 9001:2015</h3>
                    <p className="text-xs font-semibold text-[#1D4ED8]">Quality Certification Standard</p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-light">
                  "Our ISO 9001:2015 Certification further reflects our commitment to excellence in education and institutional governance. Driven by experienced faculty, dedicated mentors, and a culture rooted in discipline, integrity, and innovation."
                </p>

                <div className="space-y-2 border-t border-[#E2E8F0] pt-4">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                    Recognised Council Approvals:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700 font-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                      <span>Bar Council of India (BCI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                      <span>Pharmacy Council of India (PCI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                      <span>State Medical Faculty, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                      <span>Affiliated with ABVMU, Lucknow & CCSU, Meerut</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

          </div>

          {/* Vision, Aim & Mission Section */}
          <div className="space-y-8">
            <SectionHeading
              badge="Foundational Philosophy"
              title="Vision, Aim & Mission"
              subtitle="The core principles driving our commitment to society and student transformation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision */}
              <Card className="p-8 space-y-4 border-t-4 border-t-[#1D4ED8] bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {VISION}
                </p>
              </Card>

              {/* Aim */}
              <Card className="p-8 space-y-4 border-t-4 border-t-[#1D4ED8] bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">Aim</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {AIM}
                </p>
              </Card>

            </div>

            {/* Mission Detailed Card */}
            <Card className="p-8 space-y-6 border-t-4 border-t-[#1D4ED8] bg-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">Mission</h3>
                  <p className="text-xs text-[#1D4ED8] font-semibold">5 Strategic Mission Commitments</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MISSION_POINTS.map((pt, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-700 font-light leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 8 Core Values */}
          <div className="space-y-8">
            <SectionHeading
              badge="Institutional Principles"
              title="Our 8 Core Values"
              subtitle="Guiding every student, mentor, and administrator at Keshav Madhav Group of Institutions."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <Card key={idx} className="p-6 space-y-3 border-t-2 border-t-[#1D4ED8] bg-white">
                  <span className="text-xs font-extrabold text-[#1D4ED8] uppercase tracking-wider block">
                    Value 0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold font-serif-prestige text-[#0F172A]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
