"use client"

import { useState } from "react"

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const initialState: FormData = { name: "", phone: "", email: "", service: "", message: "" }

const serviceOptions = [
  "Emergency Lockout",
  "Car Lockout",
  "House Lockout",
  "Rekeying Service",
  "Safe Service",
  "Commercial Locksmith",
  "Key Fob Programming",
  "Lock Installation",
  "Other",
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-8 text-center">
        <p className="text-2xl font-black text-white mb-2">Message Sent!</p>
        <p className="text-zinc-400">We'll be in touch shortly. For urgent issues, please call us directly.</p>
      </div>
    )
  }

  const inputClass = "w-full rounded-xl bg-zinc-800 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50 text-sm"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className={inputClass} />
        <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="Phone Number" className={inputClass} />
      </div>
      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" className={inputClass} />
      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
        <option value="">Select Service</option>
        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your situation..." className={inputClass} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl bg-yellow-400 text-black font-bold py-4 hover:bg-yellow-300 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please call us directly.</p>
      )}
    </form>
  )
}
