import Link from "next/link"
import { MapPin } from "lucide-react"
import MapEmbed from "@/components/map-embed"

const areas = [
  "Downtown Jacksonville",
  "San Marco",
  "Southside Jacksonville",
  "Arlington",
  "Riverside",
  "Mandarin",
  "Neptune Beach",
  "Orange Park",
  "Avondale",
  "Baymeadows",
  "Deerwood",
  "Fort Caroline",
]

export default function CoverageSection() {
  return (
    <section className="py-24 bg-zinc-900" aria-labelledby="coverage-heading">
      <div className="container mx-auto px-4">

        {/* ── Heading + area tags ────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <h2 id="coverage-heading" className="text-4xl font-black text-white mb-4">
              Locksmith Service Across All of Jacksonville
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Jax Lock Key & Safe Service dispatches mobile locksmiths throughout Jacksonville and surrounding Duval County communities.
              Whether you're near EverBank Stadium Downtown, shopping in Southside, or at home in Mandarin — we cover you.
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
              <div
                key={area}
                className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-zinc-300 text-center"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* ── Live Google Map ────────────────────────────────────────── */}
        <MapEmbed showCard={true} />

      </div>
    </section>
  )
}
