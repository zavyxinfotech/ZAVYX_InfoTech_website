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
  Layers,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import logoImg from '../../assets/logo/logo.png';

// Technical Vector Illustrations for each service (Futuristic, Holographic, Pure SVG)
const ServiceTechnicalVisual = ({ serviceId, isHovered }) => {
  switch (serviceId) {
    case 'website-design-development':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="webGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gridGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="1" stopColor="#818cf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Browser Window Chassis */}
          <rect x="20" y="20" width="200" height="140" rx="14" fill="#0f172a" stroke="url(#webGrad)" strokeWidth="1.5" />
          <path d="M20 48 H220" stroke="#334155" strokeWidth="1" />
          {/* Window Controls */}
          <circle cx="38" cy="34" r="3.5" fill="#ef4444" opacity="0.8" />
          <circle cx="49" cy="34" r="3.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="60" cy="34" r="3.5" fill="#10b981" opacity="0.8" />
          {/* Search URL Bar */}
          <rect x="76" y="28" width="128" height="12" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="0.8" />
          <line x1="86" y1="34" x2="140" y2="34" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          {/* Responsive Layout Wireframe Inside */}
          <rect x="34" y="60" width="80" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <rect x="122" y="60" width="84" height="18" rx="4" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="122" y="84" width="84" height="18" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="0.8" />
          {/* Bottom Code Nodes & Metric */}
          <rect x="34" y="112" width="52" height="34" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          <rect x="92" y="112" width="52" height="34" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          <rect x="150" y="112" width="56" height="34" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="178" y="132" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">99+ SPD</text>
        </svg>
      );

    case 'ecommerce-development':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="ecomGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#09141d" stroke="url(#ecomGrad)" strokeWidth="1.5" />
          {/* E-Commerce Product Card Array */}
          <rect x="40" y="36" width="70" height="68" rx="8" fill="#132a2c" stroke="#10b981" strokeWidth="1" />
          <rect x="48" y="44" width="54" height="34" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="0.8" />
          <circle cx="75" cy="61" r="9" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
          <path d="M72 61 L75 64 L79 58" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="48" y="84" width="36" height="4" rx="2" fill="#34d399" />
          <rect x="48" y="92" width="22" height="4" rx="2" fill="#6ee7b7" />
          {/* Checkout & Payment Telemetry */}
          <rect x="120" y="36" width="80" height="110" rx="8" fill="#112229" stroke="#059669" strokeWidth="1" />
          <path d="M130 52 H190" stroke="#047857" strokeWidth="1.5" strokeDasharray="2 2" />
          <rect x="130" y="62" width="60" height="8" rx="3" fill="#065f46" />
          <rect x="130" y="76" width="45" height="6" rx="3" fill="#047857" />
          <rect x="130" y="94" width="60" height="18" rx="6" fill="#10b981" />
          <text x="160" y="106" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">CHECKOUT</text>
          <text x="160" y="132" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">₹ 100% SYNC</text>
        </svg>
      );

    case 'crm-erp-solutions':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="erpGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#111126" stroke="url(#erpGrad)" strokeWidth="1.5" />
          {/* Database & Multi-tenant ERP Node Hierarchy */}
          <g transform="translate(42, 36)">
            {/* Top Node */}
            <rect x="52" y="0" width="52" height="24" rx="6" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.2" />
            <text x="78" y="15" fill="#c4b5fd" fontSize="8" fontWeight="bold" textAnchor="middle">HQ / ERP</text>
            {/* Tree Connectors */}
            <path d="M78 24 V42 M32 42 H124 M32 42 V54 M78 42 V54 M124 42 V54" stroke="#818cf8" strokeWidth="1.2" />
            {/* Sub Nodes */}
            <rect x="6" y="54" width="52" height="22" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
            <text x="32" y="68" fill="#e0e7ff" fontSize="7" fontWeight="semibold" textAnchor="middle">Inventory</text>
            <rect x="52" y="54" width="52" height="22" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
            <text x="78" y="68" fill="#e0e7ff" fontSize="7" fontWeight="semibold" textAnchor="middle">Finance</text>
            <rect x="98" y="54" width="52" height="22" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
            <text x="124" y="68" fill="#e0e7ff" fontSize="7" fontWeight="semibold" textAnchor="middle">CRM</text>
            {/* Metrics Live Data Stream */}
            <rect x="6" y="86" width="144" height="24" rx="6" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="0.8" />
            <circle cx="22" cy="98" r="4" fill="#22c55e" />
            <text x="34" y="101" fill="#a5b4fc" fontSize="8" fontFamily="monospace">SYNC: LIVE REALTIME</text>
          </g>
        </svg>
      );

    case 'whatsapp-api-solutions':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="waGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22c55e" stopOpacity="0.9" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#081711" stroke="url(#waGrad)" strokeWidth="1.5" />
          {/* WhatsApp API Webhook Flow */}
          <g transform="translate(40, 36)">
            {/* Incoming Message Bubble */}
            <rect x="0" y="0" width="105" height="28" rx="8" fill="#064e3b" stroke="#22c55e" strokeWidth="1" />
            <text x="10" y="17" fill="#86efac" fontSize="8" fontWeight="medium">User: Order Status?</text>
            {/* Bot Trigger Arrow */}
            <path d="M52 28 V42" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Automated Webhook Response */}
            <rect x="55" y="44" width="105" height="34" rx="8" fill="#14532d" stroke="#4ade80" strokeWidth="1" />
            <text x="65" y="60" fill="#ffffff" fontSize="8" fontWeight="bold">Bot: Shipped 🚚 #2155</text>
            <text x="65" y="71" fill="#bbf7d0" fontSize="7">Tracking: Live GPS Link</text>
            {/* Meta Verified Badge */}
            <rect x="0" y="88" width="160" height="22" rx="6" fill="#052e16" stroke="#22c55e" strokeWidth="0.8" />
            <circle cx="16" cy="99" r="4" fill="#22c55e" />
            <text x="26" y="102" fill="#4ade80" fontSize="7.5" fontWeight="bold" fontFamily="monospace">META CLOUD API VERIFIED</text>
          </g>
        </svg>
      );

    case 'ai-automation-solutions':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="aiGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f43f5e" stopOpacity="0.9" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#180c1b" stroke="url(#aiGrad)" strokeWidth="1.5" />
          {/* Neural Network Nodes & Synapses */}
          <g transform="translate(45, 34)">
            {/* Input Layer */}
            <circle cx="15" cy="20" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="15" cy="55" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            <circle cx="15" cy="90" r="7" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
            {/* Hidden Layer (AI Core) */}
            <circle cx="75" cy="35" r="9" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <circle cx="75" cy="75" r="9" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            {/* Output Node */}
            <circle cx="135" cy="55" r="10" fill="#831843" stroke="#f43f5e" strokeWidth="2" />
            {/* Synapse Lines */}
            <line x1="22" y1="20" x2="66" y2="35" stroke="#f43f5e" strokeWidth="1" opacity="0.7" />
            <line x1="22" y1="55" x2="66" y2="35" stroke="#f43f5e" strokeWidth="1" opacity="0.7" />
            <line x1="22" y1="55" x2="66" y2="75" stroke="#c084fc" strokeWidth="1" opacity="0.7" />
            <line x1="22" y1="90" x2="66" y2="75" stroke="#c084fc" strokeWidth="1" opacity="0.7" />
            <line x1="84" y1="35" x2="125" y2="55" stroke="#fb7185" strokeWidth="1.5" />
            <line x1="84" y1="75" x2="125" y2="55" stroke="#c084fc" strokeWidth="1.5" />
            {/* Central AI Pulse Text */}
            <text x="75" y="112" fill="#fda4af" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ZERO-TOUCH WORKFLOWS</text>
          </g>
        </svg>
      );

    case 'mobile-app-development':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mobGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#091424" stroke="url(#mobGrad)" strokeWidth="1.5" />
          {/* Dual Cross-Platform Smartphone Chassis */}
          <g transform="translate(60, 28)">
            <rect x="0" y="0" width="58" height="116" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="4" y="8" width="50" height="100" rx="8" fill="#1e293b" />
            <circle cx="29" cy="4" r="1.5" fill="#38bdf8" />
            <rect x="10" y="20" width="38" height="20" rx="4" fill="#0284c7" fillOpacity="0.5" />
            <rect x="10" y="46" width="16" height="16" rx="4" fill="#38bdf8" fillOpacity="0.4" />
            <rect x="32" y="46" width="16" height="16" rx="4" fill="#38bdf8" fillOpacity="0.4" />
            <rect x="10" y="68" width="38" height="12" rx="3" fill="#10b981" />
            <text x="29" y="77" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">iOS 60FPS</text>
          </g>
          <g transform="translate(125, 36)">
            <rect x="0" y="0" width="54" height="106" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
            <rect x="4" y="6" width="46" height="94" rx="6" fill="#132a24" />
            <rect x="8" y="16" width="38" height="16" rx="4" fill="#059669" fillOpacity="0.5" />
            <rect x="8" y="38" width="38" height="36" rx="4" fill="#047857" fillOpacity="0.3" stroke="#34d399" strokeWidth="0.6" />
            <text x="27" y="58" fill="#a7f3d0" fontSize="6.5" fontWeight="bold" textAnchor="middle">ANDROID</text>
          </g>
        </svg>
      );

    case 'digital-marketing':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mktGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="1" stopColor="#ef4444" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#1c1306" stroke="url(#mktGrad)" strokeWidth="1.5" />
          {/* Growth Analytics Vector Graph */}
          <g transform="translate(42, 34)">
            <path d="M10 95 H145 M10 95 V10" stroke="#78350f" strokeWidth="1.2" />
            {/* Ascending Trend Line */}
            <path d="M15 85 Q 50 75, 75 48 T 140 15" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            {/* Luminous Data Points */}
            <circle cx="15" cy="85" r="3" fill="#f59e0b" />
            <circle cx="55" cy="65" r="3" fill="#f59e0b" />
            <circle cx="95" cy="40" r="3.5" fill="#fbbf24" />
            <circle cx="140" cy="15" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            {/* Highlighted Metric */}
            <rect x="75" y="70" width="70" height="22" rx="5" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
            <text x="110" y="84" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ROAS: 4.8X</text>
          </g>
        </svg>
      );

    case 'branding-creative-design':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="brandGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#1b081a" stroke="url(#brandGrad)" strokeWidth="1.5" />
          {/* Design System & Bezier Wireframe Visual */}
          <g transform="translate(45, 34)">
            {/* Bezier Vector Curve with Anchor Nodes */}
            <path d="M10 80 C 30 10, 110 10, 140 80" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="10" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <circle cx="140" cy="80" r="3.5" fill="#f472b6" stroke="#ffffff" strokeWidth="1" />
            <rect x="65" y="16" width="20" height="20" rx="4" fill="#831843" stroke="#f472b6" strokeWidth="1" />
            {/* Component Palette Grid */}
            <rect x="15" y="90" width="24" height="16" rx="4" fill="#ec4899" />
            <rect x="45" y="90" width="24" height="16" rx="4" fill="#a855f7" />
            <rect x="75" y="90" width="24" height="16" rx="4" fill="#6366f1" />
            <rect x="105" y="90" width="35" height="16" rx="4" fill="#4a044e" stroke="#f472b6" strokeWidth="0.8" />
            <text x="122" y="101" fill="#fbcfe8" fontSize="6.5" fontWeight="bold" textAnchor="middle">UI KIT</text>
          </g>
        </svg>
      );

    case 'cloud-hosting-solutions':
    default:
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="cldGrad" x1="0" y1="0" x2="240" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="25" y="20" width="190" height="140" rx="14" fill="#071927" stroke="url(#cldGrad)" strokeWidth="1.5" />
          {/* Cloud Infrastructure & Server Cluster Array */}
          <g transform="translate(45, 34)">
            {/* Server Rack 1 */}
            <rect x="10" y="10" width="130" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="24" cy="21" r="3" fill="#22c55e" />
            <circle cx="34" cy="21" r="3" fill="#06b6d4" />
            <line x1="50" y1="21" x2="120" y2="21" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            {/* Server Rack 2 */}
            <rect x="10" y="40" width="130" height="22" rx="5" fill="#0e334a" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="24" cy="51" r="3" fill="#22c55e" />
            <circle cx="34" cy="51" r="3" fill="#06b6d4" />
            <line x1="50" y1="51" x2="120" y2="51" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            {/* Server Rack 3 (Uptime Banner) */}
            <rect x="10" y="70" width="130" height="22" rx="5" fill="#082f49" stroke="#0284c7" strokeWidth="1" />
            <circle cx="24" cy="81" r="3" fill="#22c55e" />
            <text x="75" y="84" fill="#67e8f9" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">99.99% UPTIME CLUSTER</text>
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

  // Smooth continuous rotation loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.35) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Determine currently active item based on rotation angle (Apex is at -90deg or 270deg)
  useEffect(() => {
    // Top-most apex is 270deg (or -90deg in standard trigonometric space)
    const normalized = (360 - (rotationAngle % 360)) % 360;
    const computedIndex = Math.round(normalized / angleStep) % total;
    setActiveIndex(computedIndex);
    if (onServiceSelect) {
      onServiceSelect(services[computedIndex]);
    }
  }, [rotationAngle, angleStep, total, services, onServiceSelect]);

  const handleServiceClick = useCallback((index) => {
    setActiveIndex(index);
    // Smoothly rotate the clicked item to the top apex
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
      className="relative w-full max-w-[580px] mx-auto flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Interactive Circular Services Orbit"
    >
      {/* Background Cybernetic Glow & Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-brand-600/15 via-accent-500/10 to-emerald-500/15 blur-3xl opacity-70" />
      </div>

      {/* Main Orbital Stage (Responsive Aspect 1:1) */}
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">
        
        {/* SVG Orbital Track & Radar Rings */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 520 520"
          fill="none"
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="520" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="radarPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Radar Fill */}
          <circle cx="260" cy="260" r="230" fill="url(#radarPulse)" />

          {/* Outer Main Orbital Circle */}
          <circle 
            cx="260" 
            cy="260" 
            r="220" 
            stroke="url(#orbitGrad)" 
            strokeWidth="1.5" 
            strokeDasharray="4 6"
            className="animate-spin-very-slow"
          />

          {/* Inner Secondary Concentric Ring */}
          <circle 
            cx="260" 
            cy="260" 
            r="150" 
            stroke="#94a3b8" 
            strokeWidth="1" 
            strokeOpacity="0.25"
            strokeDasharray="2 4"
          />

          {/* Innermost Core Ring */}
          <circle 
            cx="260" 
            cy="260" 
            r="80" 
            stroke="#38bdf8" 
            strokeWidth="1.2" 
            strokeOpacity="0.3" 
          />

          {/* Crosshair Guides */}
          <line x1="260" y1="30" x2="260" y2="490" stroke="#94a3b8" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="4 8" />
          <line x1="30" y1="260" x2="490" y2="260" stroke="#94a3b8" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="4 8" />

          {/* Apex Active Selector Pointer Orb (Top Position) */}
          <circle cx="260" cy="40" r="6" fill="#f97316" className="animate-pulse" />
          <circle cx="260" cy="40" r="12" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>

        {/* ================= CENTRAL HOLOGRAPHIC ACTIVE SERVICE PREVIEW ================= */}
        <div className="relative z-20 w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-slate-700/80 shadow-2xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center overflow-hidden group">
          
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
                initial={{ opacity: 0, scale: 0.88, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.88, rotateX: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full h-full max-h-[110px] sm:max-h-[140px] flex items-center justify-center"
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
          
          // Radius adapts to screen size via CSS variables or fixed offsets
          // In desktop 520px container, orbital radius is ~210px
          // In mobile 340px container, orbital radius is ~140px
          const isActive = idx === activeIndex;

          // Trigonometric offset percentages from center (50%, 50%)
          const cosVal = Math.cos(rad);
          const sinVal = Math.sin(rad);

          return (
            <div
              key={item.id}
              onClick={() => handleServiceClick(idx)}
              className="absolute z-30 transition-transform duration-100 cursor-pointer"
              style={{
                top: `calc(50% + ${sinVal * 42}%)`,
                left: `calc(50% + ${cosVal * 42}%)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 whitespace-nowrap backdrop-blur-md shadow-md ${
                  isActive
                    ? 'bg-slate-900 text-white border-brand-400 ring-2 ring-brand-500/50 scale-105 sm:scale-110 shadow-brand-500/25 z-40'
                    : 'bg-white/90 text-slate-700 hover:text-brand-600 border-slate-200/90 hover:border-brand-300 hover:bg-white scale-90 sm:scale-95 opacity-75 hover:opacity-100'
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
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider font-display">
                  {item.shortTitle}
                </span>
              </motion.button>
            </div>
          );
        })}

      </div>

      {/* Orbit Control Indicator & Interactive Tip */}
      <div className="flex items-center justify-between w-full px-4 pt-3 text-[10px] sm:text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono uppercase font-semibold text-slate-700">
            {isPaused ? "ORBIT PAUSED (INSPECTING)" : "LIVE CIRCULAR ORBIT"}
          </span>
        </div>
        <span className="text-slate-400 font-medium hidden sm:inline">
          Hover to pause • Click node to focus
        </span>
      </div>

    </div>
  );
}
