import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import logoImg from '../../assets/logo/ZAVYX_logo_cropped.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-10 sm:pt-14 pb-4 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===================== 3 EQUALLY SPACED MENU & SERVICES COLUMNS ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto pb-8 sm:pb-10">
          
          {/* Column 1: MENU */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-900 font-display">
              MENU
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <Link to="/" className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/start-a-project" className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block">
                  Work &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: CORE SERVICES */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-900 font-display">
              SERVICES
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SPECIALIZATIONS & SOLUTIONS */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-900 font-display">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {servicesData.slice(5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors inline-block"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/start-a-project"
                  className="text-sm sm:text-base lg:text-lg font-medium text-brand-600 hover:text-brand-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ===================== COPYRIGHT & SUPPORT STRIP (ABOVE THE LOGO) ===================== */}
        <div className="max-w-6xl mx-auto py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-slate-500 border-t border-slate-200/60">
          <p>© {currentYear} ZAVYX InfoTech. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Verified Business Provider</span>
            </span>
            <Link to="/contact" className="hover:text-slate-900 transition-colors font-medium">
              Support
            </Link>
          </div>
        </div>

      </div>

      {/* ===================== FULL-WIDTH GRAND FOOTER LOGO (CROPPED, NO TAGLINE) ===================== */}
      <div className="w-full relative overflow-hidden pt-2 pb-2 select-none">
        
        {/* Ambient Gradient Glow in Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[85%] sm:w-[650px] h-[140px] bg-gradient-to-r from-brand-300/20 via-accent-300/25 to-brand-400/20 blur-3xl rounded-full" />
        </div>

        {/* Subtle grid accent behind big logo */}
        <div 
          className="absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(2, 132, 199, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2, 132, 199, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        <Link to="/" className="block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 focus:outline-none cursor-default">
          <div className="relative inline-flex flex-col items-center justify-center w-full ">
            
            {/* Grand Centered Big Logo without "Digital Solutions for Business" Tagline */}
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              <img
                src={logoImg}
                alt="ZAVYX InfoTech"
                className="w-full max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain filter drop-shadow-xs"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ZAVYX_logo_cropped.png';
                }}
              />
            </div>

          </div>
        </Link>
      </div>

    </footer>
  );
}
