import { Star } from "lucide-react"
import type { Testimonial } from "@/types"

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed">"{testimonial.text}"</p>
      <div className="mt-auto flex items-center justify-between">
        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
        <span className="text-xs text-zinc-500 capitalize">{testimonial.source}</span>
      </div>
    </div>
  )
}
