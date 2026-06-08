"use client";

import { useState } from "react";
import { Users, Database, Monitor } from "lucide-react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const feedItems = [
  { initials: "DA", count: 320, name: "OurTime(Unpaid)", section: "Accounts", seller: "Dati***" },
  { initials: "DA", count: 341, name: "Match(Unpaid)", section: "Accounts", seller: "Dati***" },
  { initials: "SA", count: 1, name: "Adultfriendfinder(PAID)", section: "Accounts", seller: "Sama***" },
  { initials: "RE", count: 1, name: "Seeking(Paid)", section: "Accounts", seller: "reCA***" },
  { initials: "RE", count: 8, name: "OurTime(Paid)", section: "Accounts", seller: "reCA***" },
  { initials: "RE", count: 4, name: "OurTime(Paid)", section: "Accounts", seller: "reCA***" },
  { initials: "PW", count: 495, name: "POF(UNPAID)", section: "Accounts", seller: "pwne***" },
  { initials: "RE", count: 2, name: "OurTime(Paid)", section: "Accounts", seller: "reCA***" },
  { initials: "ZO", count: 1, name: "Zoosk(PAID)", section: "Accounts", seller: "Z0OS***" },
  { initials: "PW", count: 417, name: "POF(UNPAID)", section: "Accounts", seller: "pwne***" },
  { initials: "ZO", count: 1, name: "Match(PAID)", section: "Accounts", seller: "Z0OS***" },
  { initials: "ZO", count: 1, name: "Seeking(PAID)", section: "Accounts", seller: "Z0OS***" },
  { initials: "ZO", count: 2, name: "OurTime(PAID)", section: "Accounts", seller: "Z0OS***" },
  { initials: "DA", count: 341, name: "Match(Unpaid)", section: "Accounts", seller: "Dati***" },
  { initials: "SU", count: 508, name: "OurTime(Unpaid)", section: "Accounts", seller: "Supe***" },
  { initials: "DA", count: 322, name: "OurTime(Unpaid)", section: "Accounts", seller: "Dati***" },
  { initials: "SP", count: 501, name: "OurTime(Unpaid)", section: "Accounts", seller: "Spac***" },
  { initials: "SU", count: 472, name: "Match(Unpaid)", section: "Accounts", seller: "Supe***" },
  { initials: "SP", count: 484, name: "Match(Unpaid)", section: "Accounts", seller: "Spac***" },
  { initials: "DA", count: 312, name: "Match(Unpaid)", section: "Accounts", seller: "Dati***" },
];

const trendingAccounts = [
  "Zoosk(Unpaid)",
  "searchingforsingles.com(unpaid)",
  "BlackPeopleMeet(UnPaid)",
  "Ourtime(Unpaid)",
  "Match(UnPaid)",
  "POF(UNPAID)",
  "ChristianFilipina(Unpaid)",
  "Stir(Unpaid)",
  "Zillow",
  "fetlife",
];

function getTrendingLabel() {
  const now = new Date();
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const day = now.getDate();
  const suffix = day === 1 || day === 21 || day === 31 ? "ST" : day === 2 || day === 22 ? "ND" : day === 3 || day === 23 ? "RD" : "TH";
  return `${days[now.getDay()]} ${day}${suffix} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

const avatarColors: Record<string, string> = {
  DA: "bg-blue-600",
  SA: "bg-blue-600",
  RE: "bg-blue-500",
  PW: "bg-blue-700",
  ZO: "bg-blue-800",
  SU: "bg-blue-600",
  SP: "bg-blue-500",
};

export default function ExplorePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [trendingTab, setTrendingTab] = useState<"Accounts" | "Stuffs">("Accounts");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeItem="Explore" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-3 md:p-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Activity Feed */}
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {feedItems.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 px-4 py-3.5 ${
                        i < feedItems.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${
                          avatarColors[item.initials] ?? "bg-blue-600"
                        }`}
                      >
                        {item.initials}
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        Added{" "}
                        <span className="font-bold text-orange-500">{item.count}</span>{" "}
                        items of{" "}
                        <span className="font-semibold text-blue-600">{item.name}</span>{" "}
                        in The{" "}
                        <span className="font-semibold text-green-600">{item.section}</span>{" "}
                        section.
                        <br />
                        <span className="text-gray-500">By </span>
                        <span className="font-medium text-teal-500">{item.seller}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel */}
              <div className="lg:w-72 xl:w-80 flex flex-col gap-4 shrink-0">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center text-center shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Users size={18} className="text-gray-400" />
                    </div>
                    <span className="font-bold text-base text-gray-800">368.8k</span>
                    <span className="text-[11px] text-gray-500 mt-0.5 leading-tight">Total Accounts</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center text-center shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Database size={18} className="text-gray-400" />
                    </div>
                    <span className="font-bold text-base text-gray-800">27.2k</span>
                    <span className="text-[11px] text-gray-500 mt-0.5 leading-tight">Total Stuff</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center text-center shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Monitor size={18} className="text-gray-400" />
                    </div>
                    <span className="font-bold text-base text-gray-800">1.6k</span>
                    <span className="text-[11px] text-gray-500 mt-0.5 leading-tight">Total Tutorials</span>
                  </div>
                </div>

                {/* Trending */}
                <div className="rounded-xl overflow-hidden shadow-sm" style={{ background: "#1a2a4a" }}>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#1e3a8a" }}>
                    <span className="text-white text-[11px] font-bold uppercase tracking-wide">
                      ☑ TRENDING: {getTrendingLabel()}
                    </span>
                  </div>
                  <div className="flex border-b border-white/10 px-4">
                    <button
                      onClick={() => setTrendingTab("Accounts")}
                      className={`py-2.5 text-sm font-medium mr-5 transition-colors ${
                        trendingTab === "Accounts"
                          ? "text-white border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      Accounts
                    </button>
                    <button
                      onClick={() => setTrendingTab("Stuffs")}
                      className={`py-2.5 text-sm font-medium transition-colors ${
                        trendingTab === "Stuffs"
                          ? "text-white border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      Stuffs
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    {trendingAccounts.map((item, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-6 py-4 text-center border-t border-gray-200">
              <p className="text-sm text-gray-600">
                © 2026 <strong>BaseTools</strong> – Premium Digital Services
              </p>
              <p className="text-xs text-gray-400 mt-0.5 space-x-1">
                <a href="#" className="text-blue-500 hover:underline">Support</a>
                <span>•</span>
                <a href="#" className="text-blue-500 hover:underline">Reports</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
