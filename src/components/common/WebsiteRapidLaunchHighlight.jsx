import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Zap
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import realisticMockupImg from '../../assets/images/realistic_devices_mockup.jpg';

export default function WebsiteRapidLaunchHighlight({ className = "" }) {
  return (
    <div className={`relative w-full py-4 sm:py-6 ${className}`}>
      
      {/* Top Banner Tag: 48h Badge */}
      <div className="flex items-center justify-start mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full  text-rose-700 text-xs sm:text-lg font-bold shadow-xs">
          <Clock className="w-4 h-4 text-rose-600 animate-spin-slow" />
          <span>GO LIVE IN 48 HOURS (2 DAYS)</span>
        </div>
      </div>

      {/* Main Grid: Headline (Left) & Realistic 3D Perspective Laptop + Smartphone (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Offer & CTAs (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6">
          
          <div className="space-y-2.5 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display leading-[1.15] tracking-tight">
              Website Design &amp; Development in <span className="bg-gradient-to-r from-emerald-600 via-brand-600 to-rose-600 bg-clip-text text-transparent">  <br></br>2 Days</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Launch fast with a modern, high-converting website engineered for your business. Pixel-perfect responsiveness on both laptop and mobile screens.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
            <div className="p-2.5 sm:p-3 rounded-2xl shadow-xs text-center">
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium block">Speed</span>
              <p className="text-sm sm:text-base font-extrabold text-rose-600">48 Hours</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl shadow-xs text-center">
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium block">PageSpeed</span>
              <p className="text-sm sm:text-base font-extrabold text-emerald-600">99+ Score</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl shadow-xs text-center">
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium block">Launch</span>
              <p className="text-sm sm:text-base font-extrabold text-brand-600">100% Done</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:scale-105"
            >
              <span>Get Started &rarr;</span>
            </Link>

            <Link
              to="/services/website-design-development"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <span>Service Details</span>
            </Link>
          </div>

        </div>

        {/* Right Column: Realistic 3D Perspective Laptop & Mobile View (7 cols on lg) */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center pt-2 pb-2">
          <Link 
            to="/services/website-design-development"
            className="group relative block w-full max-w-2xl mx-auto focus:outline-none"
          >
            {/* Ambient Background Glow behind realistic devices */}
            <div className="absolute inset-0 bg-transparent blur-3xl rounded-3xl -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>

            {/* Realistic 3D Laptop and Mobile Device Mockup Image */}
            <div className="relative rounded-2xl overflow-hidden  group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-1">
              <img
                src={realisticMockupImg}
                alt="Realistic 3D Laptop and Mobile View for ZAVYX Website Design"
                className="w-full h-auto object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/realistic_devices_mockup.jpg';
                }}
              />

              {/* Subtle Interactive Click Pill on Top Right */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold shadow-lg">
                  <span>Explore 48H Website Launch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
}
