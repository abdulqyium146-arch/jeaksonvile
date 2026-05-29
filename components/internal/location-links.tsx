import Link from "next/link"
import { MapPin } from "lucide-react"
import { locations } from "@/content/locations"

interface LocationLinksProps {
  heading?: string
  subheading?: string
  exclude?: string
  highlight?: string[]
}

export default function LocationLinks({
  heading = "Jacksonville Locksmith Service Areas",
  subheading,
  exclude,
  highlight,
}: LocationLinksProps) {
  const list = exclude ? locations.filter((l) => l.slug !== exclude) : locations

  return (
    <section className="py-14 bg-zinc-900 border-t border-white/10" aria-label="Service area locations">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <h2 className="text-2xl font-black text-white">{heading}</h2>
            {subheading && <p className="text-zinc-400 text-sm mt-1">{subheading}</p>}
          </div>
          <Link
            href="/locations"
            className="text-yellow-400 hover:underline text-sm font-medium shrink-0"
          >
            View all service areas →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {list.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                highlight?.includes(loc.slug)
                  ? "border-yellow-400/50 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20"
                  : "border-white/10 bg-zinc-800 text-zinc-300 hover:border-yellow-400/30 hover:text-yellow-400"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
