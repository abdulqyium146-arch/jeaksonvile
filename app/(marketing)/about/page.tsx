import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Clock, Users, MapPin } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { AboutPageSchema } from "@/components/seo/schema"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL, SITE_NAME, FOUNDED_YEAR } from "@/lib/constants"

const DARK_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxODE4MWIiLz48L3N2Zz4="

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

          {/* ── About hero image ─────────────────────────────────────── */}
          <div className="relative rounded-2xl overflow-hidden mb-10 aspect-[16/7]">
            <Image
              src="/og/jax-lock-key-safe-service.webp"
              alt={`${SITE_NAME} — Jacksonville's trusted locally owned mobile locksmith team`}
              fill
              priority
              placeholder="blur"
              blurDataURL={DARK_BLUR}
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-black text-2xl drop-shadow-lg">{SITE_NAME}</p>
              <p className="text-yellow-400 text-sm font-medium drop-shadow-md">Jacksonville&apos;s Trusted Mobile Locksmith Since {FOUNDED_YEAR}</p>
            </div>
          </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                  <Icon className="h-7 w-7 text-yellow-400 mb-4" aria-hidden="true" />
                  <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image
                src="/og/licensed-locksmith-technician-jacksonville.webp"
                alt="Licensed Jacksonville locksmith technician using professional tools on a residential lock"
                fill
                placeholder="blur"
                blurDataURL={DARK_BLUR}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-yellow-400 font-bold text-sm">Florida Licensed &amp; Insured</p>
                <p className="text-zinc-300 text-xs mt-1">Background-checked technicians — every time</p>
              </div>
            </div>
          </div>
        </section>

        <EmergencyCTA />
      </article>
    </main>
  )
}
