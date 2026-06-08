import type { Metadata } from 'next'
import { posts } from './posts'
import BlogContent from './BlogContent'

export const metadata: Metadata = {
  title: 'Blog — Digital Tools Guides & Resources',
  description:
    'Guides, tips, and resources from the BaseTools team. Learn about RDP access, virtual phone numbers, social media accounts, and digital tools marketplaces.',
  alternates: {
    canonical: 'https://basetools.website/blog',
  },
  openGraph: {
    title: 'Blog — BaseTools | Digital Tools Guides & Resources',
    description:
      'Guides, tips, and resources from the BaseTools team. Learn about RDP access, virtual phone numbers, social media accounts, and digital tools marketplaces.',
    url: 'https://basetools.website/blog',
    siteName: 'BaseTools',
    type: 'website',
    images: [
      {
        url: 'https://basetools.website/welcome-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BaseTools Blog — Digital Tools Guides & Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — BaseTools | Digital Tools Guides & Resources',
    description:
      'Guides, tips, and resources from the BaseTools team. Learn about RDP access, virtual phone numbers, social media accounts, and digital tools marketplaces.',
    images: ['https://basetools.website/welcome-image.jpg'],
  },
}

export default function BlogPage() {
  return <BlogContent posts={posts} />
}
