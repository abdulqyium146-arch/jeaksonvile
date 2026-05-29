import { PhoneCall } from "lucide-react"
import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function EmergencyRibbon() {
  return (
    <div className="bg-yellow-400 text-black py-2 px-4 text-center text-sm font-semibold">
      <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:underline">
        <PhoneCall className="h-4 w-4" />
        Emergency Locksmith Available 24/7 — Call Now: {PHONE}
      </a>
    </div>
  )
}
