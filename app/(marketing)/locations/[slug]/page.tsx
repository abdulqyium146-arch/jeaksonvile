import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MapPin, PhoneCall } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import ServiceGrid from "@/components/sections/service-grid"
import QuoteForm from "@/components/forms/quote-form"
import { locations } from "@/content/locations"
import { PHONE_HREF, SITE_URL } from "@/lib/constants"

export const revalidate = 86400

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) return {}
  return {
    title: `${location.heading} | Jax Lock Key & Safe Service`,
    description: location.description,
    alternates: { canonical: `${SITE_URL}/locations/${slug}` },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) notFound()

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "Jax Lock Key & Safe Service",
    telephone: "+1-904-586-2816",
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    url: `${SITE_URL}/locations/${slug}`,
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <section className="container mx-auto px-4 py-24 max-w-5xl">
        <Breadcrumbs
          items={[
            { name: "Locations", href: "/locations" },
            { name: location.name, href: `/locations/${slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm mb-6">
              <MapPin className="h-4 w-4" /> {location.county}
            </div>

            <h1 className="text-4xl lg:text-5xl font-black mb-6">{location.heading}</h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">{location.description}</p>

            <div className="prose prose-invert max-w-none text-zinc-300 space-y-4">
              <p>
                Jax Lock Key & Safe Service provides 24-hour mobile locksmith service in {location.name}. Our licensed technicians respond quickly to emergencies including car lockouts, home lockouts, rekeying, and safe service throughout this area.
              </p>
              <p>
                ZIP codes served: {location.zipCodes.join(", ")}
              </p>
              {location.landmarks && location.landmarks.length > 0 && (
                <p>
                  We serve customers near {location.landmarks.join(", ")}, and throughout the surrounding area.
                </p>
              )}
              <p>
                Whether you're locked out of your car, need your home rekeyed, or require emergency locksmith assistance, we dispatch quickly to {location.name} and surrounding neighborhoods.
              </p>
            </div>

            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover:scale-105 transition-transform"
            >
              <PhoneCall className="h-5 w-5" />
              Call for Service in {location.name}
            </a>
          </div>

          <aside>
            <QuoteForm />
          </aside>
        </div>
      </section>

      <div className="py-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            Available Services in {location.name}
          </h2>
        </div>
        <ServiceGrid />
      </div>

      <EmergencyCTA />
    </main>
  )
}
