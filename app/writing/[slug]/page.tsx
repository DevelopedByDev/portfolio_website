import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <time dateTime={post.date} className="text-sm text-gray-600">
        {new Date(post.date).toLocaleDateString()}
      </time>
      <div className="mt-8">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
} 