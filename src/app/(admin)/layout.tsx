/**
 * Admin Layout
 * Protected layout for admin users only
 */

"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  // Check if user is admin
  // if (!isAuthenticated || !user || user.role !== "admin") {
  //   router.push("/overview");
  //   return null;
  // }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 min-h-screen sticky top-0">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="space-y-4">
          <a
            href="/admin/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </a>
          <a
            href="/admin/users"
            className="block px-4 py-2 rounded hover:bg-gray-800"
          >
            Users
          </a>
          <a
            href="/admin/content"
            className="block px-4 py-2 rounded hover:bg-gray-800"
          >
            Content
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
