"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-nego-red font-display mb-4">
          404
        </h1>
        <p className="text-white/60 text-lg mb-8">
          This page is not available in your region.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-nego-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
