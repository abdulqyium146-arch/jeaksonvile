import type { Metadata } from "next"
import LocationCard from "@/components/cards/location-card"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { locations } from "@/content/locations"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Locksmith Service Areas in Jacksonville FL — All Locations",
  description:
    "Jax Lock Key & Safe Service covers all Jacksonville neighborhoods. View our full list of service areas in Duval County and surrounding communities.",
  path: "/locations",
})

export default function LocationsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-24">
        <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />
        <h1 className="text-5xl font-black mb-4">Jacksonville Locksmith Service Areas</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mb-12">
          Jax Lock Key & Safe Service dispatches mobile locksmiths throughout Jacksonville and surrounding areas in Duval County. Select your area below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </main>
  )
}
