// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://basetools.website'

  // 1. Define your static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // 2. Fetch your dynamic routes (Optional)
  // Replace this with your actual database or CMS API call
  // const data = await fetch('https://basetools.website').then(res => res.json())
  // const dynamicRoutes = data.map((item: any) => ({
  //   url: `${baseUrl}/tools/${item.slug}`,
  //   lastModified: new Date(item.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...staticRoutes] // If using dynamic routes, return: [...staticRoutes, ...dynamicRoutes]
}