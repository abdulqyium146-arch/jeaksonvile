import { PHONE, PHONE_HREF } from "@/lib/constants"

export default function StickyCall() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden px-3 pb-3 pt-2 bg-black border-t border-yellow-400/20">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center rounded-xl bg-yellow-400 py-4 min-h-[52px] text-lg font-black text-black"
      >
        CALL NOW — {PHONE}
      </a>
    </div>
  )
}
