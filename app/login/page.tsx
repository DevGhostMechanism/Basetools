"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { User, Lock } from "lucide-react";

function HCaptchaWidget() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
      style={{
        backgroundColor: "#f5f5f5",
        border: "1px solid #d0d0d0",
        borderRadius: "4px",
      }}
      onClick={() => setChecked((v) => !v)}
    >
      {/* Checkbox + label */}
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 border-2 rounded flex items-center justify-center shrink-0 bg-white"
          style={{ borderColor: checked ? "#1a6ef5" : "#9e9e9e" }}
        >
          {checked && (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#1a6ef5" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 text-sm font-medium">I am human</span>
      </div>

      {/* hCaptcha branding */}
      <div className="flex flex-col items-center gap-0.5 shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #4a90e2, #1565c0)" }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        </div>
        <span className="text-xs font-bold" style={{ color: "#4a90e2" }}>hCaptcha</span>
        <span className="text-xs" style={{ color: "#9e9e9e", fontSize: "10px" }}>Privacy · Terms</span>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-0 lg:py-10 lg:px-6"
      style={{
        backgroundColor: "#060c1a",
        backgroundImage: `
          linear-gradient(rgba(0,80,255,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,80,255,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Main card */}
      <div className="w-full lg:max-w-5xl flex flex-col lg:flex-row lg:rounded-xl overflow-hidden shadow-2xl">

        {/* ── Illustration panel — top on mobile, left on desktop ── */}
        <div
          className="lg:w-[62%] relative flex items-end"
          style={{
            minHeight: "220px",
            background:
              "linear-gradient(150deg, #04112e 0%, #06246e 28%, #0d44c8 58%, #091e5c 82%, #04112e 100%)",
          }}
        >
          {/* Circuit grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,160,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,160,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "18px 18px",
            }}
          />
          {/* Glow — top right */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-60px", right: "-60px",
              width: "340px", height: "340px",
              background: "radial-gradient(circle, rgba(30,120,255,0.3) 0%, transparent 70%)",
            }}
          />
          {/* Glow — bottom left */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-40px", left: "-40px",
              width: "260px", height: "260px",
              background: "radial-gradient(circle, rgba(0,80,200,0.28) 0%, transparent 70%)",
            }}
          />
          {/* Orange vertical accent */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: "58%", width: "3px",
              background: "linear-gradient(180deg, transparent 0%, #f59e0b 35%, #f59e0b 65%, transparent 100%)",
              opacity: 0.65,
            }}
          />
          {/* Watermark logo */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.05 }}
          >
            <Image src="/Black-logo.svg" alt="" width={360} height={75} style={{ filter: "invert(1)" }} />
          </div>
          {/* BASETOOLS badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-widest text-white rounded"
            style={{
              backgroundColor: "rgba(26,110,245,0.65)",
              border: "1px solid rgba(26,110,245,0.4)",
            }}
          >
            BASETOOLS
          </div>
          {/* Bottom text overlay */}
          <div className="relative z-10 p-6 lg:p-10">
            <p className="text-white text-2xl lg:text-3xl font-extrabold leading-tight drop-shadow">
              Welcome to
            </p>
            <p className="text-white text-2xl lg:text-3xl font-extrabold leading-tight drop-shadow">
              BaseTools.sk
            </p>
          </div>
        </div>

        {/* ── Right panel — form + SSL footer ── */}
        <div className="flex-1 flex flex-col" style={{ backgroundColor: "#0b1a3e" }}>

          {/* Form area */}
          <div className="flex-1 p-6 lg:p-8">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/Black-logo.svg"
                alt="BaseTools"
                width={200}
                height={42}
                priority
                style={{ filter: "invert(1)" }}
              />
            </div>

            <h1 className="text-xl lg:text-2xl font-bold mb-1" style={{ color: "#FFB300" }}>
              Login to BaseTools
            </h1>
            <p className="font-bold mb-5 text-sm" style={{ color: "#3b82f6" }}>
              Fast and Easy
            </p>

            <div className="flex flex-col gap-1.25">
              {/* Username */}
              <div className="flex items-stretch overflow-hidden">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: "48px", backgroundColor: "#1a6ef5" }}
                >
                  <User className="w-5 h-5 text-white" />
                </div>
                <input
                  type="text"
                  placeholder="Enter username here"
                  className="flex-1 py-3 px-4 text-sm text-white placeholder-gray-500 outline-none"
                  style={{ backgroundColor: "#091224" }}
                />
              </div>

              {/* Password */}
              <div className="flex items-stretch overflow-hidden">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: "48px", backgroundColor: "#1a6ef5" }}
                >
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <input
                  type="password"
                  placeholder="Enter password here"
                  className="flex-1 py-3 px-4 text-sm text-white placeholder-gray-500 outline-none"
                  style={{ backgroundColor: "#091224" }}
                />
              </div>

              {/* hCaptcha */}
              <HCaptchaWidget />

              {/* Forgot password */}
              <p className="text-center text-sm py-1" style={{ color: "#6b7280" }}>
                <Link href="#" className="hover:underline" style={{ color: "#6b7280" }}>
                  Forgot your password?
                </Link>
              </p>

              {/* Login button */}
              <button
                className="w-full py-3 font-black text-white tracking-widest text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1a6ef5" }}
              >
                LOGIN
              </button>

              {/* Sign up */}
              <p className="text-center text-sm pt-1" style={{ color: "#6b7280" }}>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="hover:underline" style={{ color: "#3b82f6" }}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* SSL footer — darker section at bottom of right panel */}
          <div
            className="py-5 px-6 text-center space-y-1"
            style={{ backgroundColor: "#060c1a" }}
          >
            <p className="font-bold text-sm flex items-center justify-center gap-2" style={{ color: "#22c55e" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14H9V9h2v6zm4 0h-2V9h2v6z" />
              </svg>
              128-bit SSL encryption
            </p>
            <p className="text-xs" style={{ color: "#6b7280" }}>
              If the Domain is different from this, please do not login and stay away from that page!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
