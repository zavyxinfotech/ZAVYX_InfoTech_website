import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  Sparkles,
  Layers
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function CinematicServicesCarousel() {
  const scrollContainerRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Continuous / Step-by-step Auto-Scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // If reached the end, smoothly roll back to beginning
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll one card width (approx 340px)
          container.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full py-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setActiveCardId(null);
      }}
    >
      {/* ===================== FLOATING CIRCULAR NAVIGATION ARROWS ===================== */}
      <button
        onClick={handleScrollPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      <button
        onClick={handleScrollNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Next service"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* ===================== HORIZONTAL STREAM TRACK ===================== */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth px-4 sm:px-12 py-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {servicesData.map((service) => {
          const IconComp = iconMap[service.slug] || Code2;
          const isSelected = activeCardId === service.id;

          return (
            <div
              key={service.id}
              onClick={() => setActiveCardId(isSelected ? null : service.id)}
              className="group relative w-[270px] sm:w-[330px] md:w-[370px] h-[390px] sm:h-[450px] md:h-[480px] shrink-0 rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 snap-center cursor-pointer flex flex-col justify-between"
            >
              {/* 1. Full-Cover Cinematic Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 transform ${
                  isSelected
                    ? 'scale-115 blur-[2px] brightness-30'
                    : 'scale-100 blur-0 brightness-90 group-hover:scale-110 group-hover:brightness-40 group-hover:blur-[1px]'
                }`}
                loading="lazy"
              />

              {/* Ambient Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />

              {/* 2. Top Header Bar: Service Name & Category Pill */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white shadow-sm">
                  <IconComp className="w-4 h-4 text-brand-400 stroke-[2.2]" />
                  <span className="text-xs sm:text-sm font-bold font-display tracking-wide">
                    {service.shortTitle}
                  </span>
                </div>

                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {service.category}
                </span>
              </div>

              {/* 3. Resting View (Bottom Metric / Highlights & Explore Cue) */}
              <div className={`relative z-10 p-4 sm:p-6 transition-all duration-300 ${isSelected ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-0'}`}>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-300 drop-shadow">
                    {service.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight font-display drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-white/80 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Click to view details</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* 4. Zoomed-In Interactive Overlay (On Hover or Click) */}
              <div
                className={`absolute inset-0 z-20 p-5 sm:p-6 flex flex-col justify-between text-white bg-slate-950/80 backdrop-blur-md transition-all duration-300 ${
                  isSelected
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none translate-y-3 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-950/80 px-3 py-1 rounded-full border border-brand-500/40">
                    {service.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300">
                    ZAVYX Core
                  </span>
                </div>

                {/* Large, Legible Description Text */}
                <div className="my-auto py-2 space-y-3">
                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redesigned "Explore Now" Button with background and white arrow */}
                <div className="pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn inline-flex items-center justify-between w-full py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-xl shadow-brand-500/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
                  >
                    <span>Explore Now</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
