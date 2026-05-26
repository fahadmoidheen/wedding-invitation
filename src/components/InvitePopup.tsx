"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InvitePopupProps {
  onNameSubmit: (name: string) => void;
}

export default function InvitePopup({ onNameSubmit }: InvitePopupProps) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onNameSubmit(name.trim());
      }, 800);
    }
  };

  return (
    <AnimatePresence>
      {!submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-deep-black/80 backdrop-blur-lg"
        >
          <div className="glassmorphism p-8 md:p-12 rounded-2xl max-w-md w-full mx-4 text-center border-warm-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/5 to-transparent pointer-events-none" />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-manjari text-3xl mb-2 text-warm-gold">Welcome</h2>
              <p className="text-white/70 font-inter mb-8">Please enter your name to view the invitation</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center text-white focus:outline-none focus:border-warm-gold/50 transition-colors font-inter"
                  required
                />
                <button
                  type="submit"
                  className="bg-warm-gold/90 hover:bg-warm-gold text-deep-black font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 tracking-wide font-inter uppercase text-sm mt-2"
                >
                  Open Invitation
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
