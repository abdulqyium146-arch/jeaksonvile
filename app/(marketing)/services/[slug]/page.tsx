import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PhoneCall } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import QuoteForm from "@/components/forms/quote-form"
import { ServiceSchema } from "@/components/seo/schema"
import { services } from "@/content/services"
import { PHONE_HREF, SITE_URL } from "@/lib/constants"

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
  return {
    title: `${service.title} Jacksonville FL`,
    description: service.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
  }
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
    <main className="bg-black text-white min-h-screen">
      <ServiceSchema
        name={service.heading}
        description={service.description}
        url={`${SITE_URL}/services/${slug}`}
      />

      <section className="container mx-auto px-4 py-24 max-w-5xl">
        <Breadcrumbs
          items={[
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-black mb-6">{service.heading}</h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">{service.description}</p>

            <div className="prose prose-invert max-w-none text-zinc-300 space-y-4">
              {contentParagraphs.map((para, i) => {
                if (para.startsWith("-")) {
                  const items = para.split("\n").filter((l) => l.startsWith("-"))
                  return (
                    <ul key={i} className="space-y-1">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{item.replace(/^-\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return <p key={i} className="leading-relaxed">{para}</p>
              })}
            </div>

            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover:scale-105 transition-transform"
            >
              <PhoneCall className="h-5 w-5" />
              Call for Immediate Help
            </a>
          </div>

          <aside className="space-y-6">
            <QuoteForm />
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5 text-sm text-zinc-400 space-y-2">
              <p className="text-white font-semibold">Service Area</p>
              <p>All of Jacksonville, FL including Downtown, San Marco, Southside, Arlington, Riverside, Mandarin, and surrounding Duval County communities.</p>
            </div>
          </aside>
        </div>
      </section>

      <EmergencyCTA />
    </main>
  )
}
