/**
 * Invalid OTP Page
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InvalidOTPPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <XCircle size={64} className="mx-auto text-red-600" />
      <div>
        <h1 className="text-2xl font-bold">Invalid OTP</h1>
        <p className="text-gray-600 mt-2">
          The OTP you entered is invalid or expired
        </p>
      </div>
      <Button onClick={() => router.push("/verify-otp")} className="w-full">
        Try Again
      </Button>
      <Button
        variant="ghost"
        onClick={() => router.push("/forgot-password")}
        className="w-full"
      >
        Request New OTP
      </Button>
    </motion.div>
  );
}
