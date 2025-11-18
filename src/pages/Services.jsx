import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const services = [
  {
    title: 'Social Media Management',
    who: 'Growing Kiwi brands who want consistent, strategic content without the guesswork.',
    includes: ['Monthly strategy and pillars', 'Content calendar + posting', 'Community management', 'Performance reporting'],
  },
  {
    title: 'UGC Content Creation',
    who: 'Brands who need authentic, high-performing short video at scale.',
    includes: ['Talent sourcing + briefs', 'Shoot direction + product styling', 'Editing for Reels/TikTok', 'Hooks, cutdowns, carousels'],
  },
  {
    title: 'Brand Story & Messaging',
    who: 'Teams who need clear language that resonates and sells.',
    includes: ['Brand narrative + voice', 'Messaging framework', 'Website + social copy', 'Launch communications'],
  },
  {
    title: 'Campaign Strategy',
    who: 'Launches and moments that need momentum and measurable outcomes.',
    includes: ['Concept + creative direction', 'Influencer/UGC plan', 'Asset production', 'Measurement + iteration'],
  },
  {
    title: 'Digital Marketing Support',
    who: 'Leaders who want flexible, senior support across channels.',
    includes: ['Email marketing', 'Paid social coordination', 'Analytics + dashboards', 'Team training'],
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-white/70" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_10px_40px_rgba(242,24,53,0.4)]">Services</h1>
            <p className="mt-3 text-white/90 max-w-2xl">Strategy, content, and support that drives outcomes — not just activity.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(2,6,23,0.3)]">
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-zinc-600">{s.who}</p>
              <ul className="mt-6 space-y-2 text-zinc-700">
                {s.includes.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F21835] text-white font-semibold">Book a Strategy Call</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#FFE0E5]">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold">FAQ</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-white/60">
              <p className="font-semibold">How do we start?</p>
              <p className="text-zinc-600 mt-2">We begin with a free strategy call to understand goals, budget, and timelines. Then we propose the right mix.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/60">
              <p className="font-semibold">Do you work with small teams?</p>
              <p className="text-zinc-600 mt-2">Yes. We love founders and lean teams. Our systems keep things clear and efficient.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/60">
              <p className="font-semibold">Where are you based?</p>
              <p className="text-zinc-600 mt-2">Aotearoa New Zealand. We work remotely and on-set across the country.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/60">
              <p className="font-semibold">Pricing?</p>
              <p className="text-zinc-600 mt-2">Project-based or retainer. We’ll recommend a structure that suits your stage and goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
