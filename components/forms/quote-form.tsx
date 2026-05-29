"use client"

import { useState } from "react"
import { PhoneCall } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function QuoteForm() {
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, type: "quick-quote" }),
    })
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <p className="font-black text-white text-xl mb-1">Get a Quick Quote</p>
      <p className="text-zinc-400 text-sm mb-5">Enter your number and we'll call you back shortly.</p>

      {submitted ? (
        <p className="text-yellow-400 font-semibold text-center py-4">We'll call you shortly!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Your phone number"
            className="flex-1 rounded-xl bg-zinc-800 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50 text-sm"
          />
          <button type="submit" className="rounded-xl bg-yellow-400 text-black font-bold px-5 py-3 hover:bg-yellow-300 transition-colors text-sm">
            Call Me
          </button>
        </form>
      )}

      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-zinc-400">
        <span>Or call directly:</span>
        <a href={PHONE_HREF} className="inline-flex items-center gap-1 text-yellow-400 font-semibold hover:underline">
          <PhoneCall className="h-3.5 w-3.5" /> {PHONE}
        </a>
      </div>
    </div>
  )
}
