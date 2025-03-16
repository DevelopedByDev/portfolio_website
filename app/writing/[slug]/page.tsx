import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXProvider } from '@mdx-js/react'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = false

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <time dateTime={post.date} className="text-sm text-gray-600">
        {new Date(post.date).toLocaleDateString()}
      </time>
      <div className="mt-8">
        <MDXProvider>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </MDXProvider>
      </div>
    </article>
  )
} 