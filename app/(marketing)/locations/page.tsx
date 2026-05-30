import type { Metadata } from "next"
import LocationCard from "@/components/cards/location-card"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import RelatedServicesStrip from "@/components/internal/related-services-strip"
import ServiceLocationMatrix from "@/components/internal/service-location-matrix"
import { LocationsListSchema } from "@/components/seo/schema"
import { locations } from "@/content/locations"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Locksmith Service Areas Jacksonville FL — All Neighborhoods",
  description:
    "Jax Lock Key & Safe Service covers all Jacksonville neighborhoods — Downtown, San Marco, Southside, Arlington, Riverside, Mandarin, Neptune Beach, Orange Park. 24/7 mobile locksmith.",
  path: "/locations",
  keywords: [
    "locksmith service areas Jacksonville",
    "locksmith Duval County",
    "locksmith near me Jacksonville FL",
    "mobile locksmith Jacksonville neighborhoods",
  ],
})

export default function LocationsPage() {
  const schemaItems = locations.map((l) => ({
    name: l.name,
    url: `${SITE_URL}/locations/${l.slug}`,
    description: l.description,
  }))

  return (
    <main>
      <LocationsListSchema items={schemaItems} />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24">
          <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />

          <header className="mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Jacksonville Locksmith Service Areas
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl">
              Jax Lock Key & Safe Service dispatches mobile locksmiths throughout Jacksonville and surrounding areas in Duval County. Select your neighborhood below.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </section>

        <RelatedServicesStrip
          heading="Locksmith Services Available Across All Locations"
          slugs={["residential-locksmith","emergency-locksmith","car-lockout","house-lockout","rekeying-service","lock-installation","safe-locksmith","commercial-locksmith","key-fob-programming"]}
        />

        <ServiceLocationMatrix heading="Find Your Neighborhood Service" />

        <EmergencyCTA />
      </div>
    </main>
  )
}
