import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  Code2, 
  ShoppingBag, 
  Database, 
  MessageSquare, 
  Bot, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Cloud
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

// 9 Highly Refined Technical Visuals
const ServiceTechnicalVisual = ({ serviceId }) => {
  switch (serviceId) {
    case 'website-design-development':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="webGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" stopOpacity="0.9" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#09101d" stroke="url(#webGrad)" strokeWidth="1.5" />
          <path d="M15 38 H225" stroke="#1e293b" strokeWidth="1" />
          <circle cx="32" cy="25" r="3" fill="#ef4444" opacity="0.8" />
          <circle cx="42" cy="25" r="3" fill="#f59e0b" opacity="0.8" />
          <circle cx="52" cy="25" r="3" fill="#10b981" opacity="0.8" />
          <rect x="68" y="20" width="130" height="11" rx="5.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
          <rect x="28" y="48" width="80" height="46" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="38" y1="62" x2="90" y2="62" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="72" x2="75" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="116" y="48" width="94" height="21" rx="4" fill="#0369a1" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="116" y="73" width="94" height="21" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="0.8" />
          <rect x="28" y="102" width="55" height="34" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <text x="55.5" y="122" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">REACT</text>
          <rect x="88" y="102" width="55" height="34" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <text x="115.5" y="122" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">VITE</text>
          <rect x="148" y="102" width="62" height="34" rx="5" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" />
          <text x="179" y="123" fill="#38bdf8" fontSize="9" fontWeight="extrabold" textAnchor="middle" fontFamily="monospace">99+ SPD</text>
        </svg>
      );
    case 'ecommerce-development':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="ecomGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#061514" stroke="url(#ecomGrad)" strokeWidth="1.5" />
          <rect x="28" y="26" width="75" height="70" rx="8" fill="#0b2421" stroke="#10b981" strokeWidth="1" />
          <rect x="36" y="34" width="59" height="34" rx="5" fill="#064e3b" stroke="#34d399" strokeWidth="0.8" />
          <circle cx="65.5" cy="51" r="9" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
          <path d="M62 51 L65 54 L70 47" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="36" y="74" width="40" height="4" rx="2" fill="#34d399" />
          <rect x="112" y="26" width="100" height="108" rx="8" fill="#091f1c" stroke="#059669" strokeWidth="1" />
          <rect x="122" y="84" width="80" height="20" rx="6" fill="#10b981" />
          <text x="162" y="97" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">ONE-CLICK PAY</text>
          <text x="162" y="122" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">₹ SYNCED</text>
        </svg>
      );
    case 'crm-erp-solutions':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="erpGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#0f0c1d" stroke="url(#erpGrad)" strokeWidth="1.5" />
          <g transform="translate(30, 24)">
            <rect x="0" y="0" width="70" height="32" rx="6" fill="#2e1065" stroke="#a78bfa" strokeWidth="1" />
            <text x="35" y="16" fill="#ddd6fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">INVENTORY</text>
            <rect x="0" y="44" width="70" height="32" rx="6" fill="#2e1065" stroke="#8b5cf6" strokeWidth="1" />
            <text x="35" y="60" fill="#ddd6fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">PIPELINE</text>
            <rect x="95" y="10" width="85" height="92" rx="8" fill="#1e1338" stroke="#c084fc" strokeWidth="1" />
            <circle cx="137.5" cy="40" r="18" fill="#3b0764" stroke="#a855f7" strokeWidth="2" strokeDasharray="80 30" />
            <text x="137.5" y="43" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">99.8%</text>
            <rect x="108" y="78" width="60" height="14" rx="4" fill="#6d28d9" />
            <text x="138" y="88" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CUSTOM ERP</text>
          </g>
        </svg>
      );
    case 'whatsapp-api-solutions':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="waGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25D366" stopOpacity="0.9" />
              <stop offset="1" stopColor="#059669" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#061710" stroke="url(#waGrad)" strokeWidth="1.5" />
          <g transform="translate(28, 22)">
            <rect x="0" y="0" width="184" height="22" rx="6" fill="#0d281e" stroke="#25D366" strokeWidth="0.8" />
            <circle cx="12" cy="11" r="5" fill="#25D366" />
            <text x="24" y="14" fill="#a7f3d0" fontSize="8" fontWeight="bold">OFFICIAL META API</text>
            <rect x="0" y="30" width="120" height="24" rx="8" fill="#132e22" stroke="#059669" strokeWidth="0.8" />
            <text x="10" y="44" fill="#e2e8f0" fontSize="7">"Track Order #849"</text>
            <rect x="44" y="60" width="140" height="34" rx="8" fill="#044e34" stroke="#25D366" strokeWidth="1.2" />
            <text x="54" y="73" fill="#ffffff" fontSize="7.5" fontWeight="bold">✅ Dispatched! live GPS</text>
            <rect x="0" y="100" width="184" height="16" rx="4" fill="#0b2419" />
            <text x="24" y="111" fill="#34d399" fontSize="6.5" fontWeight="bold" fontFamily="monospace">98% OPEN RATE &bull; AUTOMATED</text>
          </g>
        </svg>
      );
    case 'ai-automation-solutions':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="aiGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f43f5e" stopOpacity="0.9" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#140816" stroke="url(#aiGrad)" strokeWidth="1.5" />
          <g transform="translate(36, 26)">
            <circle cx="15" cy="15" r="6" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="15" cy="50" r="6" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="80" cy="30" r="8" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <circle cx="145" cy="50" r="9" fill="#831843" stroke="#f43f5e" strokeWidth="2" />
            <line x1="21" y1="15" x2="72" y2="30" stroke="#f43f5e" strokeWidth="1" />
            <line x1="21" y1="50" x2="72" y2="30" stroke="#f43f5e" strokeWidth="1" />
            <line x1="88" y1="30" x2="136" y2="50" stroke="#fb7185" strokeWidth="1.5" />
            <rect x="0" y="100" width="168" height="15" rx="4" fill="#380a1c" stroke="#f43f5e" strokeWidth="0.8" />
            <text x="84" y="110" fill="#fda4af" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">INTELLIGENT AI AGENTS</text>
          </g>
        </svg>
      );
    case 'mobile-app-development':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mobGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#08101e" stroke="url(#mobGrad)" strokeWidth="1.5" />
          <g transform="translate(48, 20)">
            <rect x="0" y="0" width="56" height="112" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="4" y="8" width="48" height="96" rx="8" fill="#1e293b" />
            <rect x="8" y="16" width="40" height="18" rx="4" fill="#0284c7" fillOpacity="0.5" />
            <rect x="8" y="62" width="40" height="12" rx="3" fill="#10b981" />
            <text x="28" y="70" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">60 FPS</text>
            <g transform="translate(68, 8)">
              <rect x="0" y="0" width="52" height="104" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
              <rect x="4" y="6" width="44" height="92" rx="6" fill="#132a24" />
            </g>
          </g>
        </svg>
      );
    case 'digital-marketing':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mktGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="1" stopColor="#ef4444" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#170f05" stroke="url(#mktGrad)" strokeWidth="1.5" />
          <g transform="translate(38, 24)">
            <path d="M10 95 H150 M10 95 V10" stroke="#78350f" strokeWidth="1.2" />
            <path d="M15 85 Q 50 75, 75 48 T 145 15" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="75" y="70" width="75" height="22" rx="5" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
            <text x="112.5" y="84" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ROAS: 4.8X &bull; SEO</text>
          </g>
        </svg>
      );
    case 'branding-creative-design':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="brandGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#180718" stroke="url(#brandGrad)" strokeWidth="1.5" />
          <g transform="translate(38, 24)">
            <path d="M10 80 C 30 10, 110 10, 150 80" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="10" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <circle cx="150" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <rect x="112" y="90" width="45" height="16" rx="4" fill="#4a044e" stroke="#f472b6" strokeWidth="0.8" />
            <text x="134" y="101" fill="#fbcfe8" fontSize="7" fontWeight="bold" textAnchor="middle">BRAND KIT</text>
          </g>
        </svg>
      );
    case 'cloud-hosting-solutions':
    default:
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="cldGrad" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#061522" stroke="url(#cldGrad)" strokeWidth="1.5" />
          <g transform="translate(38, 22)">
            <rect x="0" y="0" width="164" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="15" cy="11" r="3" fill="#22c55e" />
            <line x1="40" y1="11" x2="150" y2="11" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="0" y="30" width="164" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="15" cy="41" r="3" fill="#22c55e" />
            <rect x="0" y="60" width="164" height="22" rx="5" fill="#082f49" stroke="#0284c7" strokeWidth="1" />
            <text x="82" y="74" fill="#67e8f9" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">99.9% UPTIME CDN</text>
          </g>
        </svg>
      );
  }
};

const iconMap = {
  'website-design-development': Code2,
  'ecommerce-development': ShoppingBag,
  'crm-erp-solutions': Database,
  'whatsapp-api-solutions': MessageSquare,
  'ai-automation-solutions': Bot,
  'mobile-app-development': Smartphone,
  'digital-marketing': TrendingUp,
  'branding-creative-design': Palette,
  'cloud-hosting-solutions': Cloud,
};

export default function HeroCircularServicesShowcase({ onServiceSelect }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = useMemo(() => servicesData, []);
  const total = services.length;
  const angleStep = 360 / total;

  // Background auto-cycling every 4.5 seconds for zero rendering overhead
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % total;
        if (onServiceSelect) onServiceSelect(services[next]);
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total, services, onServiceSelect]);

  const handleServiceSelect = useCallback((idx) => {
    setActiveIndex(idx);
    setIsPaused(true);
    if (onServiceSelect) {
      onServiceSelect(services[idx]);
    }
  }, [services, onServiceSelect]);

  const activeService = services[activeIndex] || services[0];

  return (
    <div 
      className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center select-none overflow-visible [--orbit-radius:112px] sm:[--orbit-radius:148px] md:[--orbit-radius:168px] lg:[--orbit-radius:180px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Capabilities Showcase Orbit"
    >
      {/* Background Neon Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 bg-radial-gradient">
        <div className="w-[280px] h-[280px] sm:w-[380px] rounded-full bg-gradient-to-tr from-brand-500/10 via-indigo-500/5 to-accent-500/10 blur-3xl opacity-80" />
      </div>

      {/* Main Orbital Track Ring */}
      <div 
        className={`absolute w-[224px] h-[224px] sm:w-[296px] sm:h-[296px] md:w-[336px] md:h-[336px] lg:w-[360px] lg:h-[360px] rounded-full border border-dashed border-slate-200/50 flex items-center justify-center pointer-events-none transition-all duration-300 ${
          isPaused ? '' : 'animate-orbit-cw'
        }`}
      >
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border border-slate-100/30" />
      </div>

      {/* ================= CENTRAL GLASS PREVIEW PANEL ================= */}
      <div className="absolute z-20 w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[226px] md:h-[226px] rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl p-4 flex flex-col justify-between text-center overflow-hidden group">
        
        {/* Luminous meta headers */}
        <div className="w-full flex items-center justify-between gap-1 pb-1.5 border-b border-slate-800">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold truncate">
              {activeService.badge || "CAPABILITY"}
            </span>
          </div>

          <Link
            to={`/services/${activeService.slug}`}
            className="p-1 rounded-md bg-slate-800/80 text-slate-350 hover:text-white hover:bg-brand-600 transition-colors"
            title={`View ${activeService.shortTitle}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Scalable vector telemetry graphic */}
        <div className="w-full flex-1 flex items-center justify-center py-1">
          <div className="w-full h-full max-h-[92px] sm:max-h-[110px] flex items-center justify-center transition-all duration-350 transform scale-100">
            <ServiceTechnicalVisual serviceId={activeService.id} />
          </div>
        </div>

        {/* Central details */}
        <div className="w-full pt-1.5 border-t border-slate-800/80 text-center">
          <h3 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-snug">
            {activeService.shortTitle}
          </h3>
          
          <Link
            to={`/services/${activeService.slug}`}
            className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] text-brand-400 hover:text-brand-350 font-bold mt-1"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>

      {/* ================= COMPOSITED ORBIT TIMELINE PILLS ================= */}
      <div 
        className={`absolute inset-0 w-full h-full ${
          isPaused ? 'paused-orbit' : 'animate-orbit-cw'
        }`}
      >
        {services.map((item, idx) => {
          const isActive = idx === activeIndex;
          const currentAngle = idx * angleStep;

          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2"
              style={{
                // Absolute placement via translation relative to center
                transform: `translate(-50%, -50%) rotate(${currentAngle}deg) translate(var(--orbit-radius)) rotate(-${currentAngle}deg)`,
              }}
            >
              {/* Keep child button upright by counter-orbiting */}
              <div 
                className={`transition-all duration-300 ${
                  isPaused ? 'paused-orbit' : 'animate-orbit-ccw'
                }`}
              >
                <button
                  type="button"
                  onMouseEnter={() => handleServiceSelect(idx)}
                  onClick={() => handleServiceSelect(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border shadow-sm transition-all duration-300 whitespace-nowrap backdrop-blur-md ${
                    isActive
                      ? 'bg-slate-900 text-white border-brand-400 ring-2 ring-brand-500/40 shadow-brand-500/10 scale-108 z-30'
                      : 'bg-white/95 text-slate-700 hover:text-brand-600 border-slate-200/80 hover:border-brand-350 hover:bg-white scale-92 opacity-90 hover:opacity-100'
                  }`}
                  aria-pressed={isActive}
                >
                  <span 
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${
                      isActive ? 'bg-orange-500 animate-pulse' : 'bg-brand-500/60'
                    }`} 
                  />
                  <span className="text-[9px] sm:text-[10.5px] font-bold uppercase tracking-wider font-display">
                    {item.shortTitle}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
