import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const projects = Array.from({ length: 9 }).map((_, i) => ({
  brand: ['Aroha Foods', 'Kōkako Coffee', 'Harbour', 'Fern Collective'][i % 4],
  role: ['UGC Engine', 'Launch', 'Strategy', 'Content System'][i % 4],
  outcome: ['+210% reach', 'Sold out', '30% lower CPA', '3x saves'][i % 4],
}));

export default function Portfolio() {
  return (
    <div>
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-white/70" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_10px_40px_rgba(242,24,53,0.4)]">Our Work</h1>
            <p className="mt-3 text-white/90 max-w-2xl">Cinematic, strategic, and built to perform.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-[0_30px_100px_-40px_rgba(2,6,23,0.3)]">
                <div className="h-56 bg-gradient-to-br from-zinc-100 to-zinc-200" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#FFE0E5] text-[#F21835] font-semibold">{p.role}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{p.brand}</h3>
                  <p className="text-zinc-600">Outcome: {p.outcome}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
