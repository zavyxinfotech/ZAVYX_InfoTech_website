import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Database, 
  MessageSquare, 
  Bot, 
  Smartphone, 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  Cloud
} from 'lucide-react';

const services = [
  { title: 'Websites & Web Apps', slug: 'website-design-development', icon: Code2 },
  { title: 'Custom CRM / ERP', slug: 'crm-erp-solutions', icon: Database },
  { title: 'WhatsApp API & Bots', slug: 'whatsapp-api-solutions', icon: MessageSquare },
  { title: 'AI Automation', slug: 'ai-automation-solutions', icon: Bot },
  { title: 'Mobile Apps', slug: 'mobile-app-development', icon: Smartphone },
  { title: 'E-Commerce Stores', slug: 'ecommerce-development', icon: ShoppingBag },
  { title: 'Digital Marketing & SEO', slug: 'digital-marketing', icon: TrendingUp },
  { title: 'Branding & UI/UX', slug: 'branding-creative-design', icon: Palette },
  { title: 'Cloud Hosting & DevOps', slug: 'cloud-hosting-solutions', icon: Cloud },
];

export default function RobotServicesExplorer() {
  // Seamless repeated array for smooth infinite horizontal loop
  const loopServices = [...services, ...services, ...services];

  return (
    <div className="relative w-full overflow-hidden py-5 sm:py-7 select-none">
      
      {/* Ambient background glow - completely borderless and seamless */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[80%] max-w-4xl h-20 bg-gradient-to-r from-brand-300/15 via-accent-300/20 to-brand-400/15 blur-2xl rounded-full" />
      </div>

      {/* Edge gradient masks for seamless fade on left and right */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#fafcff] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#fafcff] to-transparent z-10 pointer-events-none" />

      {/* Main Content Layout: Minimalist Horizontal Services Stream */}
      <div className="w-full relative overflow-hidden flex items-center py-2">
        <div className="flex items-center gap-8 sm:gap-12 animate-autoscroll hover:[animation-play-state:paused] w-max whitespace-nowrap">
          {loopServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={`${service.slug}-${index}`}
                to={`/services/${service.slug}`}
                className="group inline-flex items-center gap-2.5 text-slate-700 hover:text-brand-600 transition-colors focus:outline-none shrink-0"
              >
                {/* Sleek icon indicator */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/90 border border-slate-200/90 shadow-xs flex items-center justify-center text-brand-600 group-hover:bg-brand-50 group-hover:border-brand-300 group-hover:scale-110 transition-all duration-200 shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                
                {/* Service Title */}
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </span>

                {/* Minimal bullet separator */}
                <span className="text-slate-300 ml-4 sm:ml-6 select-none font-light">&bull;</span>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
