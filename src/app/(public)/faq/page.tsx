/**
 * FAQ Page
 */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is TrendBurst?",
    answer:
      "TrendBurst is a real-time product trend tracking platform that helps you discover trending products and monitor market movements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free account, set up your watchlists, and start tracking trends. It takes less than 5 minutes to get started.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use enterprise-grade encryption and follow industry best practices to ensure your data is always secure.",
  },
  {
    question: "Can I use the API?",
    answer:
      "Yes, API access is available on our Pro and Enterprise plans. Contact our sales team for more details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, you can sign up for a free account with limited features. Upgrade anytime to access premium functionality.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "#f3f4f6" : "#ffffff" }}
      className="border rounded-lg p-6 mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-semibold text-left"
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-4">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about TrendBurst
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </motion.div>
    </div>
  );
}
