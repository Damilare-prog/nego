"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides } from "@/app/lib/data";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide]}
              alt={`Hero slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-nego-red/5 mix-blend-overlay" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-nego-red/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center z-10 w-full max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-nego-red tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-4 md:mb-6"
          >
            Curated Companions for Discerning Clients
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[clamp(2.5rem,8vw,7rem)] font-black text-white leading-[0.95] tracking-tight mb-6 md:mb-8 font-display"
          >
            <span className="block">Arrangements,</span>
            <span className="block text-white/90">Perfected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-md md:max-w-xl mx-auto leading-relaxed mb-8 md:mb-10"
          >
            A private member network connecting discerning clients with verified, 
            elite talent. Refined, sophisticated, and unforgettable experiences await.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Link href="/dashboard">
              <button className="group relative inline-flex items-center justify-center bg-nego-red hover:bg-transparent text-white font-bold px-10 md:px-12 py-5 md:py-6 rounded-full text-sm md:text-base border-2 border-nego-red overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-nego-red/20 hover:shadow-nego-red/40">
                <span className="relative flex items-center gap-3">
                  <span className="text-white group-hover:text-nego-red transition-colors duration-300">
                    Get Started
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-nego-red/20 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-white group-hover:text-nego-red transition-all duration-300 group-hover:rotate-12" />
                  </span>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Slide Counter */}
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-lg">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <div className="w-20 md:w-32 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-nego-red rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-white/40 text-sm">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          <div className="hidden sm:flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 hover:bg-nego-red/70 focus:outline-none focus:ring-2 focus:ring-nego-red focus:ring-offset-2 focus:ring-offset-black ${
                  i === currentSlide ? "bg-nego-red w-8" : "bg-white/20 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-nego-red/50 transition-all duration-300 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white bg-nego-red/20 hover:bg-nego-red/40 hover:border-nego-red transition-all duration-300 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase hidden sm:block">
          Scroll
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-nego-red rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
