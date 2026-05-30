import type { Metadata } from "next"
import ServiceCard from "@/components/cards/service-card"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import LocationLinks from "@/components/internal/location-links"
import ServiceLocationMatrix from "@/components/internal/service-location-matrix"
import { ServicesListSchema } from "@/components/seo/schema"
import { services } from "@/content/services"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Locksmith Services Jacksonville FL — Emergency, Residential & Commercial",
  description:
    "Complete locksmith services in Jacksonville, FL: emergency lockouts, car lockouts, rekeying, safe opening, key fob programming, commercial locks. Available 24/7. Call (855) 633-0750.",
  path: "/services",
  keywords: [
    "locksmith services Jacksonville",
    "emergency locksmith Jacksonville FL",
    "residential locksmith Jacksonville",
    "commercial locksmith Jacksonville",
  ],
})

export default function ServicesPage() {
  const schemaItems = services.map((s) => ({
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}`,
    description: s.description,
  }))

  return (
    <main>
      <ServicesListSchema items={schemaItems} />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

          <header className="mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Locksmith Services in Jacksonville, FL
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl">
              Jax Lock Key & Safe Service provides a full range of mobile locksmith services across Jacksonville — available 24 hours a day, 7 days a week.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <LocationLinks
          heading="We Cover Every Jacksonville Neighborhood"
          subheading="Our mobile locksmiths serve all Jacksonville service areas — same fast response wherever you are."
        />

        <ServiceLocationMatrix heading="All Locksmith Services — By Jacksonville Neighborhood" />

        <EmergencyCTA />
      </div>
    </main>
  )
}
