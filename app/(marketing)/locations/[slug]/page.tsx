import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, PhoneCall } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import ServiceGrid from "@/components/sections/service-grid"
import LocationLinks from "@/components/internal/location-links"
import RelatedPostsStrip from "@/components/internal/related-posts-strip"
import QuoteForm from "@/components/forms/quote-form"
import { locations } from "@/content/locations"
import { buildMetadata } from "@/lib/metadata"
import { PHONE_HREF, SITE_URL, SITE_NAME } from "@/lib/constants"
import { buildLocalBusinessSchema } from "@/lib/schema"

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

  return buildMetadata({
    title: `Locksmith in ${location.name} FL | ${SITE_NAME}`,
    description: `${location.description} Licensed 24/7 mobile locksmith serving ${location.name}. Call (855) 633-0750 for fast emergency response.`,
    path: `/locations/${slug}`,
    keywords: [
      `locksmith ${location.name}`,
      `emergency locksmith ${location.name}`,
      `mobile locksmith ${location.name} FL`,
    ],
  })
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
    ...buildLocalBusinessSchema(),
    "@id": `${SITE_URL}/locations/${slug}/#localbusiness`,
    name: `${SITE_NAME} — ${location.name}`,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    url: `${SITE_URL}/locations/${slug}`,
    ...(location.lat && location.lng
      ? { geo: { "@type": "GeoCoordinates", latitude: location.lat, longitude: location.lng } }
      : {}),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Locations", href: "/locations" },
              { name: location.name, href: `/locations/${slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm mb-6">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {location.county}
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                {location.heading}
              </h1>

              <p className="text-xl text-zinc-300 mb-8 leading-relaxed speakable">
                {location.description}
              </p>

              <div className="text-zinc-300 space-y-4 leading-relaxed">
                {/* Contextual internal links to service pages within body copy */}
                <p>
                  Jax Lock Key &amp; Safe Service provides 24-hour mobile locksmith service throughout {location.name}.
                  Our licensed technicians respond quickly to{" "}
                  <Link href="/services/car-lockout" className="text-yellow-400 hover:underline font-medium">
                    car lockouts
                  </Link>
                  ,{" "}
                  <Link href="/services/house-lockout" className="text-yellow-400 hover:underline font-medium">
                    home lockouts
                  </Link>
                  ,{" "}
                  <Link href="/services/rekeying-service" className="text-yellow-400 hover:underline font-medium">
                    lock rekeying
                  </Link>
                  ,{" "}
                  <Link href="/services/safe-locksmith" className="text-yellow-400 hover:underline font-medium">
                    safe opening
                  </Link>
                  , and{" "}
                  <Link href="/services/emergency-locksmith" className="text-yellow-400 hover:underline font-medium">
                    emergency locksmith service
                  </Link>
                  .
                </p>

                <p>
                  <strong className="text-white">ZIP codes served:</strong> {location.zipCodes.join(", ")}
                </p>

                {location.landmarks && location.landmarks.length > 0 && (
                  <p>
                    We serve customers near {location.landmarks.join(", ")}, and throughout the surrounding area.
                  </p>
                )}

                <p>
                  Whether you need a{" "}
                  <Link href="/services/key-fob-programming" className="text-yellow-400 hover:underline font-medium">
                    car key fob programmed
                  </Link>
                  , a{" "}
                  <Link href="/services/lock-installation" className="text-yellow-400 hover:underline font-medium">
                    new deadbolt installed
                  </Link>
                  ,{" "}
                  <Link href="/services/residential-locksmith" className="text-yellow-400 hover:underline font-medium">
                    residential locksmith services
                  </Link>
                  , or{" "}
                  <Link href="/services/commercial-locksmith" className="text-yellow-400 hover:underline font-medium">
                    commercial locksmith services
                  </Link>
                  , we dispatch quickly to {location.name} and surrounding neighborhoods.
                  Most calls receive a 20–30 minute arrival.
                </p>
              </div>

              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover-scale"
                aria-label={`Call for locksmith service in ${location.name}`}
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                Call for Service in {location.name}
              </a>
            </article>

            <aside aria-label="Quick quote">
              <QuoteForm />
            </aside>
          </div>
        </section>

        {/* ── All services in this location ── */}
        <section aria-labelledby="services-heading" className="py-4">
          <div className="container mx-auto px-4">
            <h2 id="services-heading" className="text-3xl font-black text-white mb-8 text-center">
              Services Available in {location.name}
            </h2>
          </div>
          <ServiceGrid />
        </section>

        {/* ── Nearby service areas ── */}
        {location.nearbyAreas && location.nearbyAreas.length > 0 && (
          <LocationLinks
            heading="Nearby Service Areas"
            subheading={`We also serve the communities surrounding ${location.name} with the same fast response.`}
            highlight={location.nearbyAreas}
            exclude={slug}
          />
        )}

        {/* ── Related blog posts ── */}
        {location.relatedPosts && location.relatedPosts.length > 0 && (
          <RelatedPostsStrip
            heading="Locksmith Tips for Jacksonville Residents"
            slugs={location.relatedPosts}
          />
        )}

        <EmergencyCTA />
      </div>
    </main>
  )
}
