import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Service } from "@/types"

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-yellow-400/50 hover:bg-zinc-800 transition-all"
    >
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{service.description}</p>
      <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-semibold">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
