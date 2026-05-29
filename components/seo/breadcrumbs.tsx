import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", url: SITE_URL }, ...items.map((i) => ({ name: i.name, url: `${SITE_URL}${i.href}` }))]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(allItems)) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-zinc-500 mb-6 flex-wrap">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-yellow-400 transition-colors">
          <Home className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">{SITE_NAME}</span>
          <span aria-hidden="true">Home</span>
        </Link>
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            {i === items.length - 1 ? (
              <span className="text-zinc-300" aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-yellow-400 transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
