"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Star, ArrowUpRight, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { stats } from "@/app/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Star: <Star className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
};

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-nego-red/5 to-black" />
        <motion.div
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-nego-red/10 rounded-full blur-[150px] opacity-0"
        />
        <motion.div
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-nego-red/5 rounded-full blur-[120px] opacity-0"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-nego-red tracking-[0.3em] uppercase text-xs font-medium mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display">
            WHAT IS <span className="text-nego-red">NEGO</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Large Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-2 row-span-2 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-nego-red/30 transition-all duration-700 group"
          >
            <div className="h-full flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
              <div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                  Nego is a premium managed marketplace connecting discerning clients with 
                  verified, elite talent. Our platform operates with complete transparency, 
                  security, and the highest standards of discretion.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Whether you need sophisticated companionship for a corporate event, an elegant 
                  dinner date, or a memorable evening, Nego delivers excellence with unwavering 
                  professionalism and discretion.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-nego-red/10 border border-nego-red/20 hover:bg-nego-red/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-nego-red">{iconMap[stat.icon]}</span>
                    <div>
                      <span className="text-white font-bold text-sm block">{stat.value}</span>
                      <span className="text-white/50 text-[10px]">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 row-span-2 md:row-span-3 relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[200px] md:min-h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop"
              alt="Featured premium selection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4">
              <p className="text-nego-red text-xs font-medium mb-1">Featured</p>
              <p className="text-white font-bold">Premium Selection</p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Small Images */}
          {[
            { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop", label: "Exclusive" },
            { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop", label: "Curated" },
            { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop", label: "Premium" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[150px] md:min-h-[180px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-sm font-bold">{item.label}</p>
              </div>
            </motion.div>
          ))}

          {/* Wide Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="col-span-2 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[150px] md:min-h-[200px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=400&fit=crop"
              alt="Sophisticated elegance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
              <p className="text-nego-red text-xs font-medium mb-1">Sophisticated</p>
              <h3 className="text-white text-lg md:text-xl font-bold">Elegance Redefined</h3>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="col-span-2 md:col-span-1 lg:col-span-2 row-span-1 bg-nego-red/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 border border-nego-red/20 hover:bg-nego-red/20 hover:border-nego-red/40 transition-all duration-500 group cursor-pointer min-h-[120px] md:min-h-[150px] flex flex-col justify-between"
          >
            <div>
              <p className="text-nego-red text-xs font-medium mb-2">Discover</p>
              <h3 className="text-white text-lg md:text-xl font-bold">Explore Collection</h3>
            </div>
            <div className="flex items-center gap-2 text-white group-hover:text-nego-red transition-colors duration-300">
              <span className="text-sm font-medium">View All</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
