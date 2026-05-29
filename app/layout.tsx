import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import EmergencyRibbon from "@/components/layout/emergency-ribbon"
import StickyCall from "@/components/layout/sticky-call"
import FloatingCall from "@/components/layout/floating-call"
import Analytics from "@/components/analytics"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "24 Hour Locksmith Jacksonville FL | Emergency Locksmith Near You",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Trusted emergency locksmith in Jacksonville, FL. Fast 24/7 mobile locksmith services for lockouts, rekeying, safes, car unlocks, residential and commercial security.",
  keywords: [
    "locksmith Jacksonville",
    "24 hour locksmith Jacksonville",
    "emergency locksmith near me",
    "car lockout Jacksonville",
    "mobile locksmith",
    "rekeying Jacksonville",
    "safe locksmith Jacksonville",
  ],
  openGraph: {
    title: "Emergency Locksmith Jacksonville",
    description: "Fast mobile locksmith service in Jacksonville available 24/7.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "googlee3216d8a594638b2",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} bg-black text-white min-h-full flex flex-col`}>
        <EmergencyRibbon />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyCall />
        <FloatingCall />
        <Analytics />
      </body>
    </html>
  )
}
