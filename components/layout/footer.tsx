import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Mail, MapPin } from "lucide-react"
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants"

const serviceLinks = [
  { href: "/services/residential-locksmith", label: "Residential Locksmith" },
  { href: "/services/emergency-locksmith", label: "Emergency Locksmith" },
  { href: "/services/car-lockout", label: "Car Lockout" },
  { href: "/services/house-lockout", label: "House Lockout" },
  { href: "/services/rekeying-service", label: "Rekeying Service" },
  { href: "/services/lock-installation", label: "Lock Installation" },
  { href: "/services/safe-locksmith", label: "Safe Locksmith" },
  { href: "/services/commercial-locksmith", label: "Commercial Locksmith" },
  { href: "/services/key-fob-programming", label: "Key Fob Programming" },
]

const locationLinks = [
  { href: "/locations/downtown-jacksonville", label: "Downtown Jacksonville" },
  { href: "/locations/san-marco", label: "San Marco" },
  { href: "/locations/riverside", label: "Riverside" },
  { href: "/locations/arlington", label: "Arlington" },
  { href: "/locations/southside", label: "Southside" },
  { href: "/locations/mandarin", label: "Mandarin" },
  { href: "/locations/neptune-beach", label: "Neptune Beach" },
  { href: "/locations/orange-park", label: "Orange Park" },
]

const resourceLinks = [
  { href: "/blog/what-to-do-when-locked-out-of-car-jacksonville", label: "Locked Out of Car?" },
  { href: "/blog/how-much-does-rekeying-cost", label: "Rekeying Cost Guide" },
  { href: "/blog/should-you-rekey-or-replace-locks", label: "Rekey vs Replace" },
  { href: "/blog/can-locksmiths-program-key-fobs", label: "Key Fob Programming" },
  { href: "/blog/best-smart-locks-for-florida-homes", label: "Best Smart Locks FL" },
  { href: "/blog/how-fast-can-emergency-locksmiths-arrive", label: "Emergency Response Times" },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column — spans 2 on large screens */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-4" aria-label={`${SITE_NAME} — Home`}>
            <Image
              src="/logo.webp"
              alt={`${SITE_NAME} — Jacksonville Locksmith`}
              width={140}
              height={42}
              className="h-10 w-auto brightness-90 hover:brightness-100 transition-[filter]"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-5 max-w-xs">
            {SITE_NAME} — Licensed mobile locksmith serving all of Jacksonville, FL and surrounding areas 24/7.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors font-medium text-zinc-300">
              <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {EMAIL}
            </a>
            <span className="inline-flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" /> {ADDRESS.full}
            </span>
          </div>
          <div className="mt-6 rounded-xl border border-yellow-400/30 bg-yellow-500/10 p-4 max-w-xs">
            <p className="text-yellow-300 font-semibold text-sm mb-1">Available 24/7</p>
            <p className="text-xs">Emergency locksmith response across Jacksonville</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-yellow-400/70 hover:text-yellow-400 transition-colors text-xs font-medium">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Service Areas</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {locationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="text-yellow-400/70 hover:text-yellow-400 transition-colors text-xs font-medium">
                All areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources + Company */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Resources</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-yellow-400/70 hover:text-yellow-400 transition-colors text-xs font-medium">
                  All articles →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Company</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">All Services</Link></li>
              <li><Link href="/locations" className="hover:text-yellow-400 transition-colors">All Locations</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom sitemap bar */}
      <div className="border-t border-white/5 py-5 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-zinc-600 mb-4 justify-center">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-zinc-400 transition-colors">
                {link.label}
              </Link>
            ))}
            <span className="text-zinc-700" aria-hidden="true">|</span>
            {locationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-zinc-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <p>Licensed &amp; Insured Locksmith — Jacksonville, FL</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
