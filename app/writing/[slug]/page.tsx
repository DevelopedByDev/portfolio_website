import { getAllPosts, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = false

export default function Post({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    
    return (
      <article className="prose max-w-none">
        <h1>{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-gray-600">
          {new Date(post.date).toLocaleDateString()}
        </time>
        <div 
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    )
  } catch (error) {
    return (
      <div>
        <h1>Post Not Found</h1>
        <p>Sorry, the post you're looking for doesn't exist.</p>
        <p><a href="/writing">Return to all posts</a></p>
      </div>
    )
  }
} 