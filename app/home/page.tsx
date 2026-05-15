"use client";

import { useState } from "react";
import {
  Target,
  Gem,
  Lock,
  MessageCircle,
  ChevronRight,
  Bell,
  Trophy,
  Copy,
  Download,
  AlertTriangle,
} from "lucide-react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useRouter } from "next/navigation";

/* ─── Feature Cards ─────────────────────────────────────────────────── */
const featureCards = [
  {
    icon: <Target size={42} className="text-red-500" />,
    title: "Explore",
    description: "Discover new tools and accounts",
    buttonText: "Browse",
    variant: "primary" as const,
  },
  {
    icon: <Gem size={42} className="text-blue-500" />,
    title: "Premium Tools",
    description: "Access exclusive premium tools",
    buttonText: "View All",
    variant: "outline" as const,
  },
  {
    icon: <Lock size={42} className="text-yellow-600" />,
    title: "Security",
    description: "Secure your account with 2FA",
    buttonText: "Enable 2FA",
    variant: "primary" as const,
  },
  {
    icon: <MessageCircle size={42} className="text-gray-400" />,
    title: "Support",
    description: "Get help from our team",
    buttonText: "Open Ticket",
    variant: "outline" as const,
  },
];

/* ─── News Items ─────────────────────────────────────────────────────── */
const newsItems = [
  {
    id: 1,
    title: "New Replacement Feature Now Available",
    date: "Hello dear users, 02/05/2026",
    body: (
      <div className="space-y-1.5 text-sm text-gray-600 mt-2">
        <p>
          <strong>We have added a new feature called Replacement.</strong>
        </p>
        <br />
        <p>
          Once you purchase an account, it will appear in the Account Details
          section. From there, you can request a replacement if needed.
        </p>
        <br />
        <p>
          The seller may take up to 30 minutes to provide a replacement account.
        </p>
        <br />
        <p>
          If the seller refuses to replace the account or tool, you will receive
          an immediate refund.
        </p>
        <br />
        <p className="pt-1">Thank you for using our service.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Account Login Guidelines",
    date: null,
    body: (
      <div className="space-y-1.5 text-sm text-gray-600 mt-2">
        <p>Dear Buyers,</p>
        <p>
          To ensure successful login on accounts, kindly follow these
          guidelines:
        </p>
        <br />
        <p>
          <strong>Avoid 2FA Authentication:</strong> Do not click on the
          captcha, as this will prompt a 2FA authentication.
        </p>
        <br />
        <p>
          <strong>Using Cookies:</strong> If an account has cookies, please
          install the **Cookie Editor** extension for Chrome&amp;Firefox. You
          can download it{" "}
          <a href="#" className="text-blue-500 hover:underline">
            here
          </a>
          .
        </p>
        <br />
        <p>
          <strong>Tutorial:</strong> For a step-by-step guide on how to use the
          extension, you can watch this{" "}
          <a href="#" className="text-blue-500 hover:underline">
            tutorial
          </a>
          .
        </p>
        <p className="pt-1">Thank you for your attention to this matter.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Crucial Update ❗❗",
    date: null,
    body: (
      <div className="space-y-1.5 text-sm text-gray-600 mt-2">
        <p>
          We are announcing a very crucial update to you our dear clients, we
          will be monitoring and analysing purchases and who is changing
          passwords or blocking the accounts and than reporting them as
          invalid/blocked, their account will be deleted totally from our
          database and they won&apos;t get back their balance.
        </p>
        <br />
        <p>
          Another thing that comes in play from us is that we will be disabling
          the register, that means at one point there will be only the existing
          users and there won&apos;t be a chance of you getting another chance
          in changing passwords or damage our sellers.
        </p>
        <br />
        <p className="pt-1">Best Regards,</p>
        <p>Board Staff of Basetools ✅</p>
      </div>
    ),
  },
];

/* ─── Latest Tools ───────────────────────────────────────────────────── */
const latestTools = [
  { count: 3, name: "Seeking", type: "PAID", section: "Accounts" },
  { count: 500, name: "OurTime", type: "Unpaid", section: "Accounts" },
  { count: 496, name: "OurTime", type: "Unpaid", section: "Accounts" },
  { count: 483, name: "Match", type: "Unpaid", section: "Accounts" },
  { count: 492, name: "Match", type: "Unpaid", section: "Accounts" },
  { count: 1, name: "Match", type: "PAID", section: "Accounts" },
];

/* ─── Domains ────────────────────────────────────────────────────────── */
const domains = [
  { name: "basetools.website", status: "MAIN", dot: "green" },
  { name: "basetools.se", status: "BACKUP", dot: "green" },
  { name: "basetools.me", status: "MAIN", dot: "green" },
  { name: "basetools.st", status: "BACKUP", dot: "green" },
  { name: "basetools.sk", status: "OFFLINE", dot: "red" },
];

const statusStyle: Record<string, string> = {
  MAIN: "bg-blue-100 text-blue-700",
  BACKUP: "bg-orange-100 text-orange-700",
  OFFLINE: "bg-red-100 text-red-600",
};

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 md:p-4 max-w-screen-2xl mx-auto">
            {/* ── Feature Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm border border-gray-100"
                >
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <button
                    className={`px-6 py-1.5 rounded text-sm font-medium transition-colors ${
                      card.variant === "primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() =>
                      alert("Please deposit money to use service!")
                    }
                  >
                    {card.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* ── Two-column layout ── */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left: Security Banner + News */}
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                {/* Security Issue Banner */}
                <div className="bg-red-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-base mb-1">ATTENTION!</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Dear user, your account is currrently inactive. Please{" "}
                    <a
                      href="/deposit"
                      className="text-yellow-300 hover:text-yellow-200 underline"
                    >
                      top up
                    </a>{" "}
                    your account to activate it.
                  </p>
                  <button
                    className="mt-4 bg-yellow-400 text-yellow-900 font-semibold px-4 py-1.5 rounded text-sm hover:bg-yellow-300 transition-colors inline-flex items-center gap-1"
                    onClick={() => router.push("/deposit")}
                  >
                    Continue <ChevronRight size={14} />
                  </button>
                </div>

                {/* Latest News */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-blue-500">
                    <Bell size={13} className="text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      Latest News
                    </span>
                  </div>

                  <div className="divide-y divide-gray-50">
                    {newsItems.map((item) => (
                      <div key={item.id} className="px-5 py-5 flex gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 text-sm">
                            {item.title}
                          </h4>
                          {item.date && (
                            <p className="text-gray-400 text-xs mt-0.5">
                              {item.date}
                            </p>
                          )}
                          {item.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:w-72 xl:w-80 flex flex-col gap-4 shrink-0">
                {/* Telegram Contact */}
                <div className="bg-red-600 rounded-xl p-5 text-white">
                  <p className="text-sm leading-relaxed font-medium text-center">
                    The only way to contact us is from our ticket system.
                    <br />
                    You can join our official channel in Telegram for updates
                  </p>
                  <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors">
                    {/* Telegram SVG icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-white shrink-0"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Join Us On Telegram
                  </button>
                </div>

                {/* Latest 10 Added Tools */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-blue-600">
                    <Trophy size={13} className="text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      Latest 10 Added Tools
                    </span>
                  </div>
                  <div className="p-4 space-y-2.5">
                    {latestTools.map((tool, i) => (
                      <p
                        key={i}
                        className="text-xs text-gray-600 leading-relaxed"
                      >
                        Added{" "}
                        <span className="font-bold text-blue-600">
                          {tool.count}
                        </span>{" "}
                        items of{" "}
                        <span className="font-semibold text-blue-500">
                          {tool.name}({tool.type})
                        </span>{" "}
                        in The{" "}
                        <span className="font-semibold text-blue-500">
                          {tool.section}
                        </span>{" "}
                        section.
                      </p>
                    ))}
                  </div>
                </div>

                {/* Official Basetools Domain */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-blue-600">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      🌐 Official Basetools Domain!
                    </span>
                  </div>

                  {/* Find all domains banner */}
                  <div className="m-3 bg-blue-700 rounded-lg p-3 text-center">
                    <p className="text-blue-200 text-[10px] uppercase tracking-wider font-semibold">
                      Find All Our Domains
                    </p>
                    <p className="text-white font-bold text-sm mt-0.5">
                      basetools-domains.com
                    </p>
                    <p className="text-blue-200 text-[10px] mt-0.5 leading-relaxed">
                      Visit this address to see every active domain we own
                    </p>
                  </div>

                  {/* Domain list */}
                  <div className="px-3 pb-2 space-y-2">
                    {domains.map((d) => (
                      <div
                        key={d.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              d.dot === "green" ? "bg-green-500" : "bg-red-500"
                            }`}
                          />
                          <span className="text-sm text-gray-700">
                            {d.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${statusStyle[d.status]}`}
                          >
                            {d.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Copy size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="px-3 pb-4 pt-1 space-y-1.5">
                    <button className="w-full border border-blue-300 text-blue-600 text-xs font-semibold py-1.5 rounded hover:bg-blue-50 transition-colors">
                      💾 Save This Important!
                    </button>
                    <button className="w-full border border-gray-200 text-gray-600 text-xs font-semibold py-1.5 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                      <Download size={11} />
                      Download .txt
                    </button>

                    {/* Warning */}
                    <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded p-2">
                      <p className="text-[10px] text-yellow-800 flex gap-1.5 leading-relaxed">
                        <AlertTriangle
                          size={11}
                          className="shrink-0 mt-0.5 text-yellow-600"
                        />
                        Warning: only the domains listed above are official. Any
                        other domain is a fake phishing scam. Please stay
                        careful!
                      </p>
                    </div>

                    {/* Footer links inside domain box */}
                    <div className="pt-2 text-center">
                      <p className="text-[10px] text-gray-400">
                        © Copyright 2015 – 2026
                      </p>
                      <div className="flex justify-center gap-2 mt-1 flex-wrap">
                        <a
                          href="#"
                          className="text-[10px] text-blue-500 hover:underline"
                        >
                          Privacy Policy
                        </a>
                        <span className="text-gray-300 text-[10px]">·</span>
                        <a
                          href="#"
                          className="text-[10px] text-blue-500 hover:underline"
                        >
                          Terms of Service
                        </a>
                        <span className="text-gray-300 text-[10px]">·</span>
                        <a
                          href="#"
                          className="text-[10px] text-blue-500 hover:underline"
                        >
                          Rules
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page footer */}
            <footer className="mt-6 py-4 text-center border-t border-gray-200">
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
