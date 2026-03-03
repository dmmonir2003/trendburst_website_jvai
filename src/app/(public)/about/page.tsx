/**
 * About Page
 */

"use client";

import AboutHero from "@/components/public/about/AboutHero";
import BuiltForClaritySection from "@/components/public/about/BuiltForClaritySection";
import CorePillarsSection from "@/components/public/about/CorePillarsSection";
import OurApproachSection from "@/components/public/about/OurApproachSection";
import WhoWeAreSection from "@/components/public/about/WhoWeAreSection";
import WhyExistsSection from "@/components/public/about/WhyExistsSection";
import CTASection from "@/components/public/home/CTASection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About TrendBurst</h1>
          <p className="text-xl text-gray-600">
            Empowering traders and enthusiasts with real-time trend insights
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-8">
            At TrendBurst, we believe everyone should have access to real-time
            market insights. Our mission is to democratize trend tracking and
            make it easy for anyone to discover emerging opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-8">
            Founded in 2024, TrendBurst started as a passion project to help
            traders and product enthusiasts make better decisions. Today, we're
            proud to serve thousands of users worldwide.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="text-gray-700 space-y-4 mb-8">
            <li>
              ✓ <strong>Transparency:</strong> We believe in open, honest
              communication with our users
            </li>
            <li>
              ✓ <strong>Innovation:</strong> We constantly improve our platform
              with new features
            </li>
            <li>
              ✓ <strong>Security:</strong> Your data's safety is our top
              priority
            </li>
            <li>
              ✓ <strong>Excellence:</strong> We strive for perfection in
              everything we do
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? We'd love to hear from you. Reach out to us at
            hello@trendburst.io
          </p>
        </div>
      </motion.div> */}

      <AboutHero />
      <WhoWeAreSection></WhoWeAreSection>
      <CorePillarsSection></CorePillarsSection>
      <WhyExistsSection></WhyExistsSection>
      <OurApproachSection></OurApproachSection>
      <BuiltForClaritySection></BuiltForClaritySection>
    </div>
  );
}
