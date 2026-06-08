"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const serverPlans = [
  {
    name: "Offshore Starter Server",
    price: "$30.00 USD",
    vCores: "2 vCores",
    ram: "6 GB RAM",
    disk: "31 GB Disk Storage",
    bandwidth: "Unlimited Bandwidth",
    ip: "1x Dedicated IP",
    featured: false,
  },
  {
    name: "Offshore Pro Server",
    price: "$50.00 USD",
    vCores: "4 vCores",
    ram: "12 GB RAM",
    disk: "70 GB Disk Storage",
    bandwidth: "Unlimited Bandwidth",
    ip: "1x Dedicated IP",
    featured: true,
  },
  {
    name: "Offshore Elite Server",
    price: "$90.00 USD",
    vCores: "6 vCores",
    ram: "20 GB RAM",
    disk: "80 GB Disk Storage",
    bandwidth: "Unlimited Bandwidth",
    ip: "1x Dedicated IP",
    featured: false,
  },
  {
    name: "Offshore Ultra Server",
    price: "$150.00 USD",
    vCores: "12 vCores",
    ram: "12 GB RAM",
    disk: "90 GB Disk Storage",
    bandwidth: "Unlimited Bandwidth",
    ip: "1x Dedicated IP",
    featured: false,
  },
];

export default function VpsRdpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeItem="Servers"
        />

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8 max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-light text-gray-700 mb-1">
              Server Plans
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Choose your server package.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {serverPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-sm border-2 transition-colors ${
                    plan.featured
                      ? "border-blue-500"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-5">
                    {plan.name}
                  </h2>

                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">
                    Starting From
                  </p>
                  <p className="text-3xl font-bold text-gray-800 mb-1">
                    {plan.price}
                  </p>
                  <p className="text-sm text-blue-500 font-medium mb-6">
                    Monthly
                  </p>

                  <div className="w-full space-y-2.5 mb-8 text-sm text-gray-600">
                    <p>{plan.vCores}</p>
                    <p>{plan.ram}</p>
                    <p>{plan.disk}</p>
                    <p>{plan.bandwidth}</p>
                    <p>{plan.ip}</p>
                  </div>

                  <div className="flex gap-3 w-full">
                    <button
                      onClick={() => alert("Please deposit money to use service!")}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Buy RDP
                    </button>
                    <button
                      onClick={() => alert("Please deposit money to use service!")}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Buy VPS
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="mt-10 py-4 text-center border-t border-gray-200">
              <p className="text-sm text-gray-600">
                © 2026 <strong>BaseTools</strong> – Premium Digital Services
              </p>
              <p className="text-xs text-gray-400 mt-0.5 space-x-1">
                <a href="#" className="text-blue-500 hover:underline">
                  Support
                </a>
                <span>•</span>
                <a href="#" className="text-blue-500 hover:underline">
                  Reports
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
