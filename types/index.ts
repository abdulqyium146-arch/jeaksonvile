export interface Service {
  slug: string
  title: string
  heading: string
  description: string
  content: string
  icon?: string
  keywords?: string[]
}

export interface Location {
  slug: string
  name: string
  county: string
  zipCodes: string[]
  description: string
  heading: string
  landmarks?: string[]
  lat?: number
  lng?: number
}

export interface FAQ {
  q: string
  a: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
  tags: string[]
}

export interface Testimonial {
  name: string
  rating: number
  text: string
  date: string
  source: "google" | "yelp" | "direct"
}
