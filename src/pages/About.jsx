import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Target,
  Eye,
  CheckCircle2,
  Building2, 
  Shirt, 
  ShoppingBag, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Compass 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import TeamAutoScroll from '../components/common/TeamAutoScroll';
import { companyData } from '../data/companyData';

export default function About() {
  const industryIcons = [
    TrendingUp,
    Shirt,
    ShoppingBag,
    Briefcase,
    Building2,
  ];

  return (
    <div className="subtle-mesh-bg">
      <SEO
        title="About Us | Our Mission, Vision & Core Values"
        description="Explore ZAVYX InfoTech's mission and vision — empowering modern businesses with intelligent software, automated workflows, and transformative digital systems."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-brand-600" />
              <span>About ZAVYX InfoTech</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              A Dedicated Technology Partner for the Digital Age
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              We engineer intelligent websites, custom business software, WhatsApp automations, and AI workflows that give modern businesses a decisive competitive edge.
            </p>

          </div>
        </div>
      </section>

      {/* ===================== MISSION & VISION SHOWCASE ===================== */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Our Purpose &amp; Direction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
              Driven by Purpose, Guided by Clear Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our mission and vision define how we engineer high-impact digital systems, streamline enterprise operations, and build enduring technology partnerships.
            </p>
          </div>

          {/* Mission & Vision Dual Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            
            {/* 1. OUR MISSION CARD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 text-white shadow-xl shadow-brand-500/15 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 border border-white/20 text-brand-100">
                    OUR MISSION
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display leading-snug text-white mb-4">
                  Empowering Business Growth Through Smart Innovation
                </h3>

                <p className="text-brand-100 text-base sm:text-lg leading-relaxed font-medium">
                  "{companyData.about.mission}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-100 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
                  <span>Simplify Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
                  <span>Accelerate Growth</span>
                </div>
              </div>
            </div>

            {/* 2. OUR VISION CARD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white shadow-xl shadow-slate-900/15 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-accent-500/15 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-accent-300">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 border border-white/20 text-accent-200">
                    OUR VISION
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display leading-snug text-white mb-4">
                  Pioneering the Future of Digital Excellence
                </h3>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  "{companyData.about.vision}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transformative Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sustainable Partnerships</span>
                </div>
              </div>
            </div>

          </div>

          {/* Core Values & Local Operations Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left Action Buttons & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
                  Collaborate With Us
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Ready to Build Your Next Digital Milestone?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engage directly with our technical solutions team for an actionable roadmap.
                </p>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 transition-all hover:scale-105"
                >
                  <span>Start Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Texvalley, Erode, TN</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Mon – Sat Service</span>
                </div>
              </div>
            </div>

            {/* Right 4 Core Guiding Values Bento (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyData.about.values.map((val) => (
                <div
                  key={val.id}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0"></span>
                      <span>{val.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-4">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ===================== INDUSTRIES WE EMPOWER ===================== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Domain Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Industries We Build & Automate For
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Tailored software architectures adapted to the operational realities of key sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.industries.map((ind, i) => {
              const IconComp = industryIcons[i] || Building2;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700">
                        {ind.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== OUR TEAM (AUTOSCROLL STREAM - NON-CARD LAYOUT) ===================== */}
      <TeamAutoScroll />

      {/* ===================== CTA ===================== */}
      <section className="py-16 bg-white border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Ready to partner with ZAVYX InfoTech?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Let’s discuss your challenges and explore the right combination of web technology, ERP software, and AI automation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
