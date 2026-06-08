"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { AlertTriangle } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type SortTab = "random" | "newest" | "oldest" | "expensive" | "cheapest";

type Account = {
  id: number;
  type: string;
  category: string;
  countryCode: string;
  countryName: string;
  countryFlag: string;
  info: string;
  seller: string;
  price: number;
  createdAt: number;
};

// ─── Static data ─────────────────────────────────────────────────────────────
const SORT_TABS: { key: SortTab; label: string }[] = [
  { key: "random", label: "Random" },
  { key: "newest", label: "Newest" },
  { key: "oldest", label: "Oldest" },
  { key: "expensive", label: "Expensive" },
  { key: "cheapest", label: "Cheapest" },
];

const CATEGORY_FILTERS = [
  { label: "Datings", color: "bg-pink-600 hover:bg-pink-700" },
  { label: "Streaming", color: "bg-red-500 hover:bg-red-600" },
  { label: "Gaming", color: "bg-purple-600 hover:bg-purple-700" },
  { label: "Shopping", color: "bg-orange-500 hover:bg-orange-600" },
  { label: "Cryptocurrency", color: "bg-yellow-500 hover:bg-yellow-600" },
  { label: "Finance", color: "bg-green-600 hover:bg-green-700" },
  { label: "Social Media", color: "bg-blue-600 hover:bg-blue-700" },
  { label: "VPN / Security", color: "bg-indigo-600 hover:bg-indigo-700" },
  { label: "Education", color: "bg-teal-600 hover:bg-teal-700" },
  { label: "Entertainment", color: "bg-cyan-600 hover:bg-cyan-700" },
  { label: "Food & Delivery", color: "bg-amber-600 hover:bg-amber-700" },
  { label: "Travel", color: "bg-sky-500 hover:bg-sky-600" },
  { label: "News & Media", color: "bg-violet-600 hover:bg-violet-700" },
  { label: "Health & Fitness", color: "bg-emerald-600 hover:bg-emerald-700" },
];

const ACCOUNT_TYPES = [
  { type: "AshleyMadison", category: "Datings" },
  { type: "Match", category: "Datings" },
  { type: "Seeking", category: "Datings" },
  { type: "POF", category: "Datings" },
  { type: "Zoosk", category: "Datings" },
  { type: "OurTime", category: "Datings" },
  { type: "EliteSingles", category: "Datings" },
  { type: "eHarmony", category: "Datings" },
  { type: "Tinder Gold", category: "Datings" },
  { type: "Bumble Boost", category: "Datings" },
  { type: "ChristianMingle", category: "Datings" },
  { type: "SilverSingles", category: "Datings" },
  { type: "Netflix", category: "Streaming" },
  { type: "Hulu", category: "Streaming" },
  { type: "Spotify", category: "Streaming" },
  { type: "HBO Max", category: "Streaming" },
  { type: "Disney+", category: "Streaming" },
  { type: "Peacock Premium", category: "Streaming" },
  { type: "Paramount+", category: "Streaming" },
  { type: "Apple TV+", category: "Streaming" },
  { type: "Steam", category: "Gaming" },
  { type: "PlayStation Plus", category: "Gaming" },
  { type: "Xbox GamePass", category: "Gaming" },
  { type: "Epic Games", category: "Gaming" },
  { type: "EA Play", category: "Gaming" },
  { type: "Amazon Prime", category: "Shopping" },
  { type: "eBay", category: "Shopping" },
  { type: "Walmart+", category: "Shopping" },
  { type: "Target Circle", category: "Shopping" },
  { type: "Coinbase", category: "Cryptocurrency" },
  { type: "Binance", category: "Cryptocurrency" },
  { type: "Kraken", category: "Cryptocurrency" },
  { type: "Crypto.com", category: "Cryptocurrency" },
  { type: "PayPal", category: "Finance" },
  { type: "Venmo", category: "Finance" },
  { type: "Cash App", category: "Finance" },
  { type: "Robinhood", category: "Finance" },
  { type: "Facebook", category: "Social Media" },
  { type: "Instagram", category: "Social Media" },
  { type: "Twitter/X", category: "Social Media" },
  { type: "LinkedIn", category: "Social Media" },
  { type: "Snapchat", category: "Social Media" },
  { type: "TikTok", category: "Social Media" },
  { type: "ExpressVPN", category: "VPN / Security" },
  { type: "NordVPN", category: "VPN / Security" },
  { type: "HMA VPN", category: "VPN / Security" },
  { type: "CyberGhost", category: "VPN / Security" },
  { type: "Coursera Plus", category: "Education" },
  { type: "Udemy", category: "Education" },
  { type: "Skillshare", category: "Education" },
  { type: "MasterClass", category: "Entertainment" },
  { type: "Audible", category: "Entertainment" },
  { type: "DoorDash DashPass", category: "Food & Delivery" },
  { type: "Uber One", category: "Food & Delivery" },
  { type: "Airbnb", category: "Travel" },
  { type: "Booking.com", category: "Travel" },
  { type: "New York Times", category: "News & Media" },
  { type: "Washington Post", category: "News & Media" },
  { type: "Peloton", category: "Health & Fitness" },
  { type: "MyFitnessPal", category: "Health & Fitness" },
];

const COUNTRIES = [
  { code: "US", name: "USA", flag: "🇺🇸" },
  { code: "GB", name: "UK", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
];

const FIRST_NAMES = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael",
  "Linda", "William", "Barbara", "David", "Susan", "Richard", "Jessica",
  "Joseph", "Sarah", "Thomas", "Karen", "Charles", "Lisa", "Christopher",
  "Nancy", "Daniel", "Betty", "Matthew", "Margaret", "Anthony", "Sandra",
  "Donald", "Ashley", "Mark", "Dorothy", "Paul", "Kimberly", "Steven",
  "Emily", "Kenneth", "Donna", "Andrew", "Michelle", "Joshua", "Carol",
  "Kevin", "Amanda", "Brian", "Melissa", "George", "Deborah", "Timothy",
  "Stephanie", "Ronald", "Rebecca", "Edward", "Sharon", "Jason", "Laura",
];

const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
  "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson",
  "White", "Harris", "Martin", "Thompson", "Young", "Lewis", "Walker",
  "Hall", "Allen", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott",
  "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell",
  "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans",
  "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed",
];

const US_STATES = [
  "AL", "AZ", "AR", "CA", "CO", "CT", "FL", "GA", "IL", "IN",
  "IA", "KS", "KY", "LA", "MD", "MA", "MI", "MN", "MO", "NE",
  "NV", "NJ", "NM", "NY", "NC", "OH", "OK", "OR", "PA", "TN",
  "TX", "UT", "VA", "WA", "WI",
];

const CITIES = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
  "Indianapolis", "San Francisco", "Seattle", "Denver", "Nashville",
  "Oklahoma City", "El Paso", "Washington", "Las Vegas", "Louisville",
  "Memphis", "Portland", "Baltimore", "Milwaukee", "Albuquerque",
  "Tucson", "Fresno", "Sacramento", "Kansas City", "Atlanta",
  "Omaha", "Colorado Springs", "Raleigh", "Long Beach", "Virginia Beach",
];

const SELLERS = [
  "tools4all", "darkmarket01", "theaccshop", "pvashop99", "megaseller",
  "premiumtools", "accountsworld", "sellerking", "shopmaster", "proshop24",
  "eliteseller", "accsmaster", "bestaccounts", "vipshop77", "accounthub",
  "shadow_store", "acc_empire", "digitalvault", "shopking99", "primeaccs",
];

// Seeded pseudo-random — deterministic so data is stable across renders
function srng(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateAccount(i: number): Account {
  const s = (n: number) => srng(i * 53 + n);
  const atIdx = Math.floor(s(1) * ACCOUNT_TYPES.length);
  const { type, category } = ACCOUNT_TYPES[atIdx];
  const { code, name, flag } = COUNTRIES[Math.floor(s(2) * COUNTRIES.length)];
  const firstName = FIRST_NAMES[Math.floor(s(3) * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(s(4) * LAST_NAMES.length)];
  const m = Math.floor(s(5) * 12) + 1;
  const d = Math.floor(s(6) * 28) + 1;
  const y = 1955 + Math.floor(s(7) * 47);
  const age = 2024 - y;
  const city = CITIES[Math.floor(s(8) * CITIES.length)];
  const state = US_STATES[Math.floor(s(9) * US_STATES.length)];
  const gender = s(10) > 0.5 ? "Female" : "Male";
  const price = parseFloat((0.03 + s(11) * 3.47).toFixed(2));
  const seller = SELLERS[Math.floor(s(12) * SELLERS.length)];
  const uname = `${firstName.toLowerCase()}${lastName.slice(0, 3).toLowerCase()}${Math.floor(s(13) * 9999)}`;
  const emailDomain = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com"][
    Math.floor(s(14) * 5)
  ];
  const email = `${uname}@${emailDomain}`;
  const location = code === "US" ? `${city}, ${state}` : city;

  const info = `Real Account: ${gender}. Name: ${firstName} ${lastName}. DOB: ${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}/${y} Age: ${age}. City: ${location}, Country: ${name}. Email: ${email} Username: ${uname}`;

  return {
    id: i + 1,
    type,
    category,
    countryCode: code,
    countryName: name,
    countryFlag: flag,
    info,
    seller,
    price,
    createdAt: 1700000000 - Math.floor(s(16) * 30 * 24 * 3600),
  };
}

const ALL_ACCOUNTS: Account[] = Array.from({ length: 500 }, (_, i) => generateAccount(i));
const DISPLAY_TOTAL = 358664;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AccountsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortTab, setSortTab] = useState<SortTab>("random");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(100);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let data = [...ALL_ACCOUNTS];
    if (activeCategory) data = data.filter((a) => a.category === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (a) =>
          a.type.toLowerCase().includes(q) ||
          a.countryName.toLowerCase().includes(q) ||
          a.info.toLowerCase().includes(q) ||
          a.seller.toLowerCase().includes(q),
      );
    }
    switch (sortTab) {
      case "newest":
        return data.sort((a, b) => b.createdAt - a.createdAt);
      case "oldest":
        return data.sort((a, b) => a.createdAt - b.createdAt);
      case "expensive":
        return data.sort((a, b) => b.price - a.price);
      case "cheapest":
        return data.sort((a, b) => a.price - b.price);
      default:
        return data;
    }
  }, [sortTab, activeCategory, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / entriesPerPage));
  const paginated = filtered.slice((page - 1) * entriesPerPage, page * entriesPerPage);
  const showingFrom = filtered.length === 0 ? 0 : (page - 1) * entriesPerPage + 1;
  const showingTo = Math.min(page * entriesPerPage, filtered.length);
  const displayTotal = activeCategory || search ? filtered.length : DISPLAY_TOTAL;

  const pageButtons = useMemo(() => {
    const total = totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, -1, total];
    if (page >= total - 3) return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
    return [1, -1, page - 1, page, page + 1, -2, total];
  }, [page, totalPages]);

  const handleSort = (tab: SortTab) => {
    setSortTab(tab);
    setPage(1);
  };

  const handleCategory = (label: string) => {
    setActiveCategory((prev) => (prev === label ? null : label));
    setPage(1);
  };

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
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeItem="Tools" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-3 md:p-4 max-w-screen-2xl mx-auto">

            {/* Warning Banner */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-lg px-4 py-3 mb-4 text-sm text-amber-800">
              <AlertTriangle size={16} className="shrink-0 mt-0.5 text-amber-500" />
              <p>
                <strong>Dear Buyers,</strong> please use an ISP or VPN that matches the account
                location for a successful login. Also, remember to use your cookies and do not
                change the passwords of accounts. Reporting accounts after purchasing will result
                in a <strong>permanent ban</strong>.
              </p>
            </div>

            {/* Sort Tabs */}
            <div className="flex items-center gap-1 mb-3 flex-wrap">
              {SORT_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleSort(tab.key)}
                  className={`px-5 py-1.5 text-sm font-medium border rounded transition-colors ${
                    sortTab === tab.key
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => handleCategory(cat.label)}
                  className={`px-3 py-1 text-xs font-semibold text-white rounded-full transition-opacity ${cat.color} ${
                    activeCategory && activeCategory !== cat.label ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              {activeCategory && (
                <button
                  onClick={() => { setActiveCategory(null); setPage(1); }}
                  className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                >
                  ✕ Clear
                </button>
              )}
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

              {/* Table Controls */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  Show
                  <select
                    value={entriesPerPage}
                    onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setPage(1); }}
                    className="border border-gray-300 rounded px-1.5 py-0.5 text-xs"
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
                    placeholder="Type, country, seller…"
                    className="border border-gray-300 rounded px-2 py-0.5 text-xs w-40"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600 whitespace-nowrap w-36">Type</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600 whitespace-nowrap w-24">Country</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600">Info</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600 whitespace-nowrap w-28">seller</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600 whitespace-nowrap w-16">Price</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-600 whitespace-nowrap w-16">Buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginated.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-gray-400">
                          No accounts found.
                        </td>
                      </tr>
                    ) : (
                      paginated.map((acc, i) => (
                        <tr
                          key={acc.id}
                          className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                        >
                          {/* Type */}
                          <td className="px-3 py-2 align-top">
                            <span className="font-medium text-gray-800">{acc.type}</span>
                          </td>

                          {/* Country */}
                          <td className="px-3 py-2 align-top whitespace-nowrap">
                            <span className="mr-1">{acc.countryFlag}</span>
                            <span className="text-gray-600">{acc.countryCode} {acc.countryName}</span>
                          </td>

                          {/* Info */}
                          <td className="px-3 py-2 align-top max-w-xs">
                            <p className="text-gray-600 leading-relaxed break-words">{acc.info}</p>
                          </td>

                          {/* Seller */}
                          <td className="px-3 py-2 align-top">
                            <span className="text-blue-600 hover:underline cursor-pointer">{acc.seller}</span>
                          </td>

                          {/* Price */}
                          <td className="px-3 py-2 align-top whitespace-nowrap font-semibold text-gray-700">
                            ${acc.price.toFixed(2)}
                          </td>

                          {/* Buy */}
                          <td className="px-3 py-2 align-top">
                            <button
                              onClick={() => alert("Please deposit money to use service!")}
                              className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                            >
                              Buy
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100 gap-3 flex-wrap">
                <span className="text-xs text-gray-500">
                  Showing {showingFrom} to {showingTo} of {displayTotal.toLocaleString()} entries
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-2.5 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40 transition-colors"
                  >
                    Previous
                  </button>
                  {pageButtons.map((n, idx) =>
                    n < 0 ? (
                      <span key={`ellipsis-${idx}`} className="px-1 text-gray-400 text-xs">…</span>
                    ) : (
                      <button
                        key={n}
                        onClick={() => setPage(n)}
                        className={`px-2.5 py-1 text-xs border rounded transition-colors ${
                          page === n
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {n}
                      </button>
                    ),
                  )}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-2.5 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40 transition-colors"
                  >
                    Next
                  </button>
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
