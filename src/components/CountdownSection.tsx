"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "@/config/data.json";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(data.wedding.date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="bg-[#050505] py-32 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-warm-gold/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h2 className="font-manjari text-3xl md:text-5xl text-ivory mb-12 text-glow">The Countdown Begins</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {timeUnits.map((unit, idx) => (
            <div key={unit.label} className="flex flex-col items-center">
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-warm-gold/30 flex items-center justify-center mb-4 relative"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              >
                 <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="2" />
                    <motion.circle 
                      cx="50%" cy="50%" r="48%" 
                      fill="none" 
                      stroke="#d4af37" 
                      strokeWidth="2"
                      strokeDasharray="300"
                      initial={{ strokeDashoffset: 300 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, delay: idx * 0.2 }}
                    />
                 </svg>
                 <span className="font-manjari text-3xl md:text-5xl text-warm-gold font-bold">
                   {unit.value < 10 ? `0${unit.value}` : unit.value}
                 </span>
              </motion.div>
              <span className="font-inter uppercase tracking-widest text-white/50 text-xs md:text-sm">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
