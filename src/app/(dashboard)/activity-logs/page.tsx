/**
 * Activity Logs Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Heart, Eye } from "lucide-react";
import { formatDateTime } from "@/lib/utils2";

const activityLogs = [
  {
    id: "1",
    action: "Added to Wishlist",
    productName: "Premium Wireless Headphones",
    icon: Heart,
    color: "text-red-600",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    action: "Viewed Product",
    productName: "Smart Watch Pro",
    icon: Eye,
    color: "text-blue-600",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    action: "Trending Alert",
    productName: "Laptop Computer",
    icon: TrendingUp,
    color: "text-green-600",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function ActivityLogsPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">Activity Logs</h1>
        <p className="text-gray-600 mt-2">
          Track all your activities and interactions
        </p>
      </motion.div>

      <motion.div
        className="space-y-4"
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
        {activityLogs.map((log, index) => {
          const Icon = log.icon;
          return (
            <motion.div
              key={log.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`${log.color} p-3 rounded-full bg-gray-100`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{log.action}</p>
                  <p className="text-sm text-gray-600">{log.productName}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {formatDateTime(log.timestamp)}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
