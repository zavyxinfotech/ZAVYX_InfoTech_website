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
import HeroBackgroundAnimation from '../components/common/HeroBackgroundAnimation';
import RobotServicesExplorer from '../components/common/RobotServicesExplorer';
import HeroCircularServicesShowcase from '../components/common/HeroCircularServicesShowcase';
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

              {/* Quick Capabilities Highlights Bar */}
              <div className="pt-4 border-t border-slate-200/60 grid grid-cols-3 gap-2 max-w-lg text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">48H Web Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span className="truncate">Meta Cloud APIs</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span className="truncate">Custom ERP / AI</span>
                </div>
              </div>

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

      {/* ===================== ENGAGEMENT WORKFLOW (STEP 1 TO 4) ===================== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-brand-600" />
              <span>How We Partner With You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Structured Milestones From Discovery to Scaling
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Transparent workflows, dedicated engineering milestones, and continuous technical evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We analyze your operations, tech debt, and strategic objectives to engineer a clear execution blueprint.",
              },
              {
                step: "02",
                title: "UI/UX & Prototyping",
                desc: "Interactive wireframes and design systems crafted for high conversion rates and effortless usability.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Clean, modular code built with modern stacks, rigorous testing, and weekly milestone demos.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Zero-downtime deployment, staff onboarding, and continuous proactive system optimization.",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-brand-500 font-display mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Quality Assured</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== CONVERSION CTA BANNER ===================== */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-brand-50/50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-brand-200/80 shadow-xl shadow-brand-500/5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Let's Discuss Your Project</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Ready to Upgrade Your Digital Infrastructure?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Whether you need a custom high-performance website, automated WhatsApp workflows, or enterprise CRM/ERP software, we are ready to partner with you.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 transition-all hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
