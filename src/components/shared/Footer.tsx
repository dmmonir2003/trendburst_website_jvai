/**
 * Footer Component
 * Footer shown in public layouts
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              TrendBurst
            </Link>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
              Discover trending products with real-time analytics. Make
              data-driven decisions for your drop shipping business.
            </p>
          </motion.div>

          {/* About Us Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              About Us
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              TrendBurst helps entrepreneurs and businesses stay ahead of market
              trends with advanced tracking and analytics.
            </p>
          </motion.div>

          {/* Get In Touch Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "#00D4FF" }}
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-primary/10 my-8"
          variants={itemVariants}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/50"
          >
            © 2026 TrendBurst. All rights reserved.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-6 text-sm">
            <Link
              href="/terms"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
