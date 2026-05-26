"use client";

import { motion } from "framer-motion";
import data from "@/config/data.json";

export default function MapSection() {
  return (
    <section className="bg-deep-black py-32 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manjari text-4xl md:text-5xl text-warm-gold mb-4">Venue</h2>
          <p className="font-inter text-white/60 tracking-widest uppercase text-sm">{data.wedding.venue}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glassmorphism p-4 rounded-2xl border border-warm-gold/20 overflow-hidden"
        >
          {/* Simple map placeholder or iframe - keeping it styled */}
          <div className="w-full h-[400px] md:h-[500px] bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-deep-black/60 group-hover:bg-deep-black/20 transition-all duration-700" />
            
            <a 
              href={data.wedding.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 bg-warm-gold text-deep-black font-bold font-inter tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <span>Navigate</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
