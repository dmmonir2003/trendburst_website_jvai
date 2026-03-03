"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";

/**
 * Data mapped from the figma reference
 */
const categoryData = [
  { name: "Electronics", value: 6, color: "rgba(255, 171, 64, 1)" }, // Orange
  { name: "Beauty", value: 2.5, color: "rgba(255, 82, 82, 1)" }, // Red
  { name: "Sports", value: 4, color: "rgba(38, 155, 249, 1)" }, // Blue
  { name: "Health", value: 5.5, color: "rgba(223, 17, 238, 1)" }, // Pink
  { name: "Home", value: 1, color: "rgba(0, 234, 255, 1)" }, // Cyan
  { name: "Fashion", value: 9, color: "rgba(255, 0, 0, 1)" }, // Intense Red
];

export function CategoryVelocity() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-[#020606] p-6 md:p-8 rounded-[32px] border border-white/5 shadow-2xl w-full"
    >
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-cyan-500/10">
          <BarChart2 className="w-5 h-5 text-cyan-400" />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold">
          Category Velocity
        </h3>
      </div>

      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Chart Container - Responsive Height */}
      <div className="h-75 md:h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={categoryData}
            margin={{ top: 20, right: 10, left: -20, bottom: 20 }}
          >
            <defs>
              {/* Dynamic 3D Glow Filters for each bar color */}
              {categoryData.map((item, index) => (
                <filter
                  key={`glow-${index}`}
                  id={`glow-${index}`}
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feFlood
                    floodColor={item.color}
                    floodOpacity="0.6"
                    result="color"
                  />
                  <feComposite
                    in="color"
                    in2="blur"
                    operator="in"
                    result="glow"
                  />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
            </defs>

            {/* Subtle Grid Lines */}
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              horizontal={false}
              stroke="rgba(255, 255, 255, 0.05)"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              dy={15}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              ticks={[0, 2, 4, 6, 8]}
              domain={[0, 10]}
            />

            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.03)" }}
              contentStyle={{
                backgroundColor: "#111818",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={32}>
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{ filter: `url(#glow-${index})` }} // Individual 3D Bloom
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
