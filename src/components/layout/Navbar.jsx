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
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/60 py-2.5 sm:py-3'
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

            {/* Desktop Navigation Links (Increased Text Size) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-base lg:text-[17px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-brand-600 bg-brand-50/90 shadow-xs'
                        : 'text-slate-800 hover:text-brand-600 hover:bg-white/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions (Phone Link + CTA Button) */}
            <div className="hidden lg:flex items-center gap-3.5 xl:gap-5">
              <a
                href={`tel:${companyData.contact.phoneClean}`}
                className="flex items-center gap-2 text-sm lg:text-base font-semibold text-slate-800 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-white/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                <span>{companyData.contact.phoneDisplay}</span>
              </a>

              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm lg:text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-brand-200" />
                <span>Get Free Consultation</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-brand-600 shadow-sm"
              >
                Start Project
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-white/80 border border-slate-200/80 text-slate-800 hover:text-brand-600 hover:bg-slate-100 focus:outline-none transition-colors shadow-xs"
                aria-label="Open Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ===================== MOBILE HALF-SCREEN TOP-RIGHT DRAWER ===================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay (dimmed background) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-xs md:hidden"
            />

            {/* Top-Right Half-Width Menu Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-3 right-3 w-[72%] max-w-[270px] z-50 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-4 md:hidden"
            >
              {/* Header with Title & Close Button */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">
                  Navigation
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-brand-600 bg-brand-50'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile Actions */}
                <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`tel:${companyData.contact.phoneClean}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-500" />
                    <span>Call Us</span>
                  </a>

                  <Link
                    to="/start-a-project"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-600 shadow-md shadow-brand-500/25"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
