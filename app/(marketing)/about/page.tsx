import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Shield, Clock, Users, MapPin, Award, CheckCircle } from "lucide-react"
import EmergencyCTA from "@/components/sections/emergency-cta"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { AboutPageSchema } from "@/components/seo/schema"
import { buildMetadata } from "@/lib/metadata"
import { SITE_URL, SITE_NAME, FOUNDED_YEAR, PHONE, PHONE_HREF, RATING } from "@/lib/constants"

const DARK_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxODE4MWIiLz48L3N2Zz4="

export const metadata: Metadata = buildMetadata({
  title: `About ${SITE_NAME} — Jacksonville's Licensed Mobile Locksmith`,
  description:
    `${SITE_NAME} is a locally owned Jacksonville locksmith serving all of Duval County since ${FOUNDED_YEAR}. Florida-licensed, insured, background-checked technicians available 24/7 for emergency lockouts, rekeying, and safe service.`,
  path: "/about",
  keywords: [
    "about Jacksonville locksmith",
    "licensed locksmith Jacksonville FL",
    "local locksmith Jacksonville",
    "Florida licensed locksmith DBPR",
    "insured mobile locksmith Jacksonville",
  ],
})

const credentials = [
  { label: "Florida Locksmith License", body: "DBPR — Florida Dept. of Business & Professional Regulation" },
  { label: "General Liability Insurance", body: "Fully insured mobile locksmith operation" },
  { label: "Background-Checked Technicians", body: "All technicians pass state-mandated fingerprint & background screening" },
  { label: "In Business Since", body: `${FOUNDED_YEAR} — over ${new Date().getFullYear() - parseInt(FOUNDED_YEAR)} years serving Jacksonville` },
]

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "All technicians hold a current Florida locksmith license (DBPR) and the company carries full general liability insurance for your protection.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    text: "We answer emergency calls at any hour — nights, weekends, and holidays. No answering service, no voicemail — a local dispatcher picks up every call.",
  },
  {
    icon: Users,
    title: "Local Jacksonville Team",
    text: `We are a local Jacksonville business founded in ${FOUNDED_YEAR}, not a national dispatch center. When you call, a neighbor answers and a neighbor arrives.`,
  },
  {
    icon: MapPin,
    title: "Fully Mobile Service",
    text: "Our service vans are equipped with professional-grade tools to handle any locksmith job on-site across Jacksonville — no shop required.",
  },
  {
    icon: Award,
    title: "Upfront Pricing",
    text: "We provide a firm quote before any work begins. We never quote one price by phone and charge more on arrival. No hidden fees.",
  },
  {
    icon: CheckCircle,
    title: "Non-Destructive Methods",
    text: "We use professional air wedge tools, long-reach tools, and pick sets designed to open locks without damage. Drilling is only used as an absolute last resort.",
  },
]

const serviceAreaFacts = [
  "Downtown Jacksonville (ZIP 32202, 32204) — 15–20 min response",
  "San Marco (ZIP 32207) — 15–20 min response",
  "Riverside & Avondale (ZIP 32204) — 15–25 min response",
  "Southside & Baymeadows (ZIP 32216, 32256) — 20–30 min response",
  "Arlington (ZIP 32211, 32277) — 20–30 min response",
  "Mandarin (ZIP 32257, 32223) — 25–35 min response",
  "Neptune Beach & Atlantic Beach (ZIP 32266) — 25–35 min response",
  "Orange Park / Clay County (ZIP 32073, 32065) — 25–40 min response",
]

// JSON-LD: LocalBusiness entity with credential claims for E-E-A-T
const credentialSchema = {
  "@context": "https://schema.org",
  "@type": ["Locksmith", "LocalBusiness"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  foundingDate: FOUNDED_YEAR,
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Florida Locksmith License",
      credentialCategory: "license",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business and Professional Regulation",
        url: "https://www.myfloridalicense.com",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "General Liability Insurance",
      credentialCategory: "insurance",
    },
  ],
  employee: {
    "@type": "Person",
    name: "Jax Lock Key Technician",
    jobTitle: "Licensed Locksmith Technician",
    worksFor: { "@id": `${SITE_URL}/#localbusiness` },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Florida Locksmith License",
      credentialCategory: "license",
    },
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutPageSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialSchema) }}
      />

      <article className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-4xl">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

          {/* Hero image */}
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
              <p className="text-yellow-400 text-sm font-medium drop-shadow-md">
                Jacksonville&apos;s Trusted Mobile Locksmith Since {FOUNDED_YEAR}
              </p>
            </div>
          </div>

          <h1 className="text-5xl font-black mb-6 text-white">About {SITE_NAME}</h1>

          {/* Core E-E-A-T narrative — structured for LLM extraction */}
          <div className="space-y-5 text-zinc-300 text-lg leading-relaxed mb-12 speakable">
            <p>
              {SITE_NAME} is a locally owned and operated mobile locksmith company based in Jacksonville, Florida.
              We have been serving the Jacksonville community with professional, licensed locksmith services since {FOUNDED_YEAR} —
              over {new Date().getFullYear() - parseInt(FOUNDED_YEAR)} years of experience in residential, commercial, and automotive locksmith work throughout Duval County.
            </p>
            <p>
              All of our technicians hold a current Florida locksmith license issued by the Florida Department of Business
              and Professional Regulation (DBPR). Florida law requires locksmiths to be licensed, fingerprinted, and
              background-checked — standards we meet and enforce for every member of our team. The company carries full
              general liability insurance on every job.
            </p>
            <p>
              Our mobile locksmith vans are dispatched directly from Jacksonville. When you call {SITE_NAME}, a local
              dispatcher answers — not a national call center — and sends the nearest available technician to your location.
              Our typical emergency response time is 20–30 minutes across core Jacksonville service areas.
            </p>
            <p>
              We operate 24 hours a day, 7 days a week, including all holidays, because lockouts and security emergencies
              do not follow business hours. We provide upfront pricing before beginning any work and never charge more
              than the quoted amount.
            </p>
          </div>

          {/* Credentials box — high E-E-A-T trust signal */}
          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-500/5 p-6 mb-12">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              Credentials &amp; Licensing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map(({ label, body }) => (
                <div key={label} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-4">
              Florida locksmith licensing is regulated under Florida Statute 489.516.
              License verification is available at{" "}
              <a
                href="https://www.myfloridalicense.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400/70 hover:text-yellow-400 underline"
              >
                myfloridalicense.com
              </a>.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <p className="text-zinc-300 text-xs mt-1">Background-checked technicians — every call</p>
              </div>
            </div>
          </div>

          {/* Service area + response times — structured facts for LLM */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 mb-12">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              Jacksonville Service Area &amp; Response Times
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {serviceAreaFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-yellow-400 mt-0.5 shrink-0" aria-hidden="true">•</span>
                  {fact}
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-500 mt-4">
              Response times are estimates based on average Jacksonville traffic. Actual times may vary.
            </p>
          </div>

          {/* Rating trust bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div>
              <p className="text-white font-black text-3xl">{RATING.value}<span className="text-zinc-400 text-lg font-normal">/5</span></p>
              <p className="text-zinc-400 text-sm">Based on {RATING.count} customer reviews</p>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>

          {/* Florida partner — contextual do-follow link */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900 p-5">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-white font-semibold">Also serving Central Florida.</span>{" "}
              Our partner company{" "}
              <a
                href="https://affordablelocksmithorlando.com"
                rel="noopener"
                className="text-yellow-400 hover:underline font-medium"
              >
                Affordable Locksmith Orlando
              </a>{" "}
              provides the same licensed, 24/7 mobile locksmith service across Greater Orlando — car lockouts, rekeying, key fob programming, and more.
            </p>
          </div>

          {/* Internal links to services */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-black text-white mb-6">Our Locksmith Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/services/residential-locksmith", label: "Residential Locksmith" },
                { href: "/services/emergency-locksmith", label: "Emergency Locksmith" },
                { href: "/services/car-lockout", label: "Car Lockout" },
                { href: "/services/house-lockout", label: "House Lockout" },
                { href: "/services/rekeying-service", label: "Rekeying Service" },
                { href: "/services/lock-installation", label: "Lock Installation" },
                { href: "/services/safe-locksmith", label: "Safe Locksmith" },
                { href: "/services/commercial-locksmith", label: "Commercial Locksmith" },
                { href: "/services/key-fob-programming", label: "Key Fob Programming" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-yellow-400 transition-colors py-2 px-3 rounded-lg bg-zinc-900 border border-white/10 hover:border-yellow-400/30 text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <EmergencyCTA />
      </article>
    </main>
  )
}
