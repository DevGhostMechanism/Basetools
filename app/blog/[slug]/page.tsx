import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { posts, getPost, type ContentBlock } from '../posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — BaseTools Blog`,
    description: post.description,
  }
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          style={{
            color: '#e2e8f0',
            fontSize: '1.35rem',
            fontWeight: '800',
            margin: '36px 0 14px',
            paddingBottom: '10px',
            borderBottom: '1px solid rgba(26,110,245,0.2)',
          }}
        >
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p key={i} style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.8', margin: '0 0 16px' }}>
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none' }}>
          {block.items.map((item, j) => (
            <li
              key={j}
              style={{
                color: '#94a3b8',
                fontSize: '15px',
                lineHeight: '1.7',
                padding: '6px 0 6px 20px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#1a6ef5',
                  display: 'block',
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'link-list':
      return (
        <div key={i} style={{ margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {block.links.map((link, j) => (
            <a
              key={j}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                backgroundColor: 'rgba(26,110,245,0.07)',
                border: '1px solid rgba(26,110,245,0.25)',
                borderRadius: '10px',
                padding: '14px 18px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(26,110,245,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '14px',
                }}
              >
                🔗
              </div>
              <div>
                <p style={{ color: '#93c5fd', fontSize: '14px', fontWeight: '700', margin: '0 0 4px' }}>
                  {link.name}
                </p>
                <p style={{ color: '#64748b', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const categoryColors: Record<string, string> = {
    Platform: '#1a6ef5',
    RDP: '#7c3aed',
    'Phone Numbers': '#059669',
    Accounts: '#d97706',
    Community: '#db2777',
  }

  return (
    <div
      style={{
        backgroundColor: '#060c1a',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,80,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.04) 1px, transparent 1px)`,
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image src="/Black-logo.svg" alt="BaseTools" width={140} height={30} style={{ filter: 'invert(1)', height: 'auto' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
              Home
            </Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
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

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: '#475569', textDecoration: 'none', fontSize: '13px' }}>
            Blog
          </Link>
          <span style={{ color: '#334155', fontSize: '13px' }}>/</span>
          <span style={{ color: '#64748b', fontSize: '13px' }}>{post.category}</span>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <span
            style={{
              backgroundColor: categoryColors[post.category] ?? '#1a6ef5',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            {post.category}
          </span>
          <span style={{ color: '#475569', fontSize: '13px' }}>
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: '900',
            lineHeight: '1.25',
            marginBottom: '20px',
          }}
        >
          {post.title}
        </h1>

        {/* Description */}
        <p
          style={{
            color: '#64748b',
            fontSize: '17px',
            lineHeight: '1.7',
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(26,110,245,0.15)',
          }}
        >
          {post.description}
        </p>

        {/* Content */}
        <article>{post.content.map((block, i) => renderBlock(block, i))}</article>

        {/* CTA */}
        <div
          style={{
            marginTop: '56px',
            padding: '32px',
            backgroundColor: '#0b1a3e',
            border: '1px solid rgba(26,110,245,0.25)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#FFB300', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '10px' }}>
            OFFICIAL PLATFORM
          </p>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', marginBottom: '10px' }}>
            Ready to access BaseTools?
          </h3>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
            Login to the official platform at basetools.website — the trusted successor to BaseTools.sk.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/login"
              style={{
                backgroundColor: '#1a6ef5',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Login to Platform
            </Link>
            <Link
              href="/register"
              style={{
                border: '1px solid rgba(26,110,245,0.4)',
                color: '#93c5fd',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Back */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/blog" style={{ color: '#475569', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
