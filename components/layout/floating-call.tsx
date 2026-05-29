"use client"

import { PhoneCall } from "lucide-react"
import { PHONE_HREF } from "@/lib/constants"

export default function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 rounded-full bg-yellow-400 text-black font-bold px-5 py-3 shadow-glow hover:scale-105 transition-transform"
      aria-label="Call Jax Lock Key & Safe Service"
    >
      <PhoneCall className="h-5 w-5" />
      Call Now
    </a>
  )
}
