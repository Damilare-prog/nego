"use client";

import { motion } from "framer-motion";

interface SkeletonCardProps {
  index: number;
}

export default function SkeletonCard({ index }: SkeletonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="min-w-[280px] w-[280px] bg-white/5 rounded-2xl overflow-hidden border border-white/10"
    >
      <div className="h-[340px] shimmer-bg" />
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 shimmer-bg rounded" />
        <div className="h-4 w-1/2 shimmer-bg rounded" />
        <div className="flex gap-2">
          <div className="h-6 w-20 shimmer-bg rounded-full" />
          <div className="h-6 w-16 shimmer-bg rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}
