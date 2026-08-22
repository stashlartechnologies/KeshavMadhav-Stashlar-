import React from 'react';
import { Building2, GraduationCap, Users, UserCheck, Award, BookOpen } from 'lucide-react';

export const StatsBar = () => {
  const stats = [
    { value: "12+", label: "Years of Excellence", icon: Building2 },
    { value: "25+", label: "Programmes", icon: GraduationCap },
    { value: "5000+", label: "Students", icon: Users },
    { value: "200+", label: "Experienced Faculty", icon: UserCheck },
    { value: "100%", label: "Placement Assistance", icon: Award },
    { value: "Accredited", label: "& Recognised", icon: BookOpen }
  ];

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 pt-4 md:pt-0 pl-0 md:pl-4 first:pl-0">
              <div className="w-11 h-11 rounded-full bg-[#0A1724] text-[#E5B238] flex items-center justify-center shrink-0 shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-extrabold font-serif-prestige text-[#0A1724]">
                  {stat.value}
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
