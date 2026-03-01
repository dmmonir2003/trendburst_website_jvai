/**
 * Admin Content Page
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const content = [
  {
    id: "1",
    title: "Latest Trending Products",
    type: "Blog Post",
    status: "published",
    date: "2024-03-01",
  },
  {
    id: "2",
    title: "Market Analysis Report",
    type: "Report",
    status: "draft",
    date: "2024-02-28",
  },
  {
    id: "3",
    title: "User Guide",
    type: "Documentation",
    status: "published",
    date: "2024-02-25",
  },
];

export default function AdminContentPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Content Management</h1>
            <p className="text-gray-600 mt-2">Manage all platform content</p>
          </div>
          <Button>Create Content</Button>
        </div>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {content.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Card className="p-6 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>{item.type}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 size={16} />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
