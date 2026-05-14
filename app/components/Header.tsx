"use client";

import { Bell, ShoppingCart, Globe, Star } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 shrink-0 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a href="">
          <img
            src="/Black-logo.svg"
            alt="BaseTools Logo"
            height="40px"
            width="140px"
          />
        </a>
      </div>

      {/* Center Buttons */}
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-3">
        {/* Balance */}
        <button className="flex items-center gap-1.5 bg-blue-600 text-white rounded px-3 py-1.5 text-xs font-medium hover:bg-blue-700 transition-colors">
          <span>₿</span>
          <span>0.00$</span>
        </button>

        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center">
            0
          </span>
        </button>

        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <ShoppingCart size={18} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <Globe size={18} />
        </button>

        <button className="text-yellow-400 hover:text-yellow-500 transition-colors">
          <Star size={18} fill="currentColor" />
        </button>

        {/* Avatar */}
        <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
          U
        </button>
      </div>
    </header>
  );
}
