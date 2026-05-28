"use client";

import { motion } from "framer-motion";
import { Star, Shield, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Talent } from "@/app/lib/data";

interface TalentCardProps {
  talent: Talent;
  index: number;
}

export default function TalentCard({ talent, index }: TalentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="min-w-[280px] w-[280px] group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 card-glow">
        {/* Image */}
        <div className="relative h-[340px] overflow-hidden">
          <Image
            src={talent.image}
            alt={talent.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {talent.verified && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-nego-red/20 border border-nego-red/30 backdrop-blur-sm">
                <Shield className="w-3 h-3 text-nego-red" />
                <span className="text-[10px] font-semibold text-nego-red">Verified</span>
              </div>
            )}
            {talent.premium && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-semibold text-amber-400">Premium</span>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-white">{talent.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-nego-red transition-colors">
            {talent.name}
          </h3>
          <div className="flex items-center gap-1 text-white/50 text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{talent.location}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {talent.specialties.map((spec) => (
              <span
                key={spec}
                className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px]"
              >
                {spec}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-nego-red font-bold text-sm">{talent.rate}</span>
            <button className="flex items-center gap-1 text-white/50 hover:text-nego-red text-sm font-medium transition-colors group/btn">
              Book Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
