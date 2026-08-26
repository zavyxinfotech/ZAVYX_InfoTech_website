import React from 'react';
import { 
  Search, 
  Cpu, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function StructuredMilestonesSDLC() {
  const stages = [
    {
      step: "01",
      title: "Discover & Audit",
      subtitle: "Timeline: Week 1",
      desc: "We analyze your business operations, trace workflow bottlenecks, map existing data fields, and audit competitor technology structures in the Indian market.",
      icon: Search,
      color: "from-brand-500 to-indigo-500",
      textColor: "text-brand-600",
      bgColor: "bg-brand-50/80",
      borderColor: "group-hover:border-brand-300",
      glowColor: "shadow-brand-500/10",
      actions: [
        "Infrastructure & API Audit",
        "Competitor Benchmarking",
        "Integration Mapping"
      ]
    },
    {
      step: "02",
      title: "Design & Blueprint",
      subtitle: "Timeline: Week 2",
      desc: "We craft interactive UI/UX wireframes, map relational database schemas (SQL/NoSQL), and outline step-by-step logic scripts for WhatsApp bots and AI agents.",
      icon: Cpu,
      color: "from-indigo-500 to-accent-500",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50/80",
      borderColor: "group-hover:border-indigo-300",
      glowColor: "shadow-indigo-500/10",
      actions: [
        "Frictionless User Journeys",
        "Database Architecture Plan",
        "Bot Dialogue Flowcharts"
      ]
    },
    {
      step: "03",
      title: "Modular Engineering",
      subtitle: "Timeline: Weeks 3-4",
      desc: "Our Erode-based engineering team develops clean code utilizing React, Tailwind CSS, official Meta APIs, and customized workflow automations (n8n/Make).",
      icon: Code2,
      color: "from-accent-500 to-emerald-500",
      textColor: "text-accent-600",
      bgColor: "bg-pink-50/80",
      borderColor: "group-hover:border-accent-300",
      glowColor: "shadow-accent-500/10",
      actions: [
        "Component-Driven Coding",
        "Webhook/API Integrations",
        "AI Agent Prompt Tuning"
      ]
    },
    {
      step: "04",
      title: "Speed-Test & Launch",
      subtitle: "Timeline: Week 5",
      desc: "Before launching, we conduct complete cross-device testing, run Lighthouse audits, secure database instances, migrate legacy systems, and hand over the code.",
      icon: Rocket,
      color: "from-emerald-500 to-brand-500",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50/80",
      borderColor: "group-hover:border-emerald-300",
      glowColor: "shadow-emerald-500/10",
      actions: [
        "90+ PageSpeed Auditing",
        "SSL & Firewall Protection",
        "Onsite Team Training"
      ]
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60 overflow-hidden select-none">
      
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-brand-100/30 to-transparent blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-1050/20 to-transparent blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal variant="fade-up" duration={350} threshold={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4-Stage Execution Methodology</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              How We Engineer Your Success
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We replace complex, confusing development cycles with a structured, transparent, and deadline-driven roadmap tailored for startups & growing enterprises.
            </p>
          </ScrollReveal>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connection line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[1.5px] bg-slate-200/80 -z-10" />

          {stages.map((stage, idx) => {
            const Icon = stage.icon;

            return (
              <ScrollReveal 
                key={stage.step} 
                variant="fade-up" 
                duration={350} 
                delay={idx * 100}
                threshold={0.05}
                className="h-full"
              >
                <div className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-transparent shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
                  
                  {/* Glowing card border on hover (pure CSS GPU accelerated) */}
                  <div 
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      backgroundClip: "border-box"
                    }}
                    className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-15 blur-[6px] transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    {/* Top row: Icon box with step number overlay */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${stage.bgColor} flex items-center justify-center ${stage.textColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      
                      <span className="text-3xl font-black font-mono bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-brand-400">
                        {stage.step}
                      </span>
                    </div>

                    {/* Timeline subtext */}
                    <span className="inline-block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      {stage.subtitle}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-brand-600 transition-colors font-display mb-3">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Bullet Bullet Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {stage.actions.map((act, actIdx) => (
                      <div key={actIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-500 font-semibold truncate">{act}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}
