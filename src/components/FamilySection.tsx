"use client";

import { motion } from "framer-motion";
import data from "@/config/data.json";

export default function FamilySection() {
  return (
    <section className="bg-deep-black py-32 px-4 md:px-12 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-manjari text-4xl md:text-5xl text-warm-gold mb-6">With the Blessings Of</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
            <div className="flex flex-col items-center">
              <span className="font-inter text-white/50 uppercase tracking-widest text-xs mb-2">Bride&apos;s Parents</span>
              <h3 className="font-manjari text-2xl text-ivory">{data.family.brideParents}</h3>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-warm-gold/30" />
            
            <div className="flex flex-col items-center">
              <span className="font-inter text-white/50 uppercase tracking-widest text-xs mb-2">Groom&apos;s Parents</span>
              <h3 className="font-manjari text-2xl text-ivory">{data.family.groomParents}</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
