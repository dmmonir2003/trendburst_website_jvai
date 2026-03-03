"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * CTA Section - Premium Glassmorphism Design
 * Enhanced with 20% opacity for more prominent glass effect
 * Updated with shadow effects on ambient glows
 * Gradient background styling
 */
export function CTASection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-10">
      {/* Background gradient glows */}
      {/* <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
      </div> */}

      {/* <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/30 blur-[120px]" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/30 blur-[120px]" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* GLASSMORPHIC CARD - Enhanced 20% opacity */}
          <div className="relative bg-linear-to-br from-bg-slate-950/10 to-bg-slate-950/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* INNER GRADIENT ACCENTS - Creates depth within the glass */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />

            {/* Subtle top border glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

            {/* CONTENT CONTAINER */}
            <div className="relative z-10">
              {/* HEADING */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to find your next{" "}
                <span className="inline-block text-[#DF1EEE]">Winning</span>
                <span className="inline-block text-[#5B5DF9]">Product?</span>
              </h2>

              {/* SUBHEADING */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful drop shippers using TrendBurst to
                discover trending Products.
              </p>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-10 py-4 text-lg rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default CTASection;
