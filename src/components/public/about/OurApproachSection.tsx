"use client";

import React from "react";
import { motion } from "framer-motion";

const approaches = [
  {
    title: "Simplicity Over Noise",
    description:
      "we filter out the clutter to deliver only what matters for your decisions",
  },
  {
    title: "Insight Over Raw Data",
    description:
      "Transform analytics that tell a story, not just numbers on a screen",
  },
  {
    title: "Transparency Over Assumptions",
    description: "Clear methodology and honest reporting you can trust",
  },
];

export default function OurApproachSection() {
  return (
    <section className="w-full py-24  px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#AB47BC] bg-clip-text text-transparent">
              Approach
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            The philosophy that guide every decision we make in building this
            platform
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-[#00D1FF]/30" />

          <div className="space-y-12">
            {approaches.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-center gap-8 md:gap-12 pl-12 md:pl-16"
              >
                {/* Glowing Marker Pillar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Outer Neon Ring */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#00D1FF] bg-black shadow-[0_0_15px_rgba(0,209,255,0.4)]" />
                    {/* Inner Solid Circle */}
                    <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#00D1FF]" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full bg-black border border-white/5 rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:border-white/10 hover:shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
