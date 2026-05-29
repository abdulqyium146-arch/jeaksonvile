"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { PhoneCall, Shield, Clock, Truck, CheckCircle } from "lucide-react"
import { PHONE, PHONE_HREF, RATING } from "@/lib/constants"

const DARK_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxODE4MWIiLz48L3N2Zz4="

const badges = [
  { icon: Clock, text: "20–30 Min Arrival" },
  { icon: Shield, text: "Licensed Locksmiths" },
  { icon: Truck, text: "Mobile Service Vans" },
  { icon: CheckCircle, text: "24/7 Availability" },
]

export default function Hero() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* ── Text column ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm font-medium mb-6">
              24/7 Emergency Locksmith Service in Jacksonville, FL
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Locked Out?
              <span className="block text-yellow-400">
                Fast Jacksonville Locksmith
              </span>
            </h1>

            <p className="mt-6 text-xl text-zinc-300 max-w-xl leading-relaxed">
              Jax Lock Key & Safe Service provides rapid emergency locksmith solutions across Jacksonville.
              Car lockouts, home lockouts, rekeying, safes, key extraction — available 24 hours a day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-5 text-black font-bold text-lg hover:scale-105 transition-transform shadow-glow"
              >
                <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
                Call Now: {PHONE}
              </a>

              <Link
                href="/services/emergency-locksmith"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-5 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Get Emergency Help
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="h-5 w-5 text-yellow-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="font-semibold text-sm text-white">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Hero image (desktop only) ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-1 bg-yellow-400 z-10" aria-hidden="true" />
              <Image
                src="/og/locksmith-jacksonville-fl.webp"
                alt="Jax Lock Key & Safe Service — professional locksmith responding to emergency call in Jacksonville FL"
                width={720}
                height={500}
                priority
                placeholder="blur"
                blurDataURL={DARK_BLUR}
                sizes="(max-width: 1023px) 0vw, (max-width: 1280px) 45vw, 600px"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 text-center">
                <p className="text-yellow-400 font-black text-xl">{RATING.value}★</p>
                <p className="text-zinc-400 text-xs mt-0.5">{RATING.count} Reviews</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 text-center">
                <p className="text-yellow-400 font-black text-xl">20 Min</p>
                <p className="text-zinc-400 text-xs mt-0.5">Avg. Response</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-3 text-center">
                <p className="text-yellow-400 font-black text-xl">24/7</p>
                <p className="text-zinc-400 text-xs mt-0.5">Available</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
