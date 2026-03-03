"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Path from your provided code
import contactImage from "../../../../public/assets/pablic_assetes/contact/contact.png";

export default function ContactSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-black border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10 transform-gpu"
        >
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400">
              Have a question or need more details? Our team is here to help.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#00D1FF]/50 focus:outline-none transition-all"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#00D1FF]/50 focus:outline-none transition-all"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#00D1FF]/50 focus:outline-none transition-all"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#00D1FF]/50 focus:outline-none transition-all"
              required
            />

            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#00D1FF]/50 focus:outline-none transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#00E5FF] hover:bg-[#00B8CC] text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* 3D Illustration Container with Permanent Blur Logic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative flex justify-center items-center"
        >
          {/* ✅ PERMANENT 3D Vibe Glow (Removed heavy CSS blur filter) */}
          <div className="absolute ">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                // We use the gradient alone to create the "blur" look. This is 100% stable.
                background:
                  "radial-gradient(circle, rgba(0, 234, 255, 0.35) 0%, rgba(0, 234, 255, 0.1) 40%, transparent 75%)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            ></div>
          </div>

          {/* Floating Next.js Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-square max-w-[550px] z-10 "
          >
            <Image
              src={contactImage}
              alt="Contact Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
