import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { companyData } from '../../data/companyData';
import logoImg from '../../assets/logo/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar transparent until the hero section ends on Home page
      const threshold = location.pathname === '/' ? 480 : 50;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-slate-200/60 py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-4.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 focus:outline-none group">
              <img
                src={logoImg}
                alt="ZAVYX InfoTech Logo"
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ZAVYX_logo.png';
                }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-brand-600 bg-brand-50/90 font-semibold shadow-xs'
                        : 'text-slate-700 hover:text-brand-600 hover:bg-white/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions (Phone Link + CTA Button) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a
                href={`tel:${companyData.contact.phoneClean}`}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-white/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                <span>{companyData.contact.phoneDisplay}</span>
              </a>

              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-brand-200" />
                <span>Get Free Consultation</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-brand-600 shadow-sm"
              >
                Start Project
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white/80 border border-slate-200/80 text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none transition-colors shadow-xs"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-brand-600 bg-brand-50 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`tel:${companyData.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-brand-500" />
                  <span>Call: {companyData.contact.phoneDisplay}</span>
                </a>

                <Link
                  to="/start-a-project"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-brand-600 shadow-md shadow-brand-500/25"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
