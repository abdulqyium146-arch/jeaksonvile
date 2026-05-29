import type { Metadata } from "next"
import { PhoneCall, Mail } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { ContactPageSchema } from "@/components/seo/schema"
import MapEmbed from "@/components/map-embed"
import { buildMetadata } from "@/lib/metadata"
import { PHONE, PHONE_HREF, EMAIL, SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: `Contact ${SITE_NAME} — 24/7 Jacksonville Locksmith`,
  description:
    "Contact Jax Lock Key & Safe Service for emergency locksmith service in Jacksonville, FL. Available 24/7 — call (904) 586-2816 or send a message anytime.",
  path: "/contact",
  keywords: ["contact Jacksonville locksmith", "locksmith phone number Jacksonville", "call locksmith Jacksonville"],
})

export default function ContactPage() {
  return (
    <main>
      <ContactPageSchema />

      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-24 max-w-6xl">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <h1 className="text-5xl font-black mb-4 text-white">Contact Us</h1>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl">
            For emergencies, call directly — fastest response. For non-urgent requests, use the form below.
          </p>

          {/* ── Emergency call bar ─────────────────────────────────────── */}
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-6 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-yellow-300 font-black text-lg mb-1">Emergency Lockout?</p>
              <p className="text-zinc-400 text-sm">
                Don't fill out a form — call us now for the fastest response across Jacksonville.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 text-zinc-300 px-6 py-3 hover:border-yellow-400/30 hover:text-yellow-400 transition-colors whitespace-nowrap"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Us
              </a>
            </div>
          </div>

          {/* ── Form + Map layout ──────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <ContactForm />
            <div className="flex flex-col justify-start">
              <p className="text-white font-bold text-lg mb-4">Find Us on the Map</p>
              <MapEmbed showCard={false} className="flex-1" />
            </div>
          </div>

          {/* ── Full map + info card ───────────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6">Our Service Area</h2>
            <MapEmbed showCard={true} />
          </div>
        </section>
      </div>
    </main>
  )
}
