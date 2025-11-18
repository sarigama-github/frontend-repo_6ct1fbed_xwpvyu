import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Users2, Star, Camera, PenTool } from 'lucide-react';

export function TrustStrip() {
  const brands = ['NZ Post', 'Kōkako', 'WhānauCare', 'Harbour', 'Fern Collective', 'Aroha Foods'];
  return (
    <section className="bg-[#FFE0E5]">
      <div className="mx-auto max-w-7xl px-6 py-10 overflow-hidden">
        <p className="text-xs tracking-widest text-zinc-700/70 uppercase mb-4">Trusted by purpose-led Kiwi brands</p>
        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-10 whitespace-nowrap text-zinc-800/80 text-sm font-medium"
          >
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white/70 border border-white/60 shadow-sm">
                {b}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-[#FFE0E5] via-transparent to-[#FFE0E5]" />
        </div>
      </div>
    </section>
  );
}

export function CoreServicesPreview() {
  const items = [
    { icon: <Camera className="h-5 w-5" />, title: 'Organic Social Strategy', text: 'Build a system that grows with you. Clear pillars, calendar, and creative direction.' },
    { icon: <Play className="h-5 w-5" />, title: 'UGC Content Engine', text: 'High-performing short video at scale. Shot by real women for real audiences.' },
    { icon: <PenTool className="h-5 w-5" />, title: 'Digital Marketing Support', text: 'Campaigns, email, paid social coordination. Flexible support when you need it.' },
  ];
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(242,24,53,0.08),transparent_60%),radial-gradient(700px_circle_at_80%_50%,rgba(242,24,53,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">Make content people feel.</h2>
          <p className="mt-4 text-zinc-600">Strategy first. Systems over guesses. Creative that earns attention and trust.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.08)] hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#FFE0E5] text-[#F21835]">{it.icon}</div>
                <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-[#F21835] transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-zinc-600">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UGCEngine() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#FFF2F4] to-white" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE0E5] text-[#F21835] text-xs font-semibold"><Sparkles className="h-3 w-3" /> Signature System</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">The UGC Engine</h2>
            <p className="mt-4 text-zinc-600">A lightweight production system that turns one shoot day into a month of high-performing social content. Optimised for Reels and TikTok. Built for brand safety and speed.</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>• Pre-production strategy and shot list</li>
              <li>• Talent sourcing from our women-led network</li>
              <li>• On-set direction and product styling</li>
              <li>• Delivery: hooks, shorts, carousels, cutdowns</li>
              <li>• Performance dashboard and monthly iteration</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="/services" className="inline-flex items-center px-5 py-3 rounded-full bg-[#F21835] text-white font-semibold shadow-[0_10px_30px_rgba(242,24,53,0.4)]">See how it works</a>
              <a href="/portfolio" className="inline-flex items-center px-5 py-3 rounded-full border border-zinc-300 bg-white text-zinc-900 font-semibold">View results</a>
            </div>
          </div>
          <div className="relative">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-80 rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-[0_30px_100px_-40px_rgba(2,6,23,0.3)]">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
                {[...Array(9)].map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl bg-zinc-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute -right-6 -bottom-6 w-40 h-40 rounded-3xl bg-[#F21835] blur-2xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyStrip() {
  const cases = [
    { brand: 'Aroha Foods', outcome: '+210% reach, 3x saves', tag: 'Content System' },
    { brand: 'Kōkako Coffee', outcome: 'Sold-out seasonal drop', tag: 'Launch' },
    { brand: 'Fern Collective', outcome: '30% lower CPA', tag: 'UGC + Paid' },
    { brand: 'Harbour', outcome: 'Brand refresh traction', tag: 'Strategy' },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.a href="/portfolio" key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-[#FFE0E5] text-[#F21835] font-semibold">{c.tag}</span>
                <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-[#F21835]" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold">{c.brand}</h3>
              <p className="mt-2 text-zinc-600">{c.outcome}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmotionalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_600px_at_50%_50%,rgba(242,24,53,0.12),transparent_70%)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Your brand deserves more than random posts.</h3>
        <p className="mt-4 text-zinc-600">Let’s build a content system that sells with empathy and story.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[#F21835] text-white font-semibold shadow-[0_10px_40px_rgba(242,24,53,0.5)]">Book a strategy call</a>
        </div>
      </div>
    </section>
  );
}

export function AboutMission() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-semibold">Female-led. Rooted in Aotearoa.</h3>
          <p className="mt-3 text-zinc-600">We craft honest, high-performing content for Kiwi brands who care. Strategy, creativity, and a network of talented mums returning to their craft.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Built for mums returning to work.</h3>
          <p className="mt-3 text-zinc-600">Flexible projects. Respect for the juggle. Real pathways back into meaningful marketing work.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Courses & workshops.</h3>
          <p className="mt-3 text-zinc-600">Practical sessions on content, strategy, and UGC. Designed for women rebuilding confidence and momentum.</p>
        </div>
      </div>
    </section>
  );
}

export function TalentPool() {
  return (
    <section className="py-20 bg-[#FFF6F7]">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.div initial={{ rotate: -2, y: 20, opacity: 0 }} whileInView={{ rotate: 0, y: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_30px_100px_-40px_rgba(2,6,23,0.3)]">
            <h4 className="text-xl font-semibold">Jobs for mums returning to work</h4>
            <p className="mt-2 text-zinc-600">Join our talent pool for flexible creative work — from content to strategy. We match by strengths and season of life.</p>
            <a href="/contact" className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-[#F21835] text-white font-semibold">Join the talent pool</a>
          </motion.div>
          <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -right-6 -bottom-6 w-36 h-36 rounded-3xl bg-[#F21835] blur-2xl opacity-20" />
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Creative women, powerful work.</h3>
          <p className="mt-4 text-zinc-600">We champion flexible, expert-led teams. The result: content that feels like your brand and moves your numbers.</p>
          <div className="mt-6 flex gap-4 text-sm">
            <div className="px-3 py-2 rounded-full bg-white border border-zinc-200">Strategists</div>
            <div className="px-3 py-2 rounded-full bg-white border border-zinc-200">UGC Creators</div>
            <div className="px-3 py-2 rounded-full bg-white border border-zinc-200">Editors</div>
            <div className="px-3 py-2 rounded-full bg-white border border-zinc-200">Designers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoursesWorkshops() {
  const items = [
    { title: 'Reels that Sell', date: 'Cohort opening soon', cta: 'Join waitlist' },
    { title: 'UGC for Brands', date: 'Workshop • Auckland', cta: 'Reserve seat' },
    { title: 'Back-to-Work Confidence', date: 'Free mini course', cta: 'Get access' },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h3 className="text-3xl font-bold">Courses & Workshops</h3>
          <p className="text-zinc-600 mt-2">Practical, warm, no fluff. Built for action.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.08)]">
              <h4 className="text-xl font-semibold">{it.title}</h4>
              <p className="mt-2 text-zinc-600">{it.date}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-[#F21835] text-white font-semibold">{it.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    { name: 'Sophie, Founder', text: 'They made our brand feel alive. Results from week one.' },
    { name: 'Mere, Marketing Lead', text: 'Warm, sharp, organised. The UGC engine changed our socials.' },
    { name: 'Hana, Director', text: 'Strategy that fits our values and drives sales. Dream team.' },
  ];
  return (
    <section className="py-20 bg-[#FFE0E5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white p-6 border border-white/60 shadow-sm">
              <Star className="h-5 w-5 text-[#F21835]" />
              <p className="mt-4 text-zinc-700">“{q.text}”</p>
              <p className="mt-2 text-sm text-zinc-500">{q.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 text-center">
      <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Grow your brand. Support your next chapter.</h3>
      <div className="mt-8">
        <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[#F21835] text-white font-semibold">Let’s talk</a>
      </div>
    </section>
  );
}
