import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/content/blog"

interface RelatedPostsStripProps {
  heading?: string
  slugs?: string[]
  exclude?: string
}

export default function RelatedPostsStrip({
  heading = "Helpful Resources",
  slugs,
  exclude,
}: RelatedPostsStripProps) {
  const list = slugs
    ? blogPosts.filter((p) => slugs.includes(p.slug))
    : blogPosts.filter((p) => p.slug !== exclude).slice(0, 3)

  if (!list.length) return null

  return (
    <section className="py-14 bg-zinc-950 border-t border-white/10" aria-label="Related blog posts">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-white">{heading}</h2>
          <Link href="/blog" className="text-yellow-400 hover:underline text-sm font-medium">
            All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-zinc-900 p-5 hover:border-yellow-400/40 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex gap-2 flex-wrap mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-yellow-500/10 text-yellow-300 rounded-full px-2 py-0.5 border border-yellow-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-yellow-400 text-xs font-medium">
                Read article <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
