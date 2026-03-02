"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/buttons/ButtonVariants";

/**
 * CTA Section - Refined Glassmorphism with specific Figma gradients
 */
export function CTASection() {
  return (
    <section className="w-full py-24 bg-slate-950 relative overflow-hidden">
      {/* BACKGROUND GRADIENTS (Glows)
         Following your request: Left Bottom Pink and Top Right Cyan 
      */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF00E5]/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* GLASS CARD 
             - bg-white/[0.03]: Creates that subtle 20-30% visual opacity look
             - backdrop-blur-3xl: Essential for the premium "glass" feel
          */}
          <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden">
            {/* INNER GRADIENT ACCENTS 
               These help the glass card look more integrated with the background
            */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF00E5]/5 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl" />

            {/* CONTENT */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to find your next{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00E5] via-[#D600FF] to-[#00E5FF]">
                Winning Product?
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful drop shippers using TrendBurst to
              discover trending Products.
            </p>

            <div className="flex justify-center">
              <GetStartedButton
                className="bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black px-12 py-5 text-xl rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-all hover:scale-105 cursor-pointer"
                showArrow={true}
              >
                Start Your Journey
              </GetStartedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
