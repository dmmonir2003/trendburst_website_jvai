/**
 * Error Fallback Component
 * Reusable error boundary UI
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ErrorFallbackProps {
  error: string;
  onRetry?: () => void;
}

export function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 px-4"
    >
      <AlertCircle className="text-red-600 mb-4" size={48} />
      <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        {error || "An unexpected error occurred. Please try again later."}
      </p>
      {onRetry && <Button onClick={onRetry}>Try Again</Button>}
    </motion.div>
  );
}
