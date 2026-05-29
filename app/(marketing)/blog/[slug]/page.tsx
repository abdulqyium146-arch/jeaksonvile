import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import EmergencyCTA from "@/components/sections/emergency-cta"
import { BlogPostSchema } from "@/components/seo/schema"
import { blogPosts } from "@/content/blog"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

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

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const sections = post.content.trim().split(/\n\n+/)

  return (
    <main>
      <BlogPostSchema
        title={post.title}
        excerpt={post.excerpt}
        slug={slug}
        date={post.date}
        tags={post.tags}
        path={`/blog/${slug}`}
      />

      <div className="bg-black text-white min-h-screen">
        <article className="container mx-auto px-4 py-24 max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />

          <div className="flex flex-wrap gap-2 mb-4" aria-label="Article tags">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-yellow-500/10 text-yellow-300 rounded-full px-3 py-1 border border-yellow-400/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-10 text-sm text-zinc-500">
            <span>By <span className="text-zinc-400">{SITE_NAME}</span></span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <div className="text-zinc-300 space-y-5 leading-relaxed">
            {sections.map((section, i) => {
              if (section.startsWith("**") && section.endsWith("**")) {
                return (
                  <h2 key={i} className="text-2xl font-black text-white mt-8">
                    {section.replace(/\*\*/g, "")}
                  </h2>
                )
              }
              if (section.includes("\n")) {
                const lines = section.split("\n")
                return (
                  <div key={i} className="space-y-2">
                    {lines.map((line, j) => {
                      const boldMatch = line.match(/^\*\*(.*?)\*\*(.*)/)
                      if (boldMatch) {
                        return (
                          <p key={j}>
                            <strong className="text-white">{boldMatch[1]}</strong>
                            {boldMatch[2]}
                          </p>
                        )
                      }
                      return <p key={j}>{line}</p>
                    })}
                  </div>
                )
              }
              const boldMatch = section.match(/^\*\*(.*?)\*\*(.*)/)
              if (boldMatch) {
                return (
                  <p key={i}>
                    <strong className="text-white">{boldMatch[1]}</strong>
                    {boldMatch[2]}
                  </p>
                )
              }
              return <p key={i}>{section}</p>
            })}
          </div>

          <footer className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
            <Link href="/blog" className="text-yellow-400 hover:underline text-sm">
              ← Back to Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm rounded-xl border border-yellow-400/30 px-5 py-2 text-yellow-300 hover:bg-yellow-500/10 transition-colors"
            >
              Need a locksmith? Contact us →
            </Link>
          </footer>
        </article>

        <EmergencyCTA />
      </div>
    </main>
  )
}
