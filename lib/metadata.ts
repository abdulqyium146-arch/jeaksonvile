import { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "./constants"

export function buildMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/og/home.jpg`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  }
}
