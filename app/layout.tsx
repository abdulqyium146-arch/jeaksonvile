import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import EmergencyRibbon from "@/components/layout/emergency-ribbon"
import StickyCall from "@/components/layout/sticky-call"
import FloatingCall from "@/components/layout/floating-call"
import Analytics from "@/components/analytics"
import { SITE_NAME, SITE_URL, OG_IMAGE, DEFAULT_KEYWORDS } from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#facc15" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "24/7 Locksmith Jacksonville FL | Emergency Locksmith Near You",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Trusted emergency locksmith in Jacksonville, FL. Fast 24/7 mobile locksmith services — car lockouts, home lockouts, rekeying, safe opening, key fob programming. 20–30 min response.",

  keywords: DEFAULT_KEYWORDS,

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "Locksmith Services",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "24/7 Emergency Locksmith Jacksonville FL | Jax Lock Key & Safe Service",
    description:
      "Fast mobile locksmith in Jacksonville — car lockouts, home lockouts, rekeying, safes, key fobs. Licensed & insured. 20–30 min arrival.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Jax Lock Key & Safe Service — Jacksonville Locksmith" }],
  },

  twitter: {
    card: "summary_large_image",
    site: "@jaxlockkey",
    creator: "@jaxlockkey",
    images: [{ url: OG_IMAGE, alt: "Jax Lock Key & Safe Service — Jacksonville Locksmith" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: [
      "googlee3216d8a594638b2",
      "TjPvrEbEKuHpTWDy8Oz2p3-vBudVL4R0puR4JXKF4io",
    ],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },

  other: {
    "geo.region": "US-FL",
    "geo.placename": "Jacksonville, Florida",
    "geo.position": "30.3067;-81.6533",
    "ICBM": "30.3067, -81.6533",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Maps preconnect for the embedded map */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* LLM crawler discovery — llms.txt standard */}
        <link rel="llms" href="/llms.txt" type="text/plain" />
      </head>
      <body className="font-sans bg-black text-white min-h-full flex flex-col">
        <EmergencyRibbon />
        <Navbar />
        {/* pb-sticky adds clearance for the mobile fixed call bar */}
        <div className="flex-1 pb-sticky md:pb-0">{children}</div>
        <Footer />
        <StickyCall />
        <FloatingCall />
        <Analytics />
      </body>
    </html>
  )
}
