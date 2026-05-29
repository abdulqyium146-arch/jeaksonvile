import type { Metadata } from "next"
import ServiceCard from "@/components/cards/service-card"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { services } from "@/content/services"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Locksmith Services in Jacksonville FL — All Services",
  description:
    "Full list of locksmith services by Jax Lock Key & Safe Service: emergency lockouts, car lockouts, rekeying, safes, commercial locksmith, and more in Jacksonville.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-24">
        <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
        <h1 className="text-5xl font-black mb-4">Locksmith Services in Jacksonville</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mb-12">
          Jax Lock Key & Safe Service provides a full range of mobile locksmith services across Jacksonville, FL — available 24 hours a day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </main>
  )
}
