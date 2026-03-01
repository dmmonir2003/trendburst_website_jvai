/**
 * Product Card Component
 * Card component for displaying product information
 */

"use client";

import { Product } from "@/types/product.types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils2";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

export function ProductCard({
  product,
  onAddToWishlist,
  isInWishlist = false,
}: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
        {/* Image */}
        <Link href={`/products/${product.id}`}>
          <div className="relative h-48 bg-gray-200 overflow-hidden group">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            {product.trending && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Trending
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-sm hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-600 mt-1">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mt-3 mb-4 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button size="sm" disabled={!product.inStock} className="flex-1">
              <ShoppingCart size={16} className="mr-1" />
              {product.inStock ? "Add" : "Out of Stock"}
            </Button>
            <Button
              size="sm"
              variant={isInWishlist ? "default" : "outline"}
              onClick={() => onAddToWishlist?.(product.id)}
            >
              <Heart size={16} className={isInWishlist ? "fill-current" : ""} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
