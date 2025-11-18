import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Contact() {
  const [type, setType] = useState('brand');

  return (
    <div>
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-white/70" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_10px_40px_rgba(242,24,53,0.4)]">Let’s Talk</h1>
            <p className="mt-3 text-white/90 max-w-2xl">Brands and creatives — we’d love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="flex gap-2 p-1 bg-[#FFE0E5] rounded-full w-fit">
              <button onClick={() => setType('brand')} className={`px-4 py-2 rounded-full text-sm font-semibold ${type==='brand' ? 'bg-white' : ''}`}>For Brands</button>
              <button onClick={() => setType('talent')} className={`px-4 py-2 rounded-full text-sm font-semibold ${type==='talent' ? 'bg-white' : ''}`}>For Talent</button>
            </div>
            <p className="text-zinc-600 max-w-md">Tell us a little about your goals. We’ll reply within two business days.</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(2,6,23,0.3)]">
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#F21835]" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#F21835]" placeholder="you@brand.co.nz" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Website (optional)</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#F21835]" placeholder="https://" />
              </div>
              <div>
                <label className="text-sm font-medium">Message / goals</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#F21835]" placeholder="Tell us about your brand and what you need" />
              </div>
              {type === 'talent' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Skills</label>
                    <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none" placeholder="e.g. UGC, editing, strategy" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Availability</label>
                    <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none" placeholder="hours per week" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Links</label>
                    <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none" placeholder="Portfolio, TikTok, IG" />
                  </div>
                </div>
              )}

              <div className="mt-4 flex gap-3">
                <button className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F21835] text-white font-semibold">{type === 'brand' ? 'Send Message' : 'Join the Talent Pool'}</button>
                <button type="button" onClick={() => setType(type === 'brand' ? 'talent' : 'brand')} className="inline-flex items-center px-5 py-2.5 rounded-full border border-zinc-300">{type === 'brand' ? 'Joining talent?' : 'Brand enquiry?'}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
