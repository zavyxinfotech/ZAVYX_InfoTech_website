import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  ShoppingBag, 
  Database, 
  MessageSquare, 
  Bot, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Cloud,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function HeroServicesWheel() {
  const services = [
    {
      id: "website-design-development",
      slug: "website-design-development",
      name: "WEBSITES & WEB APPS",
      shortDesc: "High-performance websites engineered for conversions.",
      tag: "48h Rapid Launch",
      accent: "from-brand-500 to-cyan-500",
      dotColor: "#0284c7",
      metric: "99+ PageSpeed",
      techType: "frontend",
      icon: Code2
    },
    {
      id: "ecommerce-development",
      slug: "ecommerce-development",
      name: "E-COMMERCE STORES",
      shortDesc: "Fast-loading stores with automated checkout & stock sync.",
      tag: "Multi-Channel Store",
      accent: "from-emerald-500 to-teal-500",
      dotColor: "#10b981",
      metric: "0.8s Checkout",
      techType: "ecommerce",
      icon: ShoppingBag
    },
    {
      id: "crm-erp-solutions",
      slug: "crm-erp-solutions",
      name: "CUSTOM CRM & ERP",
      shortDesc: "Tailored business software streamlining operations & finances.",
      tag: "Enterprise System",
      accent: "from-blue-600 to-indigo-600",
      dotColor: "#3b82f6",
      metric: "100% Custom",
      techType: "database",
      icon: Database
    },
    {
      id: "whatsapp-api-solutions",
      slug: "whatsapp-api-solutions",
      name: "WHATSAPP API & BOTS",
      shortDesc: "Official Meta APIs, automated workflows & shared team inbox.",
      tag: "Zero-Touch CRM",
      accent: "from-emerald-500 to-green-600",
      dotColor: "#22c55e",
      metric: "24/7 Automated",
      techType: "chat",
      icon: MessageSquare
    },
    {
      id: "ai-automation-solutions",
      slug: "ai-automation-solutions",
      name: "AI AUTOMATION & AGENTS",
      shortDesc: "Autonomous LLM agents, smart data scrapers & AI pipelines.",
      tag: "Intelligent AI",
      accent: "from-purple-600 to-violet-600",
      dotColor: "#8b5cf6",
      metric: "10x Productivity",
      techType: "ai",
      icon: Bot
    },
    {
      id: "mobile-app-development",
      slug: "mobile-app-development",
      name: "MOBILE APPS (iOS & ANDROID)",
      shortDesc: "Native and cross-platform apps with offline sync & push alerts.",
      tag: "Cross-Platform",
      accent: "from-rose-500 to-pink-600",
      dotColor: "#f43f5e",
      metric: "60 FPS Native",
      techType: "mobile",
      icon: Smartphone
    },
    {
      id: "digital-marketing",
      slug: "digital-marketing",
      name: "DIGITAL MARKETING & SEO",
      shortDesc: "Data-driven SEO, Google Ads & high-ROI acquisition funnels.",
      tag: "ROI Focused",
      accent: "from-amber-500 to-orange-500",
      dotColor: "#f59e0b",
      metric: "Top SERP Rank",
      techType: "marketing",
      icon: TrendingUp
    },
    {
      id: "branding-creative-design",
      slug: "branding-creative-design",
      name: "BRANDING & DESIGN",
      shortDesc: "Distinctive brand identities, design systems & marketing collateral.",
      tag: "Visual Identity",
      accent: "from-fuchsia-500 to-pink-500",
      dotColor: "#d946ef",
      metric: "Vector Grade",
      techType: "design",
      icon: Palette
    },
    {
      id: "cloud-hosting-solutions",
      slug: "cloud-hosting-solutions",
      name: "CLOUD INFRASTRUCTURE",
      shortDesc: "Managed Cloudflare edge networks, SSL & 99.9% uptime servers.",
      tag: "Zero Downtime",
      accent: "from-sky-500 to-blue-600",
      dotColor: "#0ea5e9",
      metric: "99.99% Uptime",
      techType: "cloud",
      icon: Cloud
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = services.length;

  // Auto-scroll loop every 2.8 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const activeService = services[activeIndex];

  // Helper to calculate circular positioning along the vertical 3D cylinder
  const getVisibleItems = () => {
    // Show 7 items in the cylinder window (-3 to +3 relative to active)
    const items = [];
    for (let offset = -3; offset <= 3; offset++) {
      let index = (activeIndex + offset) % total;
      if (index < 0) index += total;
      items.push({
        service: services[index],
        offset,
        index
      });
    }
    return items;
  };

  return (
    <div 
      className="relative w-full max-w-lg lg:max-w-xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/20 via-accent-500/15 to-transparent blur-2xl rounded-3xl -z-10 pointer-events-none" />

      {/* Main Glass Chassis Card */}
      <div className="w-full rounded-3xl bg-slate-950/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl p-4 sm:p-6 overflow-hidden relative">
        
        {/* Subtle Cyber Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top Status Bar with Live Telemetry */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              CAPABILITIES WHEEL &bull; {activeIndex + 1}/{total}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700/60 text-slate-300 text-[10px] font-mono">
            <Activity className="w-3 h-3 text-brand-400 animate-pulse" />
            <span>{activeService.metric}</span>
          </div>
        </div>

        {/* ===================== 1. CIRCULAR 3D CYLINDRICAL SCROLLING WHEEL ===================== */}
        <div 
          className="relative h-[210px] sm:h-[230px] w-full flex items-center justify-center overflow-hidden my-1"
          style={{ perspective: '1000px' }}
        >
          {/* Top & Bottom Deep Vignette Fades */}
          <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

          {/* Active Highlight Horizontal Marker Strip */}
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-10 sm:h-11 rounded-xl bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-transparent border-y border-slate-700/60 pointer-events-none z-10 flex items-center justify-between px-3">
            {/* Glowing Orange / Brand Node (Exact Match to Reference) */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3.5 w-3.5">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: '#f97316' }}
                />
                <span 
                  className="relative inline-flex rounded-full h-3.5 w-3.5 shadow-lg shadow-orange-500/50"
                  style={{ backgroundColor: '#f97316' }}
                />
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:inline">
              FOCUS
            </span>
          </div>

          {/* Rotary Items List */}
          <div className="relative w-full h-full flex flex-col items-start justify-center pl-8 sm:pl-10">
            {getVisibleItems().map(({ service, offset, index }) => {
              const isActive = offset === 0;
              
              // 3D cylindrical transform values based on vertical offset
              const translateY = offset * 32; // Spacing in px
              const rotateX = offset * -20;   // Curve along cylinder
              const scale = 1 - Math.abs(offset) * 0.12; // Farther items are smaller
              const opacity = isActive ? 1 : Math.max(0.18, 0.7 - Math.abs(offset) * 0.22);
              const blurPx = Math.abs(offset) > 1 ? Math.abs(offset) * 0.8 : 0;

              return (
                <button
                  key={`${service.id}-${offset}`}
                  onClick={() => setActiveIndex(index)}
                  className="absolute left-7 sm:left-9 transition-all duration-500 ease-out focus:outline-none text-left cursor-pointer group flex items-center gap-2.5"
                  style={{
                    transform: `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
                    opacity,
                    filter: blurPx ? `blur(${blurPx}px)` : 'none',
                    zIndex: 10 - Math.abs(offset),
                    transformOrigin: 'left center'
                  }}
                >
                  <span 
                    className={`font-display font-extrabold tracking-wider transition-all duration-300 ${
                      isActive 
                        ? 'text-white text-base sm:text-lg md:text-xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]' 
                        : 'text-slate-400 group-hover:text-slate-200 text-xs sm:text-sm font-semibold'
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================== 2. BESPOKE TECHNICAL VECTOR SCHEMATIC DIAGRAM ===================== */}
        <div className="relative mt-2 pt-3 border-t border-slate-800/80 bg-slate-900/60 rounded-2xl p-3.5 sm:p-4 text-left border border-slate-800/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* Service Meta Title & Tag */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${activeService.accent} flex items-center justify-center text-white shadow-md`}>
                    <activeService.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                      {activeService.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 block -mt-0.5">
                      {activeService.tag}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-[11px] font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Technical Schematic Blueprint Component for Active Service */}
              <div className="w-full h-24 sm:h-28 rounded-xl bg-slate-950 border border-slate-800 p-2.5 relative overflow-hidden font-mono text-[10px]">
                {/* Visual Technical Diagram Switcher */}
                {renderTechnicalSchematic(activeService.techType)}
              </div>

              {/* Short Technical Description */}
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-sans">
                {activeService.shortDesc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Wheel Step Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3 pt-1">
          {services.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === activeIndex
                  ? 'w-6 bg-orange-500 shadow-sm shadow-orange-500/50'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Jump to ${s.name}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// Bespoke Cyber Technical Schematic Illustrations
function renderTechnicalSchematic(type) {
  switch (type) {
    case 'frontend':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-cyan-400 font-bold">&lt;DOM_TREE&gt; React 18 + Tailwind</span>
            <span className="text-emerald-400">99.8 FPS</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">SSR Render</span>
              <span className="text-cyan-300 font-bold">14ms</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">FCP Score</span>
              <span className="text-emerald-300 font-bold">0.4s</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Hydration</span>
              <span className="text-purple-300 font-bold">100% OK</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[8px] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="truncate">Responsive Breakpoints: Mobile [375px] &bull; Desktop [1440px]</span>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-emerald-400 font-bold">PAYMENT_GATEWAY &bull; SSL TLS 1.3</span>
            <span className="text-emerald-400">SYNC LIVE</span>
          </div>
          <div className="flex items-center justify-between gap-2 my-auto">
            <div className="flex-1 p-1 rounded bg-slate-900 border border-slate-800 text-center text-[8px]">
              <span className="text-slate-500 block">Cart Ledger</span>
              <span className="text-emerald-400 font-bold">Active Sync</span>
            </div>
            <span className="text-slate-600">&rarr;</span>
            <div className="flex-1 p-1 rounded bg-slate-900 border border-slate-800 text-center text-[8px]">
              <span className="text-slate-500 block">UPI / Stripe</span>
              <span className="text-cyan-400 font-bold">Tokenized</span>
            </div>
            <span className="text-slate-600">&rarr;</span>
            <div className="flex-1 p-1 rounded bg-slate-900 border border-slate-800 text-center text-[8px]">
              <span className="text-slate-500 block">Stock Node</span>
              <span className="text-amber-400 font-bold">0ms Delay</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Automated Invoice Dispatch + WhatsApp Order Receipt
          </div>
        </div>
      );

    case 'database':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-blue-400 font-bold">POSTGRESQL &bull; RELATIONAL SCHEMA</span>
            <span className="text-blue-400">AUTH: JWT RBAC</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Inventory Ledger</span>
              <span className="text-emerald-400 font-bold">Realtime</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">GST / Tax Billing</span>
              <span className="text-blue-400 font-bold">Auto-Gen</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Custom ERP Multi-Tenant Pipeline &bull; Automated Backup Snapshot
          </div>
        </div>
      );

    case 'chat':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-green-400 font-bold">META CLOUD WEBHOOK BROKER</span>
            <span className="text-green-400">STATUS 200</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Inbound NLP</span>
              <span className="text-green-300 font-bold">Classified</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Agent Inbox</span>
              <span className="text-cyan-300 font-bold">Multi-Seat</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Broadcast</span>
              <span className="text-purple-300 font-bold">Template OK</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Zero-Touch Catalogs, Automated Quotations &amp; Booking Triggers
          </div>
        </div>
      );

    case 'ai':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-violet-400 font-bold">LLM REASONING LOOP &bull; VECTOR DB</span>
            <span className="text-violet-400">AGENTS RUNNING</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
              <span className="text-slate-500 block">Embedding</span>
              <span className="text-violet-300 font-bold">1536-dim</span>
            </div>
            <span className="text-slate-600">&rarr;</span>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
              <span className="text-slate-500 block">Agent Step</span>
              <span className="text-cyan-300 font-bold">Autonomous</span>
            </div>
            <span className="text-slate-600">&rarr;</span>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 flex-1 text-center">
              <span className="text-slate-500 block">Tool Call</span>
              <span className="text-emerald-300 font-bold">Executed</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Automated Lead Scraping, Document Summarization &amp; Report Synthesis
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-rose-400 font-bold">REACT NATIVE &bull; DUAL OS COMPILED</span>
            <span className="text-rose-400">60 FPS</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">iOS Bundle</span>
              <span className="text-rose-300 font-bold">Swift Core</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Android</span>
              <span className="text-emerald-300 font-bold">Kotlin API</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Offline Store</span>
              <span className="text-cyan-300 font-bold">SQLite OK</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Biometric FaceID / Fingerprint &bull; Background Push Telemetry
          </div>
        </div>
      );

    case 'marketing':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-amber-400 font-bold">SEARCH ENGINE POSITIONING MATRIX</span>
            <span className="text-amber-400">SERP #1</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Organic Traffic</span>
              <span className="text-amber-300 font-bold">+240%</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Google CPC</span>
              <span className="text-emerald-300 font-bold">Optimized</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Conversion</span>
              <span className="text-cyan-300 font-bold">4.8% CTR</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Schema Markup + Automated Sitemaps + Local Google Business SEO
          </div>
        </div>
      );

    case 'design':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-pink-400 font-bold">BEZIER VECTOR &bull; DESIGN SYSTEM</span>
            <span className="text-pink-400">GOLDEN RATIO</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Typography</span>
              <span className="text-pink-300 font-bold">Scale 1.25</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Color Tokens</span>
              <span className="text-purple-300 font-bold">Hex / CMYK</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Figma Nodes</span>
              <span className="text-cyan-300 font-bold">Tokens v2</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Scalable Vector Guidelines for Mobile Favicons to Massive Hoardings
          </div>
        </div>
      );

    case 'cloud':
    default:
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-400">
          <div className="flex items-center justify-between text-[9px] border-b border-slate-800 pb-1 text-slate-500">
            <span className="text-sky-400 font-bold">EDGE CDN CLUSTER &bull; ANYCAST ROUTING</span>
            <span className="text-emerald-400">99.99% UP</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] my-auto">
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">Edge Latency</span>
              <span className="text-sky-300 font-bold">12ms Global</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">DDoS Shield</span>
              <span className="text-emerald-300 font-bold">Active WAF</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="text-slate-500 block">SSL Vault</span>
              <span className="text-purple-300 font-bold">TLS 1.3</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-500 truncate">
            Auto-scaling Kubernetes Pods + Geo-Distributed Cache Invalidation
          </div>
        </div>
      );
  }
}
