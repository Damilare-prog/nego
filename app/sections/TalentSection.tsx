"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { talents } from "@/app/lib/data";
import TalentCard from "@/app/components/TalentCard";
import SkeletonCard from "@/app/components/SkeletonCard";

export default function TalentSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="talent" className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nego-red/5 rounded-full blur-[200px] opacity-0"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12"
        >
          <div>
            <p className="text-nego-red tracking-[0.2em] uppercase text-xs font-medium mb-2">
              Our Collection
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display">
              POPULAR TALENT
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link href="/dashboard/browse">
              <button className="group inline-flex items-center gap-2 bg-nego-red hover:bg-nego-red-dark text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-nego-red/20">
                <span>See All</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide py-4 px-2 -mx-2"
          >
            {loading
              ? [...Array(4)].map((_, i) => <SkeletonCard key={i} index={i} />)
              : talents.map((talent, i) => (
                  <TalentCard key={talent.id} talent={talent} index={i} />
                ))}
          </div>
        </motion.div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
