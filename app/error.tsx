"use client"

import { useEffect } from "react"
import { PhoneCall, RefreshCw } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-black text-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
        <p className="text-yellow-400 font-black text-6xl mb-4">!</p>
        <h1 className="text-4xl font-black mb-4">Something Went Wrong</h1>
        <p className="text-zinc-400 text-lg mb-10">
          We encountered an error. For urgent locksmith help, please call us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 hover:scale-105 transition-transform"
          >
            <PhoneCall className="h-5 w-5" />
            Call {PHONE}
          </a>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
        </div>
      </div>
    </main>
  )
}
