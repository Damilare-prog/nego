"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle } from "lucide-react";

export default function AgeGate() {
  const [showGate, setShowGate] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("nego-age-verified");
    if (!isVerified) {
      setShowGate(true);
    } else {
      setVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("nego-age-verified", "true");
    setVerified(true);
    setShowGate(false);
  };

  const handleLeave = () => {
    window.location.href = "https://google.com";
  };

  if (verified) return null;

  return (
    <AnimatePresence>
      {showGate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-md w-full"
          >
            <div className="w-16 h-16 rounded-full bg-nego-red/10 border border-nego-red/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-nego-red" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3 font-display">
              Adults Only
            </h2>
            <p className="text-white/60 mb-2 leading-relaxed">
              This site contains content suitable only for adults aged 18 and older.
            </p>
            <div className="flex items-center justify-center gap-2 text-nego-red/80 text-sm mb-8">
              <AlertTriangle className="w-4 h-4" />
              <span>By entering, you confirm you are of legal age</span>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleVerify}
                className="bg-nego-red hover:bg-nego-red-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-nego-red/20"
              >
                I am 18+
              </button>
              <button
                onClick={handleLeave}
                className="border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Leave
              </button>
            </div>
            <p className="text-white/30 text-xs mt-6">
              All content is for entertainment purposes only. Discretion advised.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
