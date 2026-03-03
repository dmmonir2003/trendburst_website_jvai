/**
 * Auth Layout
 * Optimized with an animated Framer Motion gradient border
 */

"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "../../../public/assets/authBGImage.jpg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 bg-black">
      {/* 1. Optimized Next.js Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={bgImage}
          alt="Authentication background"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* 2. Login/Register Card Container with Running Border */}
      <div className="w-full max-w-lg relative z-20">
        <div className="relative p-[1.5px] rounded-[32px] overflow-hidden group">
          {/* ✅ ANIMATED BORDER: Rotating Gradient */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%] z-0"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(0, 234, 255, 1), rgba(175, 40, 249, 1), rgba(223, 17, 238, 1), rgba(38, 155, 249, 1), rgba(0, 234, 255, 1))",
            }}
          />

          {/* 3. Inner-card Content (Acts as the Mask) */}
          <div className="relative z-10 backdrop-blur-xl bg-[#121212]/90 p-12 rounded-[31px] shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
