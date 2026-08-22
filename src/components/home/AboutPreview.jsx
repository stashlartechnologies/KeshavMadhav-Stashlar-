import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { ShieldCheck, Award, Target, Eye, Compass, CheckCircle } from 'lucide-react';
import { INSTITUTION_INFO, VISION, AIM, MISSION_POINTS } from '../../data/kmgiData';

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Our Institution"
          title="Nurturing Academic Excellence & Ethical Leadership"
          subtitle="Shaping the next generation of professionals through quality, value-based multidisciplinary education."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
            <h3 className="text-2xl font-bold font-serif-prestige text-[#0F2537]">
              About Keshav Madhav Group of Institutions (KMGI)
            </h3>
            
            <p className="text-[#C59B27] font-semibold text-lg font-serif-prestige">
              "Empowering Minds. Transforming Futures."
            </p>

            <p>
              Established in <strong className="text-[#0F2537]">2012</strong> under the aegis of <strong className="text-[#0F2537]">Keshav Madhav Shikshan Sansthan (Trust)</strong>, Greater Noida, Keshav Madhav Group of Institutions (KMGI) is a premier multidisciplinary institution committed to shaping competent and ethical professionals.
            </p>

            <p>
              At KMGI, education is more than earning a degree—it's about discovering potential, building character, and creating opportunities. We believe that every student possesses unique abilities, and our mission is to nurture those abilities through academic excellence, practical learning, innovation, and holistic development.
            </p>

            <p>
              With programmes in <strong className="text-[#0F2537]">Law, Nursing, Pharmacy, and Vocational Education</strong>, we provide a dynamic learning environment where knowledge is complemented by hands-on experience, industry exposure, and ethical leadership. Our modern infrastructure, advanced laboratories, smart classrooms, well-equipped libraries, and student-centric campus ensure an enriching educational experience.
            </p>

            <div className="p-4 bg-[#FAFAFC] border-l-4 border-[#0F2537] rounded-r-lg space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F2537]">
                Government Recognitions & Affiliations
              </span>
              <p className="text-sm text-slate-600">
                Recognised by the <strong className="text-slate-800">Bar Council of India (BCI)</strong>, <strong className="text-slate-800">Pharmacy Council of India (PCI)</strong>, and the <strong className="text-slate-800">State Medical Faculty, Uttar Pradesh</strong>, and affiliated with <strong className="text-slate-800">Atal Bihari Vajpayee Medical University (ABVMU)</strong>, Lucknow, and <strong className="text-slate-800">Chaudhary Charan Singh University (CCSU)</strong>, Meerut.
              </p>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-gradient-to-br from-[#0F2537] to-[#173752] text-white p-8 space-y-6 shadow-2xl border-2 border-[#C59B27]/30">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Award className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <h4 className="text-xl font-bold font-serif-prestige">ISO 9001:2015</h4>
                  <p className="text-xs text-[#D4AF37] font-semibold">Certified Quality Governance</p>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed italic">
                "Our ISO 9001:2015 Certification further reflects our commitment to excellence in education and institutional governance. Driven by experienced faculty, dedicated mentors, and a culture rooted in discipline and integrity."
              </p>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Key Pillars:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Quality Education</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Experiential Learning</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Ethical Values</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Nation Building</div>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* Vision, Mission, Aim Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#0F2537]">
            <div className="w-12 h-12 rounded-xl bg-[#0F2537]/10 flex items-center justify-center text-[#0F2537]">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F2537]">Vision</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{VISION}</p>
          </Card>

          {/* Aim */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#C59B27]">
            <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F2537]">Aim</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{AIM}</p>
          </Card>

          {/* Mission Overview */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#800020]">
            <div className="w-12 h-12 rounded-xl bg-[#800020]/10 flex items-center justify-center text-[#800020]">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F2537]">Mission</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {MISSION_POINTS.slice(0, 3).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </Card>

        </div>

      </div>
    </section>
  );
};
