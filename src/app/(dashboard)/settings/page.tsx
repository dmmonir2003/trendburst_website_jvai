/**
 * Settings Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Bell, Lock, Eye, LogOut } from "lucide-react";

const settingsSections = [
  {
    icon: Bell,
    title: "Notifications",
    description: "Manage your notification preferences",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Update your password and security settings",
  },
  {
    icon: Eye,
    title: "Privacy",
    description: "Control your privacy settings",
  },
];

export default function SettingsPage() {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-8 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences</p>
      </motion.div>

      {/* User Profile Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="font-semibold">{user?.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <p className="font-semibold">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Settings Sections */}
      <motion.div
        className="space-y-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Card className="p-6 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <Icon className="text-blue-600" size={32} />
                  <div>
                    <h3 className="font-semibold">{section.title}</h3>
                    <p className="text-sm text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400">&gt;</span>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Logout Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 border-red-200 bg-red-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <LogOut className="text-red-600" size={32} />
              <div>
                <h3 className="font-semibold text-red-900">Sign Out</h3>
                <p className="text-sm text-red-700">
                  Sign out from all devices
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
