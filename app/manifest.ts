import { MetadataRoute } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Jax Lock Key",
    description: "24/7 Emergency Locksmith in Jacksonville, FL",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#facc15",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
