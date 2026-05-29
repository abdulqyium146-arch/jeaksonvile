import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/content/services"

interface RelatedServicesStripProps {
  heading?: string
  slugs: string[]
}

export default function RelatedServicesStrip({
  heading = "Related Services",
  slugs,
}: RelatedServicesStripProps) {
  const list = services.filter((s) => slugs.includes(s.slug))
  if (!list.length) return null

  return (
    <section className="py-14 bg-black border-t border-white/10" aria-label="Related services">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-white">{heading}</h2>
          <Link href="/services" className="text-yellow-400 hover:underline text-sm font-medium">
            All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group rounded-2xl border border-white/10 bg-zinc-900 p-5 hover:border-yellow-400/40 hover:bg-zinc-800 transition-colors"
            >
              <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {svc.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{svc.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-yellow-400 text-xs font-medium">
                Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
