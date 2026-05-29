import { MapPin, ExternalLink, Phone, Clock } from "lucide-react"
import { ADDRESS, PHONE, PHONE_HREF, BUSINESS_HOURS } from "@/lib/constants"

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.988391455395!2d-81.6120282!3d30.294392100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b7f1d302e977%3A0xedeb8d6624d48927!2sJax%20lock%20key%20%26%20safe%20service!5e0!3m2!1sen!2s!4v1780027228208!5m2!1sen!2s"

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Jax+lock+key+%26+safe+service"

interface MapEmbedProps {
  showCard?: boolean
  className?: string
}

export default function MapEmbed({ showCard = true, className = "" }: MapEmbedProps) {
  return (
    <div className={`flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-white/10 ${className}`}>
      {/* ── Map iframe ──────────────────────────────────────────────── */}
      <div className="relative w-full lg:flex-1 aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
        {/* Yellow accent top border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-yellow-400 z-10" />

        <iframe
          src={MAP_SRC}
          title="Jax Lock Key & Safe Service — Location Map"
          aria-label="Google Map showing Jax Lock Key & Safe Service location in Jacksonville, FL"
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── Info card ───────────────────────────────────────────────── */}
      {showCard && (
        <div className="bg-zinc-900 lg:w-72 xl:w-80 flex flex-col p-7 gap-6 shrink-0">
          <div>
            <p className="text-yellow-400 font-black text-lg mb-1">Our Location</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Serving all of Jacksonville and Duval County — we come to you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
              <address className="not-italic text-sm text-zinc-300 leading-relaxed">
                {ADDRESS.street}<br />
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </address>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-yellow-400 shrink-0" aria-hidden="true" />
              <a
                href={PHONE_HREF}
                className="text-sm text-zinc-300 hover:text-yellow-400 transition-colors font-medium"
              >
                {PHONE}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-zinc-300">{BUSINESS_HOURS}</p>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold py-3 text-sm hover:bg-yellow-300 transition-colors"
            >
              Call for Service
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 text-zinc-300 py-3 text-sm hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
