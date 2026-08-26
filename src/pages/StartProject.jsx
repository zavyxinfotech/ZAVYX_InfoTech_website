import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Layers, 
  DollarSign, 
  Calendar, 
  Building, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

export default function StartProject() {
  const [selectedServices, setSelectedServices] = useState(['website-design-development']);
  const [selectedBudget, setSelectedBudget] = useState('₹50,000 – ₹1,50,000');
  const [selectedTimeline, setSelectedTimeline] = useState('1–2 Weeks');
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    'Under ₹50,000',
    '₹50,000 – ₹1,50,000',
    '₹1,50,000 – ₹3,00,000',
    '₹3,00,000 – ₹5,00,000+',
    'Flexible / Seeking Quote'
  ];

  const timelineOptions = [
    '1–2 Weeks',
    '2–4 Weeks',
    '1–2 Months',
    'Flexible / Milestone-Based'
  ];

  const toggleService = (slug) => {
    setSelectedServices(prev => {
      if (prev.includes(slug)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter(s => s !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone/WhatsApp number';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief summary of your project goals';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="subtle-mesh-bg">
      <SEO
        title="Start a Project | Guided Project Intake & Free Consultation"
        description="Tell us about your project. Choose from our 9 digital services, set your budget & timeline, and receive a structured architecture roadmap from ZAVYX InfoTech."
        canonical="https://zavyx.in/start-a-project"
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          <span>Guided Client Intake</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
          Tell Us About Your Project
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Select the services you need, outline your budget and timeline, and our technical leads will structure an actionable project roadmap for your review.
        </p>
      </section>

      {/* ===================== INTAKE FORM CONTAINER ===================== */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-10 md:p-12">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/25">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 font-display">
                    Project Brief Received!
                  </h2>

                  <p className="text-slate-600 max-w-lg mx-auto text-base leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our technical architecture team is reviewing your selected services and project requirements. We will contact you at <span className="font-semibold text-slate-900">{formData.email}</span> / <span className="font-semibold text-slate-900">{formData.phone}</span> within 24 business hours with an initial roadmap.
                  </p>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                      Selected Scope Overview:
                    </div>
                    <div className="text-slate-600">
                      <span className="font-semibold text-slate-800">Services:</span>{' '}
                      {selectedServices.map(s => servicesData.find(x => x.slug === s)?.shortTitle).join(', ')}
                    </div>
                    <div className="text-slate-600">
                      <span className="font-semibold text-slate-800">Budget Range:</span> {selectedBudget}
                    </div>
                    <div className="text-slate-600">
                      <span className="font-semibold text-slate-800">Timeline:</span> {selectedTimeline}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={companyData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      <span>Direct WhatsApp Follow-up</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                  
                  {/* Step 1: Select Services (Multi-select) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 text-xs font-bold flex items-center justify-center">
                        01
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Which service(s) are you interested in? <span className="text-xs font-normal text-slate-500">(Select all that apply)</span>
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                      {servicesData.map((service) => {
                        const isSelected = selectedServices.includes(service.slug);
                        return (
                          <button
                            type="button"
                            key={service.slug}
                            onClick={() => toggleService(service.slug)}
                            className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                              isSelected
                                ? 'bg-brand-50/80 border-brand-500 text-brand-900 shadow-sm ring-1 ring-brand-500'
                                : 'bg-slate-50/50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span>{service.shortTitle}</span>
                            {isSelected ? (
                              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                            ) : (
                              <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0"></span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Estimated Budget */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 text-xs font-bold flex items-center justify-center">
                        02
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Estimated Budget Range
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setSelectedBudget(opt)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            selectedBudget === opt
                              ? 'bg-brand-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Estimated Timeline */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 text-xs font-bold flex items-center justify-center">
                        03
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Target Launch Timeline
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {timelineOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setSelectedTimeline(opt)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            selectedTimeline === opt
                              ? 'bg-brand-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact & Project Specifics */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 text-xs font-bold flex items-center justify-center">
                        04
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Your Contact & Project Details
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Chandran"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.name 
                              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                              : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-slate-50/40'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. TexFab Global"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 bg-slate-50/40 text-sm transition-all focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ramesh@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.email 
                              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                              : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-slate-50/40'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98427 00000"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.phone 
                              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                              : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-slate-50/40'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Brief & Requirements <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Describe your current challenge, required features, existing systems to integrate, or specific goals..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.projectDetails 
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                            : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-slate-50/40'
                        }`}
                      />
                      {errors.projectDetails && <p className="text-xs text-rose-500 mt-1">{errors.projectDetails}</p>}
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Confidentiality Guaranteed &bull; Zero Spam</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 transition-all hover:scale-105 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

    </div>
  );
}
