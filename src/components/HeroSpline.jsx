import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline({ title, subtitle, ctaPrimary, ctaSecondary }) {
  return (
    <section className="relative h-[84vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_10px_40px_rgba(242,24,53,0.4)]">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-100/90 max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[#F21835] text-white font-semibold shadow-[0_10px_40px_rgba(242,24,53,0.5)] hover:shadow-[0_20px_60px_rgba(242,24,53,0.6)] transition-all">
                {ctaPrimary}
              </a>
              <a href="/services" className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 text-zinc-900 font-semibold hover:bg-white transition-colors">
                {ctaSecondary}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
