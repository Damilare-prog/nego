"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, Wallet, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Toggle for demo

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#talent", label: "Collection" },
    { href: "#premium", label: "Private Content" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-display font-black transition-all duration-300 group-hover:scale-105">
              <span className="text-white">NEGO</span>
              <span className="text-nego-red transition-all duration-300 group-hover:animate-pulse">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 group nav-link-underline ${
                  i === 0 ? "active" : ""
                }`}
              >
                <span
                  className={`transition-colors duration-300 text-sm font-medium ${
                    i === 0 ? "text-white" : "text-white/50 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-nego-red/20 border border-nego-red/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-nego-red" />
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                      <div className="py-2">
                        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                          <User className="w-4 h-4" /> Dashboard
                        </Link>
                        <Link href="/wallet" className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                          <Wallet className="w-4 h-4" /> Wallet
                        </Link>
                        <Link href="/settings" className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                          <Settings className="w-4 h-4" /> Settings
                        </Link>
                        <div className="border-t border-white/10 my-1" />
                        <button className="flex items-center gap-3 px-4 py-2.5 text-nego-red hover:text-nego-red-dark hover:bg-nego-red/5 transition-colors w-full">
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-nego-red hover:bg-nego-red-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Join
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white transition-transform duration-300 hover:scale-110"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col py-4 border-t border-white/5 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.075 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 py-4 mt-2 border-t border-white/10 space-y-3">
                  <Link href="/login" className="block text-white/70 hover:text-white py-2">
                    Sign In
                  </Link>
                  <Link href="/register" className="block text-nego-red font-medium py-2">
                    Join Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
