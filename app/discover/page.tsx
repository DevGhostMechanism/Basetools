"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const newToDiscoverData = [
  { type: "Adultfriendfinder", paid: 238, unpaid: 7164 },
  { type: "Shaadi", paid: 499, unpaid: 1881 },
  { type: "Dating", paid: 267, unpaid: 18272 },
  { type: "Benaughty", paid: 3610, unpaid: 15762 },
  { type: "Beanughty", paid: 0, unpaid: 7362 },
  { type: "Datemyage", paid: 375, unpaid: 7496 },
  { type: "Lovoo", paid: 1222, unpaid: 432 },
  { type: "Flirt", paid: 779, unpaid: 2676 },
  { type: "DreamSingles", paid: 66, unpaid: 1050 },
  { type: "Iwantu", paid: 104, unpaid: 989 },
  { type: "IamNaughty", paid: 165, unpaid: 9390 },
  { type: "Be2", paid: 498, unpaid: 746 },
  { type: "Mingle2", paid: 12, unpaid: 7938 },
  { type: "WantMatures", paid: 38, unpaid: 1544 },
  { type: "AsianDate", paid: 99, unpaid: 12466 },
  { type: "blackpeoplemeet", paid: 5, unpaid: 2551 },
  { type: "ChristianFilipina", paid: 1, unpaid: 3510 },
  { type: "QuickFlirt", paid: 226, unpaid: 1897 },
  { type: "UpForit", paid: 328, unpaid: 1032 },
  { type: "christiandatingforfree", paid: 69, unpaid: 1975 },
  { type: "WhatsYourPrice", paid: 136, unpaid: 2393 },
  { type: "Eurodate", paid: 1, unpaid: 7862 },
  { type: "AfroRomance", paid: 17, unpaid: 1087 },
  { type: "2RedBeans", paid: 7, unpaid: 754 },
  { type: "CheekyLovers", paid: 546, unpaid: 1070 },
  { type: "Cupid", paid: 23, unpaid: 3421 },
  { type: "Loveflutter", paid: 8, unpaid: 562 },
  { type: "Badoo", paid: 412, unpaid: 9834 },
  { type: "MeetMe", paid: 55, unpaid: 2187 },
  { type: "Skout", paid: 30, unpaid: 1763 },
  { type: "Zoosk(Free)", paid: 0, unpaid: 4509 },
  { type: "HowAboutWe", paid: 11, unpaid: 987 },
  { type: "Spark", paid: 6, unpaid: 743 },
  { type: "DateHookup", paid: 3, unpaid: 1284 },
  { type: "Oasis", paid: 44, unpaid: 2876 },
  { type: "Passion", paid: 19, unpaid: 3102 },
  { type: "FriendFinder", paid: 87, unpaid: 5432 },
  { type: "AshleyMadison", paid: 201, unpaid: 6791 },
  { type: "Plenty More Fish", paid: 9, unpaid: 1456 },
  { type: "Lavalife", paid: 14, unpaid: 892 },
  { type: "SinglesAroundMe", paid: 2, unpaid: 634 },
  { type: "DatingDirect", paid: 33, unpaid: 2098 },
  { type: "eHarmony AU", paid: 27, unpaid: 1743 },
  { type: "RSVP", paid: 51, unpaid: 3287 },
  { type: "Zest", paid: 4, unpaid: 521 },
  { type: "CatholicMatch", paid: 16, unpaid: 1132 },
  { type: "BigChurch", paid: 7, unpaid: 865 },
  { type: "SeniorPeopleMeet", paid: 22, unpaid: 1987 },
  { type: "OurTime UK", paid: 13, unpaid: 1543 },
  { type: "Stir", paid: 5, unpaid: 723 },
];

const topSellingData = [
  { type: "Edate", paid: 170, unpaid: 78488 },
  { type: "Match", paid: 154, unpaid: 41719 },
  { type: "EliteSingles", paid: 4, unpaid: 28670 },
  { type: "ChristianMingle", paid: 65, unpaid: 28007 },
  { type: "Zoosk", paid: 18, unpaid: 1306 },
  { type: "POF", paid: 17, unpaid: 11781 },
  { type: "Seeking", paid: 92, unpaid: 9157 },
  { type: "SilverSingles", paid: 15, unpaid: 4961 },
  { type: "OurTime", paid: 103, unpaid: 22350 },
  { type: "jdate", paid: 4, unpaid: 8845 },
  { type: "OkCupid", paid: 1, unpaid: 2184 },
  { type: "Eharmony", paid: 19, unpaid: 0 },
];

const datingsItems = [
  { name: "BeNaughty(Paid)", count: 2343, color: "text-green-600" },
  { name: "EliteSingles(Paid)", count: 9, color: "text-green-600" },
  { name: "Lovoo(Paid)", count: 263, color: "text-green-600" },
];

const securityItems = [
  { name: "ExpressVPN", count: 2359 },
  { name: "HMAVPN", count: 276 },
  { name: "NordVPN", count: 267 },
];

const streamingItems = [
  { name: "Netflix", count: 22 },
  { name: "xfinity", count: 1 },
];

function BuyButton({ count }: { count: number }) {
  return (
    <button
      onClick={() => alert("Please deposit money to use service!")}
      className="inline-flex flex-col items-center leading-tight bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded px-2 py-1 min-w-[52px] transition-colors"
    >
      <span>{count.toLocaleString()}</span>
      <span>- Buy</span>
    </button>
  );
}

type SortDir = "asc" | "desc" | null;

function useSortedData<T extends { type: string; paid: number; unpaid: number }>(
  data: T[],
) {
  const [sort, setSort] = useState<{ col: keyof T; dir: SortDir }>({
    col: "type" as keyof T,
    dir: null,
  });

  const sorted = useMemo(() => {
    if (!sort.dir) return data;
    return [...data].sort((a, b) => {
      const av = a[sort.col];
      const bv = b[sort.col];
      if (typeof av === "string" && typeof bv === "string") {
        return sort.dir === "asc"
          ? av.localeCompare(bv)
          : bv.localeCompare(av);
      }
      return sort.dir === "asc"
        ? (av as number) - (bv as number)
        : (bv as number) - (av as number);
    });
  }, [data, sort]);

  const toggle = (col: keyof T) => {
    setSort((prev) =>
      prev.col === col
        ? { col, dir: prev.dir === "asc" ? "desc" : prev.dir === "desc" ? null : "asc" }
        : { col, dir: "asc" },
    );
  };

  return { sorted, sort, toggle };
}

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="ml-0.5 inline-flex flex-col leading-none text-[9px] select-none">
      <span className={active && dir === "asc" ? "text-blue-500" : "text-gray-400"}>▲</span>
      <span className={active && dir === "desc" ? "text-blue-500" : "text-gray-400"}>▼</span>
    </span>
  );
}

function DataTable({
  title,
  color,
  data,
  pageSize = 25,
}: {
  title: string;
  color: string;
  data: { type: string; paid: number; unpaid: number }[];
  pageSize?: number;
}) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(pageSize);
  const { sorted, sort, toggle } = useSortedData(data);

  const filtered = useMemo(
    () =>
      sorted.filter((r) =>
        r.type.toLowerCase().includes(search.toLowerCase()),
      ),
    [sorted, search],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / entries));
  const paginated = filtered.slice((page - 1) * entries, page * entries);

  const pageNums = Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 min-w-0">
      {/* Header */}
      <div
        className="py-2.5 px-4 text-white text-sm font-semibold text-center"
        style={{ background: color }}
      >
        {title}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          Show
          <select
            value={entries}
            onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}
            className="border border-gray-300 rounded px-1 py-0.5 text-xs"
          >
            {[10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          entries
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          Search:
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="border border-gray-300 rounded px-1.5 py-0.5 text-xs w-28"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {(["type", "paid", "unpaid"] as const).map((col) => (
                <th
                  key={col}
                  onClick={() => toggle(col)}
                  className="px-3 py-2 text-left text-xs font-semibold text-gray-600 cursor-pointer select-none whitespace-nowrap"
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                  <SortIcon
                    active={sort.col === col}
                    dir={sort.col === col ? sort.dir : null}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <td className="px-3 py-2 text-gray-700 text-xs">{row.type}</td>
                <td className="px-3 py-2">
                  <BuyButton count={row.paid} />
                </td>
                <td className="px-3 py-2">
                  <BuyButton count={row.unpaid} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100 gap-2 flex-wrap">
        <span className="text-xs text-gray-500">
          Showing {filtered.length === 0 ? 0 : (page - 1) * entries + 1} to{" "}
          {Math.min(page * entries, filtered.length)} of {filtered.length} entries
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40"
          >
            Previous
          </button>
          {pageNums.map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-2.5 py-1 text-xs border rounded ${
                page === n
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverPage() {
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
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeItem="Discover" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-3 md:p-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-4">
              {/* Tables */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1 min-w-0">
                <DataTable
                  title="New To Discover"
                  color="#3b5bdb"
                  data={newToDiscoverData}
                  pageSize={25}
                />
                <DataTable
                  title="Top Selling"
                  color="#0ea5e9"
                  data={topSellingData}
                  pageSize={25}
                />
              </div>

              {/* Right sidebar */}
              <div className="xl:w-52 shrink-0 flex flex-col gap-3">
                {/* DATINGS */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-500">
                    <span className="text-white text-xs font-bold uppercase tracking-wide">
                      ♥ DATINGS
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {datingsItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => alert("Please deposit money to use service!")}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-xs text-blue-600 hover:underline text-left leading-tight">
                          {item.name}
                        </span>
                        <span className="text-xs font-bold bg-green-500 text-white rounded px-1.5 py-0.5 ml-2 shrink-0">
                          {item.count.toLocaleString()}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* SECURITY */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500">
                    <span className="text-white text-xs font-bold uppercase tracking-wide">
                      🔒 SECURITY
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {securityItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => alert("Please deposit money to use service!")}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xs text-blue-600 hover:underline text-left">
                          {item.name}
                        </span>
                        <span className="text-xs font-bold bg-blue-600 text-white rounded px-1.5 py-0.5 ml-2 shrink-0">
                          {item.count.toLocaleString()}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* STREAMING */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 bg-red-500">
                    <span className="text-white text-xs font-bold uppercase tracking-wide">
                      ▷ STREAMING
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {streamingItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => alert("Please deposit money to use service!")}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xs text-blue-600 hover:underline text-left">
                          {item.name}
                        </span>
                        <span className="text-xs font-bold bg-blue-600 text-white rounded px-1.5 py-0.5 ml-2 shrink-0">
                          {item.count.toLocaleString()}
                        </span>
                      </button>
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
