import {
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildServiceSchema,
  buildBlogPostingSchema,
  buildFAQSchema,
  buildItemListSchema,
} from "@/lib/schema"
import { faqs } from "@/content/faqs"

function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(data) ? data : data),
      }}
    />
  )
}

// ─── Home page: LocalBusiness + WebSite + Organization ────────────────────────
export function HomePageSchema() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd data={buildWebSiteSchema()} />
      <JsonLd data={buildOrganizationSchema()} />
    </>
  )
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function FAQSchema() {
  return <JsonLd data={buildFAQSchema(faqs)} />
}

// ─── Service page schema ──────────────────────────────────────────────────────
export function ServicePageSchema({
  name,
  description,
  slug,
  path,
}: {
  name: string
  description: string
  slug: string
  path: string
}) {
  return (
    <>
      <JsonLd data={buildServiceSchema({ name, description, slug })} />
      <JsonLd
        data={buildWebPageSchema({
          type: "Service",
          name,
          description,
          path,
        })}
      />
    </>
  )
}

// ─── Blog post schema ─────────────────────────────────────────────────────────
export function BlogPostSchema({
  title,
  excerpt,
  slug,
  date,
  tags,
  path,
}: {
  title: string
  excerpt: string
  slug: string
  date: string
  tags: string[]
  path: string
}) {
  return (
    <>
      <JsonLd data={buildBlogPostingSchema({ title, excerpt, slug, date, tags })} />
      <JsonLd
        data={buildWebPageSchema({
          type: "Article",
          name: title,
          description: excerpt,
          path,
          datePublished: date,
          dateModified: date,
        })}
      />
    </>
  )
}

// ─── Services index: ItemList ─────────────────────────────────────────────────
export function ServicesListSchema({
  items,
}: {
  items: { name: string; url: string; description?: string }[]
}) {
  return (
    <JsonLd
      data={buildItemListSchema({
        name: "Locksmith Services in Jacksonville FL",
        path: "/services",
        items,
      })}
    />
  )
}

// ─── Locations index: ItemList ────────────────────────────────────────────────
export function LocationsListSchema({
  items,
}: {
  items: { name: string; url: string; description?: string }[]
}) {
  return (
    <JsonLd
      data={buildItemListSchema({
        name: "Jacksonville Locksmith Service Areas",
        path: "/locations",
        items,
      })}
    />
  )
}

// ─── Static page schemas ──────────────────────────────────────────────────────
export function AboutPageSchema() {
  return (
    <JsonLd
      data={buildWebPageSchema({
        type: "AboutPage",
        name: "About Jax Lock Key & Safe Service — Jacksonville Locksmith",
        description:
          "Learn about Jax Lock Key & Safe Service, Jacksonville's trusted 24/7 mobile locksmith. Licensed, insured, and locally owned.",
        path: "/about",
      })}
    />
  )
}

export function ContactPageSchema() {
  return (
    <JsonLd
      data={buildWebPageSchema({
        type: "ContactPage",
        name: "Contact Jax Lock Key & Safe Service — Jacksonville Locksmith",
        description:
          "Contact Jax Lock Key & Safe Service for 24/7 emergency locksmith service in Jacksonville, FL.",
        path: "/contact",
      })}
    />
  )
}
