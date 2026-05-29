import Link from "next/link"
import { Car, Home, Building, Key, Shield, Lock, Smartphone, KeyRound } from "lucide-react"

const serviceCards = [
  {
    slug: "emergency-locksmith",
    icon: Shield,
    title: "Emergency Locksmith",
    description: "24/7 emergency lockout response across Jacksonville. We arrive in 20–30 minutes.",
  },
  {
    slug: "car-lockout",
    icon: Car,
    title: "Car Lockout",
    description: "Locked out of your vehicle? Our mobile team opens your car fast and without damage.",
  },
  {
    slug: "house-lockout",
    icon: Home,
    title: "House Lockout",
    description: "Residential lockout service for homes, apartments, and condos throughout Jacksonville.",
  },
  {
    slug: "rekeying-service",
    icon: Key,
    title: "Rekeying Service",
    description: "Change your locks without replacing them. Affordable rekeying for any lock brand.",
  },
  {
    slug: "safe-locksmith",
    icon: Lock,
    title: "Safe Locksmith",
    description: "Open, repair, or relocate safes. We handle combination, electronic, and fire safes.",
  },
  {
    slug: "commercial-locksmith",
    icon: Building,
    title: "Commercial Locksmith",
    description: "Master key systems, access control, panic bars, and office lockout service.",
  },
  {
    slug: "key-fob-programming",
    icon: Smartphone,
    title: "Key Fob Programming",
    description: "Replace and program car key fobs for most makes — at a fraction of dealer cost.",
  },
  {
    slug: "lock-installation",
    icon: KeyRound,
    title: "Lock Installation",
    description: "Install deadbolts, smart locks, and high-security hardware for homes and businesses.",
  },
]

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">
            Jacksonville Locksmith Services
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From emergency lockouts to commercial security upgrades — our mobile locksmiths cover every situation across Jacksonville, FL.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map(({ slug, icon: Icon, title, description }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-yellow-400/50 hover:bg-zinc-800 transition-all"
            >
              <Icon className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
