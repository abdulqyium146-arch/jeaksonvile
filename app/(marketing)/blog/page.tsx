import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { blogPosts } from "@/content/blog"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Jacksonville Locksmith Blog — Tips, Guides & Home Security Advice",
  description:
    "Locksmith tips, home security guides, and expert advice from Jax Lock Key & Safe Service in Jacksonville, FL. Learn about lockouts, rekeying, smart locks, and key fobs.",
  path: "/blog",
  keywords: [
    "locksmith blog Jacksonville",
    "home security tips Jacksonville",
    "locksmith advice Florida",
    "lockout tips Jacksonville",
  ],
})

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/#blog`,
    name: "Jacksonville Locksmith Blog",
    url: `${SITE_URL}/blog`,
    description: "Locksmith tips and home security advice from Jax Lock Key & Safe Service",
    blogPost: sorted.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-4xl">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

          <header className="mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Jacksonville Locksmith Blog
            </h1>
            <p className="text-zinc-400 text-xl">
              Locksmith tips, home security advice, and guides from Jax Lock Key & Safe Service.
            </p>
          </header>

          <div className="space-y-6">
            {sorted.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-yellow-400/50 hover:bg-zinc-800 transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3" aria-label="Tags">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-yellow-500/10 text-yellow-300 rounded-full px-3 py-1 border border-yellow-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-zinc-500"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                      Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
