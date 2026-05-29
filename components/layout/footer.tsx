import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Mail, MapPin } from "lucide-react"
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants"

const serviceLinks = [
  { href: "/services/emergency-locksmith", label: "Emergency Locksmith" },
  { href: "/services/car-lockout", label: "Car Lockout" },
  { href: "/services/house-lockout", label: "House Lockout" },
  { href: "/services/rekeying-service", label: "Rekeying Service" },
  { href: "/services/safe-locksmith", label: "Safe Locksmith" },
  { href: "/services/commercial-locksmith", label: "Commercial Locksmith" },
]

const locationLinks = [
  { href: "/locations/downtown-jacksonville", label: "Downtown Jacksonville" },
  { href: "/locations/san-marco", label: "San Marco" },
  { href: "/locations/southside", label: "Southside" },
  { href: "/locations/arlington", label: "Arlington" },
  { href: "/locations/riverside", label: "Riverside" },
  { href: "/locations/mandarin", label: "Mandarin" },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.webp"
              alt={`${SITE_NAME} — Jacksonville Locksmith`}
              width={140}
              height={42}
              className="h-10 w-auto brightness-90 hover:brightness-100 transition-all"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            {SITE_NAME} — Licensed mobile locksmith serving all of Jacksonville, FL and surrounding areas 24/7.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <PhoneCall className="h-4 w-4" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <span className="inline-flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {ADDRESS.full}
            </span>
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Services</p>
          <ul className="flex flex-col gap-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Service Areas</p>
          <ul className="flex flex-col gap-2 text-sm">
            {locationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            <li><Link href="/locations" className="hover:text-yellow-400 transition-colors">All Locations</Link></li>
          </ul>
          <div className="mt-6 rounded-xl border border-yellow-400/30 bg-yellow-500/10 p-4">
            <p className="text-yellow-300 font-semibold text-sm mb-1">Available 24/7</p>
            <p className="text-xs">Emergency locksmith response across Jacksonville</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Licensed & Insured Locksmith — Jacksonville, FL</p>
        </div>
      </div>
    </footer>
  )
}
