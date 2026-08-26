import React, { useState } from 'react';
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
  Cloud 
} from 'lucide-react';

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

export default function InteractiveServiceCard({ service, IconComponent }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = IconComponent || iconMap[service.id] || Code2;

  // Staggered word animation variants for the description text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const infoText = service.shortDesc || '';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-brand-500 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer select-none"
    >
      {/* 1. SERVICE HEADER (ICON & NAME) ABOVE THE IMAGE */}
      <div className="p-2.5 sm:p-3.5 md:p-4 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
          </div>
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 truncate font-display group-hover:text-brand-600 transition-colors">
            {service.shortTitle}
          </h3>
        </div>

        <span className="hidden md:inline-block text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200/70 shrink-0">
          {service.category}
        </span>
      </div>

      {/* 2. IMAGE CONTAINER WITH HOVER OVERLAY */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950">
        
        {/* Service Image */}
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover object-center transition-all duration-500 transform ${
            isHovered
              ? 'scale-108 blur-[2px] brightness-40'
              : 'scale-100 blur-0 brightness-95 group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Resting Bottom Category Badge */}
        {!isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3.5 transition-opacity duration-300">
            <span className="text-[10px] sm:text-xs font-bold text-white drop-shadow truncate">
              {service.badge}
            </span>
          </div>
        )}

        {/* 3. HOVER OVERLAY (Service Title removed on hover, Larger Description & Redesigned Explore Now Button) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md p-2.5 sm:p-5 flex flex-col justify-between text-white z-20"
            >
              {/* Top Pill / Focus Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-950/60 px-2 sm:px-2.5 py-0.5 rounded-full border border-brand-500/30">
                  {service.badge}
                </span>
              </div>

              {/* Description Text */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="my-auto py-0.5 sm:py-1 overflow-hidden"
              >
                <p className="text-[11px] sm:text-sm md:text-base text-slate-100 font-normal leading-snug sm:leading-relaxed flex flex-wrap line-clamp-3 sm:line-clamp-none">
                  {infoText.split(' ').map((word, wIdx) => (
                    <motion.span
                      key={wIdx}
                      variants={wordVariants}
                      className="inline-block mr-1 mb-0.5"
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              </motion.div>

              {/* Redesigned "Explore Now" Button */}
              <div className="pt-1 sm:pt-2">
                <Link
                  to={`/services/${service.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="group/btn inline-flex items-center justify-between w-full py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-2xl text-[11px] sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-md shadow-brand-500/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
                >
                  <span className="font-semibold">Explore Now</span>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
