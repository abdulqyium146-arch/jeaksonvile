import { Star, Award, Users, MapPin } from "lucide-react"
import { RATING } from "@/lib/constants"

const trustItems = [
  {
    icon: Star,
    value: `${RATING.value}/5`,
    label: `${RATING.count}+ Google Reviews`,
  },
  {
    icon: Award,
    value: "Licensed",
    label: "Florida Licensed & Insured",
  },
  {
    icon: Users,
    value: "10+ Years",
    label: "Serving Jacksonville",
  },
  {
    icon: MapPin,
    value: "All of Jacksonville",
    label: "Full City Coverage",
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 bg-zinc-900 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="h-7 w-7 text-yellow-400 mx-auto mb-3" />
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-sm text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
