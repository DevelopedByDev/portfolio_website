import { getAllPosts } from '@/lib/posts'

export default function Writing() {
  const posts = getAllPosts()

  return (
    <section id="writing">
      <h2>writing</h2>
      <p>
        i'm divyansh lalwani, but you can call me dev. i study biomedical engineering and applied math at the johns hopkins university. i'm on a journey to make the best developer i can be. currently learning web development and diving deep into deep learning. my aim is to inspire people who inspire me. here's my writing. do indulge. take away something. act on it. tell me about it. make both our days.
      </p>
      <p>for shorter writing, check out my <a href="https://x.com/dsllwn" target="_blank" rel="noopener noreferrer">x</a></p>

      <h3>blogs</h3>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-4">
            <h4 className="text-xl font-semibold">
              <a href={`/writing/${encodeURIComponent(post.slug)}`}>{post.title}</a>
            </h4>
            <time dateTime={post.date} className="text-sm text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </time>
            <p className="mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}