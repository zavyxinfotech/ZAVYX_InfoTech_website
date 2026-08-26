import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  Award,
  Sparkles
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SpeedComparison() {
  const [testing, setTesting] = useState(false);
  const [tested, setTested] = useState(false);
  const [progress, setProgress] = useState(0);

  const startTest = () => {
    setTesting(true);
    setTested(false);
    setProgress(0);
  };

  useEffect(() => {
    if (!testing) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTesting(false);
          setTested(true);
          return 100;
        }
        // Accelerating progress bar simulation
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 110);
    return () => clearInterval(interval);
  }, [testing]);

  const templateMetrics = {
    performance: 42,
    lcp: "4.8s",
    tbt: "1,240ms",
    size: "4.2MB",
    color: "text-red-500",
    bgColor: "bg-red-500",
    borderColor: "border-red-200"
  };

  const zavyxMetrics = {
    performance: 99,
    lcp: "0.6s",
    tbt: "24ms",
    size: "172KB",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-200"
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal variant="fade-up" duration={350}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 fill-orange-500 stroke-orange-500 animate-pulse" />
              <span>Speed &amp; Conversion Audit</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Why Templates Kill Your Sales
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Google statistics show that **53% of mobile users abandon sites** that take longer than 3 seconds to load. We compile lightweight React systems designed to capture customer leads instantly.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Left Column: Interactive Audit Controller (5 cols) */}
          <ScrollReveal variant="fade-right" duration={350} className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
              
              {/* Background gradient lighting */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Interactive Speed Simulator</h3>
                  <p className="text-[11px] text-slate-400">Run audit on your site infrastructure</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-350 bg-slate-950 p-4 rounded-2xl border border-slate-850 h-[150px] overflow-hidden flex flex-col justify-end">
                {testing ? (
                  <div className="space-y-2">
                    <p className="text-brand-400 flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Scanning page DOM elements...</span>
                    </p>
                    <p className="text-slate-400">Loading render blockers: {progress}%</p>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-brand-500 h-full transition-all duration-150" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                ) : tested ? (
                  <div className="space-y-1 text-emerald-400">
                    <p className="text-white">&gt; Audit complete for ZAVYX core.jsx</p>
                    <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> TTI under 90ms</p>
                    <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Server response optimized (TTFB: 18ms)</p>
                    <p className="text-slate-500 font-bold">&gt; Ready to check stats below</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-500">
                    <p>&gt; Initializing audit engine...</p>
                    <p>&gt; Ready to run performance benchmark comparison</p>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={testing ? null : startTest}
                className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  testing 
                    ? 'bg-slate-850 text-slate-500 cursor-not-allowed' 
                    : 'bg-brand-600 hover:bg-brand-500 text-white active:scale-98 shadow-lg shadow-brand-500/20'
                }`}
                disabled={testing}
              >
                {testing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Auditing Systems...</span>
                  </>
                ) : tested ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Run Speed Test Again</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white text-white" />
                    <span>Run Speed Test Simulation</span>
                  </>
                )}
              </button>
              
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed italic text-center">
              *Simulation benchmarks standard template bloat (DOM size 3000+, heavy external assets) against ZAVYX React optimized production bundle.
            </p>
          </ScrollReveal>

          {/* Right Column: Comparative Gauges (7 cols) */}
          <ScrollReveal variant="fade-left" duration={350} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Generic Template Gauge */}
            <div className={`p-6 rounded-3xl bg-slate-50 border border-slate-200/80 transition-all duration-500 flex flex-col justify-between ${
              testing ? 'opacity-40 scale-98 blur-[1px]' : 'opacity-100 scale-100'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Templated Builders
                  </span>
                  
                  <span className="text-[11px] text-slate-400 font-mono">
                    WordPress / Wix / Shopify
                  </span>
                </div>

                {/* Score Circle */}
                <div className="flex items-center gap-4 my-6">
                  <div className="relative w-20 h-20 rounded-full border-[7px] border-red-100 flex items-center justify-center font-mono">
                    <span className="text-2xl font-black text-red-500">
                      {tested ? templateMetrics.performance : '--'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Poor Core Web Vitals</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Heavy JS bundles blocking rendering thread.</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-slate-200/60 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Largest Contentful Paint</span>
                  <span className="font-extrabold text-red-600">{tested ? templateMetrics.lcp : '--'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Total Blocking Time</span>
                  <span className="font-extrabold text-red-650">{tested ? templateMetrics.tbt : '--'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Total Network Load</span>
                  <span className="font-extrabold text-red-600">{tested ? templateMetrics.size : '--'}</span>
                </div>
              </div>
            </div>

            {/* ZAVYX Hand-Crafted Gauge */}
            <div className={`p-6 rounded-3xl bg-gradient-to-tr from-brand-50/50 via-white to-emerald-50 border-2 transition-all duration-500 flex flex-col justify-between ${
              testing ? 'opacity-40 scale-98 blur-[1px]' : 'opacity-100 scale-100 border-brand-400 shadow-xl shadow-brand-500/5'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>ZAVYX Custom Build</span>
                  </span>
                  
                  <span className="text-[11px] text-brand-600 font-bold font-mono">
                    React &amp; Tailwind
                  </span>
                </div>

                {/* Score Circle */}
                <div className="flex items-center gap-4 my-6">
                  <div className="relative w-20 h-20 rounded-full border-[7px] border-emerald-100 flex items-center justify-center font-mono animate-pulse">
                    <span className="text-2xl font-black text-emerald-500">
                      {tested ? zavyxMetrics.performance : '--'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Perfect Load Delivery</h4>
                    <p className="text-xs text-slate-550 mt-0.5">Component-driven architecture built for speed.</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-slate-200/60 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Largest Contentful Paint</span>
                  <span className="font-extrabold text-emerald-600">{tested ? zavyxMetrics.lcp : '--'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Total Blocking Time</span>
                  <span className="font-extrabold text-emerald-600">{tested ? zavyxMetrics.tbt : '--'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Total Network Load</span>
                  <span className="font-extrabold text-emerald-600">{tested ? zavyxMetrics.size : '--'}</span>
                </div>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
