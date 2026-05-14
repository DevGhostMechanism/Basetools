"use client";

import { useState } from "react";

export default function BitcoinDepositPanel() {
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full md:max-w-xs">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-700 to-blue-600 px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M11.5 8.5v-2h1.2c.8 0 1.3.3 1.3.9s-.5.9-1.3 1.1H11.5zm0 1v2.2h1.4c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1H11.5zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2.2 11.5c0 1.2-.9 2-2.3 2.1v1.1h-1v-1.1c-.5 0-1-.1-1.4-.2v-1.3c.5.2 1.1.3 1.7.3h.1V12h-.1c-1.7-.1-2.7-.9-2.7-2.2 0-1.1.8-1.9 2.2-2.1V6.5h1v1.1c.4 0 .8.1 1.2.2v1.3c-.4-.2-.9-.3-1.4-.3h-.1V11h.2c1.7.1 2.6.9 2.6 2.1v.4z" />
          </svg>
        </div>
        <div>
          <h2 className="text-white font-semibold text-sm">Bitcoin Automatic Payment</h2>
          <p className="text-blue-200 text-xs">we accept bitcoin</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-6 text-center">
        {/* BTC Rate Icon */}
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-blue-500">
              <path d="M11.5 8.5v-2h1.2c.8 0 1.3.3 1.3.9s-.5.9-1.3 1.1H11.5zm0 1v2.2h1.4c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1H11.5zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2.2 11.5c0 1.2-.9 2-2.3 2.1v1.1h-1v-1.1c-.5 0-1-.1-1.4-.2v-1.3c.5.2 1.1.3 1.7.3h.1V12h-.1c-1.7-.1-2.7-.9-2.7-2.2 0-1.1.8-1.9 2.2-2.1V6.5h1v1.1c.4 0 .8.1 1.2.2v1.3c-.4-.2-.9-.3-1.4-.3h-.1V11h.2c1.7.1 2.6.9 2.6 2.1v.4z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-500 text-xs mb-1">BTC Rate</p>
        <p className="text-orange-400 font-bold text-2xl mb-3">79,537 $</p>

        <p className="text-gray-500 text-xs mb-1 leading-relaxed">
          Write your amount in the below box and press Deposit button
        </p>
        <p className="text-orange-500 text-xs font-medium mb-4">*One confirmation required</p>

        {/* Input */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 flex items-center border border-gray-200 rounded px-3 gap-2 bg-gray-50">
            <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-bold">₿</span>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 bg-transparent text-sm outline-none py-2 text-gray-700"
            />
          </div>
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
            Deposit
          </button>
        </div>

        <p className="text-gray-400 text-xs">please note that the Minimum Amount : 20$</p>
      </div>
    </div>
  );
}
