// "use client";

// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Sample Data for the 3D Velocity Graph
// const chartData = [
//   { time: "0", value: 15 },
//   { time: "5", value: 18 },
//   { time: "10", value: 17 },
//   { time: "15", value: 28 },
//   { time: "20", value: 35 },
//   { time: "25", value: 33 },
//   { time: "30", value: 40 },
// ];

// // Product Data from Figma
// const products = [
//   {
//     rank: 1,
//     name: "Vitamin A Serum",
//     velocity: "+1950%",
//     time: "7D",
//     img: "/assets/serum.png",
//   },
//   {
//     rank: 2,
//     name: "Airpods Pro",
//     velocity: "+1200%",
//     time: "6D",
//     img: "/assets/airpods.png",
//   },
//   {
//     rank: 3,
//     name: "Watch Ultra",
//     velocity: "+950%",
//     time: "4D",
//     img: "/assets/watch.png",
//   },
//   {
//     rank: 4,
//     name: "Headphone",
//     velocity: "+550%",
//     time: "2D",
//     img: "/assets/headphone.png",
//   },
//   {
//     rank: 5,
//     name: "Black Berry",
//     velocity: "+300%",
//     time: "3D",
//     img: "/assets/phone.png",
//   },
//   {
//     rank: 6,
//     name: "I phone 11",
//     velocity: "+200%",
//     time: "3D",
//     img: "/assets/iphone.png",
//   },
//   {
//     rank: 7,
//     name: "Wireless Mouse",
//     velocity: "+100%",
//     time: "3D",
//     img: "/assets/mouse.png",
//   },
// ];

// export function TrendingVelocitySection() {
//   return (
//     <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-4 rounded-2xl bg-[#020606] ">
//       {/* --- CHART CARD --- */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-[#020606] p-6 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden"
//       >
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h3 className="text-white text-xl font-bold">Trending Velocity</h3>
//             {/* 3D Glowing Pill */}
//             <span className="bg-[#00EAFF]/10 text-[#00EAFF] text-xs px-3 py-1 rounded-full border border-[#00EAFF]/30 shadow-[0_0_10px_rgba(0,234,255,0.2)] mt-3 inline-block font-medium">
//               Men's Watch
//             </span>
//           </div>
//           <span className="text-gray-500 text-sm font-medium">
//             Last 30 Days
//           </span>
//         </div>

//         <div className="h-[220px] w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={chartData}>
//               <defs>
//                 {/* 3D Fill Gradient */}
//                 <linearGradient
//                   id="velocityGradient"
//                   x1="0"
//                   y1="0"
//                   x2="0"
//                   y2="1"
//                 >
//                   <stop offset="5%" stopColor="#00EAFF" stopOpacity={0.4} />
//                   <stop offset="95%" stopColor="#00EAFF" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 vertical={false}
//                 stroke="#ffffff05"
//               />
//               <XAxis dataKey="time" hide />
//               <YAxis
//                 stroke="#4b5563"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 tickFormatter={(val) => `${val}`}
//               />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#1C292A",
//                   border: "1px solid rgba(0,234,255,0.2)",
//                   borderRadius: "12px",
//                   color: "#fff",
//                 }}
//               />
//               <Area
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#00EAFF"
//                 strokeWidth={4}
//                 fillOpacity={1}
//                 fill="url(#velocityGradient)"
//                 // 3D Point Glow
//                 dot={{
//                   r: 5,
//                   fill: "#00EAFF",
//                   strokeWidth: 2,
//                   stroke: "#020606",
//                 }}
//                 activeDot={{
//                   r: 8,
//                   stroke: "#00EAFF",
//                   strokeWidth: 2,
//                   fill: "#fff",
//                 }}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </motion.div>

//       {/* --- PRODUCT RANK LIST --- */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="bg-[#111818]/80 backdrop-blur-xl rounded-[32px] p-6 border border-white/5 shadow-inner"
//       >
//         {/* Table Header */}
//         <div className="grid grid-cols-5 text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-6 px-4">
//           <span>Rank</span>
//           <span>Image</span>
//           <span>Name</span>
//           <span>Velocity</span>
//           <span>Trend Time</span>
//         </div>

//         <div className="space-y-1">
//           {products.map((product, idx) => (
//             <motion.div
//               key={product.rank}
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.05 }}
//               whileHover={{
//                 scale: 1.01,
//                 backgroundColor: "rgba(0, 234, 255, 0.03)",
//                 transition: { duration: 0.2 },
//               }}
//               className="grid grid-cols-5 items-center p-4 rounded-2xl transition-all cursor-pointer group"
//             >
//               <span className="text-white font-bold text-sm">
//                 {product.rank}
//               </span>

//               {/* Product Image Wrapper */}
//               <div className="w-12 h-12 rounded-xl bg-[#1C292A] border border-white/10 overflow-hidden relative shadow-lg">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                 {/* <Image src={product.img} alt={product.name} fill className="object-cover p-2" /> */}
//                 <div className="w-full h-full bg-gray-700/50 flex items-center justify-center text-[10px] text-gray-500 italic">
//                   IMG
//                 </div>
//               </div>

//               <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
//                 {product.name}
//               </span>

//               {/* Velocity Highlight */}
//               <span className="text-[#00FF85] font-bold text-sm drop-shadow-[0_0_8px_rgba(0,255,133,0.3)]">
//                 {product.velocity}
//               </span>

//               <span className="text-gray-500 text-sm">{product.time}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample Data for the 3D Velocity Graph
const chartData = [
  { time: "0", value: 15 },
  { time: "5", value: 18 },
  { time: "10", value: 17 },
  { time: "15", value: 28 },
  { time: "20", value: 35 },
  { time: "25", value: 33 },
  { time: "30", value: 40 },
];

// Expanded Product Data (More than 9 items to trigger scrolling)
const products = [
  {
    rank: 1,
    name: "Vitamin A Serum",
    velocity: "+1950%",
    time: "7D",
    img: "/assets/serum.png",
  },
  {
    rank: 2,
    name: "Airpods Pro",
    velocity: "+1200%",
    time: "6D",
    img: "/assets/airpods.png",
  },
  {
    rank: 3,
    name: "Watch Ultra",
    velocity: "+950%",
    time: "4D",
    img: "/assets/watch.png",
  },
  {
    rank: 4,
    name: "Headphone",
    velocity: "+550%",
    time: "2D",
    img: "/assets/headphone.png",
  },
  {
    rank: 5,
    name: "Black Berry",
    velocity: "+300%",
    time: "3D",
    img: "/assets/phone.png",
  },
  {
    rank: 6,
    name: "I phone 11",
    velocity: "+200%",
    time: "3D",
    img: "/assets/iphone.png",
  },
  {
    rank: 7,
    name: "Wireless Mouse",
    velocity: "+100%",
    time: "3D",
    img: "/assets/mouse.png",
  },
  {
    rank: 8,
    name: "Mechanical Keyboard",
    velocity: "+85%",
    time: "1D",
    img: "/assets/kb.png",
  },
  {
    rank: 9,
    name: "USB-C Hub",
    velocity: "+70%",
    time: "5D",
    img: "/assets/hub.png",
  },
  {
    rank: 10,
    name: "Gaming Monitor",
    velocity: "+65%",
    time: "12D",
    img: "/assets/monitor.png",
  },
  {
    rank: 11,
    name: "Smart Speaker",
    velocity: "+50%",
    time: "4D",
    img: "/assets/speaker.png",
  },
];

export function TrendingVelocitySection() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto p-4 rounded-2xl bg-[#020606]">
      {/* --- CHART CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#020606] p-6 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-white text-xl font-bold">Trending Velocity</h3>
            <span className="bg-[#00EAFF]/10 text-[#00EAFF] text-xs px-3 py-1 rounded-full border border-[#00EAFF]/30 shadow-[0_0_10px_rgba(0,234,255,0.2)] mt-3 inline-block font-medium">
              Men&apos;s Watch
            </span>
          </div>
          <span className="text-gray-500 text-sm font-medium">
            Last 30 Days
          </span>
        </div>

        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient
                  id="velocityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#00EAFF" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#00EAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ffffff05"
              />
              <XAxis dataKey="time" hide />
              <YAxis
                stroke="#4b5563"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1C292A",
                  border: "1px solid rgba(0,234,255,0.2)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00EAFF"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#velocityGradient)"
                dot={{
                  r: 5,
                  fill: "#00EAFF",
                  strokeWidth: 2,
                  stroke: "#020606",
                }}
                activeDot={{
                  r: 8,
                  stroke: "#00EAFF",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* --- PRODUCT RANK LIST WITH HIDDEN SMOOTH SCROLLER --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-[#111818]/80 backdrop-blur-xl rounded-[32px] p-6 border border-white/5 shadow-inner max-h-[580px] flex flex-col mb-12 mt-4"
      >
        {/* Fixed Table Header */}
        <div className="grid grid-cols-5 text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-6 px-4">
          <span>Rank</span>
          <span>Image</span>
          <span>Name</span>
          <span>Velocity</span>
          <span>Trend Time</span>
        </div>

        {/* Scrollable Area - 9 items are roughly 500px depending on padding */}
        <div
          className="space-y-1 overflow-y-auto scroll-smooth scrollbar-hide pr-1"
          style={{
            msOverflowStyle: "none" /* IE and Edge */,
            scrollbarWidth: "none" /* Firefox */,
          }}
        >
          {/* Custom CSS to hide scrollbar in Chrome/Safari/Webkit */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {products.map((product, idx) => (
            <motion.div
              key={product.rank}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(0, 234, 255, 0.03)",
                transition: { duration: 0.2 },
              }}
              className="grid grid-cols-5 items-center p-4 rounded-2xl transition-all cursor-pointer group"
            >
              <span className="text-white font-bold text-sm">
                {product.rank}
              </span>

              <div className="w-12 h-12 rounded-xl bg-[#1C292A] border border-white/10 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full bg-gray-700/50 flex items-center justify-center text-[10px] text-gray-500 italic">
                  IMG
                </div>
              </div>

              <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                {product.name}
              </span>

              <span className="text-[#00FF85] font-bold text-sm drop-shadow-[0_0_8px_rgba(0,255,133,0.3)]">
                {product.velocity}
              </span>

              <span className="text-gray-500 text-sm">{product.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
