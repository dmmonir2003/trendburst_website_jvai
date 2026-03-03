"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

/**
 * Mock data representing price fluctuations over time
 */
const data = [
  { name: "1", iPhone: 40, PS5: 60, Jordan: 50 },
  { name: "2", iPhone: 30, PS5: 25, Jordan: 75 },
  { name: "3", iPhone: 55, PS5: 45, Jordan: 60 },
  { name: "4", iPhone: 45, PS5: 70, Jordan: 65 },
  { name: "5", iPhone: 85, PS5: 50, Jordan: 75 },
  { name: "6", iPhone: 60, PS5: 65, Jordan: 90 },
  { name: "7", iPhone: 95, PS5: 35, Jordan: 70 },
  { name: "8", iPhone: 40, PS5: 45, Jordan: 95 },
  { name: "9", iPhone: 30, PS5: 85, Jordan: 35 },
];

export function ProductPriceMovement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#020606] p-8 rounded-[32px] border border-white/5 shadow-2xl w-full mt-10"
    >
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-white text-2xl font-bold">
          Product Price Movement
        </h3>
        <span className="text-gray-500 text-sm font-medium">Last 30 Days</span>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -20 }}>
            <defs>
              {/* 3D Volumetric Gradients for each product */}
              <linearGradient id="coloriPhone" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(38, 155, 249, 1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(38, 155, 249, 1)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorPS5" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(0, 234, 255, 1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(0, 234, 255, 1)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorJordan" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(223, 17, 238, 1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(223, 17, 238, 1)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Light visible row borders */}
            <CartesianGrid
              strokeDasharray="0"
              vertical={true}
              horizontal={true}
              stroke="rgba(255, 255, 255, 0.08)"
            />

            <XAxis dataKey="name" hide />
            <YAxis hide domain={[0, 110]} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1C292A",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
              cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 2 }}
            />

            {/* Glowing overlap areas */}
            <Area
              type="monotone"
              dataKey="iPhone"
              stroke="rgba(38, 155, 249, 1)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#coloriPhone)"
              dot={{
                r: 4,
                fill: "rgba(38, 155, 249, 1)",
                strokeWidth: 2,
                stroke: "#020606",
              }}
            />
            <Area
              type="monotone"
              dataKey="PS5"
              stroke="rgba(0, 234, 255, 1)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPS5)"
              dot={{
                r: 4,
                fill: "rgba(0, 234, 255, 1)",
                strokeWidth: 2,
                stroke: "#020606",
              }}
            />
            <Area
              type="monotone"
              dataKey="Jordan"
              stroke="rgba(223, 17, 238, 1)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorJordan)"
              dot={{
                r: 4,
                fill: "rgba(223, 17, 238, 1)",
                strokeWidth: 2,
                stroke: "#020606",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend to match Figma design */}
      <div className="flex justify-center gap-8 mt-6">
        {[
          { name: "iPhone", color: "rgba(38, 155, 249, 1)" },
          { name: "PS5", color: "rgba(0, 234, 255, 1)" },
          { name: "Jordan Shoe", color: "rgba(223, 17, 238, 1)" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}`,
              }}
            />
            <span className="text-gray-400 text-xs font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
