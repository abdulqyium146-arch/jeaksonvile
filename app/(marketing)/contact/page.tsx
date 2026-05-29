import type { Metadata } from "next"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { buildMetadata } from "@/lib/metadata"
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, BUSINESS_HOURS } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Contact Jacksonville Locksmith — Jax Lock Key & Safe Service",
  description:
    "Contact Jax Lock Key & Safe Service for emergency locksmith service in Jacksonville. Available 24/7 — call or message us anytime.",
  path: "/contact",
})

const contactDetails = [
  { icon: PhoneCall, label: "Phone", value: PHONE, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Address", value: ADDRESS.full, href: undefined },
  { icon: Clock, label: "Hours", value: BUSINESS_HOURS, href: undefined },
]

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-24 max-w-5xl">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

        <h1 className="text-5xl font-black mb-4">Contact Us</h1>
        <p className="text-zinc-400 text-xl mb-12 max-w-2xl">
          For emergencies, please call directly. For non-urgent requests, send us a message below.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-5 mb-10">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-semibold hover:text-yellow-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-white font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-6">
              <p className="text-yellow-300 font-black text-lg mb-2">Emergency Lockout?</p>
              <p className="text-zinc-400 text-sm mb-4">Don't fill out a form — call us now for the fastest response.</p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors">
                <PhoneCall className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
