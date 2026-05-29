"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PhoneCall, Shield, Clock, Truck, CheckCircle } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

const badges = [
  { icon: Clock, text: "20–30 Min Arrival" },
  { icon: Shield, text: "Licensed Locksmiths" },
  { icon: Truck, text: "Mobile Service Vans" },
  { icon: CheckCircle, text: "24/7 Availability" },
]

export default function Hero() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm font-medium mb-6">
              24/7 Emergency Locksmith Service in Jacksonville, FL
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
              Locked Out?
              <span className="block text-yellow-400">
                Fast Jacksonville Locksmith
              </span>
            </h1>

            <p className="mt-6 text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Jax Lock Key & Safe Service provides rapid emergency locksmith solutions across Jacksonville.
              Car lockouts, home lockouts, rekeying, safes, key extraction, and mobile locksmith service — available 24 hours a day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-5 text-black font-bold text-lg hover:scale-105 transition-transform shadow-glow"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
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
                  <Icon className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                  <p className="font-semibold text-sm text-white">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
