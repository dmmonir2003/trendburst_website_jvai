/**
 * Sidebar Component
 * Navigation sidebar for dashboard layout
 */

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Heart,
  Activity,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Overview", href: "/overview", icon: BarChart3 },
  { label: "Trending Products", href: "/trending-products", icon: TrendingUp },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Activity Logs", href: "/activity-logs", icon: Activity },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
  isOpen?: boolean;
}

export function Sidebar({ onClose, isOpen = true }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => pathname.includes(href);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleNavClick = (href: string) => {
    router.push(href);
    setIsMobileOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-4 right-4 z-40 md:hidden p-2 bg-blue-600 text-white rounded-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    );
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-6 min-h-screen sticky top-0"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <Link
            href="/overview"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            TrendBurst
          </Link>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <motion.li key={item.href} whileHover={{ x: 4 }}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.02 }}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-red-600/20 hover:text-red-400 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </motion.button>
      </motion.aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileOpen(false)}
        >
          <motion.aside
            className="flex flex-col w-64 bg-gray-900 text-white p-6 min-h-screen"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex justify-between items-center">
              <Link
                href="/overview"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                TrendBurst
              </Link>
              <button onClick={() => setIsMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-red-600/20 hover:text-red-400 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </motion.aside>
        </motion.div>
      )}
    </>
  );
}
