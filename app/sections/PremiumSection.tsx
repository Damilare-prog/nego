"use client";

import { motion } from "framer-motion";
import { Crown, Star, Shield, Zap, Check, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    description: "Browse and explore",
    features: [
      "View public profiles",
      "Basic search filters",
      "Email support",
      "Standard booking",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₦50,000",
    period: "/month",
    description: "Full access experience",
    features: [
      "All Basic features",
      "Private galleries access",
      "Priority booking",
      "Verified contact info",
      "24/7 WhatsApp support",
      "Discreet billing",
    ],
    cta: "Get Premium",
    highlighted: true,
  },
  {
    name: "VIP",
    price: "₦150,000",
    period: "/month",
    description: "White-glove service",
    features: [
      "All Premium features",
      "Personal concierge",
      "Custom arrangements",
      "First access to new talent",
      "Event planning assistance",
      "Dedicated account manager",
    ],
    cta: "Join VIP",
    highlighted: false,
  },
];

export default function PremiumSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="premium" className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-nego-red/10 rounded-full blur-[150px] opacity-0"
        />
        <motion.div
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-nego-red/10 to-transparent opacity-0"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-nego-red/80 tracking-[0.3em] uppercase text-xs font-medium mb-4">
              Get Premium Account
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 font-display">
              UNLOCK ALL
              <br />
              PRIVATE CONTENT
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Get exclusive access to premium profiles, private galleries, and priority booking. 
              Premium members enjoy verified talent content, dedicated support, and an elevated 
              experience tailored to your preferences.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <Crown className="w-4 h-4" />, label: "Priority Access" },
                { icon: <Star className="w-4 h-4" />, label: "Exclusive Content" },
                { icon: <Shield className="w-4 h-4" />, label: "VIP Support" },
                { icon: <Zap className="w-4 h-4" />, label: "Instant Booking" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-nego-red/30 hover:bg-nego-red/10 transition-all duration-500 cursor-pointer"
                >
                  <span className="text-nego-red">{item.icon}</span>
                  <span className="text-white text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link href="/register">
                <button className="group inline-flex items-center gap-2 bg-nego-red hover:bg-nego-red-dark text-white font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-nego-red/30 hover:shadow-nego-red/50">
                  <span>Get Premium Access</span>
                  <Crown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Preview Image with Lock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop"
                  alt="Premium preview"
                  fill
                  className="object-cover blur-sm brightness-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Lock Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-nego-red/20 border border-nego-red/30 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Lock className="w-10 h-10 text-nego-red" />
                  </div>
                  <p className="text-white font-bold text-xl mb-2">Premium Content</p>
                  <p className="text-white/50 text-sm mb-6">Unlock with Premium membership</p>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-nego-red/20 border border-nego-red/30">
                    <Crown className="w-4 h-4 text-nego-red" />
                    <span className="text-nego-red text-sm font-semibold">Upgrade to Unlock</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-nego-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-nego-red/30"
            >
              Most Popular
            </motion.div>
          </motion.div>
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
              Choose Your Experience
            </h3>
            <p className="text-white/50">Flexible plans designed for your lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`relative rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:scale-105 ${
                  tier.highlighted
                    ? "bg-nego-red/10 border-nego-red/30 shadow-lg shadow-nego-red/10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nego-red text-white px-4 py-1 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-white font-bold text-lg mb-1">{tier.name}</h4>
                  <p className="text-white/50 text-sm">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  {tier.period && (
                    <span className="text-white/50 text-sm">{tier.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className={`w-4 h-4 ${tier.highlighted ? "text-nego-red" : "text-white/40"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/register">
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                      tier.highlighted
                        ? "bg-nego-red hover:bg-nego-red-dark text-white shadow-lg shadow-nego-red/20"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
