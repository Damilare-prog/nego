"use client";

import { motion } from "framer-motion";
import { Globe, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp, Shield, Lock, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-nego-red/5 rounded-full blur-[150px] opacity-0"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mb-12 pb-12 border-b border-white/5"
        >
          {[
            { icon: <Shield className="w-5 h-5" />, label: "SSL Secured" },
            { icon: <Lock className="w-5 h-5" />, label: "Discreet Billing" },
            { icon: <BadgeCheck className="w-5 h-5" />, label: "Verified Profiles" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
            >
              <span className="text-nego-red/60">{badge.icon}</span>
              <span className="text-sm">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-2 md:col-span-4 lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-display font-black transition-transform duration-300 inline-block group-hover:scale-105">
                <span className="text-white">NEGO</span>
                <span className="text-nego-red">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The premier managed marketplace connecting discerning clients with verified, 
              elite talent. Experience excellence with complete discretion and security.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                Private Updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nego-red/50 transition-colors"
                />
                <button className="bg-nego-red hover:bg-nego-red-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95">
                  Join
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://negoempire.live"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-nego-red hover:border-nego-red/50 hover:bg-nego-red/10 transition-all duration-300 hover:scale-110"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/nego"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-nego-red hover:border-nego-red/50 hover:bg-nego-red/10 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/nego"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-nego-red hover:border-nego-red/50 hover:bg-nego-red/10 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About", "Collection", "Private Content"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/40 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-1 md:col-span-2 lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <nav className="flex flex-col gap-3">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-white/40 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-2 md:col-span-4 lg:col-span-4"
          >
            <h4 className="text-white font-semibold mb-4 text-sm">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:concierge@negoempire.live"
                className="flex items-center gap-3 text-white/50 hover:text-nego-red transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-nego-red/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">concierge@negoempire.live</span>
              </a>
              <a
                href="tel:+2349133588720"
                className="flex items-center gap-3 text-white/50 hover:text-nego-red transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-nego-red/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+234 913 358 8720</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-nego-red text-sm"
            >
              © 2026 Nego. All Rights Reserved.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/50 hover:text-nego-red transition-all duration-300"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-nego-red group-hover:bg-nego-red/10 transition-all duration-300">
                <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
