import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    
    return (
      <article className="py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          back to home
        </Link>
        
        <h1 style={{ marginBottom: '0.5rem' }}>{post.title}</h1>
        <time className="mono muted" style={{ fontSize: '0.8rem' }}>
          {new Date(post.date).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </time>
        
        <div 
          className="prose-content mt-12"
          style={{
            lineHeight: 1.8,
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    )
  } catch {
    return (
      <div className="py-12">
        <h1>post not found</h1>
        <p className="muted">sorry, the post you're looking for doesn't exist.</p>
        <Link href="/" className="mt-4 inline-block">
          return to home
        </Link>
      </div>
    )
  }
}
