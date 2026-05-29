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

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 min-h-[44px] min-w-[44px] text-white flex items-center justify-center"
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex justify-between items-center mb-10">
            <Link href="/" onClick={() => setOpen(false)} aria-label={`${SITE_NAME} — Home`}>
              <Image
                src="/logo.webp"
                alt={SITE_NAME}
                width={140}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
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

          <a
            href={PHONE_HREF}
            className="mt-auto pt-8 flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-5 min-h-[60px] text-black font-black text-lg"
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            {PHONE}
          </a>
        </div>
      )}
    </>
  )
}
