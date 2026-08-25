import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import SEO from '../components/common/SEO';
import FAQAccordion from '../components/common/FAQAccordion';
import { companyData } from '../data/companyData';

export default function Contact() {
  return (
    <div className="subtle-mesh-bg">
      <SEO
        title="Contact Us | Erode Office, Phone & WhatsApp"
        description="Get in touch with ZAVYX InfoTech. Visit our office at Texvalley Erode, call +91 63827 21178, chat on WhatsApp, or send us a message."
        canonical="https://zavyx.in/contact"
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-12 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              We're Here to Help You Build &amp; Scale
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              Have questions, need technical support, or want to explore our digital solutions? Reach out directly by phone, WhatsApp, or visit our office.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MAIN CONTACT & RIGHT MAP SECTION ===================== */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: Contact Info Cards (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* WhatsApp Card */}
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-50 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Instant WhatsApp
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    {companyData.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Direct instant messaging with our technical leads.
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${companyData.contact.phoneClean}`}
                className="group p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Call
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    {companyData.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Available Mon – Sat: 9:30 AM – 7:00 PM IST
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="group p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Email
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 break-all">
                    {companyData.contact.email}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We respond to email inquiries within 24 hours.
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Address
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">Fortune City, Texvalley Hub</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-13">
                  #2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India
                </p>
              </div>

            </div>

            {/* Right: Exact Location Google Map matching the same height (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col h-full min-h-[420px] sm:min-h-[480px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-white flex flex-col">
                
                {/* Map Header Banner */}
                <div className="bg-slate-50 px-4 sm:px-5 py-3 border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      Texvalley Hub &bull; NH 544 Chithode, Erode
                    </span>
                  </div>
                  
                  <a
                    href="https://maps.google.com/?q=Texvalley+Erode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:bg-brand-50 transition-colors shadow-xs shrink-0"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Map iframe spanning full container height */}
                <div className="w-full flex-1 relative min-h-[380px] sm:min-h-[440px]">
                  <iframe
                    title="ZAVYX InfoTech Texvalley Location Map"
                    src="https://maps.google.com/maps?q=Texvalley,%20Gangapuram,%20Chithode,%20Erode,%20Tamil%20Nadu%20638102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION (4 QUESTIONS) ===================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Help &amp; Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Quick answers about our consulting process, milestones, and ongoing support.
            </p>
          </div>

          <FAQAccordion items={companyData.faqs.slice(0, 4)} defaultOpenIndex={0} />
        </div>
      </section>

    </div>
  );
}
