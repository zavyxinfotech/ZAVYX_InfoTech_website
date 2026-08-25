import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
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
        title="About Us | Our Story, Mission & Values"
        description="Learn about ZAVYX InfoTech — our journey, core values of innovation and transparency, and our mission to help businesses build, automate, and scale."
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

      {/* ===================== STORY & MISSION (ASYMMETRIC SPLIT SHOWCASE) ===================== */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative (7 cols on lg, full width on mobile) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                <span>Our Story &amp; Mission</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
                Built to Create Smart Digital Solutions for Modern Businesses
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {companyData.about.story}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From our strategic base at Texvalley, Erode — the vibrant commercial heart of Tamil Nadu — we work closely with regional manufacturers, dynamic retail businesses, and fast-scaling startups to eliminate digital roadblocks and build future-proof systems.
              </p>

              {/* Mission Highlight Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-brand-50/60 border border-brand-100 text-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block">
                  Our Mission
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  "{companyData.about.mission}"
                </p>
              </div>

              {/* Action Buttons & Local Office Indicators */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
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

            {/* Right Visual Bento - 4 Core Values (5 cols on lg, full width on mobile) */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              {companyData.about.values.map((val) => (
                <div
                  key={val.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0"></span>
                    <span>{val.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed pl-4.5">
                    {val.description}
                  </p>
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
