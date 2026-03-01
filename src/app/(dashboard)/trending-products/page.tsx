/**
 * Trending Products Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SkeletonLoader } from "@/components/sections/SkeletonLoader";
import { Product } from "@/types/product.types";
import { useState } from "react";

// Mock data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality sound with noise cancellation",
    price: 199.99,
    originalPrice: 299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    trending: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Monitor your health and fitness",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    trending: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function TrendingProductsPage() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <SkeletonLoader count={6} />;
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">Trending Products</h1>
        <p className="text-gray-600 mt-2">
          Discover the hottest products trending right now
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        {mockProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-lg font-bold">${product.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
