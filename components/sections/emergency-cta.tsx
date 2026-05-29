import { PhoneCall } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function EmergencyCTA() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Locked Out Right Now?
          </h2>
          <p className="text-black/80 text-xl mb-8 max-w-xl mx-auto">
            Don't wait. Our mobile locksmiths are ready to dispatch across Jacksonville immediately.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 rounded-2xl bg-black text-yellow-400 font-black text-xl px-10 py-5 hover:scale-105 transition-transform"
          >
            <PhoneCall className="h-6 w-6" />
            Call {PHONE}
          </a>
          <p className="text-black/60 text-sm mt-6">Available 24 hours a day, 7 days a week — including holidays</p>
        </div>
      </div>
    </section>
  )
}
