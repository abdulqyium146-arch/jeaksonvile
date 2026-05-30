import Link from "next/link"
import type { ReactNode } from "react"

// Parses [text](href) and **bold** markers within a plain string into React nodes.
// Used in service page and blog post content renderers to enable inline internal links.
export function parseInline(text: string): ReactNode {
  if (!text.includes("[") && !text.includes("**")) return text

  const segments: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const linkIdx = remaining.indexOf("[")
    const boldIdx = remaining.indexOf("**")

    if (linkIdx === -1 && boldIdx === -1) {
      segments.push(remaining)
      break
    }

    const nextIdx =
      linkIdx === -1 ? boldIdx :
      boldIdx === -1 ? linkIdx :
      Math.min(linkIdx, boldIdx)

    if (nextIdx > 0) {
      segments.push(remaining.slice(0, nextIdx))
      remaining = remaining.slice(nextIdx)
    }

    // Match [text](href)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      segments.push(
        <Link key={key++} href={linkMatch[2]} className="text-yellow-400 hover:underline font-medium">
          {linkMatch[1]}
        </Link>
      )
      remaining = remaining.slice(linkMatch[0].length)
      continue
    }

    // Match **bold**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/)
    if (boldMatch) {
      segments.push(<strong key={key++} className="text-white">{boldMatch[1]}</strong>)
      remaining = remaining.slice(boldMatch[0].length)
      continue
    }

    // No match — advance one character
    segments.push(remaining[0])
    remaining = remaining.slice(1)
  }

  if (segments.length === 0) return ""
  if (segments.length === 1) return segments[0]
  return <>{segments}</>
}
