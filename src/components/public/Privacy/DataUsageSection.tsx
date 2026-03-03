"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Tag,
  Monitor,
  CircleDashed,
  Database,
  Shield,
  Lock,
} from "lucide-react";

const usagePillars = [
  {
    icon: RefreshCw,
    title: "Enhanced Experience",
    description:
      "Personalized dashboard and insights tailored to your marketplace focused",
  },
  {
    icon: Tag,
    title: "Marketplace insights",
    description:
      "Actionable insights across trends, pricing, and market dynamics",
  },
  {
    icon: Monitor,
    title: "Platform stability",
    description:
      "Designed for stability, reliability, and long-term performance",
  },
];

const securityFeatures = [
  { icon: Lock, label: "End-to-End encryption" },
  { icon: Shield, label: "Secure infrastructure" },
  { icon: Database, label: "99.9% uptime" },
];

export function DataUsageSection() {
  return (
    /* ✅ Changed to #030708 for better glow contrast */
    <section className="w-full py-24 px-6 relative overflow-hidden bg-[#0D1B1F]">
      {/* ✅ FIXED 3D VIBE GLOW: Added width, height, and centering */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block -z-10">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 234, 255, 0.2) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
            <CircleDashed className="w-8 h-8 text-[#00D1FF] drop-shadow-[0_0_8px_rgba(0,209,255,0.4)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Data Usage
          </h2>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-16 leading-relaxed">
          The collected data is used to analyze trends, evaluate platform
          performance, and generate meaningful marketplace insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {usagePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00D1FF]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center mb-8">
                <pillar.icon className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* this is use for middile gradient for 3d vibe  */}

        <div className="absolute inset-0 pointer-events-none hidden lg:block -z-10 py-15">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{
              background:
                /* Using the vibrant purple rgba(175, 40, 249, 0.4) from image_eb4722.png */
                "radial-gradient(circle, rgba(175, 40, 249, 0.4) 0%, transparent 90%)",
            }}
          ></div>
        </div>

        {/* ✅ Section 2: Data Security */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
            <Lock className="w-8 h-8 text-[#00D1FF] drop-shadow-[0_0_8px_rgba(0,209,255,0.4)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Data Security
          </h2>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-16 leading-relaxed">
          Your data is protected by industry-standard security protocols to
          ensure complete safety and integrity.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-evenly">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 hover:bg-[#00D1FF]/10 transition-all group"
            >
              <feature.icon className="w-5 h-5 text-[#00D1FF] group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
