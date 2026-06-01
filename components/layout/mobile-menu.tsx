"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, PhoneCall } from "lucide-react"
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/residential-locksmith", label: "Residential" },
  { href: "/services/emergency-locksmith", label: "Emergency" },
  { href: "/services/car-lockout", label: "Car Lockout" },
  { href: "/services/house-lockout", label: "House Lockout" },
  { href: "/services/rekeying-service", label: "Rekeying" },
  { href: "/services/lock-installation", label: "Lock Install" },
  { href: "/services/safe-locksmith", label: "Safe Locksmith" },
  { href: "/services/commercial-locksmith", label: "Commercial" },
  { href: "/services/key-fob-programming", label: "Key Fob" },
]

const locationLinks = [
  { href: "/locations/downtown-jacksonville", label: "Downtown" },
  { href: "/locations/san-marco", label: "San Marco" },
  { href: "/locations/riverside", label: "Riverside" },
  { href: "/locations/arlington", label: "Arlington" },
  { href: "/locations/southside", label: "Southside" },
  { href: "/locations/mandarin", label: "Mandarin" },
  { href: "/locations/neptune-beach", label: "Neptune Beach" },
  { href: "/locations/jacksonville-beach", label: "Jax Beach" },
  { href: "/locations/orange-park", label: "Orange Park" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 min-h-[44px] min-w-[44px] text-white flex items-center justify-center"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[100] bg-black flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 shrink-0">
            <Link href="/" onClick={() => setOpen(false)} aria-label={`${SITE_NAME} — Home`}>
              <Image src="/logo.webp" alt={SITE_NAME} width={140} height={42} className="h-9 w-auto" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 px-6 py-6 flex flex-col gap-8">
            {/* Main nav links */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center min-h-[52px] px-2 text-xl font-semibold text-white hover:text-yellow-400 transition-colors border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services quick-links */}
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Quick Service Links</p>
              <div className="grid grid-cols-3 gap-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-xs text-zinc-300 py-2.5 px-2 rounded-lg bg-zinc-900 hover:text-yellow-400 hover:bg-zinc-800 transition-colors text-center font-medium leading-tight"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations quick-links */}
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Service Areas</p>
              <div className="grid grid-cols-2 gap-2">
                {locationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-xs text-zinc-300 py-2.5 px-3 rounded-lg bg-zinc-900 hover:text-yellow-400 hover:bg-zinc-800 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-white/10 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-5 min-h-[60px] text-black font-black text-lg w-full"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
