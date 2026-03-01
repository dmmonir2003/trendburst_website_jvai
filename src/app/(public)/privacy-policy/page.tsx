/**
 * Privacy Policy Page
 */

"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: March 2026</p>

        <div className="prose max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              TrendBurst ("we", "us", "our", or "Company") operates the
              TrendBurst website and platform. This Privacy Policy explains our
              data practices and your rights regarding your personal
              information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Name and email address when you create an account</li>
              <li>Payment information for subscriptions</li>
              <li>Usage data and analytics</li>
              <li>Device information and IP address</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and
              improve our services, process payments, send you service-related
              announcements, and respond to your inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at
              privacy@trendburst.io.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@trendburst.io.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
