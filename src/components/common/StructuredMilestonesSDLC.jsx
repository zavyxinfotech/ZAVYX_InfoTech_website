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
  Zap,
  ArrowRight
} from 'lucide-react';
import logoImg from '../../assets/logo/logo.png';

export default function StructuredMilestonesSDLC() {
  const [hoveredStage, setHoveredStage] = useState(null);

  const stages = [
    // LEFT SIDE
    {
      id: "01",
      number: "01",
      name: "Discovery",
      pill: "xDiscovery",
      icon: Compass,
      side: "left",
      nodeX: 130,
      nodeY: 110,
      badgeX: 345,
      badgeY: 160,
      path: "M 205 110 C 280 110, 290 160, 345 160 C 400 160, 420 270, 490 270",
      color: "#a855f7",
      pillBg: "bg-purple-600",
      textColor: "text-purple-600",
      borderColor: "border-purple-400",
    },
    {
      id: "02",
      number: "02",
      name: "Requirements",
      pill: "xRequirements",
      icon: FileText,
      side: "left",
      nodeX: 130,
      nodeY: 320,
      badgeX: 345,
      badgeY: 320,
      path: "M 205 320 L 490 320",
      color: "#10b981",
      pillBg: "bg-emerald-600",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-400",
    },
    {
      id: "03",
      number: "03",
      name: "Design",
      pill: "xDesign",
      icon: Cpu,
      side: "left",
      nodeX: 130,
      nodeY: 530,
      badgeX: 345,
      badgeY: 480,
      path: "M 205 530 C 280 530, 290 480, 345 480 C 400 480, 420 370, 490 370",
      color: "#f59e0b",
      pillBg: "bg-amber-500",
      textColor: "text-amber-600",
      borderColor: "border-amber-400",
    },
    // RIGHT SIDE
    {
      id: "04",
      number: "04",
      name: "Development",
      pill: "xDevelopment",
      icon: Code2,
      side: "right",
      nodeX: 1070,
      nodeY: 95,
      badgeX: 850,
      badgeY: 150,
      path: "M 710 260 C 770 260, 800 150, 850 150 C 900 150, 930 95, 995 95",
      color: "#0284c7",
      pillBg: "bg-sky-600",
      textColor: "text-sky-600",
      borderColor: "border-sky-400",
    },
    {
      id: "05",
      number: "05",
      name: "Testing & QA",
      pill: "xTesting",
      icon: ShieldCheck,
      side: "right",
      nodeX: 1070,
      nodeY: 245,
      badgeX: 850,
      badgeY: 270,
      path: "M 710 300 C 770 300, 800 270, 850 270 C 900 270, 930 245, 995 245",
      color: "#14b8a6",
      pillBg: "bg-teal-600",
      textColor: "text-teal-600",
      borderColor: "border-teal-400",
    },
    {
      id: "06",
      number: "06",
      name: "Deployment",
      pill: "xDeploy",
      icon: Rocket,
      side: "right",
      nodeX: 1070,
      nodeY: 395,
      badgeX: 850,
      badgeY: 370,
      path: "M 710 340 C 770 340, 800 370, 850 370 C 900 370, 930 395, 995 395",
      color: "#6366f1",
      pillBg: "bg-indigo-600",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-400",
    },
    {
      id: "07",
      number: "07",
      name: "Scaling",
      pill: "xScale",
      icon: TrendingUp,
      side: "right",
      nodeX: 1070,
      nodeY: 545,
      badgeX: 850,
      badgeY: 490,
      path: "M 710 380 C 770 380, 800 490, 850 490 C 900 490, 930 545, 995 545",
      color: "#f43f5e",
      pillBg: "bg-rose-600",
      textColor: "text-rose-600",
      borderColor: "border-rose-400",
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#fafcff] border-t border-slate-200/80 overflow-hidden select-none">
      
      {/* Dot Grid Canvas Background */}
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
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
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

        {/* ================= DESKTOP INTEGRATED SVG CIRCUIT CANVAS ================= */}
        <div className="hidden lg:block relative w-full max-w-6xl mx-auto aspect-[1200/640]">
          
          {/* Main SVG containing exact paths, animated signals, nodes and badges */}
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 640" 
            fill="none"
          >
            {/* ====== 1. WIREFRAME PATHS CONNECTING NODES TO CENTER ====== */}
            {stages.map((stage) => {
              const isHovered = hoveredStage === stage.id;

              return (
                <g key={stage.id}>
                  {/* Background Track Line */}
                  <path
                    d={stage.path}
                    stroke={stage.color}
                    strokeWidth={isHovered ? "3" : "2"}
                    strokeOpacity={isHovered ? "1" : "0.75"}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />

                  {/* Animated Signal Pulse Stream */}
                  <path
                    d={stage.path}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? "3.5" : "2.5"}
                    strokeDasharray="10 35"
                    strokeLinecap="round"
                    className="animate-pulse"
                    opacity="0.8"
                  />
                </g>
              );
            })}

            {/* ====== 2. MILESTONE PILL BADGES LOCKED EXACTLY ON PATHS ====== */}
            {stages.map((stage) => {
              const isHovered = hoveredStage === stage.id;

              return (
                <foreignObject
                  key={`badge-${stage.id}`}
                  x={stage.badgeX - 60}
                  y={stage.badgeY - 16}
                  width="120"
                  height="32"
                  className="overflow-visible"
                >
                  <div 
                    onMouseEnter={() => setHoveredStage(stage.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    className="w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <div 
                      className={`px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md transition-all duration-300 ${stage.pillBg} ${
                        isHovered ? 'scale-115 ring-4 ring-white/80 shadow-xl' : 'scale-100'
                      }`}
                    >
                      {stage.pill}
                    </div>
                  </div>
                </foreignObject>
              );
            })}

            {/* ====== 3. STAGE NODE CARDS ====== */}
            {stages.map((stage) => {
              const IconComp = stage.icon;
              const isHovered = hoveredStage === stage.id;
              const cardW = 150;
              const cardH = 85;

              return (
                <foreignObject
                  key={`node-${stage.id}`}
                  x={stage.nodeX - cardW / 2}
                  y={stage.nodeY - cardH / 2}
                  width={cardW}
                  height={cardH}
                  className="overflow-visible"
                >
                  <div
                    onMouseEnter={() => setHoveredStage(stage.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    className={`w-full h-full p-3.5 rounded-3xl bg-white/95 backdrop-blur-md border shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isHovered ? `${stage.borderColor} ring-2 ring-brand-400/30 shadow-xl scale-105` : 'border-slate-200/90'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
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
                  </div>
                </foreignObject>
              );
            })}

            {/* ====== 4. CENTER ZAVYX CORE HUB ====== */}
            <foreignObject
              x="490"
              y="220"
              width="220"
              height="200"
              className="overflow-visible"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full rounded-[38px] bg-white/95 backdrop-blur-xl p-5 shadow-2xl border-4 border-white ring-2 ring-brand-400/30 shadow-brand-500/15 flex flex-col items-center justify-between text-center relative overflow-hidden">
                  
                  {/* Glowing Inner Ambient Halo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-emerald-500/5 to-purple-500/10 pointer-events-none" />

                  {/* Status Header */}
                  <div className="w-full flex items-center justify-between pt-0.5 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      CORE
                    </span>
                    <span>v2.6 SDLC</span>
                  </div>

                  {/* Central Official Logo */}
                  <div className="relative py-1 flex items-center justify-center">
                    <img
                      src={logoImg}
                      alt="ZAVYX Technology Core"
                      className="w-36 h-auto object-contain drop-shadow-sm"
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
                </div>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* ================= MOBILE: VERTICAL CONNECTED TIMELINE ================= */}
        <div className="block lg:hidden relative max-w-md mx-auto">
          
          {/* Top Integrated ZAVYX Core Hub */}
          <div className="flex justify-center mb-8">
            <div className="w-48 p-4 rounded-3xl bg-white border-2 border-brand-200 shadow-xl text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>ZAVYX CORE</span>
              </div>
              <img
                src={logoImg}
                alt="ZAVYX"
                className="h-8 w-auto object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ZAVYX_logo.png';
                }}
              />
            </div>
          </div>

          {/* Central Vertical Circuit Spine */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-slate-300 ml-4 sm:ml-6 space-y-5">
            {stages.map((stage) => {
              const IconComp = stage.icon;

              return (
                <div key={stage.id} className="relative">
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

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase text-white ${stage.pillBg} shrink-0`}>
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
