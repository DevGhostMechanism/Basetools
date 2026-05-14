"use client";

import { useState } from "react";
import {
  Home,
  Compass,
  Heart,
  Lightbulb,
  Wrench,
  Monitor,
  MessageSquare,
  ShoppingBag,
  Share2,
  Wallet,
  HelpCircle,
  Users,
  BookOpen,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  children?: string[];
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", icon: <Home size={16} /> },
  { label: "Explore", icon: <Compass size={16} /> },
  { label: "Interests", icon: <Heart size={16} /> },
  { label: "Discover", icon: <Lightbulb size={16} /> },
  { label: "Tools", icon: <Wrench size={16} />, children: ["All Tools", "My Tools"] },
  {
    label: "RDPs",
    icon: <Monitor size={16} />,
    children: ["RDPs Marketplace", "Purchased RDPs"],
    active: true,
  },
  { label: "SMS Codes", icon: <MessageSquare size={16} />, children: ["Buy SMS", "My SMS"] },
  { label: "Purchases", icon: <ShoppingBag size={16} /> },
  {
    label: "Social media",
    icon: <Share2 size={16} />,
    children: ["Instagram", "Twitter", "Facebook"],
  },
  { label: "Balance", icon: <Wallet size={16} />, children: ["Deposit", "Withdraw", "History"] },
  { label: "Support", icon: <HelpCircle size={16} />, children: ["Tickets", "Live Chat"] },
  { label: "Affiliate", icon: <Users size={16} /> },
  { label: "Rules", icon: <BookOpen size={16} /> },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<string[]>(["RDPs"]);

  const toggle = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <aside
      className={`
        w-46.25 bg-white border-r border-gray-200 flex flex-col shrink-0
        fixed md:static inset-y-0 left-0 z-20 h-full md:h-auto
        transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Mobile close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 md:hidden">
        <span className="text-sm font-semibold text-gray-700">Menu</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {navItems.map((item) => {
          const isMenuOpen = openMenus.includes(item.label);
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div key={item.label}>
              <button
                onClick={() => {
                  if (hasChildren) toggle(item.label);
                  else alert("hello");
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors
                  ${item.active ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <span className={item.active ? "text-blue-500" : "text-gray-400"}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {hasChildren && (
                  <span className="text-gray-400">
                    {isMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                )}
              </button>

              {hasChildren && isMenuOpen && (
                <div className="bg-gray-50">
                  {item.children!.map((child) => (
                    <button
                      key={child}
                      onClick={() => alert("hello")}
                      className="w-full text-left text-sm text-gray-500 hover:text-gray-700 pl-11 pr-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400 space-x-2">
        <span>© 2015-2024 BaseTools</span>
        <a href="#" className="text-blue-500 hover:underline">Billing History</a>
        <span>·</span>
        <a href="#" className="text-blue-500 hover:underline">Market Rules</a>
      </div>
    </aside>
  );
}
