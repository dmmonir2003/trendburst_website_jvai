"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Zap } from "lucide-react";

// Importing the 3D asset used in your other sections

const features = [
  {
    icon: TrendingUp,
    label: "Trend Analysis",
    color: "cyan",
    shadow: "rgba(0, 209, 255, 0.5)",
  },
  {
    icon: BarChart3,
    label: "Visual insights",
    color: "purple",
    shadow: "rgba(171, 71, 188, 0.5)",
  },
  {
    icon: Zap,
    label: "Real-Time Data",
    color: "blue",
    shadow: "rgba(91, 93, 249, 0.5)",
  },
];

export default function AboutHero() {
  return (
    <section className="relative w-full py-30 flex flex-col items-center justify-center  overflow-hidden  text-center">
      {/* Permanent Background Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 234, 255, 0.4) 0%, transparent 90%)",
        }}
      />

      {/* Main Content Container: Added items-center and text-center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 ">
          Empowering Smarter{" "}
          <span className="bg-gradient-to-r from-[#AB47BC] to-[#7B1FA2] bg-clip-text text-transparent">
            Market Decisions
          </span>
        </h1>

        {/* Paragraph: Added mx-auto to center max-width container */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 mx-auto">
          We transform complex marketplace data into clear, actionable insights
          helping you understand trends, pricing patterns, and platform
          performance with confidence.
        </p>

        {/* Value Pillars: Added justify-center */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor:
                    item.color === "cyan"
                      ? "#00D1FF"
                      : item.color === "purple"
                        ? "#AB47BC"
                        : "#5B5DF9",
                  boxShadow: `0 0 15px ${item.shadow}`,
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
