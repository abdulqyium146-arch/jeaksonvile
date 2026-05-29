import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import EmergencyCTA from "@/components/sections/emergency-cta"
import { blogPosts } from "@/content/blog"
import { SITE_URL } from "@/lib/constants"

export const revalidate = 604800

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Jax Lock Key & Safe Service",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Jax Lock Key & Safe Service",
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${slug}`,
  }

  const sections = post.content.trim().split(/\n\n+/)

  return (
    <main className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${slug}` },
          ]}
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-yellow-500/10 text-yellow-300 rounded-full px-3 py-1 border border-yellow-400/20">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">{post.title}</h1>

        <p className="text-zinc-500 text-sm mb-10">
          Published {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} — Jax Lock Key & Safe Service
        </p>

        <div className="prose prose-invert max-w-none text-zinc-300 space-y-5">
          {sections.map((section, i) => {
            if (section.startsWith("**") && section.endsWith("**")) {
              return <h2 key={i} className="text-2xl font-black text-white">{section.replace(/\*\*/g, "")}</h2>
            }
            if (section.includes("\n")) {
              const lines = section.split("\n")
              return (
                <div key={i} className="space-y-2">
                  {lines.map((line, j) => {
                    const boldMatch = line.match(/^\*\*(.*?)\*\*(.*)/)
                    if (boldMatch) {
                      return (
                        <p key={j} className="leading-relaxed">
                          <strong className="text-white">{boldMatch[1]}</strong>{boldMatch[2]}
                        </p>
                      )
                    }
                    return <p key={j} className="leading-relaxed">{line}</p>
                  })}
                </div>
              )
            }
            const boldMatch = section.match(/^\*\*(.*?)\*\*(.*)/)
            if (boldMatch) {
              return (
                <p key={i} className="leading-relaxed">
                  <strong className="text-white">{boldMatch[1]}</strong>{boldMatch[2]}
                </p>
              )
            }
            return <p key={i} className="leading-relaxed">{section}</p>
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-yellow-400 hover:underline text-sm">← Back to Blog</Link>
        </div>
      </article>

      <EmergencyCTA />
    </main>
  )
}
