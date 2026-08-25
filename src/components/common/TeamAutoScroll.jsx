import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

// Team member image imports
import founderImg from '../../assets/images/team/Founder.jpeg';
import directorImg from '../../assets/images/team/Director.jpeg';
import relationshipManagerImg from '../../assets/images/team/Relationship_Manager.jpeg';
import dataAnalystImg from '../../assets/images/team/Data_Analyst.png';
import uiUxImg from '../../assets/images/team/UI_Ux_Designer.jpeg';
import hrImg from '../../assets/images/team/HR.jpeg';
import developerImg from '../../assets/images/team/developer_developer.jpeg';

export default function TeamAutoScroll() {
  const imageMap = {
    "Sakthivel Muthusamy": founderImg,
    "Saranya Sakthivel": directorImg,
    "Ramya R": relationshipManagerImg,
    "Nithya Sri S": dataAnalystImg,
    "Vijayadarshini N M": uiUxImg,
    "Archana R": hrImg,
    "Vasuki T": developerImg,
  };

  const rawTeam = companyData.team || [];
  const team = rawTeam.map(member => ({
    ...member,
    image: imageMap[member.name] || null,
  }));
  
  // Duplicate for seamless infinite horizontal loop
  const duplicatedTeam = [...team, ...team, ...team];

  return (
    <div className="py-20 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-brand-600" />
            <span>Leadership & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Meet the Builders Behind ZAVYX
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            A specialized team of leaders, analysts, UI/UX designers, developers, and managers dedicated to your digital growth.
          </p>
        </div>
      </div>

      {/* Autoscrolling Square Cards Stream */}
      <div className="relative w-full py-4 group">
        
        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Autoscrolling Track with Square Cards */}
        <div className="flex gap-5 sm:gap-6 w-max animate-autoscroll group-hover:[animation-play-state:paused]">
          {duplicatedTeam.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="w-60 h-64 sm:w-68 sm:h-72 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center justify-center text-center shrink-0 select-none cursor-default"
            >
              {/* Member Photo Frame */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-4 ring-slate-100 border border-slate-200 mb-3 shrink-0 bg-slate-100 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${member.accent} text-white font-extrabold font-display text-base sm:text-lg flex items-center justify-center`}>
                    {member.avatarText}
                  </div>
                )}
              </div>

              {/* Name & Active Indicator */}
              <div className="flex items-center justify-center gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                  {member.name}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              </div>
              
              {/* Role */}
              <p className="text-xs font-semibold text-brand-600 mt-1 line-clamp-1">
                {member.role}
              </p>

              {/* Focus / Description */}
              <p className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                {member.focus}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Sub-text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-end text-xs text-slate-500">
        <span className="flex items-center gap-1.5 text-brand-600 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Direct Access to Leadership &amp; Engineering &bull; 7 Dedicated Professionals</span>
        </span>
      </div>

    </div>
  );
}
