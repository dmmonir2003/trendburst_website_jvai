"use client";

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

/**
 * Data for Market Share Radial Bar
 */
const marketShareData = [
  {
    name: "Amazon",
    value: 69,
    fill: "rgba(175, 40, 249, 1)", // Vibrant Purple
  },
];

export function MarketOverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-4">
      {/* --- MARKET SHARE CARD --- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
      >
        <h3 className="absolute top-8 left-8 text-gray-500 text-sm font-medium">
          Market Share
        </h3>

        <div className="w-full h-full flex items-center justify-center relative">
          <ResponsiveContainer width="100%" height={220}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="80%"
              outerRadius="100%"
              barSize={12}
              data={marketShareData}
              startAngle={90}
              endAngle={450}
            >
              <defs>
                {/* 3D Glow Filter for Purple Radial */}
                <filter
                  id="purpleGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />

              <RadialBar
                background={{ fill: "rgba(255, 255, 255, 0.05)" }}
                dataKey="value"
                cornerRadius={10}
                style={{ filter: "url(#purpleGlow)" }}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          {/* Center Text Logic */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-white text-4xl font-bold tracking-tight">
              69%
            </span>
            <span className="text-gray-500 text-sm mt-1">Amazon</span>
          </div>
        </div>
      </motion.div>

      {/* --- UPDATE CYCLE CARD --- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5 shadow-2xl relative flex flex-col items-center justify-center text-center min-h-[300px] group"
      >
        {/* Animated Icon */}
        <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(0,234,255,0.2)] transition-all">
          <RefreshCw className="w-6 h-6 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
        </div>

        <h3 className="text-gray-500 text-sm font-medium mb-2">Update Cycle</h3>

        {/* 3D Neon Text */}
        <h2 className="text-[#00EAFF] text-4xl font-black drop-shadow-[0_0_12px_rgba(0,234,255,0.6)] mb-2 uppercase tracking-tighter">
          48 Hrs
        </h2>

        <p className="text-gray-500 text-xs font-medium">Next sync in 12h</p>

        {/* Decorative subtle pulse glow */}
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-[80px] pointer-events-none" />
      </motion.div>
    </div>
  );
}
