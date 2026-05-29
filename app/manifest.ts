import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Jax Lock Key",
    description: "24/7 Emergency Locksmith in Jacksonville, FL — Car Lockouts, Rekeying, Safes",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#000000",
    theme_color: "#facc15",
    categories: ["utilities", "business", "local"],
    lang: "en-US",
    dir: "ltr",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Call Now",
        url: "tel:+19045862816",
        description: "Call Jax Lock Key & Safe Service immediately",
      },
      {
        name: "Emergency Locksmith",
        url: "/services/emergency-locksmith",
        description: "24/7 emergency locksmith service",
      },
    ],
  }
}
