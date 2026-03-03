"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

export function PolicyUpdatesSection() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden bg-[#0D1B1F]">
      {/* 3D Vibe Background Glow */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block -z-10 py-8">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175, 40, 249, 0.15) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          {/* Cyan Update Icon Container */}
          <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
            <RefreshCw className="w-8 h-8 text-[#00D1FF] drop-shadow-[0_0_8px_rgba(0,209,255,0.4)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Policy Updates
          </h2>
        </div>

        {/* Top Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-5xl mb-16 leading-relaxed">
          We periodically review and update this policy to maintain clarity and
          transparency, ensuring that it accurately reflects how data is
          collected, used, and protected as the platform evolves and new
          features are added.
        </p>

        {/* Signature Glowing Divider */}
        <div className="w-full h-[1px] bg-[#00D1FF]/30 mb-16" />

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed italic">
            TrendBurst is committed to the highest standards of data privacy and
            security. Our platform delivers reliable marketplace insights with
            transparency and integrity, providing businesses with trustworthy
            information to support confident, data-driven decisions.
          </p>

          {/* Contact Information */}
          <div className="text-xl md:text-2xl font-medium">
            <span className="text-gray-400">
              Questions about our privacy practices? Contact us at{" "}
            </span>
            <a
              href="mailto:privacy@trendburst.com"
              className="text-[#00D1FF] hover:underline transition-all drop-shadow-[0_0_10px_rgba(0,209,255,0.3)]"
            >
              privacy@trendburst.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
