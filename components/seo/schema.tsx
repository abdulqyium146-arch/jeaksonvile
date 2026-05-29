import { buildLocalBusinessSchema, buildFAQSchema } from "@/lib/schema"
import { faqs } from "@/content/faqs"

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema()) }}
    />
  )
}

export function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(faqs)) }}
    />
  )
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Locksmith",
      name: "Jax Lock Key & Safe Service",
      telephone: "+1-904-586-2816",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jacksonville",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Jacksonville",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
