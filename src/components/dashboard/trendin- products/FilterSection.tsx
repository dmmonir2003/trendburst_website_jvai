"use client";
import { motion } from "framer-motion";
import { Lock, Filter } from "lucide-react"; // npm i lucide-react

const categories = [
  "All categories",
  "Electronics",
  "Fashion & Beauty",
  "Clothing",
  "Home & Garden",
];

const FilterSection = () => {
  return (
    <div className="space-y-8 p-6 bg-[#0a0c10] text-white">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="text-cyan-400 w-5 h-5" />
          <h3 className="text-lg font-medium">Filter by category</h3>
          <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Lock size={12} /> Locked
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg border transition-all ${
                i === 0
                  ? "bg-cyan-400 border-cyan-400 text-black font-bold"
                  : "border-gray-700 bg-gray-800/50 text-gray-400 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex items-center gap-2">
                {i !== 0 && <Lock size={14} />}
                {cat}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Upgrade Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-purple-900/10 border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-purple-400 mb-2">
            <Lock size={18} />
            <h4 className="font-bold">Unlock Category Filter</h4>
          </div>
          <p className="text-gray-400 text-sm max-w-md mb-4">
            Upgrade to category ad-on ($5/month) to filter products by specific
            categories and get deeper insights.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 rounded-lg font-bold text-white hover:brightness-110 transition">
            Upgrade Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FilterSection;
