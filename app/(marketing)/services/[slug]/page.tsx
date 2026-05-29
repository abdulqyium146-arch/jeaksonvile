import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PhoneCall } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import QuoteForm from "@/components/forms/quote-form"
import LocationLinks from "@/components/internal/location-links"
import RelatedServicesStrip from "@/components/internal/related-services-strip"
import RelatedPostsStrip from "@/components/internal/related-posts-strip"
import { ServicePageSchema } from "@/components/seo/schema"
import { services } from "@/content/services"
import { buildMetadata } from "@/lib/metadata"
import { PHONE_HREF, SITE_NAME } from "@/lib/constants"

export const revalidate = 86400

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  return buildMetadata({
    title: `${service.title} Jacksonville FL | ${SITE_NAME}`,
    description: `${service.description} Licensed mobile locksmith serving all of Jacksonville. Call (904) 586-2816 for fast 24/7 service.`,
    path: `/services/${slug}`,
    keywords: service.keywords,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const contentParagraphs = service.content.trim().split(/\n\n+/)

  return (
    <main>
      <ServicePageSchema
        name={service.heading}
        description={service.description}
        slug={slug}
        path={`/services/${slug}`}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                {service.heading}
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed speakable">
                {service.description}
              </p>

              <div className="text-zinc-300 space-y-4 leading-relaxed">
                {contentParagraphs.map((para, i) => {
                  if (para.startsWith("-")) {
                    const items = para.split("\n").filter((l) => l.startsWith("-"))
                    return (
                      <ul key={i} className="space-y-2 my-4" aria-label="Service details">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-yellow-400 mt-1 shrink-0" aria-hidden="true">•</span>
                            <span>{item.replace(/^-\s*/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return <p key={i}>{para}</p>
                })}
              </div>

              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover-scale"
                aria-label={`Call for ${service.title} service`}
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                Call for Immediate Help
              </a>
            </article>

            <aside aria-label="Request a quote">
              <QuoteForm />
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900 p-5 text-sm text-zinc-400 space-y-2">
                <p className="text-white font-semibold">Service Area</p>
                <p>
                  All of Jacksonville, FL — Downtown, San Marco, Southside, Arlington, Riverside,
                  Mandarin, Neptune Beach, and surrounding Duval County communities.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Internal linking: all service areas ── */}
        <LocationLinks
          heading={`${service.title} Across All of Jacksonville`}
          subheading="We dispatch mobile locksmiths to every Jacksonville neighborhood and surrounding area — same fast response everywhere."
        />

        {/* ── Internal linking: related services ── */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <RelatedServicesStrip
            heading="Related Services"
            slugs={service.relatedServices}
          />
        )}

        {/* ── Internal linking: related blog posts ── */}
        {service.relatedPosts && service.relatedPosts.length > 0 && (
          <RelatedPostsStrip
            heading="Helpful Resources"
            slugs={service.relatedPosts}
          />
        )}

        <EmergencyCTA />
      </div>
    </main>
  )
}
