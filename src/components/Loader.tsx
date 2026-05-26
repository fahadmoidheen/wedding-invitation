"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/config/data.json";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 1000); // Wait a second before finishing
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-black text-warm-gold"
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Placeholder for Kerala Lamp (Nilavilakku) */}
            <div className="w-24 h-32 border border-warm-gold/30 rounded-t-full flex items-center justify-center">
              <span className="text-4xl text-amber-glow animate-pulse">🔥</span>
            </div>
          </motion.div>

          <h1 className="font-manjari text-4xl md:text-6xl font-bold tracking-widest text-glow mb-4">
            {data.bride.name} <span className="text-kerala-cream text-2xl">&amp;</span> {data.groom.name}
          </h1>

          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-6">
            <motion.div
              className="h-full bg-warm-gold"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-4 font-inter text-sm tracking-widest uppercase text-white/50">
            {progress}%
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
