import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Award, Target, Eye, Compass, CheckCircle } from 'lucide-react';
import { VISION, AIM, MISSION_POINTS } from '../../data/kmgiData';

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-[#FAFBFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Our Institution"
          title="Nurturing Academic Excellence & Ethical Leadership"
          subtitle="Shaping the next generation of professionals through quality, value-based multidisciplinary education."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 mt-12">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 font-light leading-relaxed">
            <h3 className="text-2xl font-bold font-serif-prestige text-[#0F172A]">
              About Keshav Madhav Group of Institutions (KMGI)
            </h3>
            
            <p className="text-[#1D4ED8] font-semibold text-lg font-serif-prestige">
              "Empowering Minds. Transforming Futures."
            </p>

            <p>
              Established in <strong className="text-[#0F172A] font-semibold">2012</strong> under the aegis of <strong className="text-[#0F172A] font-semibold">Keshav Madhav Shikshan Sansthan (Trust)</strong>, Greater Noida, Keshav Madhav Group of Institutions (KMGI) is a premier multidisciplinary institution committed to shaping competent and ethical professionals.
            </p>

            <p>
              At KMGI, education is more than earning a degree—it's about discovering potential, building character, and creating opportunities. We believe that every student possesses unique abilities, and our mission is to nurture those abilities through academic excellence, practical learning, innovation, and holistic development.
            </p>

            <p>
              With programmes in <strong className="text-[#0F172A] font-semibold">Law, Nursing, Pharmacy, and Vocational Education</strong>, we provide a dynamic learning environment where knowledge is complemented by hands-on experience, industry exposure, and ethical leadership.
            </p>

            <div className="p-4 bg-[#F1F5F9] border-l-4 border-[#1D4ED8] rounded-r-lg space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Government Recognitions & Affiliations
              </span>
              <p className="text-xs text-slate-700">
                Recognised by the <strong className="text-[#0F172A]">Bar Council of India (BCI)</strong>, <strong className="text-[#0F172A]">Pharmacy Council of India (PCI)</strong>, and the <strong className="text-[#0F172A]">State Medical Faculty, Uttar Pradesh</strong>, and affiliated with <strong className="text-[#0F172A]">Atal Bihari Vajpayee Medical University (ABVMU)</strong>, Lucknow, and <strong className="text-[#0F172A]">Chaudhary Charan Singh University (CCSU)</strong>, Meerut.
              </p>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-white p-8 space-y-6 shadow-xl border border-[#CBD5E1]">
              <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
                <Award className="w-8 h-8 text-[#1D4ED8]" />
                <div>
                  <h4 className="text-xl font-bold font-serif-prestige text-[#0F172A]">ISO 9001:2015</h4>
                  <p className="text-xs text-[#1D4ED8] font-semibold">Certified Quality Governance</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed italic font-light">
                "Our ISO 9001:2015 Certification further reflects our commitment to excellence in education and institutional governance. Driven by experienced faculty, dedicated mentors, and a culture rooted in discipline and integrity."
              </p>

              <div className="pt-2 border-t border-[#E2E8F0] space-y-2">
                <p className="text-xs text-[#1D4ED8] font-bold uppercase tracking-wider">Key Pillars:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8]" /> Quality Education</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8]" /> Experiential Learning</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8]" /> Ethical Values</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#1D4ED8]" /> Nation Building</div>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* Vision, Mission, Aim Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#1D4ED8] bg-white">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F172A]">Vision</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">{VISION}</p>
          </Card>

          {/* Aim */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#1D4ED8] bg-white">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F172A]">Aim</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">{AIM}</p>
          </Card>

          {/* Mission Overview */}
          <Card className="p-8 space-y-4 border-t-4 border-t-[#1D4ED8] bg-white">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-serif-prestige text-[#0F172A]">Mission</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              {MISSION_POINTS.slice(0, 3).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] font-bold">•</span>
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
