import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d3436] tracking-tight mb-8">
        All Reviews
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border border-gray-200 rounded-xl p-5 hover:border-[#2d6a4f] hover:shadow-md transition-all"
          >
            <Link href={`/blog/${post.slug}/`}>
              <time className="text-xs text-gray-400 font-medium">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <h2 className="text-lg font-bold text-[#2d3436] mt-2 group-hover:text-[#2d6a4f] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
