/**
 * Contact Page
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import ContactSection from "@/components/public/contact/ContactSection";

export default function ContactPage() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success("Message sent! We will get back to you soon.");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Mail, label: "Email", value: "hello@trendburst.io" },
          { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
          { icon: MapPin, label: "Location", value: "San Francisco, CA" },
        ].map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Icon className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">{contact.label}</h3>
              <p className="text-gray-600">{contact.value}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              required
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Subject</label>
          <Input
            required
            placeholder="What is this about?"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            placeholder="Your message..."
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form> */}

      <ContactSection></ContactSection>
    </div>
  );
}
