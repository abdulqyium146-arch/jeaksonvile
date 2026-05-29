import Hero from "@/components/sections/hero"
import TrustSection from "@/components/sections/trust-section"
import ServiceGrid from "@/components/sections/service-grid"
import StatsSection from "@/components/sections/stats-section"
import CoverageSection from "@/components/sections/coverage-section"
import ReviewSlider from "@/components/sections/review-slider"
import FAQSection from "@/components/sections/faq-section"
import EmergencyCTA from "@/components/sections/emergency-cta"
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/schema"

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <LocalBusinessSchema />
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
