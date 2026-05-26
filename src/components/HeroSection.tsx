"use client";

import { motion } from "framer-motion";
import data from "@/config/data.json";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background with Parallax (simplified for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/80 to-deep-black z-10" />
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=3000&auto=format&fit=crop')" }} 
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter text-warm-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          We Invite You To Celebrate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <h1 className="font-manjari text-6xl md:text-8xl lg:text-9xl font-bold text-glow text-ivory">
            {data.bride.name}
          </h1>
          <span className="font-manjari text-4xl md:text-6xl text-warm-gold opacity-80">&</span>
          <h1 className="font-manjari text-6xl md:text-8xl lg:text-9xl font-bold text-glow text-ivory">
            {data.groom.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <p className="font-inter text-lg md:text-xl text-white/80 tracking-widest uppercase">
            {new Date(data.wedding.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="font-inter text-sm md:text-base text-warm-gold/80 tracking-wider">
            {data.wedding.venue}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-inter uppercase tracking-widest">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-warm-gold to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
