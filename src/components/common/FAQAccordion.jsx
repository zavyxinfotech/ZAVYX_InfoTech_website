import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-300 shadow-md shadow-brand-500/5'
                : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-start sm:items-center justify-between p-4 sm:p-5 text-left transition-colors focus:outline-none gap-3"
              aria-expanded={isOpen}
            >
              <span className="flex items-start sm:items-center gap-2.5 sm:gap-3 font-semibold text-slate-800 text-sm sm:text-base md:text-lg leading-snug">
                <span className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-xs font-bold shrink-0 transition-colors mt-0.5 sm:mt-0 ${
                  isOpen ? 'bg-brand-50 text-brand-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  Q{idx + 1}
                </span>
                <span>{item.question}</span>
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`p-1 sm:p-1.5 rounded-full transition-colors shrink-0 mt-0.5 sm:mt-0 ${
                  isOpen ? 'bg-brand-50 text-brand-600' : 'bg-slate-100 text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 sm:pt-1 text-slate-600 leading-relaxed border-t border-slate-100 text-xs sm:text-sm md:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
