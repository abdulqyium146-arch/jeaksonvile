import type { Metadata } from "next"
import Link from "next/link"
import { PhoneCall, CheckCircle, DollarSign, Shield, Clock } from "lucide-react"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import EmergencyCTA from "@/components/sections/emergency-cta"
import RelatedServicesStrip from "@/components/internal/related-services-strip"
import LocationLinks from "@/components/internal/location-links"
import { buildMetadata } from "@/lib/metadata"
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Affordable Locksmith Jacksonville FL — Upfront Pricing, No Hidden Fees",
  description:
    "Looking for a cheap locksmith in Jacksonville, FL? Jax Lock Key & Safe Service offers transparent, affordable locksmith pricing with no surprise fees. Licensed, insured, 24/7 available. Call (855) 633-0750.",
  path: "/affordable-locksmith-jacksonville",
  keywords: [
    "cheap locksmith jacksonville fl",
    "affordable locksmith jacksonville",
    "low cost locksmith jacksonville fl",
    "cheap locksmith jacksonville beach fl",
    "locksmith prices jacksonville fl",
    "how much does a locksmith cost jacksonville",
  ],
})

const pricingRows = [
  { service: "Car Lockout", range: "$55 – $95", note: "Most vehicles, standard hours" },
  { service: "House Lockout", range: "$45 – $80", note: "Residential entry, standard hours" },
  { service: "Rekey (per lock)", range: "$15 – $30", note: "+ service call fee" },
  { service: "Lock Installation", range: "$65 – $150", note: "Deadbolt or knob set" },
  { service: "Key Fob Programming", range: "$75 – $160", note: "vs. $200–$400 at dealer" },
  { service: "Safe Opening", range: "Quote on request", note: "Depends on safe type" },
  { service: "After-Hours / Emergency", range: "+$25 – $50", note: "Surcharge on top of base rate" },
]

const faqs = [
  {
    q: "How much does a locksmith cost in Jacksonville, FL?",
    a: "Most standard lockout calls in Jacksonville range from $50 to $95 depending on the time of day and lock type. After-hours emergency calls may carry a surcharge of $25–$50. We always quote the price before starting any work.",
  },
  {
    q: "Is a cheap locksmith safe to hire?",
    a: "Price alone doesn't indicate quality. What matters is that the locksmith is licensed, insured, and willing to quote upfront. Jax Lock Key & Safe Service is fully licensed in Florida, insured, and provides transparent pricing before touching your lock.",
  },
  {
    q: "Why is a locksmith cheaper than a dealer for car keys?",
    a: "Mobile locksmiths have lower overhead than dealerships and specialized equipment to program most key fobs and transponder keys on-site. Dealers charge for parts, labor, and shop overhead. We come to you and charge a fair flat rate.",
  },
  {
    q: "Do you charge extra for emergency locksmith calls in Jacksonville?",
    a: "Late-night and holiday calls may carry a small surcharge, but we are transparent about it before dispatch. There are no surprise fees when we arrive.",
  },
  {
    q: "How can I get the cheapest locksmith price in Jacksonville?",
    a: "Call during standard hours (7am–9pm) when possible, have your address and the type of service ready, and ask for a phone quote upfront. We'll tell you the price before we send a technician.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/affordable-locksmith-jacksonville/#webpage`,
  name: "Affordable Locksmith Jacksonville FL",
  url: `${SITE_URL}/affordable-locksmith-jacksonville`,
  description: "Transparent, affordable locksmith pricing in Jacksonville, FL. No hidden fees. Licensed and insured.",
  about: {
    "@type": "LocalBusiness",
    name: SITE_NAME,
    priceRange: "$$",
    telephone: "+18556330750",
    areaServed: { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
}

export default function AffordableLocksmithPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-4xl">
          <Breadcrumbs
            items={[{ name: "Affordable Locksmith Jacksonville", href: "/affordable-locksmith-jacksonville" }]}
          />

          <header className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm mb-6">
              <DollarSign className="h-4 w-4" aria-hidden="true" />
              Transparent Pricing — No Hidden Fees
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Affordable Locksmith in Jacksonville, FL
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Searching for a cheap locksmith in Jacksonville? Jax Lock Key &amp; Safe Service provides honest, upfront pricing with no surprise fees — available 24 hours a day, 7 days a week across all of Jacksonville.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover:bg-yellow-300 transition-colors text-lg"
              aria-label={`Call for a price quote: ${PHONE}`}
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Get a Free Quote — {PHONE}
            </a>
          </header>

          {/* Why we're affordable */}
          <section className="mb-14" aria-labelledby="why-affordable-heading">
            <h2 id="why-affordable-heading" className="text-2xl font-black text-white mb-6">
              Why Our Locksmith Prices Are Lower
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "Mobile Service — No Shop Overhead", body: "We come to you. No waiting room, no tow truck needed, no dealership markup. Our vans are already in Jacksonville — we dispatch the nearest tech." },
                { icon: Shield, title: "Licensed & Insured in Florida", body: "Affordable doesn't mean unqualified. We're fully licensed under Florida law, bonded, and insured. You get professional work at a fair price." },
                { icon: DollarSign, title: "Upfront Flat-Rate Quotes", body: "We quote the price before we touch anything. If you don't like the price, you don't pay. No 'bait and switch' pricing tactics." },
                { icon: CheckCircle, title: "Non-Destructive Methods", body: "We open locks without damage in the vast majority of cases — saving you the cost of replacing hardware unnecessarily." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-yellow-400 shrink-0" aria-hidden="true" />
                    <h3 className="font-bold text-white text-sm">{title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing table */}
          <section className="mb-14" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-2xl font-black text-white mb-2">
              Locksmith Price Ranges in Jacksonville
            </h2>
            <p className="text-zinc-400 text-sm mb-6">
              These are typical ranges — call us for an exact quote before dispatch. Prices vary by lock type, time of day, and location.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-zinc-900">
                    <th className="text-left px-5 py-3 text-white font-semibold">Service</th>
                    <th className="text-left px-5 py-3 text-yellow-400 font-semibold">Price Range</th>
                    <th className="text-left px-5 py-3 text-zinc-400 font-medium hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={row.service} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/50"}`}>
                      <td className="px-5 py-3.5 text-zinc-200 font-medium">{row.service}</td>
                      <td className="px-5 py-3.5 text-yellow-300 font-bold">{row.range}</td>
                      <td className="px-5 py-3.5 text-zinc-500 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-600 mt-3">
              * All prices are estimates. Final price confirmed before work begins. After-hours surcharge may apply.
            </p>
          </section>

          {/* Services cross-links */}
          <section className="mb-14" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl font-black text-white mb-6">
              All Affordable Locksmith Services in Jacksonville
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/services/car-lockout", label: "Car Lockout Service", detail: "Locked out of your vehicle? We're on the way." },
                { href: "/services/house-lockout", label: "House Lockout Service", detail: "Get back into your home fast." },
                { href: "/services/rekeying-service", label: "Rekeying Service", detail: "Cheapest way to secure your home after a move." },
                { href: "/services/lock-installation", label: "Lock Installation", detail: "Deadbolts and smart locks at fair prices." },
                { href: "/services/key-fob-programming", label: "Key Fob Programming", detail: "Save vs. dealership pricing." },
                { href: "/services/emergency-locksmith", label: "Emergency Locksmith", detail: "24/7 response across Jacksonville." },
                { href: "/services/residential-locksmith", label: "Residential Locksmith", detail: "Full home security at affordable rates." },
                { href: "/services/commercial-locksmith", label: "Commercial Locksmith", detail: "Business lockouts and access control." },
                { href: "/services/safe-locksmith", label: "Safe Opening", detail: "Locked out of your safe? We can help." },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex flex-col gap-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 hover:border-yellow-400/40 hover:bg-zinc-800 transition-colors"
                >
                  <span className="text-yellow-400 font-semibold text-sm">{svc.label}</span>
                  <span className="text-zinc-400 text-xs">{svc.detail}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-black text-white mb-6">
              Frequently Asked Questions — Locksmith Prices Jacksonville
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-white hover:text-yellow-400 transition-colors text-sm">
                    {q}
                    <span className="text-zinc-500 group-open:rotate-45 transition-transform shrink-0 ml-4 text-lg leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </section>

        <RelatedServicesStrip
          heading="All Jacksonville Locksmith Services"
          slugs={["car-lockout","house-lockout","rekeying-service","lock-installation","key-fob-programming","emergency-locksmith","residential-locksmith","commercial-locksmith","safe-locksmith"]}
        />

        <LocationLinks
          heading="Affordable Locksmith — All Jacksonville Neighborhoods"
          subheading="Same upfront pricing throughout Jacksonville, the Beaches, and surrounding areas."
        />

        {/* Florida locksmith partner — contextual do-follow cross-link */}
        <section className="py-12 bg-zinc-950 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-3 font-semibold">Also Need a Locksmith in Orlando?</p>
            <p className="text-zinc-400 text-sm mb-4 max-w-lg mx-auto">
              Our partner serves the Greater Orlando metro area with the same 24/7 response, licensed technicians, and upfront pricing.
            </p>
            <a
              href="https://affordablelocksmithorlando.com"
              className="inline-flex items-center gap-2 text-yellow-400 hover:underline font-semibold text-sm"
              rel="noopener"
            >
              Affordable Locksmith Orlando →
            </a>
          </div>
        </section>

        <EmergencyCTA />
      </div>
    </main>
  )
}
