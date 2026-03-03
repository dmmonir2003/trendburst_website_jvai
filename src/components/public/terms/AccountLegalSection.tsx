"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCircle,
  ShieldCheck,
  CreditCard,
  Ban,
  Tag,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const subscriptionFeatures = [
  {
    icon: ShieldCheck,
    title: "Account Security",
    description:
      "You are responsible for safeguarding your login credentials and account access.",
  },
  {
    icon: CreditCard,
    title: "Subscription Terms",
    description:
      "Subscriptions auto-renew unless cancelled before the billing cycle ends.",
  },
  {
    icon: Ban,
    title: "Usage Restrictions",
    description:
      "Automated scraping or unauthorized data extraction is prohibited.",
  },
];

const permissions = [
  "Use insights for your business decisions",
  "Export data within your subscription limits",
  "Share reports with your internal team",
];

const restrictions = [
  "Reproduce or redistribute platform content",
  "Resell or commercially exploit the data",
  "Modify or create derivative works",
];

export function AccountLegalSection() {
  return (
    <section className="w-full py-24 bg-[#0D1C20] px-6 relative  overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- SECTION 1: ACCOUNT & SUBSCRIPTION --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0">
            <UserCircle className="w-8 h-8 text-[#00D1FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Account & Subscription
          </h2>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-16 leading-relaxed">
          Access to TrendBurst features is provided through subscription plans.
          You are responsible for maintaining the security of your account
          credentials and all activities under your account.
        </p>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {subscriptionFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className=" border border-white/5 rounded-[32px] p-8 hover:border-[#00D1FF]/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- THE 3D PURPLE TRANSITION VIBE --- */}
        <div className="relative w-full h-25 flex items-center justify-center pointer-events-none">
          <div
            className="absolute w-[600px] h-[500px] rounded-full blur-[120px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(175, 40, 249, 0.4) 0%, transparent 80%)",
            }}
          />
        </div>

        {/* --- SECTION 2: INTELLECTUAL PROPERTY --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0">
            <Tag className="w-8 h-8 text-[#00D1FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Intellectual Property
          </h2>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-5xl mb-16 leading-relaxed">
          All content, features, and functionality of TrendBurst—including but
          not limited to text, graphics, logos, icons, images, data
          compilations, and software—are the exclusive property of TrendBurst
          and are protected by intellectual property laws.
        </p>

        {/* Comparison Tables: You May vs You May Not */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* You May Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[32px] p-10"
          >
            <h3 className="text-2xl font-bold mb-8">You May :</h3>
            <ul className="space-y-6">
              {permissions.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-base md:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* You May Not Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[32px] p-10"
          >
            <h3 className="text-2xl font-bold mb-8">You May Not :</h3>
            <ul className="space-y-6">
              {restrictions.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-base md:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
