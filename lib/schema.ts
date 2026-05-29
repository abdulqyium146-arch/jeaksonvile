import { SITE_NAME, SITE_URL, PHONE, ADDRESS, GEO, RATING } from "./constants"

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: SITE_NAME,
    image: `${SITE_URL}/og/home.jpg`,
    telephone: "+1-904-586-2816",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    areaServed: [
      "Jacksonville",
      "Downtown Jacksonville",
      "Southside Jacksonville",
      "Arlington",
      "San Marco",
      "Riverside",
      "Mandarin",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      reviewCount: RATING.count,
    },
    url: SITE_URL,
    priceRange: "$$",
  }
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
