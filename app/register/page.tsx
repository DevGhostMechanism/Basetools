"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

const CAPTCHA_ANSWER = "ju7FvD";

function CaptchaImage() {
  return (
    <div
      className="flex items-center justify-center px-3 flex-shrink-0 select-none relative overflow-hidden"
      style={{
        minWidth: "110px",
        minHeight: "48px",
        background: "linear-gradient(120deg, #c8c8c8, #efefef, #d4d4d4)",
      }}
    >
      {/* Horizontal noise lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(0,0,0,0.04) 5px, rgba(0,0,0,0.04) 6px)",
        }}
      />
      {/* Diagonal scratch */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: "20%",
          width: "1px",
          height: "100%",
          background: "rgba(0,0,0,0.15)",
          transform: "rotate(12deg)",
        }}
      />
      <span
        className="relative"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "21px",
          fontWeight: "bold",
          letterSpacing: "3px",
          color: "#111",
          transform: "skewX(-6deg)",
          display: "inline-block",
          textShadow: "1px 1px 0 rgba(0,0,0,0.12)",
        }}
      >
        ju7F
        <span
          style={{
            display: "inline-block",
            transform: "skewX(14deg) translateY(2px)",
          }}
        >
          v
        </span>
        D
      </span>
    </div>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  async function handleRegister() {
    if (!username.trim()) {
      setError("Please enter your username.");
      return;
    }
    if (!password.trim()) {
      setError("Please generate a password first.");
      return;
    }
    if (captchaInput !== CAPTCHA_ANSWER) {
      setError("Incorrect CAPTCHA. Please try again.");
      return;
    }
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.trim(),
        password,
      }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const data = await res.json();
      setError(data.error ?? "Registration failed. Please try again.");
    }
  }

  function generatePassword() {
    const chars =
      "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&";
    let pwd = "";
    for (let i = 0; i < 14; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  }

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
              top: "-60px",
              right: "-60px",
              width: "340px",
              height: "340px",
              background:
                "radial-gradient(circle, rgba(30,120,255,0.3) 0%, transparent 70%)",
            }}
          />
          {/* Glow — bottom left */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-40px",
              left: "-40px",
              width: "260px",
              height: "260px",
              background:
                "radial-gradient(circle, rgba(0,80,200,0.28) 0%, transparent 70%)",
            }}
          />
          {/* Orange vertical accent line */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: "58%",
              width: "3px",
              background:
                "linear-gradient(180deg, transparent 0%, #f59e0b 35%, #f59e0b 65%, transparent 100%)",
              opacity: 0.65,
            }}
          />
          {/* Watermark logo */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.05 }}
          >
            <Image
              src="/Black-logo.svg"
              alt=""
              width={360}
              height={75}
              style={{ filter: "invert(1)", height: "auto" }}
            />
          </div>
          {/* BASETOOLS badge (top-left) */}
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
              Register to
            </p>
            <p className="text-white text-2xl lg:text-3xl font-extrabold leading-tight drop-shadow">
              BaseTools.sk
            </p>
          </div>
        </div>

        {/* ── Form panel — below on mobile, right on desktop ── */}
        <div
          className="flex-1 flex flex-col p-6 lg:p-8"
          style={{ backgroundColor: "#0b1a3e" }}
        >
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/Black-logo.svg"
              alt="BaseTools"
              width={200}
              height={42}
              style={{ filter: "invert(1)", height: "auto" }}
            />
          </div>

          <h1
            className="text-xl lg:text-2xl font-bold mb-1"
            style={{ color: "#FFB300" }}
          >
            Register to BaseTools
          </h1>
          <p className="font-bold mb-5 text-sm" style={{ color: "#3b82f6" }}>
            Fast and Easy
          </p>

          <div className="flex flex-col gap-[5px]">
            {/* Username */}
            <div className="flex items-stretch overflow-hidden">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "48px", backgroundColor: "#1a6ef5" }}
              >
                <User className="w-5 h-5 text-white" />
              </div>
              <input
                type="text"
                placeholder="Enter username here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 py-3 px-4 text-sm text-white placeholder-gray-500 outline-none"
                style={{ backgroundColor: "#091224" }}
              />
            </div>

            {/* Generate Password — stacked on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-[5px]">
              <button
                onClick={generatePassword}
                className="py-3 px-4 text-sm font-semibold transition-opacity hover:opacity-90 text-center sm:flex-shrink-0"
                style={{
                  backgroundColor: "#0d2255",
                  color: "#1a6ef5",
                  minWidth: "155px",
                }}
              >
                Generate Password
              </button>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter or generate a password"
                className="flex-1 py-3 px-4 text-sm text-white placeholder-gray-500 outline-none"
                style={{ backgroundColor: "#091224" }}
              />
            </div>

            {/* CAPTCHA */}
            <div className="flex items-stretch gap-[5px]">
              <CaptchaImage />
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter CAPTCHA"
                className="flex-1 py-3 px-4 text-sm text-white placeholder-gray-500 outline-none"
                style={{ backgroundColor: "#091224" }}
              />
            </div>

            {/* I am not a robot checkbox */}
            {/* <label
              className="flex items-center gap-3 px-3 py-3 cursor-pointer select-none"
              style={{ backgroundColor: "#091224" }}
            >
              <input
                type="checkbox"
                checked={humanChecked}
                onChange={(e) => setHumanChecked(e.target.checked)}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
              />
              <span className="text-sm" style={{ color: "#9ca3af" }}>
                I am not a robot
              </span>
            </label> */}

            {/* Error message */}
            {error && <p className="text-sm text-red-400 px-1">{error}</p>}

            <p className="text-xs text-gray-400 mt-1 mb-2 px-1">
              Save your login details in a secure location, as you will need it
              to login immediately after registration.
            </p>

            {/* Register button */}
            <button
              className="w-full py-3 mt-1 font-black text-white tracking-widest text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1a6ef5" }}
              onClick={handleRegister}
            >
              REGISTER
            </button>

            {/* Sign in link */}
            <p
              className="text-center text-sm pt-1"
              style={{ color: "#6b7280" }}
            >
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:underline"
                style={{ color: "#3b82f6" }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* SSL Footer */}
      <div
        className="w-full lg:max-w-5xl py-5 px-6 text-center space-y-1"
        style={{ backgroundColor: "#060c1a" }}
      >
        <p className="font-bold text-sm" style={{ color: "#22c55e" }}>
          128-bit SSL encryption
        </p>
        <p className="text-xs" style={{ color: "#6b7280" }}>
          If the Domain is different from this, please do not login and stay
          away from that page!
        </p>
      </div>
    </div>
  );
}
