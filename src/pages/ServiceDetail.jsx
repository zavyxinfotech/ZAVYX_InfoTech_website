import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  HelpCircle,
  Clock,
  Check,
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
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import WebsiteRapidLaunchHighlight from '../components/common/WebsiteRapidLaunchHighlight';
import SEO from '../components/common/SEO';
import FAQAccordion from '../components/common/FAQAccordion';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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

  const IconComp = iconMap[service.slug] || Code2;

  return (
    <div className="subtle-mesh-bg">
      <SEO
        title={service.metaTitle || `${service.title} | ZAVYX InfoTech`}
        description={service.metaDesc || service.shortDesc}
        canonical={`https://zavyx.in/services/${service.slug}`}
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-brand-600">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-brand-600 font-bold">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>{service.badge} &bull; {service.category}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {service.heroSubheadline}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise Security</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-brand-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Production-Grade Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated Support</span>
                </span>
              </div>
            </div>

            {/* Hero Right Visual Presentation (5 cols on lg, full width on mobile) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-2">
              <div className="relative w-full max-w-lg mx-auto group">
                
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/15 via-accent-500/10 to-transparent blur-3xl rounded-3xl -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>

                {/* Clean, High-Definition 3D Realistic Hero Visual */}
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white group-hover:border-brand-300 transition-all duration-500 transform group-hover:-translate-y-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/realistic_devices_mockup.jpg';
                    }}
                  />

                  {/* Floating Live Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[11px] font-bold text-slate-800 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>{service.badge}</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== 48H RAPID LAUNCH SPOTLIGHT FOR WEB DEV ===================== */}
      {service.slug === 'website-design-development' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WebsiteRapidLaunchHighlight />
        </section>
      )}

      {/* ===================== WHAT'S INCLUDED (6 MODULAR TILES) ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Scope Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              What's Included in {service.shortTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Every engagement is thoroughly structured with production-ready deliverables, full code transparency, and zero hidden shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.included.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Included in Scope</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== PROCESS / APPROACH ===================== */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Our 4-Stage Approach for {service.shortTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              A structured execution model ensuring timely milestones and complete visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-brand-500 font-display">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                  Phase {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== WHY CHOOSE ZAVYX FOR THIS SERVICE ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-600" />
                <span>The ZAVYX Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Why Partner With ZAVYX for {service.shortTitle}?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine deep technical rigor with business acumen to deliver systems that don't just look good, but withstand real-world operational pressure.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 transition-all"
                >
                  <span>Request Scoping Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {service.whyChoose.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1.5 pl-7 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SERVICE FAQ ===================== */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              {service.shortTitle} FAQ
            </h2>
            <p className="mt-2 text-slate-600">
              Answers to specific questions regarding {service.title.toLowerCase()}.
            </p>
          </div>

          <FAQAccordion items={service.faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="py-20 bg-white border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Begin?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display">
            Let's Engineer Your {service.shortTitle}
          </h2>
          
          <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
            Submit your requirements to receive a structured quote and architecture roadmap within 24 hours.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/25 transition-all hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
              <span>WhatsApp Us: {companyData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
