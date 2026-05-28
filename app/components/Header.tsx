"use client";

import {
  Bell,
  ShoppingCart,
  Globe,
  Star,
  Menu,
  Settings,
  Ticket,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-5 shrink-0 z-10">
      {/* Left: hamburger (mobile) + logo */}
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuClick}
          className="md:hidden p-1 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <a href="/home">
          <Image
            src="/Black-logo.svg"
            alt="BaseTools Logo"
            width={140}
            height={40}
            style={{ width: "140px", height: "auto" }}
          />
        </a>
      </div>

      {/* Center Buttons — desktop only */}
      <div className="hidden md:flex items-center gap-2">
        <button className="flex items-center gap-1.5 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          Seller Panel
        </button>
        <button className="flex items-center gap-1.5 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <span className="text-gray-400">+</span>
          Request Tool
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-3">
        <button className="flex items-center gap-1.5 bg-blue-600 text-white rounded px-3 py-1.5 text-xs font-medium hover:bg-blue-700 transition-colors">
          <span>₿</span>
          <span>0.00$</span>
        </button>

        <button
          className="relative text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => alert("Please deposit money to use service!")}
        >
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center">
            0
          </span>
        </button>

        <button
          className="hidden md:block text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => alert("Please deposit money to use service!")}
        >
          <ShoppingCart size={18} />
        </button>

        <button
          className="hidden md:block text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => alert("Please deposit money to use service!")}
        >
          <Globe size={18} />
        </button>

        <button
          className="hidden md:block text-yellow-400 hover:text-yellow-500 transition-colors"
          onClick={() => alert("Please deposit money to use service!")}
        >
          <Star size={18} fill="currentColor" />
        </button>

        {/* User avatar with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-1 group"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold group-hover:bg-blue-600 transition-colors ring-2 ring-transparent group-hover:ring-blue-200">
              U
            </span>
            <ChevronDown
              size={13}
              className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              {/* User info strip */}
              <div className="px-4 py-3 bg-linear-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                    U
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">
                      User
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      Manage your account
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className="py-1">
                <button
                  onClick={() => alert("Please deposit money to use service!")}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors group/item"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                    <Settings
                      size={14}
                      className="text-gray-500 group-hover/item:text-blue-600 transition-colors"
                    />
                  </span>
                  Settings
                </button>

                <button
                  onClick={() => alert("Please deposit money to use service!")}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors group/item"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-purple-100 transition-colors">
                    <Ticket
                      size={14}
                      className="text-gray-500 group-hover/item:text-purple-600 transition-colors"
                    />
                  </span>
                  Open Ticket
                </button>

                <div className="mx-3 my-1 border-t border-gray-100" />

                <button onClick={() => router.push("/")} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors group/item">
                  <span className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center group-hover/item:bg-red-100 transition-colors">
                    <LogOut
                      size={14}
                      className="text-red-400 group-hover/item:text-red-600 transition-colors"
                    />
                  </span>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
