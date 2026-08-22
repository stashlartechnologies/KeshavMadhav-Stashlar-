import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Stethoscope, Pill, Briefcase, ArrowRight } from 'lucide-react';

export const FacultyCards = () => {
  const faculties = [
    {
      id: "law",
      title: "Law",
      desc: "Build a strong foundation for a successful legal career with industry-oriented curriculum.",
      icon: Scale,
      colorBg: "bg-sky-100",
      iconColor: "text-sky-700",
      link: "/academics#law"
    },
    {
      id: "nursing",
      title: "Nursing",
      desc: "Compassionate care. Professional excellence. Shaping the future of healthcare.",
      icon: Stethoscope,
      colorBg: "bg-teal-100",
      iconColor: "text-teal-700",
      link: "/nursing"
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      desc: "Innovating healthcare through knowledge, research and quality education.",
      icon: Pill,
      colorBg: "bg-purple-100",
      iconColor: "text-purple-700",
      link: "/academics#pharmacy"
    },
    {
      id: "vocational",
      title: "Vocational Studies",
      desc: "Skill-based education for real-world success and career growth.",
      icon: Briefcase,
      colorBg: "bg-amber-100",
      iconColor: "text-amber-700",
      link: "/academics#vocational"
    }
  ];

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((fac) => {
            const Icon = fac.icon;
            return (
              <Link key={fac.id} to={fac.link}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group cursor-pointer h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-full ${fac.colorBg} flex items-center justify-center ${fac.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold font-serif-prestige text-[#0A1724] group-hover:text-[#C59B27] transition-colors">
                      {fac.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0A1724] group-hover:text-[#C59B27] transition-colors">
                    <span>View Programmes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
