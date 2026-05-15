import { posts } from './posts'
import BlogContent from './BlogContent'

export const metadata = {
  title: 'Blog — BaseTools | Digital Tools Guides & Resources',
  description:
    'Guides, tips, and resources from the BaseTools team. Learn about RDP access, virtual phone numbers, social media accounts, and digital tools marketplaces.',
}

export default function BlogPage() {
  return <BlogContent posts={posts} />
}
