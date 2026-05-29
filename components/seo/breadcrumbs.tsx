import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/constants"

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `${SITE_URL}${item.href}`,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(schemaItems)) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-zinc-500 mb-6">
        <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" />
            {i === items.length - 1 ? (
              <span className="text-zinc-300">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-yellow-400 transition-colors">{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
