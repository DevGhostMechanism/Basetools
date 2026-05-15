"use client"

import Link from 'next/link'
import Image from 'next/image'
import type { Post } from './posts'

const categoryColors: Record<string, string> = {
  Platform: '#1a6ef5',
  RDP: '#7c3aed',
  'Phone Numbers': '#059669',
  Accounts: '#d97706',
  Community: '#db2777',
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const [featured, ...rest] = posts

  return (
    <div
      style={{
        backgroundColor: '#060c1a',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,80,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}
    >
      {/* Nav */}
      <nav
        style={{
          borderBottom: '1px solid rgba(26,110,245,0.2)',
          backgroundColor: 'rgba(6,12,26,0.95)',
          backdropFilter: 'blur(8px)',
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
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <Image src="/Black-logo.svg" alt="BaseTools" width={140} height={30} style={{ filter: 'invert(1)', height: 'auto' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
              Home
            </Link>
            <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              Blog
            </Link>
            <Link
              href="/login"
              style={{
                backgroundColor: '#1a6ef5',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(26,110,245,0.15)',
              border: '1px solid rgba(26,110,245,0.3)',
              borderRadius: '100px',
              padding: '4px 14px',
              marginBottom: '16px',
            }}
          >
            <span style={{ color: '#93c5fd', fontSize: '12px', fontWeight: '600', letterSpacing: '0.05em' }}>
              BASETOOLS BLOG
            </span>
          </div>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '900', marginBottom: '12px' }}>
            Guides &amp; Resources
          </h1>
          <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '540px' }}>
            In-depth guides on digital tools, RDP access, virtual phone numbers, social media accounts, and more.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          style={{ textDecoration: 'none', display: 'block', marginBottom: '48px' }}
        >
          <div
            style={{
              backgroundColor: '#0b1a3e',
              border: '1px solid rgba(26,110,245,0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(26,110,245,0.5)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(26,110,245,0.2)')}
          >
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span
                  style={{
                    backgroundColor: categoryColors[featured.category] ?? '#1a6ef5',
                    color: '#fff',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  {featured.category}
                </span>
                <span style={{ color: '#475569', fontSize: '13px' }}>
                  {featured.date} · {featured.readTime}
                </span>
              </div>
              <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '16px' }}>
                {featured.title}
              </h2>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
                {featured.description}
              </p>
              <span
                style={{
                  color: '#1a6ef5',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Read Article →
              </span>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #04112e 0%, #06246e 50%, #0d44c8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(rgba(0,160,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.08) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                }}
              />
              <div style={{ position: 'relative', textAlign: 'center', padding: '32px' }}>
                <Image
                  src="/Black-logo.svg"
                  alt="BaseTools"
                  width={160}
                  height={34}
                  style={{ filter: 'invert(1)', opacity: 0.4, height: 'auto' }}
                />
                <p
                  style={{
                    color: '#FFB300',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    marginTop: '16px',
                  }}
                >
                  FEATURED POST
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  backgroundColor: '#0b1a3e',
                  border: '1px solid rgba(26,110,245,0.15)',
                  borderRadius: '12px',
                  padding: '28px',
                  height: '100%',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(26,110,245,0.5)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(26,110,245,0.15)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span
                    style={{
                      backgroundColor: categoryColors[post.category] ?? '#1a6ef5',
                      color: '#fff',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: '#475569', fontSize: '12px' }}>{post.readTime}</span>
                </div>
                <h3
                  style={{
                    color: '#e2e8f0',
                    fontSize: '1rem',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    marginBottom: '12px',
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
                  {post.description}
                </p>
                <span style={{ color: '#1a6ef5', fontSize: '13px', fontWeight: '600' }}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(26,110,245,0.15)',
          marginTop: '80px',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#475569', fontSize: '13px' }}>
          © 2026 <strong style={{ color: '#64748b' }}>BaseTools</strong> — The Official Digital Tools Marketplace |{' '}
          <Link href="/" style={{ color: '#1a6ef5', textDecoration: 'none' }}>
            basetools.website
          </Link>
        </p>
      </footer>
    </div>
  )
}
