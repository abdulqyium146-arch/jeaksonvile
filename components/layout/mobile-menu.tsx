"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, PhoneCall } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

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
        className="md:hidden p-2 text-white"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-yellow-400 font-black text-xl">Jax Lock Key</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-xl font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-black font-black text-lg"
          >
            <PhoneCall className="h-5 w-5" />
            {PHONE}
          </a>
        </div>
      )}
    </>
  )
}
