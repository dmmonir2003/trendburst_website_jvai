"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "@/components/shared/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Loader2, Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/svg_logo.svg";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-cyan-500" size={40} />
      </div>
    );
  }

  // if (!isAuthenticated || !user) {
  //   router.push("/login");
  //   return null;
  // }

  return (
    /* flex items-start is crucial for sticky to work correctly */
    <div className="flex min-h-screen bg-[#0D181B] items-start">
      {/* Sidebar - Desktop is sticky top-0, Mobile is a fixed drawer */}
      <Sidebar
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Mobile Header - Sticky only on mobile */}
        <header className="md:hidden flex items-center justify-between p-4 bg-[#1C292A] text-white sticky top-0 z-30 shadow-md">
          <Image src={logo} width={58} height={28} alt="TrendBurst Logo" />
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content Area - This will scroll while Sidebar stays fixed */}
        <main className="p-4 md:p-8 w-full min-h-screen">{children}</main>
      </div>
    </div>
  );
}
