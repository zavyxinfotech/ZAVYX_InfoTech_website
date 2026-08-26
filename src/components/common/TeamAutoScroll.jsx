import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { companyData } from '../../data/companyData';

// Team member image imports
import founderImg from '../../assets/images/team/Founder.webp';
import directorImg from '../../assets/images/team/Director.webp';
import relationshipManagerImg from '../../assets/images/team/Relationship_Manager.webp';
import dataAnalystImg from '../../assets/images/team/Data_Analyst.webp';
import uiUxImg from '../../assets/images/team/UI_Ux_Designer.webp';
import hrImg from '../../assets/images/team/HR.webp';
import developerImg from '../../assets/images/team/developer_developer.webp';

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

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Users className="w-3.5 h-3.5 text-brand-600" />
            <span>Leadership &amp; Core Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Meet the Builders Behind ZAVYX
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A dedicated multidisciplinary team of founders, analysts, designers, and software engineers working together to elevate your digital presence.
          </p>
        </div>

        {/* All Team Members in One Screen - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300 hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center justify-between group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Member Photo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md ring-4 ring-slate-100 border border-slate-200 mb-4 shrink-0 bg-slate-100 flex items-center justify-center group-hover:ring-brand-100 transition-all duration-300">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.accent} text-white font-extrabold font-display text-xl flex items-center justify-center`}>
                      {member.avatarText}
                    </div>
                  )}

                  {/* Active Status Dot */}
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"></span>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {member.name}
                </h3>
                
                {/* Role Badge */}
                <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
                  {member.role}
                </span>

                {/* Focus / Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {member.focus}
                </p>
              </div>

              {/* Skills Tags */}
              {member.skills && member.skills.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 w-full flex flex-wrap items-center justify-center gap-1.5">
                  {member.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-2 text-slate-700 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Direct In-House Team &bull; 7 Dedicated Professionals</span>
          </span>
          <span className="flex items-center gap-1.5 text-brand-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Texvalley Headquarters, Erode, Tamil Nadu</span>
          </span>
        </div>

      </div>
    </section>
  );
}
