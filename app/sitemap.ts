import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { services } from "@/content/services"
import { locations } from "@/content/locations"
import { blogPosts } from "@/content/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/locations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes]
}
