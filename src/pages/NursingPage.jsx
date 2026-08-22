import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { HeartPulse, Hospital, FlaskConical, Activity, Award, UserCheck, ShieldCheck, CheckCircle2, GraduationCap, Stethoscope } from 'lucide-react';
import { NURSING_PORTAL_DATA } from '../data/kmgiData';

export const NursingPage = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Healthcare Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            {NURSING_PORTAL_DATA.title}
          </h1>
          <p className="text-sm font-semibold text-[#D4AF37] max-w-3xl mx-auto">
            {NURSING_PORTAL_DATA.approval}
          </p>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            {NURSING_PORTAL_DATA.tagline}
          </p>
        </div>
      </section>

      {/* Main Nursing Portal Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Programme Highlights Grid */}
          <div className="space-y-6">
            <SectionHeading
              badge="Accreditation & Quality"
              title="Programme Highlights"
              subtitle="Recognised by State Medical Faculty UP and affiliated with Atal Bihari Vajpayee Medical University (ABVMU), Lucknow."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {NURSING_PORTAL_DATA.highlights.map((hl, idx) => (
                <Card key={idx} className="p-6 space-y-3 border-t-4 border-t-[#C59B27] bg-white">
                  <div className="w-10 h-10 rounded-xl bg-[#0F2537]/10 flex items-center justify-center text-[#0F2537]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {hl.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Training & Hospital Postings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#0F2537] uppercase tracking-widest block">
                Direct Ward Immersion
              </span>
              <h2 className="text-3xl font-bold font-serif-prestige text-[#0F2537]">
                Clinical Training & Hospital Exposure
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {NURSING_PORTAL_DATA.clinicalTraining.description}
              </p>

              <div className="space-y-2.5">
                {NURSING_PORTAL_DATA.clinicalTraining.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <Stethoscope className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Exposure Highlights */}
            <div className="lg:col-span-5">
              <Card className="bg-gradient-to-br from-[#0F2537] to-[#173752] text-white p-8 space-y-6 shadow-2xl border-2 border-[#C59B27]/40">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <Hospital className="w-10 h-10 text-[#D4AF37]" />
                  <div>
                    <h3 className="text-xl font-bold font-serif-prestige">Hospital Tie-ups</h3>
                    <p className="text-xs text-[#D4AF37]">Clinical Rotations in NCR Hospitals</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  {NURSING_PORTAL_DATA.hospitalExposure.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="md" className="w-full" onClick={onOpenEnquiry} icon={GraduationCap}>
                  Apply for Nursing Course
                </Button>
              </Card>
            </div>

          </div>

          {/* Nursing Simulation Laboratories */}
          <div className="space-y-8">
            <SectionHeading
              badge="Practical Infrastructure"
              title="Advanced Nursing Simulation Laboratories"
              subtitle="Hands-on skills training equipped with patient care mannequins, physiological charts, and emergency setups."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NURSING_PORTAL_DATA.laboratories.map((lab, idx) => (
                <Card key={idx} className="p-6 space-y-3 border-2 border-slate-200 hover:border-[#0F2537] bg-white">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                    {lab.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Mentorship, BLS & Career Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="p-8 space-y-4 border-t-4 border-t-[#0F2537] bg-white">
              <UserCheck className="w-8 h-8 text-[#0F2537]" />
              <h3 className="text-xl font-bold font-serif-prestige text-[#0F2537]">Faculty Mentorship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {NURSING_PORTAL_DATA.mentorshipAndBls.mentorship}
              </p>
            </Card>

            <Card className="p-8 space-y-4 border-t-4 border-t-[#C59B27] bg-white">
              <Activity className="w-8 h-8 text-[#C59B27]" />
              <h3 className="text-xl font-bold font-serif-prestige text-[#0F2537]">BLS & Emergency Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {NURSING_PORTAL_DATA.mentorshipAndBls.blsTraining}
              </p>
            </Card>

            <Card className="p-8 space-y-4 border-t-4 border-t-[#800020] bg-white">
              <ShieldCheck className="w-8 h-8 text-[#800020]" />
              <h3 className="text-xl font-bold font-serif-prestige text-[#0F2537]">Research & Career Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {NURSING_PORTAL_DATA.mentorshipAndBls.researchAndCareer}
              </p>
            </Card>

          </div>

        </div>
      </section>

    </div>
  );
};
