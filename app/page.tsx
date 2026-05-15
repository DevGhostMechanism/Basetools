"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { posts } from './blog/posts'

const domains = [
  { name: 'basetools.website', status: 'MAIN', dot: 'green' },
  { name: 'basetools.se', status: 'BACKUP', dot: 'green' },
  { name: 'basetools.me', status: 'MAIN', dot: 'green' },
  { name: 'basetools.st', status: 'BACKUP', dot: 'green' },
  { name: 'basetools.sk', status: 'OFFLINE', dot: 'red' },
]

const features = [
  {
    emoji: '🧩',
    title: 'Premium Accounts',
    description:
      'Verified accounts for top platforms including Seeking, OurTime, Match, and more — refreshed daily by our vetted sellers.',
    color: '#1a6ef5',
  },
  {
    emoji: '🖥️',
    title: 'RDP Access',
    description:
      'Remote Desktop Protocol access from global locations. Ideal for automation, marketing tasks, and secure remote computing.',
    color: '#7c3aed',
  },
  {
    emoji: '📱',
    title: 'Social Media Tools',
    description:
      'Aged and niche social media accounts to accelerate your digital marketing. Save months of organic growth.',
    color: '#d97706',
  },
  {
    emoji: '📲',
    title: 'SMS Verification',
    description:
      'Virtual phone numbers for receiving SMS verification codes. Fresh, high-acceptance numbers from multiple countries.',
    color: '#059669',
  },
]

const categoryColors: Record<string, string> = {
  Platform: '#1a6ef5',
  RDP: '#7c3aed',
  'Phone Numbers': '#059669',
  Accounts: '#d97706',
  Community: '#db2777',
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const recentPosts = posts.slice(0, 3)

  return (
    <div
      style={{
        backgroundColor: '#060c1a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* ─── NAVBAR ─────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: '1px solid rgba(26,110,245,0.2)',
          backgroundColor: 'rgba(6,12,26,0.96)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image
              src="/Black-logo.svg"
              alt="BaseTools"
              width={150}
              height={32}
              style={{ filter: 'invert(1)', height: 'auto' }}
              priority
            />
            <span
              style={{
                backgroundColor: 'rgba(26,110,245,0.15)',
                border: '1px solid rgba(26,110,245,0.35)',
                borderRadius: '4px',
                color: '#93c5fd',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                padding: '2px 7px',
              }}
            >
              OFFICIAL
            </span>
          </div>

          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              Home
            </Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
              Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link
                href="/login"
                style={{
                  color: '#93c5fd',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(26,110,245,0.35)',
                  padding: '8px 20px',
                  borderRadius: '7px',
                }}
              >
                Login
              </Link>
              <Link
                href="/register"
                style={{
                  backgroundColor: '#1a6ef5',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  padding: '8px 20px',
                  borderRadius: '7px',
                }}
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{
              display: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div style={{ width: '22px', height: '2px', backgroundColor: '#fff', marginBottom: '5px' }} />
            <div style={{ width: '22px', height: '2px', backgroundColor: '#fff', marginBottom: '5px' }} />
            <div style={{ width: '22px', height: '2px', backgroundColor: '#fff' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#0b1a3e',
              borderTop: '1px solid rgba(26,110,245,0.2)',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: '600', padding: '8px 0' }}>
              Home
            </Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '15px', padding: '8px 0' }}>
              Blog
            </Link>
            <Link
              href="/login"
              style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '15px', fontWeight: '600', padding: '8px 0' }}
            >
              Login
            </Link>
            <Link
              href="/register"
              style={{
                backgroundColor: '#1a6ef5',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700',
                padding: '12px 20px',
                borderRadius: '7px',
                textAlign: 'center',
              }}
            >
              Register
            </Link>
          </div>
        )}
      </nav>

      {/* ─── HERO ────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        {/* Background: welcome image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/welcome-image.jpg"
            alt="BaseTools Platform"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={85}
          />
          {/* Dark gradient overlay — heavier on left for text, lighter on right */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(105deg, rgba(6,12,26,0.97) 0%, rgba(6,12,26,0.92) 40%, rgba(6,12,26,0.72) 70%, rgba(6,12,26,0.5) 100%)',
            }}
          />
          {/* Grid overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(rgba(0,80,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.06) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 24px',
            width: '100%',
          }}
        >
          {/* Official badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(26,110,245,0.12)',
              border: '1px solid rgba(26,110,245,0.35)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
              }}
            />
            <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600' }}>
              Official Successor to BaseTools.sk
            </span>
          </div>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '24px',
              maxWidth: '680px',
              letterSpacing: '-0.02em',
            }}
          >
            The World&apos;s Most Trusted{' '}
            <span style={{ color: '#FFB300' }}>Digital Tools</span>{' '}
            Marketplace
          </h1>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '40px',
              maxWidth: '520px',
            }}
          >
            Buy premium accounts, RDP access, social media tools, and virtual phone numbers from verified sellers — with a replacement guarantee on every purchase.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <Link
              href="/login"
              style={{
                backgroundColor: '#1a6ef5',
                color: '#fff',
                padding: '15px 36px',
                borderRadius: '8px',
                fontWeight: '800',
                fontSize: '16px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Login to Platform
            </Link>
            <Link
              href="/register"
              style={{
                border: '2px solid rgba(26,110,245,0.4)',
                color: '#93c5fd',
                padding: '15px 36px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Create Free Account
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
            {[
              { icon: '🔒', label: '128-bit SSL' },
              { icon: '📅', label: 'Since 2015' },
              { icon: '✅', label: 'Verified Sellers' },
              { icon: '🔄', label: 'Replacement Guarantee' },
            ].map((b) => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>{b.icon}</span>
                <span style={{ color: '#64748b', fontSize: '13px', fontWeight: '500' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#060c1a',
          backgroundImage: `linear-gradient(rgba(0,80,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p
              style={{
                color: '#1a6ef5',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                marginBottom: '12px',
              }}
            >
              WHAT WE OFFER
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', marginBottom: '14px' }}>
              Everything You Need in One Place
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              BaseTools is your one-stop marketplace for all premium digital products and services.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: '#0b1a3e',
                  border: '1px solid rgba(26,110,245,0.15)',
                  borderRadius: '14px',
                  padding: '32px 28px',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${f.color}55`
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(26,110,245,0.15)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: `${f.color}18`,
                    border: `1px solid ${f.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px',
                  }}
                >
                  {f.emoji}
                </div>
                <h3 style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>
                  {f.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFICIAL DOMAIN WARNING ─────────────────────── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #04112e 0%, #06246e 50%, #091e5c 100%)',
              border: '1px solid rgba(26,110,245,0.3)',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,160,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.07) 1px, transparent 1px)`,
                backgroundSize: '18px 18px',
                padding: '52px 40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              {/* Left */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(239,68,68,0.15)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '100px',
                    padding: '5px 14px',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{ color: '#fca5a5', fontSize: '12px', fontWeight: '700' }}>
                    ⚠ ANTI-PHISHING NOTICE
                  </span>
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                    fontWeight: '900',
                    lineHeight: '1.2',
                    marginBottom: '14px',
                  }}
                >
                  Only Trust Our Official Domains
                </h2>
                <p style={{ color: '#93c5fd', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  Fake phishing copies of BaseTools exist. Always verify you are on one of the official domains listed here before logging in or making any purchase.
                </p>
                <a
                  href="https://basetools-domains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#FFB300',
                    color: '#060c1a',
                    padding: '11px 24px',
                    borderRadius: '7px',
                    fontWeight: '800',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  View All Official Domains →
                </a>
              </div>

              {/* Right: domain list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {domains.map((d) => (
                  <div
                    key={d.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(6,12,26,0.5)',
                      border: '1px solid rgba(26,110,245,0.2)',
                      borderRadius: '10px',
                      padding: '12px 18px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: d.dot === 'green' ? '#22c55e' : '#ef4444',
                          boxShadow: d.dot === 'green' ? '0 0 6px #22c55e' : '0 0 6px #ef4444',
                        }}
                      />
                      <span style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: '500' }}>{d.name}</span>
                    </div>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor:
                          d.status === 'MAIN'
                            ? 'rgba(26,110,245,0.2)'
                            : d.status === 'BACKUP'
                            ? 'rgba(217,119,6,0.2)'
                            : 'rgba(239,68,68,0.2)',
                        color:
                          d.status === 'MAIN'
                            ? '#93c5fd'
                            : d.status === 'BACKUP'
                            ? '#fbbf24'
                            : '#fca5a5',
                      }}
                    >
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY RESOURCES ─────────────────────────── */}
      <section
        style={{
          backgroundColor: '#080f1f',
          padding: '80px 24px',
          borderTop: '1px solid rgba(26,110,245,0.1)',
          borderBottom: '1px solid rgba(26,110,245,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#1a6ef5', fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', marginBottom: '12px' }}>
              COMMUNITY
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: '900', marginBottom: '12px' }}>
              Where Our Community Hangs Out
            </h2>
            <p style={{ color: '#64748b', fontSize: '15px', maxWidth: '460px', margin: '0 auto' }}>
              Join thousands of digital tools buyers and sellers across these trusted platforms.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: '🔴',
                name: 'r/selfhosted',
                url: 'https://www.reddit.com/r/selfhosted/',
                desc: 'RDP, remote access, and self-hosted tools',
                tag: 'Reddit',
              },
              {
                icon: '🔴',
                name: 'r/privacy',
                url: 'https://www.reddit.com/r/privacy/',
                desc: 'Virtual numbers, VPNs, and anonymous tools',
                tag: 'Reddit',
              },
              {
                icon: '🔴',
                name: 'r/digital_marketing',
                url: 'https://www.reddit.com/r/digital_marketing/',
                desc: 'Social media accounts and marketing automation',
                tag: 'Reddit',
              },
              {
                icon: '🔴',
                name: 'r/homelab',
                url: 'https://www.reddit.com/r/homelab/',
                desc: 'Home servers, RDP setups, and remote access',
                tag: 'Reddit',
              },
              {
                icon: '🌐',
                name: 'BlackHatWorld',
                url: 'https://www.blackhatworld.com/',
                desc: 'The largest marketplace for digital tools and accounts',
                tag: 'Forum',
              },
              {
                icon: '🌐',
                name: 'WarriorForum',
                url: 'https://www.warriorforum.com/',
                desc: 'Digital marketing, tools, and account discussions',
                tag: 'Forum',
              },
              {
                icon: '🌐',
                name: 'DigitalPoint',
                url: 'https://forums.digitalpoint.com/',
                desc: 'Webmaster forum with active buy/sell for digital services',
                tag: 'Forum',
              },
              {
                icon: '🌐',
                name: 'HackForums',
                url: 'https://hackforums.net/',
                desc: 'Community covering RDP, accounts, and phone verification',
                tag: 'Forum',
              },
            ].map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  backgroundColor: '#0b1a3e',
                  border: '1px solid rgba(26,110,245,0.13)',
                  borderRadius: '12px',
                  padding: '18px 20px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(26,110,245,0.4)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(26,110,245,0.13)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{c.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                    <span style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: '700' }}>{c.name}</span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '600',
                        color: c.tag === 'Reddit' ? '#f97316' : '#1a6ef5',
                        backgroundColor: c.tag === 'Reddit' ? 'rgba(249,115,22,0.12)' : 'rgba(26,110,245,0.12)',
                        padding: '1px 7px',
                        borderRadius: '4px',
                      }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#060c1a',
          backgroundImage: `linear-gradient(rgba(0,80,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p style={{ color: '#1a6ef5', fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', marginBottom: '10px' }}>
                RESOURCES
              </p>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '900' }}>
                From the BaseTools Blog
              </h2>
            </div>
            <Link
              href="/blog"
              style={{ color: '#1a6ef5', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}
            >
              View all posts →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    backgroundColor: '#0b1a3e',
                    border: '1px solid rgba(26,110,245,0.13)',
                    borderRadius: '12px',
                    padding: '26px',
                    height: '100%',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(26,110,245,0.4)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(26,110,245,0.13)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <span
                      style={{
                        backgroundColor: categoryColors[post.category] ?? '#1a6ef5',
                        color: '#fff',
                        padding: '3px 9px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ color: '#475569', fontSize: '11px' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ color: '#e2e8f0', fontSize: '15px', fontWeight: '700', lineHeight: '1.45', marginBottom: '10px' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.55' }}>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: '#04090f',
          borderTop: '1px solid rgba(26,110,245,0.15)',
          padding: '48px 24px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '40px',
            }}
          >
            {/* Brand */}
            <div>
              <Image
                src="/Black-logo.svg"
                alt="BaseTools"
                width={140}
                height={30}
                style={{ filter: 'invert(1)', height: 'auto', marginBottom: '14px' }}
              />
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.6', maxWidth: '220px' }}>
                The official digital tools marketplace — trusted since 2015. Successor to BaseTools.sk.
              </p>
            </div>

            {/* Platform */}
            <div>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: '700', marginBottom: '14px' }}>Platform</p>
              {[
                { label: 'Login', href: '/login' },
                { label: 'Register', href: '/register' },
                { label: 'Deposit', href: '/deposit' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '13px', marginBottom: '9px' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: '700', marginBottom: '14px' }}>Resources</p>
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'RDP Guide', href: '/blog/buy-rdp-access-guide' },
                { label: 'SMS Verification', href: '/blog/virtual-phone-numbers-sms-verification' },
                { label: 'Communities', href: '/blog/top-communities-digital-tools' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '13px', marginBottom: '9px' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Security */}
            <div>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: '700', marginBottom: '14px' }}>Security</p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#22c55e', fontSize: '16px' }}>🔒</span>
                <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: '600' }}>128-bit SSL Encrypted</span>
              </div>
              <p style={{ color: '#374151', fontSize: '12px', lineHeight: '1.5' }}>
                If the domain differs from our official list, do not login. You may be on a phishing site.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(26,110,245,0.1)',
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p style={{ color: '#374151', fontSize: '12px' }}>
              © 2015–2026 BaseTools. All rights reserved. | Official platform for BaseTools.sk
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacy Policy', 'Terms of Service', 'Rules'].map((t) => (
                <a key={t} href="#" style={{ color: '#374151', textDecoration: 'none', fontSize: '12px' }}>
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  )
}
