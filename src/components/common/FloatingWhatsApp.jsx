import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show initially after 3 seconds, auto-hide after 5 seconds
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    // Trigger popup message every 15 seconds, staying visible for 5 seconds
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col gap-2 max-w-[calc(100vw-2rem)]">
      {/* Pop-in Tooltip appearing every 15 seconds */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center gap-2 bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 max-w-[270px] sm:max-w-xs leading-tight"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping shrink-0"></div>
            <span className="truncate sm:whitespace-normal">Need help? Chat on WhatsApp!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full ml-1 shrink-0"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Arrow pointer */}
            <div className="absolute -bottom-1.5 right-5 sm:right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official WhatsApp Button */}
      <motion.a
        href={companyData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ZAVYX InfoTech"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000 -z-10"></span>
        
        {/* Official WhatsApp SVG Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />

        {/* Accessibility screen reader label */}
        <span className="sr-only">Chat on WhatsApp: {companyData.contact.phone}</span>
      </motion.a>
    </div>
  );
}
