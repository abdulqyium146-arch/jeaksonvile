import { NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "info@jaxlockkey.com"
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@jaxlockkey.com"

async function sendEmail(subject: string, html: string) {
  if (!RESEND_API_KEY) return

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Jax Lock Key Website <${FROM_EMAIL}>`,
      to: [NOTIFY_EMAIL],
      subject,
      html,
    }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const name = String(body.name ?? "").slice(0, 200)
    const phone = String(body.phone ?? "").slice(0, 50)
    const email = String(body.email ?? "").slice(0, 200)
    const service = String(body.service ?? "").slice(0, 200)
    const message = String(body.message ?? "").slice(0, 2000)
    const type = String(body.type ?? "contact-form").slice(0, 50)

    if (!phone && !email) {
      return NextResponse.json({ error: "Contact info required" }, { status: 400 })
    }

    const submission = { name, phone, email, service, message, type, ts: new Date().toISOString() }
    console.log("Contact form submission:", submission)

    const subject =
      type === "quick-quote"
        ? `Quick Quote Request — ${phone}`
        : `New Contact Form — ${name || phone}`

    const html = `
      <h2>New submission from jaxlockkey.com</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Type</strong></td><td>${type}</td></tr>
        <tr><td><strong>Name</strong></td><td>${name || "—"}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email || "—"}</td></tr>
        <tr><td><strong>Service</strong></td><td>${service || "—"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
        <tr><td><strong>Time</strong></td><td>${submission.ts}</td></tr>
      </table>
    `

    await sendEmail(subject, html)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
