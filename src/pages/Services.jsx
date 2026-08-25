import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Cloud, 
  CheckCircle2, 
  Sparkles, 
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';
import SEO from '../components/common/SEO';
import FAQAccordion from '../components/common/FAQAccordion';
import WebsiteRapidLaunchHighlight from '../components/common/WebsiteRapidLaunchHighlight';
import InteractiveServiceCard from '../components/common/InteractiveServiceCard';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'Development', 'Enterprise', 'Automation', 'Marketing', 'Design', 'Infrastructure'];

  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  const servicesFaqs = companyData.faqs.filter(
    (f) =>
      f.question.includes('customized') ||
      f.question.includes('AI') ||
      f.question.includes('scale') ||
      f.question.includes('maintenance') ||
      f.question.includes('secure')
  );

  return (
    <div className="subtle-mesh-bg">
      <SEO
        title="Services | Comprehensive Digital Solutions & Software"
        description="Explore ZAVYX InfoTech's 9 technology services: Web Development, E-Commerce, Custom CRM/ERP, WhatsApp API, AI Automation, Mobile Apps, and Cloud Solutions."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-brand-600" />
              <span>Full-Spectrum Digital Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              Technology Solutions Engineered for Tangible Business Growth
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              From responsive websites and enterprise ERP systems to intelligent WhatsApp bots and performance marketing, we deliver end-to-end digital solutions that simplify operations and accelerate scale.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FEATURED SERVICE SPOTLIGHT (WEBSITES IN 48H) ===================== */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WebsiteRapidLaunchHighlight />
      </section>

      {/* ===================== 9 SERVICES SHOWCASE GRID (2 CARDS PER ROW ON MOBILE) ===================== */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {filteredServices.map((service) => {
              const IconComp = iconMap[service.slug] || Code2;

              return (
                <div key={service.id}>
                  <InteractiveServiceCard
                    service={service}
                    IconComponent={IconComp}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== SERVICES FAQ ===================== */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Services & Technical FAQs
            </h2>
            <p className="mt-2 text-slate-600">
              Clear answers on scoping, tech stacks, and post-launch maintenance.
            </p>
          </div>

          <FAQAccordion items={servicesFaqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-16 bg-white border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Need a Customized Solution for Your Business?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Tell us about your technical specifications or operational bottlenecks. We’ll structure an actionable plan.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/25 transition-all hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
            >
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
