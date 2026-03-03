"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useRouter } from "next/navigation";
import { FeaturesHeroSection } from "./FeaturesHeroSection";
import { CoreFeaturesSection } from "./CoreFeaturesSection";
import { SupportedPlatformsSection } from "./SupportedPlatformsSection";
import { HowItWorksSection } from "./HowItWorksSection";

export interface FeaturesCtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

/**
 * Features CTA Section
 * Call-to-action section for the features page
 */
export function FeaturesCtaSection({
  title = "Ready to Get Started?",
  description = "Discover how marketplace intelligence can transform your e-commerce strategy. Explore our pricing or reach out to learn more",
  primaryButtonText = "Get Started",
  secondaryButtonText = "View Pricing",
  onPrimaryClick,
  onSecondaryClick,
}: FeaturesCtaSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full py-20 bg-[#030708] px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-20  rounded-3xl"
      // style={{ backgroundColor: "hsla(193, 35%, 8%, 1)" }}
    >
      {/* Background gradient glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button
            onClick={onPrimaryClick}
            className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {primaryButtonText}
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={onSecondaryClick}
            className="px-8 py-3 border-2 border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {secondaryButtonText}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <>
      <FeaturesHeroSection />
      <CoreFeaturesSection />
      <SupportedPlatformsSection platforms={platforms} />
      <HowItWorksSection steps={steps} />
      <FeaturesCtaSection
        onPrimaryClick={() => router.push("/signup")}
        onSecondaryClick={() => router.push("/pricing")}
      />
    </>
  );
}
