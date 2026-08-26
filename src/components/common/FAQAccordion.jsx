import React, { useState } from 'react';
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
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
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
              <div
                className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 shrink-0 mt-0.5 sm:mt-0 ${
                  isOpen ? 'bg-brand-50 text-brand-600 rotate-180' : 'bg-slate-100 text-slate-400 rotate-0'
                }`}
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>

            {/* GPU Native Grid Transition Accordion */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 sm:pt-1 text-slate-600 leading-relaxed border-t border-slate-100 text-xs sm:text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

