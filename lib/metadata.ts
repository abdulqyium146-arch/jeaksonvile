import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, OG_IMAGE, DEFAULT_KEYWORDS } from "./constants"

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? OG_IMAGE
  const mergedKeywords = [...DEFAULT_KEYWORDS, ...(keywords ?? [])]

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: ogImage.endsWith(".webp") ? "image/webp" : "image/jpeg",
        },
      ],
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: title }],
      site: "@jaxlockkey",
    },
  }
}
