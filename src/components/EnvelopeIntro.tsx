"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/config/data.json";

interface EnvelopeIntroProps {
  inviteeName: string;
  onOpen: () => void;
}

export default function EnvelopeIntro({ inviteeName, onOpen }: EnvelopeIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      rotate: Math.random() * 360,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsHidden(true);
      setTimeout(onOpen, 500);
    }, 2000); // 2 seconds animation before hiding
  };

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-30 flex items-center justify-center bg-deep-black overflow-hidden perspective-[1000px]"
        >
          {/* Ambient Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{
                  y: "100vh",
                  x: `${p.x}vw`,
                  opacity: 0,
                  scale: p.scale,
                }}
                animate={{
                  y: "-10vh",
                  opacity: [0, 1, 0],
                  rotate: p.rotate,
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: p.delay,
                }}
                className="absolute w-4 h-4 bg-warm-gold/40 rounded-full blur-[2px]"
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0, rotateX: 10 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative cursor-pointer"
            onClick={!isOpen ? handleOpen : undefined}
          >
            {/* The Envelope */}
            <div className="relative w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-kerala-cream shadow-2xl rounded-sm">
              
              {/* Back flap */}
              <div className="absolute inset-0 bg-[#e8e4c9] rounded-sm flex items-center justify-center border border-warm-gold/20">
                 {/* Wax Seal Area */}
                 <div className="w-16 h-16 rounded-full bg-red-800 shadow-inner flex items-center justify-center z-10">
                   <span className="text-warm-gold font-manjari text-2xl font-bold">A</span>
                 </div>
              </div>

              {/* Top Flap */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[100px] md:h-[150px] bg-kerala-cream origin-top z-20 border-b border-warm-gold/20 drop-shadow-md"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpen ? -180 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              {/* Bottom Flap */}
              <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[200px] bg-[#f5f5dc] z-30"
                   style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 30%, 0 0)" }}>
                <div className="w-full h-full border-t border-warm-gold/10" />
              </div>

              {/* Side Flaps */}
              <div className="absolute top-0 left-0 w-full h-full z-20">
                 <div className="absolute left-0 top-0 w-1/2 h-full bg-[#f0ebd5]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
                 <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f0ebd5]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }} />
              </div>

              {/* The Card Inside */}
              <motion.div
                className="absolute inset-x-4 top-4 bottom-4 bg-ivory shadow-lg z-10 flex flex-col items-center justify-center text-center p-4 border border-warm-gold/30 rounded-sm"
                initial={{ y: 0, opacity: 1 }}
                animate={{ 
                  y: isOpen ? -150 : 0, 
                  opacity: isOpen ? [1, 1, 0] : 1,
                  scale: isOpen ? 1.2 : 1
                }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <h3 className="font-manjari text-warm-gold text-lg md:text-xl font-bold mb-2">
                  {data.bride.name} & {data.groom.name}
                </h3>
                <p className="font-inter text-xs md:text-sm text-gray-700">Invite you to their wedding</p>
              </motion.div>
            </div>

            {!isOpen && (
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center mt-8 text-warm-gold/70 font-inter text-sm tracking-widest uppercase"
              >
                Tap to Open
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
