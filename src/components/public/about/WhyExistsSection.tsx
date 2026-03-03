"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const content = {
  challenge: {
    title: "The Challenge",
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    dotColor: "bg-red-500",
    points: [
      "Marketplaces generate overwhelming amounts of data that's difficult to interpret",
      "Valuable insights are scattered across multiple platforms and tools",
      "Traditional analytics require expertise to understand",
    ],
  },
  solution: {
    title: "Our Solution",
    icon: Lightbulb,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    dotColor: "bg-green-500",
    points: [
      "Structured easy-to-understand insights delivered in one unified dashboard",
      "Visual analytics that tell a story without requiring data expertise",
      "Actionable product ranking updated every 48 hours",
    ],
  },
};

export default function WhyExistsSection() {
  return (
    <section className="w-full py-24  px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Why this Platform{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Exists
            </span>
          </h2>
        </motion.div>

        {/* Challenge & Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/5 rounded-[32px] p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${content.challenge.borderColor} ${content.challenge.bgColor}`}
              >
                <content.challenge.icon
                  className={`w-6 h-6 ${content.challenge.color}`}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {content.challenge.title}
              </h3>
            </div>

            <ul className="space-y-6">
              {content.challenge.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div
                    className={`mt-2 w-2 h-2 rounded-full shrink-0 ${content.challenge.dotColor}`}
                  />
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/5 rounded-[32px] p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${content.solution.borderColor} ${content.solution.bgColor}`}
              >
                <content.solution.icon
                  className={`w-6 h-6 ${content.solution.color}`}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {content.solution.title}
              </h3>
            </div>

            <ul className="space-y-6">
              {content.solution.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div
                    className={`mt-2 w-2 h-2 rounded-full shrink-0 ${content.solution.dotColor}`}
                  />
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
