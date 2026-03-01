/**
 * Pricing Page
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">
          Choose the plan that fits your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className={`p-8 h-full flex flex-col ${plan.featured ? "ring-2 ring-blue-600" : ""}`}
            >
              {plan.featured && (
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>

              <Button
                className="w-full mb-8"
                variant={plan.featured ? "default" : "outline"}
              >
                Get Started
              </Button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
