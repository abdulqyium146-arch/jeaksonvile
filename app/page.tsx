import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import TrustSection from "@/components/sections/trust-section"
import ServiceGrid from "@/components/sections/service-grid"
import StatsSection from "@/components/sections/stats-section"
import CoverageSection from "@/components/sections/coverage-section"
import ReviewSlider from "@/components/sections/review-slider"
import FAQSection from "@/components/sections/faq-section"
import EmergencyCTA from "@/components/sections/emergency-cta"
import { HomePageSchema, FAQSchema } from "@/components/seo/schema"
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "24/7 Emergency Locksmith Jacksonville FL | Jax Lock Key & Safe Service",
  description:
    "Fast mobile locksmith in Jacksonville, FL — car lockouts, house lockouts, rekeying, safes & key fob programming. Licensed & insured. 20–30 min response. Call (855) 633-0750.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "24/7 Emergency Locksmith Jacksonville FL | Jax Lock Key & Safe Service",
    description:
      "Licensed mobile locksmith serving Jacksonville 24 hours a day. Car lockouts, rekeying, safes, key fobs. 20–30 min arrival. Call now.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Jacksonville Locksmith` }],
  },
}

export default function HomePage() {
  return (
    <main>
      <HomePageSchema />
      <FAQSchema />
      <Hero />
      <TrustSection />
      <ServiceGrid />
      <StatsSection />
      <CoverageSection />
      <ReviewSlider />
      <FAQSection />
      <EmergencyCTA />
    </main>
  )
}
