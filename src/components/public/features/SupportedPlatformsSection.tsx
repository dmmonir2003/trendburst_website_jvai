"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface PlatformCard {
  id: number;
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
}

export interface SupportedPlatformsSectionProps {
  platforms: PlatformCard[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

/**
 * Supported Platforms Section
 * Displays platform cards with images (passed manually)
 * Uses Next.js Image component for optimal performance
 */
export function SupportedPlatformsSection({
  platforms,
  title = "Supported",
  titleHighlight = "Platforms",
  subtitle = "Unified insights across the world's leading e-commerce market places",
}: SupportedPlatformsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "hsla(193, 35%, 8%, 1)" }}
    >
      {/* Background gradient glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                {/* Image Container */}
                <div className="flex items-center justify-center w-full h-40 rounded-lg bg-slate-900/50 mb-6 overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.alt}
                    width={150}
                    height={150}
                    className="object-contain w-auto h-auto max-w-[150px] max-h-[150px]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {platform.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {platform.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:w-full transition-all duration-500" />

                {/* <div className="absolute w-32 h-52 bg-[#DF11EE1A] top-0 right-0 z-20" />
      <div className="absolute w-32 h-52 bg-[#00EAFF1A] bottom-0 left-0 z-20" /> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
