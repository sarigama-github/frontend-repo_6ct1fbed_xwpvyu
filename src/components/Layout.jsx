import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: "Let's Talk" },
];

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#F21835] shadow-[0_0_30px_rgba(242,24,53,0.6)]" />
          <span className="text-sm tracking-widest font-semibold text-zinc-900 group-hover:text-[#F21835] transition-colors">MATRIARCH MEDIA</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-700 hover:text-zinc-900'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#F21835] text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(242,24,53,0.7)] hover:shadow-[0_15px_40px_-10px_rgba(242,24,53,0.9)] transition-all">
          Book a Strategy Call
        </NavLink>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-200 bg-[#FFE0E5]">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 rounded-full bg-[#F21835]" />
            <span className="text-sm tracking-widest font-semibold text-zinc-900">MATRIARCH MEDIA</span>
          </div>
          <p className="text-zinc-700 text-sm max-w-sm">Female-led creative marketing studio crafting scroll-stopping stories for purpose-led Kiwi brands.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-zinc-900 mb-2">Pages</p>
          <div className="flex gap-4 text-zinc-700">
            <div className="flex flex-col gap-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/contact">Let's Talk</NavLink>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-zinc-900 mb-2">Contact</p>
          <p className="text-zinc-700">Aotearoa New Zealand</p>
          <p className="text-zinc-700">hello@matriarchmedia.nz</p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-zinc-600">© {new Date().getFullYear()} Matriarch Media. All rights reserved.</div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
