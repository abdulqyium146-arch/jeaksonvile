import type { Metadata } from "next"
import { Shield, Clock, Users, MapPin } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "About Jax Lock Key & Safe Service — Jacksonville Locksmith",
  description:
    "Learn about Jax Lock Key & Safe Service, Jacksonville's trusted mobile locksmith. Licensed, insured, and serving all of Jacksonville 24/7.",
  path: "/about",
})

const values = [
  { icon: Shield, title: "Licensed & Insured", text: "All technicians are Florida licensed locksmiths and fully insured for your protection." },
  { icon: Clock, title: "24/7 Availability", text: "We answer emergency calls at any hour — nights, weekends, and holidays included." },
  { icon: Users, title: "Local Jacksonville Team", text: "We are a local Jacksonville business, not a national dispatch center. You're calling a neighbor." },
  { icon: MapPin, title: "Fully Mobile", text: "Our service vans are stocked with professional-grade tools to handle any locksmith job on-site." },
]

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-24 max-w-4xl">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

        <h1 className="text-5xl font-black mb-6">
          About Jax Lock Key & Safe Service
        </h1>

        <div className="prose prose-invert max-w-none text-zinc-300 text-lg leading-relaxed space-y-6">
          <p>
            Jax Lock Key & Safe Service is a locally owned and operated mobile locksmith company based in Jacksonville, Florida. We have been serving the Jacksonville community with professional, reliable locksmith services for over a decade.
          </p>
          <p>
            Our team of licensed locksmiths provides emergency lockout assistance, rekeying, safe services, key fob programming, and residential and commercial security solutions throughout all of Jacksonville and surrounding areas in Duval County.
          </p>
          <p>
            We operate 24 hours a day, 7 days a week, because lockouts and security emergencies don't follow business hours. When you call Jax Lock Key & Safe Service, you speak directly with a local dispatcher who sends the nearest available technician to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <Icon className="h-7 w-7 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <EmergencyCTA />
    </main>
  )
}
