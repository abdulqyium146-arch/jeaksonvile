import { SITE_URL, SITE_NAME, PHONE, ADDRESS } from "./constants"

export function canonical(path: string) {
  return `${SITE_URL}${path}`
}

export function ogImage(filename: string = "home.jpg") {
  return `${SITE_URL}/og/${filename}`
}

export function buildServiceTitle(name: string) {
  return `${name} Jacksonville FL | ${SITE_NAME}`
}

export function buildLocationTitle(name: string) {
  return `Locksmith in ${name} | ${SITE_NAME}`
}

export function buildBlogTitle(title: string) {
  return `${title} | ${SITE_NAME}`
}

export const defaultKeywords = [
  "locksmith Jacksonville FL",
  "24 hour locksmith Jacksonville",
  "emergency locksmith Jacksonville",
  "mobile locksmith Jacksonville",
  "locksmith near me Jacksonville",
]

export const businessEntity = {
  name: SITE_NAME,
  phone: PHONE,
  address: ADDRESS.full,
  url: SITE_URL,
}
