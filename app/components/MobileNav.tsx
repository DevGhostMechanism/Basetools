"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '6px',
        }}
        className="mobile-menu-btn"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <div style={{ width: '22px', height: '2px', backgroundColor: '#fff', marginBottom: '5px' }} />
        <div style={{ width: '22px', height: '2px', backgroundColor: '#fff', marginBottom: '5px' }} />
        <div style={{ width: '22px', height: '2px', backgroundColor: '#fff' }} />
      </button>

      {open && (
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
    </>
  )
}
