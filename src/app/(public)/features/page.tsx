/**
 * Features Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const featureList = [
  "Real-time product trend tracking",
  "Customizable watchlists and alerts",
  "Detailed product analytics",
  "Price history and comparisons",
  "Community insights and reviews",
  "Advanced filtering and search",
  "Mobile app support",
  "API access",
];

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-gray-600">
          Everything you need to track trending products
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {featureList.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <CheckCircle
              className="text-green-600 flex-shrink-0 mt-1"
              size={24}
            />
            <span className="text-lg text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-600 text-lg">
          We're constantly adding new features to help you stay ahead of trends
        </p>
      </motion.div>
    </div>
  );
}
