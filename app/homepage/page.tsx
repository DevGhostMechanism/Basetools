"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import BitcoinDepositPanel from "../components/BitcoinDepositPanel";
import BitcoinPaymentPanel from "../components/BitcoinPaymentPanel";
import Header from "../components/Header";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header onMenuClick={() => setSidebarOpen((prev) => !prev)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-3 md:p-6">
          <div className="flex flex-col md:flex-row gap-5 items-start md:max-w-5xl">
            <BitcoinDepositPanel />
            <BitcoinPaymentPanel />
          </div>

          <footer className="mt-8 text-center text-xs text-gray-400 space-y-1">
            <p>
              © 2026 <span className="font-semibold text-gray-500">BaseTools</span> - Premium
              Digital Services
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:underline">
                Support
              </a>
              {" • "}
              <a href="#" className="text-blue-500 hover:underline">
                Reports
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
