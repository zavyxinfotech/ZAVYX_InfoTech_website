import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <SEO
        title="404 - Page Not Found | ZAVYX InfoTech"
        description="The page you are looking for does not exist or has moved."
      />

      <div className="max-w-md space-y-6">
        <span className="text-6xl font-extrabold text-brand-600 font-display">404</span>
        <h1 className="text-3xl font-bold text-slate-900 font-display">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The requested URL was not found on this server. Explore our services or navigate back to our homepage.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
