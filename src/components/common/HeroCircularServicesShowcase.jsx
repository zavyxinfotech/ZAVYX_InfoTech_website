import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Cloud,
  Cpu,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import logoImg from '../../assets/logo/logo.png';

// 9 Unique, High-Tech Vector Illustrations (Zero Stock Photos, Zero Realistic Humans/Offices)
const ServiceTechnicalVisual = ({ serviceId, isHovered }) => {
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
          {/* Futuristic Browser Chassis */}
          <rect x="15" y="12" width="210" height="136" rx="12" fill="#09101d" stroke="url(#webGrad)" strokeWidth="1.5" />
          <path d="M15 38 H225" stroke="#1e293b" strokeWidth="1" />
          {/* Traffic Lights */}
          <circle cx="32" cy="25" r="3" fill="#ef4444" opacity="0.85" />
          <circle cx="42" cy="25" r="3" fill="#f59e0b" opacity="0.85" />
          <circle cx="52" cy="25" r="3" fill="#10b981" opacity="0.85" />
          {/* Search URL Bar */}
          <rect x="68" y="20" width="130" height="11" rx="5.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
          <line x1="78" y1="25.5" x2="135" y2="25.5" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
          {/* Wireframe Hero Grid */}
          <rect x="28" y="48" width="80" height="46" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="38" y1="62" x2="90" y2="62" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="72" x2="75" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          {/* Interactive Component Grid */}
          <rect x="116" y="48" width="94" height="21" rx="4" fill="#0369a1" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="116" y="73" width="94" height="21" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="0.8" />
          {/* Bottom Telemetry Nodes */}
          <rect x="28" y="102" width="55" height="34" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <text x="55.5" y="122" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">REACT 18</text>
          <rect x="88" y="102" width="55" height="34" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <text x="115.5" y="122" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">TAILWIND</text>
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
          {/* Catalog Array */}
          <rect x="28" y="26" width="75" height="70" rx="8" fill="#0b2421" stroke="#10b981" strokeWidth="1" />
          <rect x="36" y="34" width="59" height="34" rx="5" fill="#064e3b" stroke="#34d399" strokeWidth="0.8" />
          <circle cx="65.5" cy="51" r="9" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
          <path d="M62 51 L65 54 L70 47" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="36" y="74" width="40" height="4" rx="2" fill="#34d399" />
          <rect x="36" y="82" width="24" height="4" rx="2" fill="#6ee7b7" />
          {/* Checkout Telemetry Gateway */}
          <rect x="112" y="26" width="100" height="108" rx="8" fill="#091f1c" stroke="#059669" strokeWidth="1" />
          <path d="M122 42 H202" stroke="#047857" strokeWidth="1.5" strokeDasharray="2 2" />
          <rect x="122" y="52" width="70" height="8" rx="3" fill="#065f46" />
          <rect x="122" y="66" width="52" height="6" rx="3" fill="#047857" />
          <rect x="122" y="84" width="80" height="20" rx="6" fill="#10b981" />
          <text x="162" y="97" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">ONE-CLICK PAY</text>
          <text x="162" y="122" fill="#34d399" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">₹ 100% SYNC</text>
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
          {/* Database & Multi-Node Cluster */}
          <g transform="translate(30, 24)">
            {/* Relational Schema Nodes */}
            <rect x="0" y="0" width="70" height="32" rx="6" fill="#2e1065" stroke="#a78bfa" strokeWidth="1" />
            <text x="35" y="16" fill="#ddd6fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">INVENTORY BOM</text>
            <text x="35" y="26" fill="#c084fc" fontSize="6" textAnchor="middle">98.4% STOCKED</text>

            <rect x="0" y="44" width="70" height="32" rx="6" fill="#2e1065" stroke="#8b5cf6" strokeWidth="1" />
            <text x="35" y="60" fill="#ddd6fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">SALES PIPELINE</text>
            <text x="35" y="70" fill="#a78bfa" fontSize="6" textAnchor="middle">₹ 4.8M ACTIVE</text>

            <rect x="0" y="88" width="70" height="24" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="0.8" />
            <text x="35" y="103" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">LEDGER &amp; GST</text>

            {/* Central Data Exchange Bus */}
            <line x1="70" y1="16" x2="95" y2="55" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="70" y1="60" x2="95" y2="55" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="70" y1="100" x2="95" y2="55" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Executive Analytics Dashboard */}
            <rect x="95" y="10" width="85" height="92" rx="8" fill="#1e1338" stroke="#c084fc" strokeWidth="1" />
            <circle cx="137.5" cy="40" r="18" fill="#3b0764" stroke="#a855f7" strokeWidth="2" strokeDasharray="80 30" />
            <text x="137.5" y="43" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">99.8%</text>
            <text x="137.5" y="70" fill="#ddd6fe" fontSize="7" fontWeight="bold" textAnchor="middle">ZERO SAAS TAX</text>
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
          {/* WhatsApp Cloud Chat Pipeline */}
          <g transform="translate(28, 22)">
            {/* Meta Cloud Header */}
            <rect x="0" y="0" width="184" height="22" rx="6" fill="#0d281e" stroke="#25D366" strokeWidth="0.8" />
            <circle cx="12" cy="11" r="5" fill="#25D366" />
            <path d="M10 11 L12 13 L15 9" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            <text x="24" y="14" fill="#a7f3d0" fontSize="8" fontWeight="bold">OFFICIAL META CLOUD API</text>
            <text x="174" y="14" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="end">VERIFIED</text>

            {/* Chat Bubble 1 (User Query) */}
            <rect x="0" y="30" width="120" height="24" rx="8" fill="#132e22" stroke="#059669" strokeWidth="0.8" />
            <text x="10" y="44" fill="#e2e8f0" fontSize="7">"Track my Texvalley Order #849"</text>

            {/* Chat Bubble 2 (AI Auto-Response with 98% Open Rate) */}
            <rect x="44" y="60" width="140" height="34" rx="8" fill="#044e34" stroke="#25D366" strokeWidth="1.2" />
            <text x="54" y="73" fill="#ffffff" fontSize="7.5" fontWeight="bold">✅ Dispatched! Courier AWB: TX928</text>
            <text x="54" y="85" fill="#6ee7b7" fontSize="6.5">Delivery in 24 Hours &bull; Live GPS</text>

            {/* 24/7 Webhook Pulse */}
            <rect x="0" y="100" width="184" height="16" rx="4" fill="#0b2419" />
            <circle cx="12" cy="108" r="3" fill="#25D366" className="animate-ping" />
            <text x="24" y="111" fill="#34d399" fontSize="6.5" fontWeight="bold" fontFamily="monospace">98% OPEN RATE &bull; AUTO BOT ONLINE</text>
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
          {/* Deep Neural Synaptic Network */}
          <g transform="translate(36, 26)">
            {/* Input Nodes */}
            <circle cx="15" cy="15" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="15" cy="50" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="15" cy="85" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />

            {/* Hidden Neural Layer */}
            <circle cx="80" cy="30" r="9" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <circle cx="80" cy="70" r="9" fill="#581c87" stroke="#c084fc" strokeWidth="2" />

            {/* Output Node */}
            <circle cx="145" cy="50" r="10" fill="#831843" stroke="#f43f5e" strokeWidth="2" />

            {/* Synapse Lines */}
            <line x1="22" y1="15" x2="71" y2="30" stroke="#f43f5e" strokeWidth="1" opacity="0.75" />
            <line x1="22" y1="50" x2="71" y2="30" stroke="#f43f5e" strokeWidth="1" opacity="0.75" />
            <line x1="22" y1="50" x2="71" y2="70" stroke="#c084fc" strokeWidth="1" opacity="0.75" />
            <line x1="22" y1="85" x2="71" y2="70" stroke="#c084fc" strokeWidth="1" opacity="0.75" />
            <line x1="89" y1="30" x2="135" y2="50" stroke="#fb7185" strokeWidth="1.5" />
            <line x1="89" y1="70" x2="135" y2="50" stroke="#c084fc" strokeWidth="1.5" />

            {/* Automated Telemetry Banner */}
            <rect x="0" y="100" width="168" height="15" rx="4" fill="#380a1c" stroke="#f43f5e" strokeWidth="0.8" />
            <text x="84" y="110" fill="#fda4af" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ZERO-TOUCH WORKFLOW PIPELINE</text>
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
          {/* Dual Smartphone Schematics */}
          <g transform="translate(48, 20)">
            {/* iOS Chassis */}
            <rect x="0" y="0" width="56" height="112" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="4" y="8" width="48" height="96" rx="8" fill="#1e293b" />
            <circle cx="28" cy="4" r="1.5" fill="#38bdf8" />
            <rect x="8" y="16" width="40" height="18" rx="4" fill="#0284c7" fillOpacity="0.5" />
            <rect x="8" y="38" width="18" height="18" rx="4" fill="#38bdf8" fillOpacity="0.4" />
            <rect x="30" y="38" width="18" height="18" rx="4" fill="#38bdf8" fillOpacity="0.4" />
            <rect x="8" y="62" width="40" height="12" rx="3" fill="#10b981" />
            <text x="28" y="71" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">iOS 60FPS</text>

            {/* Android Chassis */}
            <g transform="translate(68, 8)">
              <rect x="0" y="0" width="52" height="104" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
              <rect x="4" y="6" width="44" height="92" rx="6" fill="#132a24" />
              <rect x="8" y="14" width="36" height="16" rx="4" fill="#059669" fillOpacity="0.5" />
              <rect x="8" y="34" width="36" height="34" rx="4" fill="#047857" fillOpacity="0.3" stroke="#34d399" strokeWidth="0.6" />
              <text x="26" y="52" fill="#a7f3d0" fontSize="6" fontWeight="bold" textAnchor="middle">ANDROID</text>
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
          {/* Ascending ROI Telemetry */}
          <g transform="translate(38, 24)">
            <path d="M10 95 H150 M10 95 V10" stroke="#78350f" strokeWidth="1.2" />
            <path d="M15 85 Q 50 75, 75 48 T 145 15" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="15" cy="85" r="3" fill="#f59e0b" />
            <circle cx="55" cy="65" r="3" fill="#f59e0b" />
            <circle cx="95" cy="40" r="3.5" fill="#fbbf24" />
            <circle cx="145" cy="15" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
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
          {/* Bézier Vector & Design System Architecture */}
          <g transform="translate(38, 24)">
            <path d="M10 80 C 30 10, 110 10, 150 80" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="10" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <circle cx="150" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <rect x="70" y="16" width="20" height="20" rx="4" fill="#831843" stroke="#f472b6" strokeWidth="1" />
            <rect x="10" y="90" width="28" height="16" rx="4" fill="#ec4899" />
            <rect x="44" y="90" width="28" height="16" rx="4" fill="#a855f7" />
            <rect x="78" y="90" width="28" height="16" rx="4" fill="#6366f1" />
            <rect x="112" y="90" width="45" height="16" rx="4" fill="#4a044e" stroke="#f472b6" strokeWidth="0.8" />
            <text x="134" y="101" fill="#fbcfe8" fontSize="7" fontWeight="bold" textAnchor="middle">DESIGN KIT</text>
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
          {/* Server Rack Array */}
          <g transform="translate(38, 22)">
            <rect x="0" y="0" width="164" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="15" cy="11" r="3" fill="#22c55e" />
            <circle cx="25" cy="11" r="3" fill="#06b6d4" />
            <line x1="40" y1="11" x2="150" y2="11" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

            <rect x="0" y="30" width="164" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="15" cy="41" r="3" fill="#22c55e" />
            <circle cx="25" cy="41" r="3" fill="#06b6d4" />
            <line x1="40" y1="41" x2="150" y2="41" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

            <rect x="0" y="60" width="164" height="22" rx="5" fill="#082f49" stroke="#0284c7" strokeWidth="1" />
            <circle cx="15" cy="71" r="3" fill="#22c55e" />
            <text x="82" y="74" fill="#67e8f9" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">99.99% UPTIME CLUSTER</text>

            <rect x="0" y="90" width="164" height="18" rx="4" fill="#061c2a" stroke="#0891b2" strokeWidth="0.8" />
            <text x="82" y="102" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">AWS &bull; HETZNER &bull; CLOUDFLARE CDN</text>
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
  const [rotationAngle, setRotationAngle] = useState(0);

  const services = useMemo(() => servicesData, []);
  const total = services.length;
  const angleStep = 360 / total;

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth continuous rotation loop using requestAnimationFrame for optimal 60fps
  const requestRef = useRef();
  const lastTimeRef = useRef();

  const animateOrbit = useCallback((time) => {
    if (lastTimeRef.current !== undefined && !isPaused && !prefersReducedMotion) {
      const delta = time - lastTimeRef.current;
      // 360 degrees in approx 28 seconds = ~12.8 degrees/second
      setRotationAngle((prev) => (prev + (delta * 0.013)) % 360);
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOrbit);
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOrbit]);

  // Compute the active item based on the node closest to the top apex (270deg / -90deg)
  useEffect(() => {
    const normalized = (360 - (rotationAngle % 360)) % 360;
    const computedIndex = Math.round(normalized / angleStep) % total;
    if (computedIndex !== activeIndex) {
      setActiveIndex(computedIndex);
      if (onServiceSelect) {
        onServiceSelect(services[computedIndex]);
      }
    }
  }, [rotationAngle, angleStep, total, services, onServiceSelect, activeIndex]);

  const handleServiceClick = useCallback((index) => {
    setActiveIndex(index);
    // Smoothly set rotation angle so clicked item moves to apex
    const targetAngle = (360 - index * angleStep) % 360;
    setRotationAngle(targetAngle);
    if (onServiceSelect) {
      onServiceSelect(services[index]);
    }
  }, [angleStep, services, onServiceSelect]);

  const activeService = services[activeIndex] || services[0];
  const ActiveIcon = iconMap[activeService.id] || Sparkles;

  return (
    <div 
      className="relative w-full max-w-[520px] mx-auto flex flex-col items-center justify-center select-none overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Interactive Circular Services Orbit"
    >
      {/* Background Cyber Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-brand-500/15 via-accent-500/10 to-indigo-500/15 blur-3xl opacity-75" />
      </div>

      {/* Main Orbital Stage (Responsive Diameter: 320px mobile -> 480px desktop) */}
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
        
        {/* SVG Orbital Track & Radar Rings */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 480 480"
          fill="none"
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="radarPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Radar Fill */}
          <circle cx="240" cy="240" r="210" fill="url(#radarPulse)" />

          {/* Outer Main Orbital Ring (Radius = 185px) */}
          <circle 
            cx="240" 
            cy="240" 
            r="185" 
            stroke="url(#orbitGrad)" 
            strokeWidth="1.5" 
            strokeDasharray="4 6"
          />

          {/* Secondary Concentric Radar Ring (Radius = 125px) */}
          <circle 
            cx="240" 
            cy="240" 
            r="125" 
            stroke="#94a3b8" 
            strokeWidth="1" 
            strokeOpacity="0.2"
            strokeDasharray="2 4"
          />

          {/* Innermost Core Ring (Radius = 65px) */}
          <circle 
            cx="240" 
            cy="240" 
            r="65" 
            stroke="#38bdf8" 
            strokeWidth="1.2" 
            strokeOpacity="0.25" 
          />

          {/* Crosshair Guides */}
          <line x1="240" y1="40" x2="240" y2="440" stroke="#94a3b8" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="3 6" />
          <line x1="40" y1="240" x2="440" y2="240" stroke="#94a3b8" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="3 6" />

          {/* Apex Active Selector Pointer Orb (Top Position: 240, 55) */}
          <circle cx="240" cy="55" r="5" fill="#f97316" className="animate-pulse" />
          <circle cx="240" cy="55" r="10" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>

        {/* ================= CENTRAL HOLOGRAPHIC ACTIVE SERVICE PREVIEW ================= */}
        <div className="relative z-20 w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[230px] md:h-[230px] rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-slate-700/80 shadow-2xl p-3 sm:p-4 flex flex-col items-center justify-between text-center overflow-hidden group">
          
          {/* Top Active Category Pill & Tech Pulse */}
          <div className="w-full flex items-center justify-between gap-1 pb-1 border-b border-slate-800">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold truncate">
                {activeService.badge || "FEATURED"}
              </span>
            </div>

            <Link
              to={`/services/${activeService.slug}`}
              className="p-1 rounded-md bg-slate-800/80 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors"
              title={`View ${activeService.shortTitle}`}
            >
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Dynamic Technical Visual Illustration */}
          <div className="w-full flex-1 flex items-center justify-center py-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.88, rotateX: 15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.88, rotateX: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full h-full max-h-[95px] sm:max-h-[120px] flex items-center justify-center"
              >
                <ServiceTechnicalVisual serviceId={activeService.id} isHovered={isPaused} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Service Title & Action Link */}
          <div className="w-full pt-1 border-t border-slate-800/90 text-center">
            <h3 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-tight">
              {activeService.shortTitle}
            </h3>
            <Link
              to={`/services/${activeService.slug}`}
              className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] text-brand-400 hover:text-brand-300 font-medium mt-0.5"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </Link>
          </div>

        </div>

        {/* ================= CIRCULAR ORBITAL SERVICE LABELS ================= */}
        {services.map((item, idx) => {
          // Calculate orbital position
          const currentAngle = (idx * angleStep + rotationAngle) % 360;
          const rad = (currentAngle * Math.PI) / 180;
          
          // Tight orbital radius constrained within container (38% from center)
          // Keeps pills safely inside bounds without clipping left text
          const cosVal = Math.cos(rad);
          const sinVal = Math.sin(rad);
          const isActive = idx === activeIndex;

          // Compute 3D depth scale & opacity based on angle
          const depthFactor = (sinVal + 1) / 2; // 0 (top/back) to 1 (bottom/front)
          const scaleVal = isActive ? 1.08 : 0.82 + depthFactor * 0.14;
          const opacityVal = isActive ? 1 : 0.75 + depthFactor * 0.25;
          const zIndexVal = isActive ? 40 : Math.round(10 + depthFactor * 20);

          return (
            <div
              key={item.id}
              onClick={() => handleServiceClick(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick(idx);
                }
              }}
              tabIndex={0}
              className="absolute transition-transform duration-75 cursor-pointer focus:outline-hidden"
              style={{
                top: `calc(50% + ${sinVal * 38}%)`,
                left: `calc(50% + ${cosVal * 38}%)`,
                transform: `translate(-50%, -50%) scale(${scaleVal})`,
                opacity: opacityVal,
                zIndex: zIndexVal,
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border transition-all duration-300 whitespace-nowrap backdrop-blur-md shadow-md ${
                  isActive
                    ? 'bg-slate-900 text-white border-brand-400 ring-2 ring-brand-500/50 shadow-brand-500/25'
                    : 'bg-white/90 text-slate-700 hover:text-brand-600 border-slate-200/90 hover:border-brand-300 hover:bg-white'
                }`}
                aria-pressed={isActive}
              >
                {/* Luminous Status Pip */}
                <span 
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${
                    isActive ? 'bg-orange-500 animate-pulse' : 'bg-brand-500/60'
                  }`} 
                />

                {/* Service Label (High-Tech Uppercase Typography) */}
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider font-display">
                  {item.shortTitle}
                </span>
              </button>
            </div>
          );
        })}

      </div>

    </div>
  );
}
