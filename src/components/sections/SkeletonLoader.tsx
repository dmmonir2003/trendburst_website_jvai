/**
 * Loading Skeleton Component
 * Reusable skeleton loader for data fetching states
 */

"use client";

import { motion } from "framer-motion";

export function SkeletonLoader({
  count = 1,
  variant = "card",
}: {
  count?: number;
  variant?: "card" | "row" | "text";
}) {
  const skeletons = Array.from({ length: count });

  if (variant === "text") {
    return (
      <div className="space-y-2">
        {skeletons.map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gray-200 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
      </div>
    );
  }

  if (variant === "row") {
    return (
      <div className="space-y-3">
        {skeletons.map((_, i) => (
          <motion.div
            key={i}
            className="h-12 bg-gray-200 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skeletons.map((_, i) => (
        <motion.div
          key={i}
          className="bg-gray-200 rounded-lg overflow-hidden"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="h-48 bg-gray-300" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
            <div className="h-8 bg-gray-300 rounded w-1/2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
