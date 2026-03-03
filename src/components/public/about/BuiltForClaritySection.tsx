"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BuiltForClaritySection() {
  return (
    <section className="w-full py-40 px-6 relative overflow-hidden">
      {/* ✅ CORNER GLOWS: Removed negative Z so they stay on top of the section background */}
      {/* Bottom Left Purple Glow */}
      <div
        className="absolute bottom-0 left-0 w-120 pointer-events-none -translate-x-1/3 translate-y-1/3 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Top Right Cyan Glow */}
      <div
        className="absolute top-0 right-0 w-120  pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* ✅ CONTENT WRAPPER: Added relative z-10 to stay above background glows */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* INTERNAL CARD GLOWS: Removed overflow-hidden so they bleed out behind the card */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/30 blur-[120px]" />
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/30 blur-[120px]" />
        </div>

        {/* Main Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black border border-white/5 rounded-[40px] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Built For Clarity
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
              We committed to continues improvement refining our insights and
              expanding our coverage to help you make better, more informed
              decisions every day
            </p>

            {/* Cyan Action Button */}
            <div className="flex justify-center">
              <button className="px-10 py-4 bg-[#00E5FF] hover:bg-cyan-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
