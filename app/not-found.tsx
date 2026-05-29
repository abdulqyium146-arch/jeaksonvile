import Link from "next/link"
import { PhoneCall, Home, Wrench } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
        <p className="text-yellow-400 font-black text-8xl mb-4">404</p>
        <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist. If you need emergency locksmith service in Jacksonville, call us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover:scale-105 transition-transform"
          >
            <PhoneCall className="h-5 w-5" />
            Call {PHONE}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/services" className="inline-flex items-center gap-1 text-zinc-400 hover:text-yellow-400 transition-colors">
            <Wrench className="h-4 w-4" /> All Services
          </Link>
          <Link href="/locations" className="text-zinc-400 hover:text-yellow-400 transition-colors">Service Areas</Link>
          <Link href="/contact" className="text-zinc-400 hover:text-yellow-400 transition-colors">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}
