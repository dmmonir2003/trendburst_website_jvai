/**
 * Terms of Service Page
 */

"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: March 2026</p>

        <div className="prose max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using TrendBurst, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-700">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on TrendBurst's website for
              personal, non-commercial transitory viewing only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-gray-700">
              The materials on TrendBurst's website are provided on an 'as is'
              basis. TrendBurst makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-gray-700">
              In no event shall TrendBurst or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on TrendBurst's website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="text-gray-700">
              The materials appearing on TrendBurst's website could include
              technical, typographical, or photographic errors. TrendBurst does
              not warrant that any of the materials on its website are accurate,
              complete, or current.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please
              contact us at legal@trendburst.io.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
