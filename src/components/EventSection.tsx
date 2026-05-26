"use client";

import { motion } from "framer-motion";
import data from "@/config/data.json";

export default function EventSection() {
  return (
    <section className="min-h-screen bg-[#080808] py-32 px-4 md:px-12 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="font-manjari text-4xl md:text-6xl text-warm-gold mb-4">Wedding Events</h2>
          <p className="font-inter text-white/60 uppercase tracking-[0.2em] text-sm">Join us in our celebrations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glassmorphism rounded-2xl p-8 relative group overflow-hidden border-t border-warm-gold/20"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warm-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <h3 className="font-manjari text-3xl text-ivory mb-2">{event.title}</h3>
              <div className="h-px w-12 bg-warm-gold/50 mb-6" />
              
              <div className="space-y-4 font-inter">
                <div className="flex items-start gap-3">
                  <span className="text-warm-gold">📅</span>
                  <div>
                    <p className="text-white/90">{event.date}</p>
                    <p className="text-white/60 text-sm">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-warm-gold">📍</span>
                  <p className="text-white/80">{event.venue}</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-warm-gold">👗</span>
                  <p className="text-white/80">{event.dressCode}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
