/**
 * Pricing Page
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PricingSection } from "@/components/public/pricing/PricingSection";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals",
    features: [
      "Up to 10 watchlists",
      "Basic analytics",
      "Email alerts",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "For serious traders",
    featured: true,
    features: [
      "Unlimited watchlists",
      "Advanced analytics",
      "Real-time alerts",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "Team collaboration tools",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className=" ">
      <PricingSection></PricingSection>
    </div>
  );
}
