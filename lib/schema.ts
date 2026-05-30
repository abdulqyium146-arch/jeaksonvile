import {
  SITE_NAME, SITE_URL, PHONE, PHONE_INTERNATIONAL,
  EMAIL, ADDRESS, GEO, RATING, FOUNDED_YEAR,
  PRICE_RANGE, SOCIAL,
} from "./constants"

const BASE_ID = SITE_URL

// ─── Core entity: LocalBusiness / Locksmith ───────────────────────────────────
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${BASE_ID}/#localbusiness`,
    name: SITE_NAME,
    alternateName: ["Jax Lock Key", "Jax Lock & Key Safe Service"],
    slogan: "Fast, Licensed, Local — Jacksonville's 24/7 Mobile Locksmith",
    description: "Locally owned mobile locksmith serving all of Jacksonville, FL since 2014. Licensed, background-checked technicians available 24/7 for emergency lockouts, rekeying, lock installation, safe service, and key fob programming.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_ID}/#logo`,
      url: `${SITE_URL}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: [
      {
        "@type": "ImageObject",
        "@id": `${BASE_ID}/#hero-image`,
        url: `${SITE_URL}/og/locksmith-jacksonville-fl.webp`,
        contentUrl: `${SITE_URL}/og/locksmith-jacksonville-fl.webp`,
        caption: "Emergency locksmith service in Jacksonville FL — Jax Lock Key & Safe Service",
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${BASE_ID}/#emergency-image`,
        url: `${SITE_URL}/og/emergency-locksmith-jacksonville.webp`,
        contentUrl: `${SITE_URL}/og/emergency-locksmith-jacksonville.webp`,
        caption: "24/7 emergency locksmith Jacksonville FL — car and home lockout service",
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${BASE_ID}/#mobile-service-image`,
        url: `${SITE_URL}/og/mobile-locksmith-service-jacksonville.webp`,
        contentUrl: `${SITE_URL}/og/mobile-locksmith-service-jacksonville.webp`,
        caption: "Mobile locksmith service van covering all of Jacksonville FL",
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${BASE_ID}/#team-image`,
        url: `${SITE_URL}/og/jax-lock-key-safe-service.webp`,
        contentUrl: `${SITE_URL}/og/jax-lock-key-safe-service.webp`,
        caption: "Jax Lock Key & Safe Service — locally owned Jacksonville locksmith team",
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${BASE_ID}/#technician-image`,
        url: `${SITE_URL}/og/licensed-locksmith-technician-jacksonville.webp`,
        contentUrl: `${SITE_URL}/og/licensed-locksmith-technician-jacksonville.webp`,
        caption: "Licensed locksmith technician at work in Jacksonville FL",
        inLanguage: "en-US",
      },
    ],
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
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5, minValue: 4, maxValue: 8 },
    sameAs: Object.values(SOCIAL),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Florida Locksmith License",
        credentialCategory: "license",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Florida Department of Business and Professional Regulation (DBPR)",
          url: "https://www.myfloridalicense.com",
        },
      },
    ],
    knowsAbout: [
      "Residential locksmith services",
      "Emergency locksmith response",
      "Automotive locksmith and key fob programming",
      "Commercial locksmith and access control systems",
      "Safe opening and combination changes",
      "Lock rekeying for homes and businesses",
      "Deadbolt and smart lock installation",
      "Transponder chip key cutting and programming",
      "Master key system design",
      "Non-destructive entry techniques",
    ],
    makesOffer: [
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-emergency`, name: "Emergency Locksmith Service", url: `${SITE_URL}/services/emergency-locksmith`, description: "24/7 emergency lockout response, 20–30 min arrival" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-residential`, name: "Residential Locksmith Services", url: `${SITE_URL}/services/residential-locksmith`, description: "Complete home locksmith services — lockouts, rekeying, lock installation" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-car-lockout`, name: "Car Lockout Service", url: `${SITE_URL}/services/car-lockout`, description: "Damage-free mobile auto locksmith" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-rekeying`, name: "Lock Rekeying", url: `${SITE_URL}/services/rekeying-service`, description: "Affordable rekeying for all lock brands" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-safe`, name: "Safe Locksmith Service", url: `${SITE_URL}/services/safe-locksmith`, description: "Safe opening, combination changes, and relocation" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-commercial`, name: "Commercial Locksmith", url: `${SITE_URL}/services/commercial-locksmith`, description: "Master keys, access control, office lockouts" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-key-fob`, name: "Key Fob Programming", url: `${SITE_URL}/services/key-fob-programming`, description: "Vehicle key fob replacement and programming" },
      { "@type": "Offer", "@id": `${BASE_ID}/#offer-lock-install`, name: "Lock Installation", url: `${SITE_URL}/services/lock-installation`, description: "Deadbolts, smart locks, and high-security hardware" },
    ],
    review: [
      {
        "@type": "Review",
        "@id": `${BASE_ID}/#review-1`,
        author: { "@type": "Person", name: "Michael R." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2024-11-20",
        reviewBody: "Called at midnight when I locked my keys in my car at a gas station in Jacksonville. They arrived in under 25 minutes and had me back on the road fast. Very professional and the price was fair.",
        publisher: { "@id": `${BASE_ID}/#localbusiness` },
      },
      {
        "@type": "Review",
        "@id": `${BASE_ID}/#review-2`,
        author: { "@type": "Person", name: "Sandra T." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2024-10-15",
        reviewBody: "Rekeyed all the locks in my new Jacksonville home. Quick, professional, and much less expensive than I expected. Would definitely call again.",
        publisher: { "@id": `${BASE_ID}/#localbusiness` },
      },
      {
        "@type": "Review",
        "@id": `${BASE_ID}/#review-3`,
        author: { "@type": "Person", name: "James K." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2024-09-03",
        reviewBody: "Locked out of my house on a Sunday afternoon in Riverside. Technician was there in about 20 minutes. Got in without any damage to the door or lock.",
        publisher: { "@id": `${BASE_ID}/#localbusiness` },
      },
      {
        "@type": "Review",
        "@id": `${BASE_ID}/#review-4`,
        author: { "@type": "Person", name: "Priya M." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2024-08-18",
        reviewBody: "Had forgotten my safe combination for months. They opened it in about 30 minutes without any damage. Great service and very knowledgeable.",
        publisher: { "@id": `${BASE_ID}/#localbusiness` },
      },
      {
        "@type": "Review",
        "@id": `${BASE_ID}/#review-5`,
        author: { "@type": "Person", name: "David L." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2024-07-09",
        reviewBody: "Used them for our commercial office in Southside Jacksonville after an employee departure. Fast rekeying of the entire office — discreet, professional, and reasonably priced.",
        publisher: { "@id": `${BASE_ID}/#localbusiness` },
      },
    ],
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
    foundingDate: FOUNDED_YEAR,
    foundingLocation: {
      "@type": "Place",
      name: "Jacksonville, Florida",
      address: { "@type": "PostalAddress", addressLocality: "Jacksonville", addressRegion: "FL", addressCountry: "US" },
    },
    areaServed: { "@type": "State", name: "Florida" },
    knowsAbout: [
      "Residential locksmith services",
      "Emergency locksmith response",
      "Automotive locksmith and key fob programming",
      "Commercial locksmith and access control",
      "Safe cracking and combination changes",
      "Lock rekeying",
      "Smart lock installation",
      "High-security lock hardware",
      "Master key systems",
      "Non-destructive entry",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_INTERNATIONAL,
        contactType: "emergency",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE_INTERNATIONAL,
        contactType: "customer service",
        availableLanguage: "English",
      },
    ],
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
      "@type": "Person",
      "@id": `${BASE_ID}/#author-locksmith-team`,
      name: "Jax Lock Key & Safe Service Team",
      url: `${SITE_URL}/about`,
      jobTitle: "Licensed Locksmith",
      worksFor: { "@id": `${BASE_ID}/#organization` },
      knowsAbout: ["locksmith services", "lock security", "residential locksmith", "automotive locksmith", "safe opening"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Florida Locksmith License",
        credentialCategory: "license",
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_ID}/#organization`,
      name: SITE_NAME,
      logo: { "@id": `${BASE_ID}/#logo` },
    },
    image: {
      "@type": "ImageObject",
      "@id": `${BASE_ID}/#hero-image`,
      url: `${SITE_URL}/og/locksmith-jacksonville-fl.webp`,
      contentUrl: `${SITE_URL}/og/locksmith-jacksonville-fl.webp`,
      caption: "Jax Lock Key & Safe Service — Jacksonville FL locksmith",
      inLanguage: "en-US",
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

// ─── HowTo ───────────────────────────────────────────────────────────────────
export function buildHowToSchema({
  name,
  description,
  slug,
  steps,
  totalTime = "PT30M",
}: {
  name: string
  description: string
  slug: string
  steps: { name: string; text: string }[]
  totalTime?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/services/${slug}/#howto`,
    name,
    description,
    totalTime,
    tool: { "@type": "HowToTool", name: "Professional Locksmith Tools" },
    supply: { "@type": "HowToSupply", name: "Licensed Locksmith" },
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${SITE_URL}/services/${slug}/#step-${i + 1}`,
    })),
    provider: { "@id": `${SITE_URL}/#localbusiness` },
  }
}

// ─── DefinedTerm (glossary / locksmith terminology) ───────────────────────────
export function buildDefinedTermSchema(term: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Locksmith Terminology",
      url: `${SITE_URL}/blog`,
    },
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
