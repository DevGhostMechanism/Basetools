import { MetadataRoute } from 'next'
import { posts } from './blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://basetools.website'
  const now = new Date()

  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogPostRoutes,
  ]
}
