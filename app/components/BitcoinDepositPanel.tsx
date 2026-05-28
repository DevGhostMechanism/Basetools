"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { CoinType } from "../deposit/page";

const COINS: { id: CoinType; label: string; logo: string }[] = [
  { id: "BTC", label: "BTC", logo: "/btcLOGO.jpg" },
  { id: "ETH", label: "ETH", logo: "/eth.png" },
  { id: "USDT", label: "USDT", logo: "/usdt.png" },
  { id: "USDC", label: "USDC", logo: "/usdc.png" },
];

interface Props {
  selectedCoin: CoinType;
  onCoinSelect: (coin: CoinType) => void;
}

export default function BitcoinDepositPanel({ selectedCoin, onCoinSelect }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [btcRate, setBtcRate] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeCoin = COINS.find((c) => c.id === selectedCoin)!;

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await res.json();
        const price: number = data.bitcoin.usd;
        setBtcRate(price.toLocaleString("en-US"));
      } catch {
        // keep previous value on error
      }
    }
    fetchRate();
    const interval = setInterval(fetchRate, 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full md:max-w-xs">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-700 to-blue-600 px-5 py-4 flex items-center gap-3 rounded-t-lg">
        <div className="w-10 h-10 bg-orange-400 rounded-full overflow-hidden relative shrink-0">
          <Image src="/btcLOGO.jpg" alt="Bitcoin Icon" fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <h2 className="text-white font-semibold text-sm">
            Bitcoin Automatic Payment
          </h2>
          <p className="text-blue-200 text-xs">We accept all types of cryptocurrencies</p>
        </div>
      </div>

      {/* Coin Selector Buttons */}
      <div className="px-5 pt-4 grid grid-cols-4 gap-2">
        {COINS.map((coin) => (
          <button
            key={coin.id}
            onClick={() => onCoinSelect(coin.id)}
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg border-2 transition-colors ${
              selectedCoin === coin.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
              <Image src={coin.logo} alt={coin.label} fill className="object-cover" sizes="32px" />
            </div>
            <span className={`text-xs font-semibold ${selectedCoin === coin.id ? "text-blue-600" : "text-gray-600"}`}>
              {coin.label}
            </span>
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="px-5 py-4 text-center">
        {/* Rate icon */}
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-blue-500">
              <path d="M11.5 8.5v-2h1.2c.8 0 1.3.3 1.3.9s-.5.9-1.3 1.1H11.5zm0 1v2.2h1.4c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1H11.5zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2.2 11.5c0 1.2-.9 2-2.3 2.1v1.1h-1v-1.1c-.5 0-1-.1-1.4-.2v-1.3c.5.2 1.1.3 1.7.3h.1V12h-.1c-1.7-.1-2.7-.9-2.7-2.2 0-1.1.8-1.9 2.2-2.1V6.5h1v1.1c.4 0 .8.1 1.2.2v1.3c-.4-.2-.9-.3-1.4-.3h-.1V11h.2c1.7.1 2.6.9 2.6 2.1v.4z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-500 text-xs mb-1">BTC Rate</p>
        <p className="text-amber-500 font-bold text-2xl mb-3">
          {btcRate ? `$${btcRate}` : "Loading..."}
        </p>

        <p className="text-gray-500 text-xs mb-1 leading-relaxed">
          Select your coin and press Deposit button
        </p>
        <p className="text-amber-500 text-xs font-medium mb-4">
          *One confirmation required
        </p>

        {/* Coin dropdown input + Deposit button */}
        <div className="flex gap-2 mb-3">
          <div ref={dropdownRef} className="relative flex-1">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-full flex items-center gap-2 border border-gray-200 rounded px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden relative shrink-0">
                <Image src={activeCoin.logo} alt={activeCoin.label} fill className="object-cover" sizes="20px" />
              </div>
              <span className="flex-1 text-left text-sm font-medium text-gray-700">
                {activeCoin.label}
              </span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                {COINS.map((coin) => (
                  <button
                    key={coin.id}
                    onClick={() => { onCoinSelect(coin.id); setDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      selectedCoin === coin.id ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden relative shrink-0">
                      <Image src={coin.logo} alt={coin.label} fill className="object-cover" sizes="20px" />
                    </div>
                    {coin.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-amber-500 hover:bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
            Deposit
          </button>
        </div>

        <p className="text-gray-400 text-xs">
          please note that the Minimum Amount : 20$
        </p>
      </div>
    </div>
  );
}
