"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const storyEvents = [
  {
    year: "2019",
    title: "First Meeting",
    description: "It all started with a cup of chai on a rainy evening in Kochi. What was meant to be a short meeting turned into hours of endless conversation.",
  },
  {
    year: "2022",
    title: "The Proposal",
    description: "Surrounded by the serene backwaters of Alleppey, under a sky full of stars, he asked the question that changed our lives forever.",
  },
  {
    year: "2026",
    title: "Forever Begins",
    description: "We are tying the knot and starting our forever journey, surrounded by our loved ones and the beautiful traditions of Kerala.",
  }
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-deep-black py-32 px-4 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-10 w-64 h-64 bg-warm-gold/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-glow/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="font-manjari text-4xl md:text-6xl text-warm-gold mb-4">Our Journey</h2>
          <div className="w-24 h-[1px] bg-warm-gold/50 mx-auto" />
        </motion.div>

        <div className="relative border-l border-warm-gold/20 md:border-l-0">
           {/* Center line for desktop */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-warm-gold/20 -translate-x-1/2" />

           {storyEvents.map((event, index) => {
             const isEven = index % 2 === 0;
             return (
               <motion.div 
                 key={event.year}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: index * 0.2 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={`mb-16 md:mb-24 relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center w-full pl-8 md:pl-0`}
               >
                 {/* Timeline Dot */}
                 <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-warm-gold rounded-full md:-translate-x-1.5 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

                 <div className={`md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16 text-left md:text-right"} w-full`}>
                    <motion.div 
                      style={{ y: y1 }}
                      className="glassmorphism p-8 rounded-2xl relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <span className="font-inter text-warm-gold text-xl md:text-2xl font-bold tracking-wider block mb-2">
                        {event.year}
                      </span>
                      <h3 className="font-manjari text-2xl md:text-3xl text-ivory mb-4">
                        {event.title}
                      </h3>
                      <p className="font-inter text-white/70 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                 </div>
               </motion.div>
             )
           })}
        </div>
      </div>
    </section>
  );
}
