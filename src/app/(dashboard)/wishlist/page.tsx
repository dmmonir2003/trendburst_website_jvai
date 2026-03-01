/**
 * Wishlist Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const wishlistEmpty = true;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-600 mt-2">
          Save your favorite products to your wishlist
        </p>
      </motion.div>

      {wishlistEmpty ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <Heart size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mt-2">
            Start adding products to your wishlist to save them for later
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Wishlist items will be rendered here */}
        </motion.div>
      )}
    </div>
  );
}
