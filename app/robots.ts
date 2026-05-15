import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/register', '/home', '/deposit'],
    },
    sitemap: 'https://basetools.website/sitemap.xml',
  }
}
