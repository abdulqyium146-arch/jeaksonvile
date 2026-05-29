import type { Metadata } from "next"
import { Shield, Clock, Users, MapPin } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { AboutPageSchema } from "@/components/seo/schema"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL, SITE_NAME, FOUNDED_YEAR } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "About Jax Lock Key & Safe Service — Jacksonville's Trusted Locksmith",
  description:
    `${SITE_NAME} is a locally owned Jacksonville locksmith serving all of Duval County since ${FOUNDED_YEAR}. Licensed, insured mobile locksmiths available 24/7 for emergency lockouts, rekeying, and safe service.`,
  path: "/about",
  keywords: ["about Jacksonville locksmith", "local locksmith Jacksonville", "licensed locksmith FL"],
})

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "All technicians hold a Florida locksmith license and full liability insurance for your protection.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    text: "We answer emergency calls at any hour — nights, weekends, and holidays. No answering service, no voicemail.",
  },
  {
    icon: Users,
    title: "Local Jacksonville Team",
    text: `We are a local Jacksonville business founded in ${FOUNDED_YEAR}, not a national dispatch center. When you call, a neighbor answers.`,
  },
  {
    icon: MapPin,
    title: "Fully Mobile",
    text: "Our service vans are equipped with professional-grade tools to handle any locksmith job on-site across Jacksonville.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <AboutPageSchema />

      <article className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-4xl">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

          <h1 className="text-5xl font-black mb-6 text-white">
            About {SITE_NAME}
          </h1>

          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mb-12">
            <p>
              {SITE_NAME} is a locally owned and operated mobile locksmith company based in Jacksonville, Florida.
              We have been serving the Jacksonville community with professional, reliable locksmith services since {FOUNDED_YEAR}.
            </p>
            <p>
              Our team of licensed locksmiths provides emergency lockout assistance, rekeying, safe services, key fob programming,
              and residential and commercial security solutions throughout all of Jacksonville and surrounding areas in Duval County.
            </p>
            <p>
              We operate 24 hours a day, 7 days a week — because lockouts and security emergencies don't follow business hours.
              When you call {SITE_NAME}, you speak directly with a local dispatcher who sends the nearest available technician to your location.
            </p>
            <p>
              Every technician we employ is background-checked, licensed under Florida state law, and trained in the latest locksmith techniques.
              We use professional tools designed to open locks without damage whenever possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <Icon className="h-7 w-7 text-yellow-400 mb-4" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <EmergencyCTA />
      </article>
    </main>
  )
}
