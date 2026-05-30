import Link from "next/link"
import Image from "next/image"
import { PhoneCall, ChevronDown } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants"

const serviceDropdown = [
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

const locationDropdown = [
  { href: "/locations/downtown-jacksonville", label: "Downtown Jacksonville" },
  { href: "/locations/san-marco", label: "San Marco" },
  { href: "/locations/riverside", label: "Riverside" },
  { href: "/locations/arlington", label: "Arlington" },
  { href: "/locations/southside", label: "Southside" },
  { href: "/locations/mandarin", label: "Mandarin" },
  { href: "/locations/neptune-beach", label: "Neptune Beach" },
  { href: "/locations/orange-park", label: "Orange Park" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0" aria-label={`${SITE_NAME} — Home`}>
          <Image
            src="/logo.webp"
            alt={`${SITE_NAME} — Jacksonville Locksmith`}
            width={160}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-300" aria-label="Main navigation">

          {/* Services mega-dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-colors"
            >
              Services <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-150 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl shadow-black/60 w-72">
                <ul className="flex flex-col gap-0.5">
                  {serviceDropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 pt-2 border-t border-white/10">
                  <Link href="/services" className="block px-3 py-2 text-xs text-yellow-400 hover:underline font-medium">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Locations mega-dropdown */}
          <div className="relative group">
            <Link
              href="/locations"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-colors"
            >
              Locations <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-150 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl shadow-black/60 w-64">
                <ul className="grid grid-cols-2 gap-0.5">
                  {locationDropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-colors text-xs font-medium"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 pt-2 border-t border-white/10">
                  <Link href="/locations" className="block px-3 py-2 text-xs text-yellow-400 hover:underline font-medium">
                    View all areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="px-3 py-2 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-colors">Blog</Link>
          <Link href="/about" className="px-3 py-2 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-colors">About</Link>
          <Link href="/contact" className="px-3 py-2 rounded-lg hover:text-yellow-400 hover:bg-white/5 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-yellow-400 text-black font-bold px-4 py-2 text-sm hover:bg-yellow-300 transition-colors"
            aria-label={`Call ${PHONE}`}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            {PHONE}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
