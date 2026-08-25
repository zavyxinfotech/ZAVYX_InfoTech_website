import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafcff] text-slate-900 selection:bg-brand-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
