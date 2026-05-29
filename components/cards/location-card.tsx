import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import type { Location } from "@/types"

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-yellow-400/50 hover:bg-zinc-800 transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
          {location.name}
        </h3>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{location.description}</p>
      <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-semibold">
        View area <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
