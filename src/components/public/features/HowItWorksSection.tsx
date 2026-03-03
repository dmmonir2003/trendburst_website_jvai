"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Search, Zap } from "lucide-react";

export type StepColor = "cyan" | "green" | "purple";

export interface WorkStep {
  id: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: StepColor;
}

const stepsHexMap = {
  cyan: "#00D1FF",
  green: "#00E676",
  purple: "#AB47BC",
};

const colorMap = {
  cyan: {
    bg: "bg-[#00D1FF]",
    shadow: "bg-[#00D1FF]/50",
    text: "text-[#00D1FF]",
    iconBg: "bg-[#00D1FF]/10",
    gradient: "from-black via-[#060D0F] to-[#00D1FF]/05",
  },
  green: {
    bg: "bg-[#00E676]",
    shadow: "bg-[#00E676]/50",
    text: "text-[#00E676]",
    iconBg: "bg-[#00E676]/10",
    gradient: "from-black via-[#060D0F] to-[#00E676]/05",
  },
  purple: {
    bg: "bg-[#AB47BC]",
    shadow: "bg-[#AB47BC]/50",
    text: "text-[#AB47BC]",
    iconBg: "bg-[#AB47BC]/10",
    gradient: "from-black via-[#060D0F] to-[#AB47BC]/05",
  },
};

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function HowItWorksSection({
  steps,
  title = "How it",
  titleHighlight = "works",
  subtitle = "Get started with a simple, well-structured three-step approach",
}: {
  steps: WorkStep[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="w-full py-24 px-6  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title} <span className="text-cyan-400">{titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0">
          {steps.map((step, index) => {
            const theme = colorMap[step.color] || colorMap.cyan;
            const shadowHex = stepsHexMap[step.color];

            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group flex-1 w-full mx-2 lg:mx-4"
                >
                  <div
                    className={`relative bg-gradient-to-br ${theme.gradient} border border-white/5 rounded-3xl p-8 h-full transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/5`}
                  >
                    {/* UPDATED POSITION: Number sits exactly on the top corner border */}
                    <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                      {/* Round side atmospheric bloom */}
                      <div
                        className={`absolute w-32 h-32 rounded-full blur-3xl opacity-25 ${theme.shadow}`}
                      />
                      {/* Core bloom behind the number */}
                      <div
                        className={`absolute w-12 h-12 rounded-full blur-xl opacity-60 ${theme.shadow}`}
                      />
                      {/* Glowing Number */}
                      <span
                        className={`relative z-10 text-2xl font-bold tracking-tighter ${theme.text}`}
                        style={{
                          filter: `drop-shadow(0px 0px 10px ${hexToRgba(shadowHex, 0.8)})`,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 ${theme.iconBg}`}
                    >
                      <span className={theme.text}>{step.icon}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow Section */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center z-20">
                    <svg
                      width="60"
                      height="24"
                      viewBox="0 0 60 24"
                      fill="none"
                      style={{
                        filter:
                          "drop-shadow(0px 0px 12px rgba(0, 209, 255, 0.9))",
                      }}
                      className="text-[#00D1FF]"
                    >
                      <path
                        d="M0 12H58M58 12L48 4M58 12L48 20"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
