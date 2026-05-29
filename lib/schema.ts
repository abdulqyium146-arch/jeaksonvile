import {
  SITE_NAME, SITE_URL, PHONE, PHONE_INTERNATIONAL,
  EMAIL, ADDRESS, GEO, RATING, FOUNDED_YEAR,
  PRICE_RANGE, SOCIAL, OG_IMAGE,
} from "./constants"

const BASE_ID = SITE_URL

// ─── Core entity: LocalBusiness / Locksmith ───────────────────────────────────
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${BASE_ID}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_ID}/#logo`,
      url: `${SITE_URL}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    telephone: PHONE_INTERNATIONAL,
    email: EMAIL,
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
    hasMap: `https://maps.google.com/maps?q=${GEO.lat},${GEO.lng}`,
    areaServed: [
      { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Orange Park", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Neptune Beach", containedInPlace: { "@type": "State", name: "Florida" } },
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
        geoRadius: "30000",
      },
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
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: PRICE_RANGE,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    foundingDate: FOUNDED_YEAR,
    sameAs: Object.values(SOCIAL),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_INTERNATIONAL,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/contact`,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Locksmith Service Request" },
    },
  }
}

// ─── WebSite with sitelinks search box ───────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_ID}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "24/7 emergency locksmith services in Jacksonville, FL",
    publisher: { "@id": `${BASE_ID}/#localbusiness` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

// ─── Organization ─────────────────────────────────────────────────────────────
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_ID}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@id": `${BASE_ID}/#logo` },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_INTERNATIONAL,
      contactType: "emergency",
      availableLanguage: "English",
    },
    sameAs: Object.values(SOCIAL),
  }
}

// ─── WebPage (generic) ────────────────────────────────────────────────────────
export function buildWebPageSchema({
  type = "WebPage",
  name,
  description,
  path,
  datePublished,
  dateModified,
}: {
  type?: string
  name: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
}) {
  const url = `${SITE_URL}${path}`
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${BASE_ID}/#website` },
    about: { "@id": `${BASE_ID}/#localbusiness` },
    inLanguage: "en-US",
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified: dateModified ?? datePublished }),
    breadcrumb: { "@id": `${url}/#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  }
}

// ─── Service ─────────────────────────────────────────────────────────────────
export function buildServiceSchema({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  const url = `${SITE_URL}/services/${slug}`
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name,
    description,
    url,
    provider: { "@id": `${BASE_ID}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: "Jacksonville",
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    serviceType: name,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: PHONE_INTERNATIONAL,
      availableLanguage: "English",
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  }
}

// ─── BlogPosting / Article ────────────────────────────────────────────────────
export function buildBlogPostingSchema({
  title,
  excerpt,
  slug,
  date,
  tags,
}: {
  title: string
  excerpt: string
  slug: string
  date: string
  tags: string[]
}) {
  const url = `${SITE_URL}/blog/${slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: title,
    description: excerpt,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      "@id": `${BASE_ID}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_ID}/#organization`,
      name: SITE_NAME,
      logo: { "@id": `${BASE_ID}/#logo` },
    },
    image: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: { "@id": `${url}/#webpage` },
    keywords: tags.join(", "),
    articleSection: "Locksmith Tips",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_ID}/#website` },
    about: { "@id": `${BASE_ID}/#localbusiness` },
  }
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}

// ─── ItemList (services index / locations index) ──────────────────────────────
export function buildItemListSchema({
  name,
  path,
  items,
}: {
  name: string
  path: string
  items: { name: string; url: string; description?: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}${path}/#itemlist`,
    name,
    url: `${SITE_URL}${path}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  }
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────
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
