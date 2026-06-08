"use client";

import { useState } from "react";
import { Copy, AlertCircle } from "lucide-react";
import Image from "next/image";
import type { CoinType } from "../deposit/page";

const COIN_DATA: Record<
  CoinType,
  { label: string; address: string; qr: string }
> = {
  BTC: {
    label: "Bitcoin",
    address: "bc1qzu77y6g0xwgvrsv7jq9gznyflr5ej23r4w74n8",
    qr: "/qr-code.jpeg",
  },
  ETH: {
    label: "Ethereum",
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/ETH.jpeg",
  },
  USDT: {
    label: "Tether (USDT)ERC20",
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/USDT.jpeg",
  },
  USDC: {
    label: "USD Coin (USDC)",
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/USDC.jpeg",
  },
};

const ORDER_ID = "5936581768211767399";

interface Props {
  selectedCoin: CoinType;
}

export default function BitcoinPaymentPanel({ selectedCoin }: Props) {
  const [copiedAmount, setCopiedAmount] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const coin = COIN_DATA[selectedCoin];

  const copyToClipboard = (text: string, type: "amount" | "address") => {
    const done = () => {
      if (type === "amount") {
        setCopiedAmount(true);
        setTimeout(() => setCopiedAmount(false), 2000);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      }
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      done();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 min-w-0">
      {/* Top Banner */}
      <div className="bg-blue-600 px-5 py-3 text-white text-sm leading-relaxed">
        We require one confirmation to reflect your balance, your money will be
        added Automatically once your transaction gets 1 confirmation.{" "}
        <a href="#" className="text-red-300 font-medium hover:underline">
          Click here
        </a>{" "}
        to see your unconfirmed transactions
      </div>

      {/* Body */}
      <div className="px-6 py-5">
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-1">
          {coin.label} Payment
        </h2>
        <p className="text-center text-gray-400 text-xs mb-5">
          Send {selectedCoin} to the address below
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="p-2 border border-gray-200 rounded-lg">
            <Image
              key={selectedCoin}
              src={coin.qr}
              alt={`${coin.label} QR Code`}
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            readOnly
            value="MINIMUM 20$"
            className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-700 outline-none"
          />
          <button
            onClick={() => copyToClipboard("MINIMUM 20$", "amount")}
            className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center transition-colors shrink-0"
            title="Copy amount"
          >
            {copiedAmount ? (
              <span className="text-xs">✓</span>
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-600 mb-2">
          To This {coin.label} Address
        </p>
        <div className="flex items-center gap-2 mb-4">
          <input
            readOnly
            value={coin.address}
            className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 outline-none font-mono truncate"
          />
          <button
            onClick={() => copyToClipboard(coin.address, "address")}
            className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center transition-colors shrink-0"
            title="Copy address"
          >
            {copiedAddress ? (
              <span className="text-xs">✓</span>
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          After sending to the above address this page will refresh
          automatically upon receiving {selectedCoin}.
        </p>

        {/* Warning */}
        <div className="flex gap-2 items-start mb-4">
          <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600">
            When you get the success message that we have received your payment,
            you can close this page. It will be automatically added when it gets
            one confirmation.
          </p>
        </div>

        {/* Order ID Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-4">
          <p className="text-sm text-gray-700">
            Did you Send the Money And not reflected? copy this Order id :{" "}
            <strong className="text-gray-900">{ORDER_ID}</strong> and{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Click Here
            </a>{" "}
            To add it manually
          </p>
        </div>

        {/* Spinner */}
        <div className="flex justify-center mb-4">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>

        {/* Payment not yet completed */}
        <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-center text-sm text-red-400 font-medium mb-4">
          Payment not yet completed !
        </div>

        {/* Auto-recheck info */}
        <div className="bg-blue-600 rounded-lg px-4 py-3 text-center text-sm text-white leading-relaxed">
          If the payment is not reflected, there is no need to worry. Our system
          will automatically recheck the payment status within a maximum of 30
          minutes. Once the payment is confirmed, it will be added accordingly.
        </div>
      </div>
    </div>
  );
}
