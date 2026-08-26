import React from 'react';
import { 
  Key, 
  CheckCircle2, 
  Terminal, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TrustPillars() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <ScrollReveal variant="fade-up" duration={350}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Core Commitments</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Built on Complete Trust &amp; Transparency
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              As a modern tech firm, we focus on code quality, security, and true long-term support. No hidden configurations. No vendor lock-in. Just raw performance.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 100% Code Ownership (Col span 2) */}
          <ScrollReveal variant="fade-up" duration={350} className="md:col-span-2">
            <div className="group relative h-full p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-900 shadow-xl overflow-hidden flex flex-col justify-between min-h-[300px]">
              
              {/* Glowing lighting behind cards */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-450 uppercase border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-950/20">
                    GitHub Delivery
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-2">
                  100% Owned Source Code
                </h3>
                
                <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
                  Every React layout, Node server file, SQL schema, or workflow builder configuration is transferred to your GitHub account under an MIT license. You retain complete ownership.
                </p>
              </div>

              {/* Code/Terminal visualization block */}
              <div className="mt-6 border border-slate-850 p-3 rounded-2xl bg-slate-950 font-mono text-[10px] text-slate-500 space-y-1 select-none pointer-events-none">
                <p className="text-slate-400">&gt; git clone https://github.com/your-brand/project.git</p>
                <p className="text-emerald-500">&gt; npm run build_completed --status: success [172kb]</p>
                <p className="text-brand-400">&gt; license: MIT (100% owned &amp; transferrable code)</p>
              </div>

            </div>
          </ScrollReveal>

          {/* Card 2: Meta Official WhatsApp APIs (Col span 1) */}
          <ScrollReveal variant="fade-up" duration={350} delay={100} className="md:col-span-1">
            <div className="group relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                    Official
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-800 mb-2">
                  Official Meta API Integrations
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We integrate official Cloud WhatsApp Webhook systems. No unofficial scraping libraries that risk account bans.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Meta Developer Panel</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Zero Vendor Lock-in (Col span 1) */}
          <ScrollReveal variant="fade-up" duration={350} className="md:col-span-1">
            <div className="group relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-purple-600">
                    <Key className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    No Locks
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-850 mb-2">
                  Zero Vendor Lock-In
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Host your websites on Netlify, Render, AWS, or your own local VMs. We hand over the keys and direct instructions.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">100% Free Hosting Sync</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: 24/7 Erode Tech Support (Col span 2) */}
          <ScrollReveal variant="fade-up" duration={350} delay={100} className="md:col-span-2">
            <div className="group relative h-full p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              
              {/* Outer layout support gradient glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-orange-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                    Tamil Nadu SLA
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight mb-2">
                  On-Premises Technical Consultation
                </h3>
                
                <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
                  Located in Texvalley, Erode. We offer direct onsite developer consultations, 3 months of complimentary post-delivery troubleshooting, and a 24-hour backup ticketing system.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold text-slate-650 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Texvalley Erode Office
                  </span>
                  <span className="text-[10px] font-bold text-slate-650 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    3 Months Support Included
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 font-mono uppercase tracking-wider"
                >
                  <span>Connect with Developers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
