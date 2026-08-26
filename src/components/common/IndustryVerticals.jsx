import React from 'react';
import { 
  Shirt, 
  Sprout, 
  ShoppingBag, 
  GraduationCap, 
  Briefcase, 
  HeartPulse,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function IndustryVerticals() {
  const industries = [
    {
      id: "textiles",
      title: "Textiles & Apparel Exporters",
      accent: "Erode Hub Solution",
      icon: Shirt,
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      desc: "Order management systems, wholesale export inventory syncing, and automated WhatsApp purchase order dispatch portals built directly for Texvalley stakeholders.",
      bullets: ["ERP/Inventory Integration", "Loom Production Syncing", "Multi-currency Invoice Ops"]
    },
    {
      id: "agribusiness",
      title: "Agro-Traders & Wholesalers",
      accent: "Commodity Logistics",
      icon: Sprout,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      desc: "Cloud portals for grain distribution, cold storage stock-taking trackers, and automated SMS alerts updating farmers on catalog price adjustments.",
      bullets: ["Stock Ledger Syncing", "Mandi Price Broadcasts", "Cold Storage Gate-Passes"]
    },
    {
      id: "retail",
      title: "D2C E-Commerce & Retailers",
      accent: "High-Speed Checkouts",
      icon: ShoppingBag,
      color: "from-pink-500 to-rose-500",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      desc: "Fast custom React storefronts connected with Payment Gateways (Razorpay/Easebuzz/UPI) and automated order-status notifications via official API bots.",
      bullets: ["UPI Gateway Activations", "Dynamic Carts under 20ms", "Shiprocket/Logistics APIs"]
    },
    {
      id: "education",
      title: "Colleges & Academies",
      accent: "Student Records & Portals",
      icon: GraduationCap,
      color: "from-violet-500 to-purple-500",
      textColor: "text-violet-600",
      bgColor: "bg-violet-50",
      desc: "Lightweight institutional sites, digital admission trackers, learning management systems, and alumni databases optimized for high traffic.",
      bullets: ["Digital Fee Collections", "Academic Schedulers", "Alumni Directory Vaults"]
    },
    {
      id: "services",
      title: "Modern Service Providers",
      accent: "Professional Agencies",
      icon: Briefcase,
      color: "from-orange-500 to-amber-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      desc: "Distinctive, high-impact landing pages, CRM booking pipelines, and calendar systems constructed to turn online traffic into consulting leads.",
      bullets: ["SEO Landing Optimizations", "Cal.com / Google Calendar Sync", "Frictionless Contact Leads"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Diagnostics",
      accent: "Patient Intake Systems",
      icon: HeartPulse,
      color: "from-cyan-500 to-teal-500",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      desc: "Secured patient record architectures, local clinic booking systems, and automated WhatsApp reminders for diagnostic report downloads.",
      bullets: ["HIPAA-inspired encryption", "WhatsApp Doctor booking", "Diagnostic Lab Delivery"]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/40 border-t border-slate-200/50 relative overflow-hidden select-none">
      
      {/* Absolute decorative gradient highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <ScrollReveal variant="fade-up" duration={350}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targetized Solutions</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Industries We Power in Erode &amp; Beyond
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We design and construct digital products engineered for the commercial requirements of Tamil Nadu's industrial hubs, wholesale corridors, and scaling startups.
            </p>
          </ScrollReveal>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;

            return (
              <ScrollReveal 
                key={ind.id} 
                variant="fade-up" 
                duration={350} 
                delay={idx * 80}
                className="h-full"
              >
                <div className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-transparent shadow-xs hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Outer gradient hover border */}
                  <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-[0.08] blur-[4px] transition-opacity duration-300 pointer-events-none`} />

                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl ${ind.bgColor} flex items-center justify-center ${ind.textColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {ind.accent}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-800 font-display mb-3 group-hover:text-brand-600 transition-colors">
                      {ind.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Bullet Bullet Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {ind.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${ind.color} shrink-0`} />
                        <span className="text-xs text-slate-500 font-semibold truncate">{bullet}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <ScrollReveal variant="fade-up" duration={350}>
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100/80 px-6 py-3 rounded-full border border-brand-200/60 shadow-xs transition-all"
            >
              <span>Build Solution for Your Industry Sector</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
