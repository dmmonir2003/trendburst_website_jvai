/**
 * Overview Page
 * Dashboard home page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Heart, Eye } from "lucide-react";

const stats = [
  {
    label: "Trending Products",
    value: "1,234",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  { label: "Total Views", value: "12.5K", icon: Eye, color: "text-purple-600" },
  { label: "Wishlist Items", value: "42", icon: Heart, color: "text-red-600" },
  {
    label: "Activities",
    value: "156",
    icon: ShoppingCart,
    color: "text-green-600",
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's your trend overview
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <Icon className={`${stat.color}`} size={32} />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <p className="text-gray-600">
          Your recent trend activities will appear here
        </p>
      </motion.div>
    </div>
  );
}
