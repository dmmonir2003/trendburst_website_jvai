// /**
//  * Sidebar Component
//  * Navigation sidebar for dashboard layout with 3D Glowing Active States
//  */

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   BarChart3,
//   TrendingUp,
//   Heart,
//   Activity,
//   Settings,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";
// import Image from "next/image";
// import logo from "../../../public/assets/svg_logo.svg";

// const navItems = [
//   { label: "Overview", href: "/overview", icon: BarChart3 },
//   { label: "Trending Products", href: "/trending-products", icon: TrendingUp },
//   { label: "Wishlist", href: "/wishlist", icon: Heart },
//   { label: "Activity Logs", href: "/activity-logs", icon: Activity },
//   { label: "Settings", href: "/settings", icon: Settings },
// ];

// interface SidebarProps {
//   onClose?: () => void;
//   isOpen?: boolean;
// }

// export function Sidebar({ onClose, isOpen = true }: SidebarProps) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { logout } = useAuth();
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   // Updated check to ensure exact matches for root paths
//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(href + "/");

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsMobileOpen(!isMobileOpen)}
//         className="fixed bottom-4 right-4 z-40 md:hidden p-2 bg-[#00EAFF] text-black rounded-lg shadow-[0_0_15px_rgba(0,234,255,0.5)]"
//       >
//         {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//     );
//   }

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <motion.aside
//         className="hidden md:flex flex-col w-64 bg-[#1C292A] text-white p-6 min-h-screen sticky top-0 border-r border-white/5"
//         initial={{ x: -100 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="mb-12">
//           <Link href="/overview">
//             <Image
//               src={logo}
//               width={168}
//               height={68}
//               alt="TrendBurst Logo"
//               priority
//             />
//           </Link>
//         </div>

//         <nav className="flex-1">
//           <ul className="space-y-4">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const active = isActive(item.href);
//               return (
//                 <motion.li
//                   key={item.href}
//                   whileHover={{ x: 4 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Link
//                     href={item.href}
//                     className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 border-2 ${
//                       active
//                         ? "border-[#00EAFF] text-[#00EAFF] bg-[#00EAFF]/5 shadow-[0_0_20px_rgba(0,234,255,0.3),inset_0_0_10px_rgba(0,234,255,0.2)]"
//                         : "border-transparent text-white hover:text-gray-200 hover:bg-white/5"
//                     }`}
//                   >
//                     <Icon
//                       size={22}
//                       className={
//                         active
//                           ? "drop-shadow-[0_0_8px_rgba(0,234,255,0.8)]"
//                           : ""
//                       }
//                     />
//                     {/* Added whitespace-nowrap here to keep text inline */}
//                     <span
//                       className={`font-medium whitespace-nowrap ${active ? "tracking-wide" : ""}`}
//                     >
//                       {item.label}
//                     </span>
//                   </Link>
//                 </motion.li>
//               );
//             })}
//           </ul>
//         </nav>

//         <motion.button
//           onClick={handleLogout}
//           whileHover={{ scale: 1.02 }}
//           className="w-full flex items-center gap-3 px-4 py-3 mt-auto rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all border-2 border-transparent"
//         >
//           <LogOut size={20} />
//           <span className="font-medium">Logout</span>
//         </motion.button>
//       </motion.aside>

//       {/* Mobile Sidebar (Applied similar logic) */}
//       {isMobileOpen && (
//         <motion.div
//           className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           onClick={() => setIsMobileOpen(false)}
//         >
//           <motion.aside
//             className="flex flex-col w-72 bg-[#1C292A] text-white p-6 min-h-screen"
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="mb-10 flex justify-between items-center border-b border-white/5 pb-4">
//               <Image src={logo} width={140} height={50} alt="Logo" />
//               <button
//                 onClick={() => setIsMobileOpen(false)}
//                 className="text-gray-400"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <nav className="flex-1">
//               <ul className="space-y-3">
//                 {navItems.map((item) => {
//                   const Icon = item.icon;
//                   const active = isActive(item.href);
//                   return (
//                     <li key={item.href}>
//                       <button
//                         onClick={() => {
//                           router.push(item.href);
//                           setIsMobileOpen(false);
//                         }}
//                         className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
//                           active
//                             ? "border-[#00EAFF] text-[#00EAFF] bg-[#00EAFF]/5 shadow-[0_0_15px_rgba(0,234,255,0.3)]"
//                             : "border-transparent text-gray-400 hover:bg-white/5"
//                         }`}
//                       >
//                         <Icon size={20} />
//                         <span className="font-medium">{item.label}</span>
//                       </button>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </nav>
//           </motion.aside>
//         </motion.div>
//       )}
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Heart,
  Activity,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import logo from "../../../public/assets/svg_logo.svg";

const navItems = [
  { label: "Overview", href: "/overview", icon: BarChart3 },
  { label: "Trending Products", href: "/trending-products", icon: TrendingUp },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Activity Logs", href: "/activity-logs", icon: Activity },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function Sidebar({ isMobileOpen, setIsMobileOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const NavList = ({ mobile = false }: { mobile?: boolean }) => (
    <ul className="space-y-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <motion.li
            key={item.href}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.href}
              onClick={() => mobile && setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 border-2 ${
                active
                  ? "border-[#00EAFF] text-[#00EAFF] bg-[#00EAFF]/5 shadow-[0_0_20px_rgba(0,234,255,0.3),inset_0_0_10px_rgba(0,234,255,0.2)]"
                  : "border-transparent text-white hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <Icon
                size={22}
                className={
                  active ? "drop-shadow-[0_0_8px_rgba(0,234,255,0.8)]" : ""
                }
              />
              <span
                className={`font-medium whitespace-nowrap ${active ? "tracking-wide" : ""}`}
              >
                {item.label}
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1C292A] text-white p-6 min-h-screen sticky top-0 border-r border-white/5">
        <div className="mb-12">
          <Link href="/overview">
            <Image
              src={logo}
              width={168}
              height={68}
              alt="TrendBurst Logo"
              priority
            />
          </Link>
        </div>

        <nav className="flex-1">
          <NavList />
        </nav>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 mt-auto rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all border-2 border-transparent"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Mobile Sidebar (Overlay & Drawer) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-[#1C292A] text-white p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <Image src={logo} width={140} height={50} alt="Logo" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg text-gray-400"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1">
                <NavList mobile />
              </nav>

              <button
                onClick={handleLogout}
                className="w-full flex  items-center gap-3 px-4 py-3 mt-auto rounded-xl text-red-400 bg-red-500/10"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
