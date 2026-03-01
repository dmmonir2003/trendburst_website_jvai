/**
 * Forgot Password Page
 */

import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password | TrendBurst",
  description: "Reset your TrendBurst password",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
