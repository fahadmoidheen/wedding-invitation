"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";

interface PDFDownloadSectionProps {
  inviteeName: string;
}

export default function PDFDownloadSection({ inviteeName }: PDFDownloadSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    // Mocking PDF generation delay
    setTimeout(() => {
      setIsGenerating(false);
      alert(`Downloaded personalized invitation for ${inviteeName}!`);
    }, 2500);
  };

  return (
    <section className="bg-deep-black py-24 px-4 flex justify-center border-t border-warm-gold/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-inter text-white/50 text-sm tracking-widest uppercase mb-6">Keep a copy</p>
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="relative overflow-hidden group bg-transparent border border-warm-gold/50 text-warm-gold px-8 py-4 rounded-full font-inter tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:bg-warm-gold hover:text-deep-black"
        >
          {isGenerating ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Download size={20} />
          )}
          <span className="font-bold">{isGenerating ? "Generating..." : "Download Invitation"}</span>
        </button>
      </motion.div>
    </section>
  );
}
