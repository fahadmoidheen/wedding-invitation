"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import data from "@/config/data.json";
import { Volume2, VolumeX, Heart } from "lucide-react";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <footer className="bg-deep-black border-t border-warm-gold/10 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        
        <h2 className="font-manjari text-3xl md:text-4xl text-warm-gold mb-6">
          {data.bride.name} & {data.groom.name}
        </h2>
        
        <div className="flex items-center gap-4 mb-8">
          <p className="font-inter text-white/50 text-sm tracking-widest uppercase">
            {data.wedding.hashtag}
          </p>
        </div>

        <button 
          onClick={toggleAudio}
          className="flex items-center gap-2 glassmorphism px-4 py-2 rounded-full border border-warm-gold/20 text-white/70 hover:text-warm-gold transition-colors mb-12"
        >
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span className="font-inter text-xs tracking-wider uppercase">
            {isPlaying ? "Pause Music" : "Play Music"}
          </span>
        </button>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} loop>
           {/* Placeholder ambient music */}
          <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_29117c093a.mp3?filename=ambient-piano-amp-strings-10711.mp3" type="audio/mpeg" />
        </audio>

        <p className="font-inter text-white/30 text-xs flex items-center gap-2">
          Made with <Heart size={12} className="text-warm-gold" /> for the perfect day
        </p>
      </div>
    </footer>
  );
}
