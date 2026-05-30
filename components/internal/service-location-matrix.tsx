import Link from "next/link"

const services = [
  { label: "Residential Locksmith", href: "/services/residential-locksmith" },
  { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
  { label: "Car Lockout", href: "/services/car-lockout" },
  { label: "House Lockout", href: "/services/house-lockout" },
  { label: "Rekeying Service", href: "/services/rekeying-service" },
  { label: "Lock Installation", href: "/services/lock-installation" },
  { label: "Safe Locksmith", href: "/services/safe-locksmith" },
  { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
  { label: "Key Fob Programming", href: "/services/key-fob-programming" },
]

const locations = [
  { label: "Downtown Jacksonville", href: "/locations/downtown-jacksonville" },
  { label: "San Marco", href: "/locations/san-marco" },
  { label: "Riverside", href: "/locations/riverside" },
  { label: "Arlington", href: "/locations/arlington" },
  { label: "Southside", href: "/locations/southside" },
  { label: "Mandarin", href: "/locations/mandarin" },
  { label: "Neptune Beach", href: "/locations/neptune-beach" },
  { label: "Orange Park", href: "/locations/orange-park" },
]

interface ServiceLocationMatrixProps {
  heading?: string
}

export default function ServiceLocationMatrix({
  heading = "Jacksonville Locksmith Services by Area",
}: ServiceLocationMatrixProps) {
  return (
    <section className="py-16 bg-zinc-950 border-t border-white/5" aria-labelledby="matrix-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="matrix-heading" className="text-2xl font-black text-white mb-8 text-center">
          {heading}
        </h2>

        <div className="space-y-5">
          {services.map((svc) => (
            <div key={svc.href} className="flex flex-col sm:flex-row gap-3 items-start">
              <Link
                href={svc.href}
                className="shrink-0 w-full sm:w-52 text-sm font-semibold text-yellow-400 hover:underline py-1"
              >
                {svc.label}
              </Link>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="text-xs text-zinc-400 hover:text-yellow-400 border border-white/10 hover:border-yellow-400/30 rounded-lg px-3 py-1.5 transition-colors bg-zinc-900"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/services" className="text-sm text-yellow-400 hover:underline font-medium">
            All Services →
          </Link>
          <Link href="/locations" className="text-sm text-yellow-400 hover:underline font-medium">
            All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  )
}
