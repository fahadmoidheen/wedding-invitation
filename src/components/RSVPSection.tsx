"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to Firebase/Supabase here
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0a0a0a] py-32 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manjari text-4xl md:text-5xl text-warm-gold mb-4">RSVP</h2>
          <p className="font-inter text-white/60">Kindly respond by August 1st, 2026</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="glassmorphism p-8 md:p-12 rounded-2xl border border-warm-gold/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6 font-inter">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm tracking-widest uppercase">Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-warm-gold/50 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm tracking-widest uppercase">Phone</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-warm-gold/50 outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm tracking-widest uppercase">Will you attend?</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-warm-gold/50 outline-none transition-colors appearance-none">
                    <option value="yes" className="bg-deep-black">Joyfully Accept</option>
                    <option value="no" className="bg-deep-black">Regretfully Decline</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm tracking-widest uppercase">Message for the couple</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-warm-gold/50 outline-none transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-warm-gold text-deep-black font-bold uppercase tracking-widest rounded-lg hover:bg-amber-glow transition-colors transform hover:scale-[1.02] active:scale-[0.98]">
                  Send RSVP
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center glassmorphism p-12 rounded-2xl border border-warm-gold/20 flex flex-col items-center justify-center min-h-[400px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
                className="w-20 h-20 bg-warm-gold/20 rounded-full flex items-center justify-center mb-6"
              >
                <span className="text-4xl">✨</span>
              </motion.div>
              <h3 className="font-manjari text-3xl text-warm-gold mb-4">Thank You!</h3>
              <p className="font-inter text-white/80 text-lg">We can&apos;t wait to celebrate with you.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
