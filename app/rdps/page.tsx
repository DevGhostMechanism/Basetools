"use client";

import { useState } from "react";
import { Info, AlertTriangle, XCircle } from "lucide-react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const rdpListings = [
  {
    country: "USA , CA , DE",
    description:
      "RDP MONTHLY NOT BLACKLISTED - 2 GB DDR3 RAM , 35 GB SSD Space , 1 CPU vCore , 1 TB Bandwidth , 1 Dedicated IP , Super Class Remote Desktop ,100% Up-time Guarantee",
    seller: "BASETOOLS",
    price: "$21.00",
  },
  {
    country: "USA , CA , DE",
    description:
      "RDP MONTHLY NOT BLACKLISTED - 4 GB DDR3 RAM , 45 GB SSD Space , 2 CPU vCore , 2 TB Bandwidth , 1 Dedicated IP , Super Class Remote Desktop ,100% Up-time Guarantee",
    seller: "BASETOOLS",
    price: "$36.00",
  },
  {
    country: "USA , CA , DE",
    description:
      "RDP MONTHLY NOT BLACKLISTED - 6 GB DDR3 RAM , 55 GB SSD Space , 2 CPU vCore , 3 TB Bandwidth , 1 Dedicated IP , Super Class Remote Desktop ,100% Up-time Guarantee",
    seller: "BASETOOLS",
    price: "$45.00",
  },
  {
    country: "USA , CA , DE",
    description:
      "RDP MONTHLY NOT BLACKLISTED - 8 GB DDR3 RAM , 75 GB SSD Space , 4 CPU vCore , 4 TB Bandwidth , 1 Dedicated IP , Super Class Remote Desktop ,100% Up-time Guarantee",
    seller: "BASETOOLS",
    price: "$67.00",
  },
  {
    country: "USA , CA , DE",
    description:
      "RDP MONTHLY NOT BLACKLISTED - 12 GB DDR3 RAM , 85 GB SSD Space , 4 CPU vCore , 6 TB Bandwidth , 1 Dedicated IP , Super Class Remote Desktop ,100% Up-time Guarantee",
    seller: "BASETOOLS",
    price: "$79.00",
  },
];

const rules = [
  "NO Refund",
  "NO phishing page/child porn contents.",
  "NO Sending spam/phishing emails.",
  "NO Scanning Ports/IP/SSH/RDP",
  "NO Brute Force Attack, DDOS,",
  "NO Abuse IO Read/Write Disk Usage.",
];

export default function RDPsMarketplacePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState("25");

  const filtered = rdpListings.filter(
    (r) =>
      r.country.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.seller.toLowerCase().includes(search.toLowerCase()) ||
      r.price.toLowerCase().includes(search.toLowerCase()),
  );

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

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeItem="RDPs" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-3 md:p-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  {/* Info alert */}
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-3">
                    <Info size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800">
                      Request the Rdp that you need we will make it ready in{" "}
                      <strong>24H</strong> – Rdps Are legal and valid for one month
                    </p>
                  </div>

                  {/* Warning alert */}
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-5">
                    <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 font-semibold">
                      Follow rules of RDPs , do not install antivirus on rdp will block
                      connections , read rules before you purchase RDP !
                    </p>
                  </div>

                  {/* Table controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>show</span>
                      <select
                        value={show}
                        onChange={(e) => setShow(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      <span>entries</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Search...:</span>
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-600 text-white text-left">
                          <th className="px-4 py-3 font-semibold whitespace-nowrap">
                            Country ↑↓
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            Description ↑↓
                          </th>
                          <th className="px-4 py-3 font-semibold whitespace-nowrap">
                            seller ↑↓
                          </th>
                          <th className="px-4 py-3 font-semibold whitespace-nowrap">
                            Price ↑↓
                          </th>
                          <th className="px-4 py-3 font-semibold whitespace-nowrap">
                            Request ↑↓
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((row, i) => (
                          <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                          >
                            <td className="px-4 py-4 text-gray-700 align-top whitespace-nowrap text-center">
                              {row.country}
                            </td>
                            <td className="px-4 py-4 text-gray-700 align-top leading-relaxed">
                              {row.description}
                            </td>
                            <td className="px-4 py-4 text-gray-700 align-top text-center whitespace-nowrap">
                              {row.seller}
                            </td>
                            <td className="px-4 py-4 text-gray-700 align-top text-center font-semibold whitespace-nowrap">
                              {row.price}
                            </td>
                            <td className="px-4 py-4 align-top text-center">
                              <button
                                onClick={() =>
                                  alert("Please deposit money to use service!")
                                }
                                className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors"
                              >
                                Request
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                    <p className="text-sm text-gray-600">
                      Showing 1 to {filtered.length} of {filtered.length} entries
                    </p>
                    <div className="flex items-center gap-1">
                      <button className="px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-500 hover:bg-gray-50 transition-colors">
                        Previous
                      </button>
                      <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded font-medium">
                        1
                      </button>
                      <button className="px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-500 hover:bg-gray-50 transition-colors">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules panel */}
              <div className="lg:w-56 xl:w-64 shrink-0">
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-600">
                    <AlertTriangle size={15} className="text-white" />
                    <span className="text-white font-bold text-sm">Rules</span>
                  </div>
                  <div className="bg-white p-4 space-y-3">
                    {rules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{rule}</span>
                      </div>
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
