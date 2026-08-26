import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  ShoppingBag, 
  Database, 
  MessageSquare, 
  Bot, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Cloud, 
  Shield, 
  Layers, 
  Zap, 
  PhoneCall, 
  ChevronRight,
  Target,
  Users,
  Award
} from 'lucide-react';
import SEO from '../components/common/SEO';
import InteractiveServiceCard from '../components/common/InteractiveServiceCard';
import FAQAccordion from '../components/common/FAQAccordion';
import HeroBackgroundAnimation from '../components/common/HeroBackgroundAnimation';
import RobotServicesExplorer from '../components/common/RobotServicesExplorer';
import HeroCircularServicesShowcase from '../components/common/HeroCircularServicesShowcase';
import StructuredMilestonesSDLC from '../components/common/StructuredMilestonesSDLC';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function Home() {
  const servicesSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesSectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax upward motion when scrolling past the section
  const scrollCardsY = useTransform(scrollYProgress, [0.35, 1], ['0px', '-35px']);

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

  const topFaqs = companyData.faqs.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const servicesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  // 1st Card: Websites & Web Apps zooms in first, then moves towards backside, and settles in wave motion
  const firstCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.25, 
      y: 40,
    },
    visible: { 
      opacity: 1, 
      scale: [1.25, 0.94, 1.02, 1], 
      y: [40, -8, 2, 0],
      transition: { 
        duration: 0.9, 
        times: [0, 0.45, 0.75, 1],
        ease: 'easeOut',
      } 
    },
  };

  // Subsequent Cards: Wave motion with smooth cascading spring
  const waveCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 45, 
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: [45, -6, 0], 
      scale: [0.9, 1.02, 1],
      transition: { 
        duration: 0.75, 
        ease: 'easeOut',
      } 
    },
  };

  return (
    <div className="subtle-mesh-bg">
      <SEO
        title="Smart Digital Solutions, Websites & AI Automation"
        description="ZAVYX InfoTech builds high-performance websites, custom CRM/ERP software, WhatsApp API integrations, and AI automation systems in Erode, Tamil Nadu."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Industry-Standard Animated Background Suite */}
        <HeroBackgroundAnimation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Hero Typography & CTAs (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Technology Partner for Modern Enterprises</span>
              </div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display"
              >
                Build, Automate, and Scale with <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-600 bg-clip-text text-transparent">Smart Digital Solutions</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
              >
                {companyData.heroSubheadline}
              </motion.p>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow transition-all duration-200"
                >
                  <span>Explore Services (9)</span>
                </Link>
              </motion.div>

            </div>

            {/* Right Column: Hero Services Circular Motion Showcase (5 cols on lg) */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
              <HeroCircularServicesShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* ===================== AI ROBOT SERVICES EXPLORER TICKER (CONTINUOUS HORIZONTAL LOOP) ===================== */}
      <RobotServicesExplorer />

      {/* ===================== SERVICES SHOWCASE (2 CARDS PER ROW ON MOBILE WITH 3D HOVER TEXT REVEAL) ===================== */}
      <section ref={servicesSectionRef} className="py-20 md:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Our Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                Everything You Need to Build, Automate &amp; Scale
              </h2>
              <p className="mt-3 text-slate-600 max-w-xl text-base sm:text-lg">
                Hover on any card to view detailed specifications with 3D folding animations.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 shrink-0 group"
            >
              <span>View All 9 Services in Detail</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid with Wave Motion & Parallax */}
          <motion.div
            variants={servicesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ y: scrollCardsY }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {servicesData.map((service, idx) => {
              const isFirstCard = idx === 0;
              const cardVariant = isFirstCard ? firstCardVariants : waveCardVariants;

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariant}
                  className="w-full"
                >
                  <InteractiveServiceCard service={service} index={idx} />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ===================== SDLC ENGINEERING WORKFLOW LIFECYCLE ===================== */}
      <StructuredMilestonesSDLC />

      {/* ===================== FAQ & CTA SIDE-BY-SIDE SECTION ===================== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Exactly 4 FAQs (6 cols on lg) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Got Questions?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Quick answers on how we build, automate, and partner with growing businesses.
                </p>
              </div>

              {/* 4 Interactive FAQ items */}
              <div className="pt-2">
                <FAQAccordion items={topFaqs} defaultOpenIndex={0} />
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <span>Have a question not listed here? Contact us directly</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: "Ready to Upgrade" CTA Card (6 cols on lg, matching height) */}
            <div className="lg:col-span-6">
              <div className="h-full flex flex-col justify-between p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-50/80 via-white to-accent-50/50 border border-brand-200/90 shadow-xl shadow-brand-500/5 space-y-6">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    <span>Let's Discuss Your Project</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
                    Ready to Upgrade Your Digital Infrastructure?
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Whether you need a custom high-performance website, automated WhatsApp workflows, or enterprise CRM/ERP software, our team at Texvalley Erode is ready to engineer your solution.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700">
                      ⚡ 48-Hour Web Launch
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700">
                      🔒 100% Owned Code
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700">
                      🤝 Direct Tech Support
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200/60">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      to="/start-a-project"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 transition-all hover:scale-105"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={companyData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500">
                    Office at Texvalley, Erode &bull; Fast turnaround &bull; Direct technical consultation
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
