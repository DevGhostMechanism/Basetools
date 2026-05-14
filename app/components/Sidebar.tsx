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

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>(["RDPs"]);

  const toggle = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <aside className="w-46.25 min-h-screen bg-white border-r border-gray-200 flex flex-col shrink-0">
      <nav className="flex-1 py-3 overflow-y-auto">
        {navItems.map((item) => {
          const isOpen = openMenus.includes(item.label);
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div key={item.label}>
              <button
                onClick={() => hasChildren && toggle(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors
                  ${item.active ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <span className={item.active ? "text-blue-500" : "text-gray-400"}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {hasChildren && (
                  <span className="text-gray-400">
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                )}
              </button>

              {hasChildren && isOpen && (
                <div className="bg-gray-50">
                  {item.children!.map((child) => (
                    <button
                      key={child}
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
