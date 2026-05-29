import Link from "next/link"
import Image from "next/image"
import { PhoneCall } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" aria-label={`${SITE_NAME} — Home`}>
          <Image
            src="/logo.webp"
            alt={`${SITE_NAME} — Jacksonville Locksmith`}
            width={160}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-yellow-400 text-black font-bold px-4 py-2 text-sm hover:bg-yellow-300 transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            {PHONE}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
