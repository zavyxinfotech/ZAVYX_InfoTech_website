import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Zap,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StructuredMilestonesSDLC() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const sdlcStages = [
    {
      number: "01",
      title: "Discovery & Planning",
      shortTitle: "Discovery",
      badge: "xStrategy",
      tagline: "Scope & Objectives",
      description: "Understand the business problem, user personas, technical scope, timeline, and project milestones.",
      icon: Compass,
      color: "from-sky-500 to-blue-600",
      pillColor: "bg-sky-500 text-white",
      borderColor: "border-sky-300",
      accentBg: "bg-sky-50/80 text-sky-700",
      pathColor: "#0284c7"
    },
    {
      number: "02",
      title: "Requirements Analysis",
      shortTitle: "Requirements",
      badge: "xSpecs",
      tagline: "Functional Blueprint",
      description: "Translate business requirements into functional, technical specifications and structured user flows.",
      icon: FileText,
      color: "from-indigo-500 to-violet-600",
      pillColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-300",
      accentBg: "bg-indigo-50/80 text-indigo-700",
      pathColor: "#4f46e5"
    },
    {
      number: "03",
      title: "System Design",
      shortTitle: "Architecture",
      badge: "xDesign",
      tagline: "UI/UX & DB Schemas",
      description: "Define the cloud architecture, technology stack, database schemas, APIs, and design systems.",
      icon: Cpu,
      color: "from-purple-500 to-fuchsia-600",
      pillColor: "bg-purple-600 text-white",
      borderColor: "border-purple-300",
      accentBg: "bg-purple-50/80 text-purple-700",
      pathColor: "#9333ea"
    },
    {
      number: "04",
      title: "Development",
      shortTitle: "Development",
      badge: "xCode",
      tagline: "Agile Production Code",
      description: "Build the product using modular, scalable, maintainable code with modern tech stacks and CI/CD.",
      icon: Code2,
      color: "from-emerald-500 to-teal-600",
      pillColor: "bg-emerald-600 text-white",
      borderColor: "border-emerald-300",
      accentBg: "bg-emerald-50/80 text-emerald-700",
      pathColor: "#059669"
    },
    {
      number: "05",
      title: "Testing & QA",
      shortTitle: "Testing & QA",
      badge: "xStatus",
      tagline: "Security & Validation",
      description: "Validate functionality, load performance, security protocols, responsiveness, and reliability.",
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-600",
      pillColor: "bg-amber-500 text-white",
      borderColor: "border-amber-300",
      accentBg: "bg-amber-50/80 text-amber-700",
      pathColor: "#d97706"
    },
    {
      number: "06",
      title: "Deployment",
      shortTitle: "Deployment",
      badge: "xDeploy",
      tagline: "Zero-Downtime Release",
      description: "Move tested applications into production on cloud infrastructure with automated DNS and SSL.",
      icon: Rocket,
      color: "from-rose-500 to-pink-600",
      pillColor: "bg-rose-600 text-white",
      borderColor: "border-rose-300",
      accentBg: "bg-rose-50/80 text-rose-700",
      pathColor: "#e11d48"
    },
    {
      number: "07",
      title: "Maintenance & Scaling",
      shortTitle: "Scaling",
      badge: "xScale",
      tagline: "Telemetry & Growth",
      description: "Monitor real-time telemetry, resolve issues, optimize speed, and scale as active usage grows.",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600",
      pillColor: "bg-cyan-600 text-white",
      borderColor: "border-cyan-300",
      accentBg: "bg-cyan-50/80 text-cyan-700",
      pathColor: "#0891b2"
    }
  ];

  const activeStage = sdlcStages[activeStageIndex];

  return (
    <section className="relative py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      
      {/* Subtle Technical Dot Matrix Background (Reference Image Inspired) */}
      <div 
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Lighting Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-brand-100/30 via-accent-100/20 to-emerald-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>SDLC Engineering Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
            Structured Milestones From Discovery to Scaling
          </h2>

          <p className="mt-3.5 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A disciplined Software Development Life Cycle (SDLC) that moves your product from strategic blueprint to high-performance production and continuous scaling.
          </p>
        </div>

        {/* ================= DESKTOP & TABLET: INTERCONNECTED SDLC WORKFLOW ARCHITECTURE ================= */}
        <div className="hidden lg:block relative py-6">
          
          {/* Top Row Stages (01, 02, 03) & Bottom Row Stages (04, 05, 06, 07) Layout */}
          <div className="grid grid-cols-12 gap-y-16 gap-x-6 items-center relative">
            
            {/* ================= ROW 1 (STAGES 01, 02, 03) ================= */}
            <div className="col-span-12 grid grid-cols-3 gap-8 relative z-10">
              {sdlcStages.slice(0, 3).map((stage, idx) => {
                const IconComp = stage.icon;
                const isSelected = activeStageIndex === idx;

                return (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onMouseEnter={() => setActiveStageIndex(idx)}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`group relative p-6 rounded-3xl bg-white/95 backdrop-blur-md border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 ${
                      isSelected 
                        ? 'border-brand-400 ring-2 ring-brand-500/30 shadow-brand-500/10 scale-[1.02]' 
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    {/* Header: Number, Pill, Status Pip */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-xl font-extrabold font-display ${isSelected ? 'text-brand-600' : 'text-slate-400'}`}>
                          {stage.number}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${stage.pillColor}`}>
                          {stage.badge}
                        </span>
                      </div>

                      {/* Reference Image Style Pulse Pip */}
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-500 animate-ping' : 'bg-emerald-400'}`} />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-sm shrink-0`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {stage.title}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400 block">
                          {stage.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= CONNECTING BEZIER VECTOR LINES (SVG CANVAS) ================= */}
            <div className="col-span-12 relative h-12 flex items-center justify-center my-[-10px] pointer-events-none">
              <svg className="w-full h-20" viewBox="0 0 1100 80" fill="none">
                <defs>
                  <linearGradient id="flowGrad1" x1="0" y1="0" x2="1100" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0284c7" />
                    <stop offset="0.33" stopColor="#4f46e5" />
                    <stop offset="0.66" stopColor="#9333ea" />
                    <stop offset="1" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Main Connected Pathway */}
                <path 
                  d="M180 0 V30 C180 55, 920 15, 920 40 V80 M550 0 V80 M920 0 V80" 
                  stroke="#cbd5e1" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />

                {/* Animated Luminous Pipeline Stream */}
                <path 
                  d="M180 20 H920" 
                  stroke="url(#flowGrad1)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />

                {/* Node Points on Path */}
                <circle cx="180" cy="20" r="4" fill="#0284c7" />
                <circle cx="550" cy="20" r="4" fill="#4f46e5" />
                <circle cx="920" cy="20" r="4" fill="#9333ea" />
              </svg>
            </div>

            {/* ================= ROW 2 (STAGES 04, 05, 06, 07) ================= */}
            <div className="col-span-12 grid grid-cols-4 gap-6 relative z-10">
              {sdlcStages.slice(3).map((stage, idx) => {
                const actualIdx = idx + 3;
                const IconComp = stage.icon;
                const isSelected = activeStageIndex === actualIdx;

                return (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: actualIdx * 0.08 }}
                    onMouseEnter={() => setActiveStageIndex(actualIdx)}
                    onClick={() => setActiveStageIndex(actualIdx)}
                    className={`group relative p-5 rounded-3xl bg-white/95 backdrop-blur-md border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 ${
                      isSelected 
                        ? 'border-brand-400 ring-2 ring-brand-500/30 shadow-brand-500/10 scale-[1.02]' 
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    {/* Header: Number, Pill, Status Pip */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-extrabold font-display ${isSelected ? 'text-brand-600' : 'text-slate-400'}`}>
                          {stage.number}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-xs ${stage.pillColor}`}>
                          {stage.badge}
                        </span>
                      </div>

                      {/* Status Pip */}
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-500 animate-ping' : 'bg-emerald-400'}`} />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-sm shrink-0`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">
                          {stage.title}
                        </h3>
                        <span className="text-[10px] font-medium text-slate-400 block">
                          {stage.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ================= MOBILE & TABLET: VERTICAL CONNECTED TIMELINE ================= */}
        <div className="block lg:hidden relative">
          
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-cyan-500" />

          <div className="space-y-5 relative z-10 pl-14">
            {sdlcStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isSelected = activeStageIndex === idx;

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`relative p-5 rounded-2xl bg-white border transition-all duration-200 shadow-sm ${
                    isSelected 
                      ? 'border-brand-400 ring-2 ring-brand-500/20 shadow-md' 
                      : 'border-slate-200/90'
                  }`}
                >
                  {/* Left Node Dot on the Vertical Line */}
                  <div className="absolute -left-14 top-5 w-8 h-8 rounded-full bg-white border-2 border-brand-500 shadow-sm flex items-center justify-center text-xs font-bold text-brand-700">
                    {stage.number}
                  </div>

                  {/* Stage Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${stage.pillColor}`}>
                      {stage.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Active Stage</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shrink-0`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ================= BOTTOM SDLC VALUE BANNER ================= */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>End-to-End Enterprise Governance &bull; Zero Technical Debt</span>
          </div>

          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group"
          >
            <span>Plan Your Project Lifecycle with ZAVYX</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
}
