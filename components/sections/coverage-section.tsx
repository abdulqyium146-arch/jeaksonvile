import Link from "next/link"
import { MapPin } from "lucide-react"
import MapEmbed from "@/components/map-embed"

const areas = [
  { label: "Downtown Jacksonville", href: "/locations/downtown-jacksonville" },
  { label: "San Marco", href: "/locations/san-marco" },
  { label: "Southside Jacksonville", href: "/locations/southside" },
  { label: "Arlington", href: "/locations/arlington" },
  { label: "Riverside", href: "/locations/riverside" },
  { label: "Mandarin", href: "/locations/mandarin" },
  { label: "Neptune Beach", href: "/locations/neptune-beach" },
  { label: "Jacksonville Beach", href: "/locations/jacksonville-beach" },
  { label: "Orange Park", href: "/locations/orange-park" },
  { label: "Avondale", href: "/locations/riverside" },
  { label: "Baymeadows", href: "/locations/southside" },
  { label: "Deerwood", href: "/locations/southside" },
  { label: "Fort Caroline", href: "/locations/arlington" },
]

export default function CoverageSection() {
  return (
    <section className="py-24 bg-zinc-900" aria-labelledby="coverage-heading">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <h2 id="coverage-heading" className="text-4xl font-black text-white mb-4">
              Locksmith Service Across All of Jacksonville
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Jax Lock Key & Safe Service dispatches mobile locksmiths throughout Jacksonville and surrounding Duval County communities.
              Whether you&apos;re near EverBank Stadium Downtown, shopping in Southside, or at home in Mandarin — we cover you.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              View All Service Areas
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-label="Service areas">
            {areas.map((area) => (
              <Link
                key={area.label}
                href={area.href}
                className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-zinc-300 text-center hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>

        <MapEmbed showCard={true} />

      </div>
    </section>
  )
}
