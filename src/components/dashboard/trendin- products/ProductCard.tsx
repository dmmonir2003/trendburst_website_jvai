"use client";
import { motion } from "framer-motion";
import { Eye, Bookmark, ExternalLink, TrendingUp } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  desc: string;
  image: string;
  platform: "Amazon" | "eBay" | "Walmart";
  trend: string;
  views: string;
  saves: string;
  color: string; // The glow color
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group p-[2px] rounded-3xl overflow-hidden transition-all"
      style={{
        background: `linear-gradient(135deg, ${product.color} 0%, transparent 60%)`,
        boxShadow: `0 0 20px -5px ${product.color}40`,
      }}
    >
      <div className="bg-[#161b22] rounded-[22px] overflow-hidden h-full flex flex-col">
        {/* Image Area */}
        <div className="relative h-56 bg-black flex items-center justify-center p-4">
          <div className="absolute top-4 left-4 bg-cyan-900/40 text-cyan-400 px-2 py-1 rounded-md text-xs font-mono">
            {product.id}
          </div>
          <div className="absolute top-4 right-4 bg-black/60 text-green-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <TrendingUp size={12} /> {product.trend}
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <span
              className={`text-[10px] px-2 py-1 rounded bg-opacity-20 uppercase font-bold ${
                product.platform === "Amazon"
                  ? "bg-orange-500 text-orange-400"
                  : "bg-blue-500 text-blue-400"
              }`}
            >
              {product.platform}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {product.desc}
          </p>

          <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-1">
              <Eye size={16} /> {product.views}
            </span>
            <span className="flex items-center gap-1">
              <Bookmark size={16} /> {product.saves}
            </span>
          </div>

          <div className="flex gap-2">
            <button className="flex-grow flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-magenta-500 bg-[#d900ff] text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
              <ExternalLink size={18} /> View Product
            </button>
            <button className="p-3 border border-cyan-400/50 rounded-xl text-cyan-400 hover:bg-cyan-400/10 transition">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
