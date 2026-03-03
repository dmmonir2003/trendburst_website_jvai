"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: 59,
    description:
      "Perfect for sellers just getting started with marketplace analytics",
    features: [
      "Access to 1 marketplace",
      "Basic pricing trends",
      "Weekly reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: 89,
    description:
      "Perfect for sellers just getting started with marketplace analytics",
    isPopular: true,
    features: [
      "Access to all 3 marketplaces",
      "Advance pricing insights",
      "Daily reports",
      "Custom dashboard",
      "90 day historical Data",
      "Priority support",
    ],
  },
  {
    name: "Add-ones",
    price: 5,
    description:
      "Perfect for sellers just getting started with marketplace analytics",
    features: [
      "Access to 1 marketplace",
      "View 10 trending products",
      "Basic pricing trends",
      "Weekly reports",
      "Email support",
    ],
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );

  return (
    <section className="w-full py-24  text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Simple, <span className="text-[#00D1FF]">Transparent</span> Pricing
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Get the marketplace insights you need to make smarter decisions. Track
          Pricing trends, monitor Performance and stay ahead of the competition
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="bg-black border border-white/10 p-1 rounded-2xl flex relative">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 px-8 py-3 rounded-xl text-lg font-semibold transition-all ${billingCycle === "monthly" ? "text-black" : "text-white"}`}
            >
              Monthly
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 bg-white rounded-xl -z-10"
                />
              )}
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`relative z-10 px-8 py-3 rounded-xl text-lg font-semibold transition-all ${billingCycle === "annual" ? "text-black" : "text-white"}`}
            >
              Annual
              {billingCycle === "annual" && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 bg-white rounded-xl -z-10"
                />
              )}
            </button>
            {/* Save 10% Badge */}
            <div className="absolute -top-4 -right-10 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-md">
              Save 10%
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-[32px] border transition-all duration-500 ${
        plan.isPopular
          ? "bg-[#090E10] border-[#00D1FF] shadow-[0_0_40px_rgba(0,209,255,0.15)]"
          : "bg-black border-white/10"
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D1FF] text-black font-bold text-xs px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,209,255,0.5)]">
          Most Popular
        </div>
      )}

      <h3
        className={`text-2xl font-bold text-left mb-4 ${plan.isPopular ? "text-[#00D1FF]" : "text-white"}`}
      >
        {plan.name}
      </h3>
      <p className="text-gray-400 text-sm text-left mb-8">{plan.description}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-500 text-sm">/month</span>
      </div>

      <div className="space-y-4 mb-10 flex-grow text-left">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-md bg-[#00D1FF]/10 text-[#00D1FF]">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Button Style */}
      <button
        className={`w-full py-4 rounded-xl font-bold transition-all ${
          plan.isPopular
            ? "bg-[#00D1FF] text-black hover:bg-[#00B8CC] shadow-[0_0_20px_rgba(0,209,255,0.3)]"
            : "bg-transparent border border-[#00D1FF]/40 text-[#00D1FF] hover:bg-[#00D1FF]/5"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
