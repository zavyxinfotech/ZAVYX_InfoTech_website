import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  TrendingUp,
  Sparkles,
  Zap
} from 'lucide-react';
import logoImg from '../../assets/logo/logo.png';

export default function StructuredMilestonesSDLC() {
  const [hoveredStage, setHoveredStage] = useState(null);

  const leftStages = [
    {
      number: "01",
      name: "Discovery",
      pill: "xDiscovery",
      icon: Compass,
      pillBg: "bg-[#9333ea] text-white shadow-purple-500/20",
      nodeColor: "border-purple-400 text-purple-600",
      pathColor: "#a855f7",
    },
    {
      number: "02",
      name: "Requirements",
      pill: "xRequirements",
      icon: FileText,
      pillBg: "bg-[#059669] text-white shadow-emerald-500/20",
      nodeColor: "border-emerald-400 text-emerald-600",
      pathColor: "#10b981",
    },
    {
      number: "03",
      name: "Design",
      pill: "xDesign",
      icon: Cpu,
      pillBg: "bg-[#d97706] text-white shadow-amber-500/20",
      nodeColor: "border-amber-400 text-amber-600",
      pathColor: "#f59e0b",
    },
  ];

  const rightStages = [
    {
      number: "04",
      name: "Development",
      pill: "xDevelopment",
      icon: Code2,
      pillBg: "bg-[#0284c7] text-white shadow-sky-500/20",
      nodeColor: "border-sky-400 text-sky-600",
      pathColor: "#0284c7",
    },
    {
      number: "05",
      name: "Testing & QA",
      pill: "xTesting",
      icon: ShieldCheck,
      pillBg: "bg-[#0d9488] text-white shadow-teal-500/20",
      nodeColor: "border-teal-400 text-teal-600",
      pathColor: "#14b8a6",
    },
    {
      number: "06",
      name: "Deployment",
      pill: "xDeploy",
      icon: Rocket,
      pillBg: "bg-[#4f46e5] text-white shadow-indigo-500/20",
      nodeColor: "border-indigo-400 text-indigo-600",
      pathColor: "#6366f1",
    },
    {
      number: "07",
      name: "Scaling",
      pill: "xScale",
      icon: TrendingUp,
      pillBg: "bg-[#e11d48] text-white shadow-rose-500/20",
      nodeColor: "border-rose-400 text-rose-600",
      pathColor: "#f43f5e",
    },
  ];

  const allStages = [...leftStages, ...rightStages];

  return (
    <section className="relative py-20 md:py-28 bg-[#fafcff] border-t border-slate-200/80 overflow-hidden select-none">
      
      {/* Subtle Technical Dot Matrix Background (Matching Reference) */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-brand-100/40 via-purple-100/20 to-emerald-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER (MINIMAL) ================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>SDLC Circuit Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Structured Milestones
          </h2>

          <p className="mt-2 text-slate-500 text-sm sm:text-base font-medium">
            From Discovery to Scaling
          </p>
        </div>

        {/* ================= DESKTOP & TABLET: TWO-SIDED CIRCUIT WORKFLOW ================= */}
        <div className="hidden lg:block relative max-w-6xl mx-auto min-h-[580px]">
          
          {/* SVG Circuit Canvas with Curved Traces & Signal Pulses */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1152 580" 
            fill="none"
          >
            <defs>
              {/* Circuit glow filters */}
              <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ====== LEFT CIRCUIT TRACES (01, 02, 03 -> CENTER CORE) ====== */}
            {/* Trace 01 (Top Left -> Center) */}
            <path 
              d="M 170 100 C 320 100, 360 250, 485 270" 
              stroke="#a855f7" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 170 100 C 320 100, 360 250, 485 270" 
              stroke="#c084fc" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* Trace 02 (Middle Left -> Center) */}
            <path 
              d="M 170 290 C 310 290, 370 290, 485 290" 
              stroke="#10b981" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 170 290 C 310 290, 370 290, 485 290" 
              stroke="#34d399" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* Trace 03 (Bottom Left -> Center) */}
            <path 
              d="M 170 480 C 320 480, 360 330, 485 310" 
              stroke="#f59e0b" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 170 480 C 320 480, 360 330, 485 310" 
              stroke="#fbbf24" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* ====== RIGHT CIRCUIT TRACES (CENTER CORE -> 04, 05, 06, 07) ====== */}
            {/* Trace 04 (Center -> Top Right) */}
            <path 
              d="M 667 265 C 780 250, 840 85, 980 85" 
              stroke="#0284c7" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 667 265 C 780 250, 840 85, 980 85" 
              stroke="#38bdf8" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* Trace 05 (Center -> Upper Middle Right) */}
            <path 
              d="M 667 280 C 780 280, 840 220, 980 220" 
              stroke="#14b8a6" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 667 280 C 780 280, 840 220, 980 220" 
              stroke="#2dd4bf" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* Trace 06 (Center -> Lower Middle Right) */}
            <path 
              d="M 667 300 C 780 300, 840 360, 980 360" 
              stroke="#6366f1" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 667 300 C 780 300, 840 360, 980 360" 
              stroke="#818cf8" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />

            {/* Trace 07 (Center -> Bottom Right) */}
            <path 
              d="M 667 315 C 780 330, 840 500, 980 500" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeOpacity="0.75" 
              strokeLinecap="round"
            />
            <path 
              d="M 667 315 C 780 330, 840 500, 980 500" 
              stroke="#fb7185" 
              strokeWidth="2.5" 
              strokeDasharray="8 24" 
              className="animate-pulse"
            />
          </svg>

          {/* ================= LEFT SIDE CIRCUIT NODES ================= */}
          <div className="absolute left-0 top-0 bottom-0 w-[420px] flex flex-col justify-between py-2 z-10">
            {leftStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isHovered = hoveredStage === stage.number;

              return (
                <div 
                  key={stage.number} 
                  className="relative flex items-center justify-between"
                  onMouseEnter={() => setHoveredStage(stage.number)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Left Stage Node Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-36 sm:w-40 p-4 rounded-3xl bg-white/95 backdrop-blur-md border shadow-lg transition-all duration-300 ${
                      isHovered ? `${stage.nodeColor} ring-2 ring-purple-400/30 shadow-xl` : 'border-slate-200/90'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-slate-400">{stage.number}</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">
                      {stage.name}
                    </h4>
                  </motion.div>

                  {/* Connecting Milestone Pill (Positioned on the Circuit Line) */}
                  <div className={`px-3.5 py-1 rounded-full text-xs font-semibold shadow-md ${stage.pillBg} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                    {stage.pill}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= CENTER ZAVYX CORE ENGINE HUB (MATCHING REFERENCE) ================= */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="w-48 h-48 sm:w-52 sm:h-52 rounded-[38px] bg-white/95 backdrop-blur-xl p-5 shadow-2xl border-4 border-white ring-2 ring-brand-400/30 shadow-brand-500/15 flex flex-col items-center justify-between text-center relative overflow-hidden"
            >
              {/* Glowing Inner Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-emerald-500/5 to-purple-500/10 pointer-events-none" />

              {/* Status Header */}
              <div className="w-full flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  CORE
                </span>
                <span>v2.6 SDLC</span>
              </div>

              {/* Central Official Logo */}
              <div className="relative py-2 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="ZAVYX Technology Core"
                  className="w-32 sm:w-36 h-auto object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/ZAVYX_logo.png';
                  }}
                />
              </div>

              {/* Central Telemetry Badge */}
              <div className="w-full py-1 rounded-xl bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-700 tracking-wider uppercase font-mono">
                ENGINEERING HUB
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE CIRCUIT NODES ================= */}
          <div className="absolute right-0 top-0 bottom-0 w-[440px] flex flex-col justify-between py-1 z-10">
            {rightStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isHovered = hoveredStage === stage.number;

              return (
                <div 
                  key={stage.number} 
                  className="relative flex items-center justify-between"
                  onMouseEnter={() => setHoveredStage(stage.number)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Connecting Milestone Pill (Positioned on the Circuit Line) */}
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${stage.pillBg} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                    {stage.pill}
                  </div>

                  {/* Right Stage Node Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-36 sm:w-40 p-3.5 rounded-3xl bg-white/95 backdrop-blur-md border shadow-lg transition-all duration-300 ${
                      isHovered ? `${stage.nodeColor} ring-2 ring-sky-400/30 shadow-xl` : 'border-slate-200/90'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-slate-400">{stage.number}</span>
                      </div>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                      {stage.name}
                    </h4>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= MOBILE: VERTICAL CIRCUIT BOARD LAYOUT ================= */}
        <div className="block lg:hidden relative max-w-md mx-auto">
          
          {/* Top Integrated ZAVYX Core Hub */}
          <div className="flex justify-center mb-8">
            <div className="w-44 p-4 rounded-3xl bg-white border-2 border-brand-200 shadow-xl text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>ZAVYX CORE</span>
              </div>
              <img
                src={logoImg}
                alt="ZAVYX"
                className="h-7 w-auto object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ZAVYX_logo.png';
                }}
              />
            </div>
          </div>

          {/* Central Vertical Circuit Spine */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-slate-300 ml-4 sm:ml-6 space-y-6">
            {allStages.map((stage, idx) => {
              const IconComp = stage.icon;

              return (
                <div key={stage.number} className="relative">
                  {/* Node Dot on the Spine */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-5 h-5 rounded-full bg-white border-2 border-brand-500 shadow-sm flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  {/* Stage Card */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-400">{stage.number}</span>
                          <h4 className="text-sm font-bold text-slate-900">{stage.name}</h4>
                        </div>
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${stage.pillBg} shrink-0`}>
                      {stage.pill}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
