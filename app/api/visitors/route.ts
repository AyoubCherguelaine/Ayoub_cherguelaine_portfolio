import { getStore } from "@netlify/blobs"
import { NextRequest, NextResponse } from "next/server"
import { trafficSource } from "@/lib/visitor-stats"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  if (request.headers.get("sec-fetch-site") === "cross-site" ||
      (request.headers.get("origin") && request.headers.get("origin") !== request.nextUrl.origin)) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 })
  }
  if (/bot|crawler|spider|headless/i.test(request.headers.get("user-agent") || "")) {
    return new NextResponse(null, { status: 204 })
  }
  let body
  try {
    body = await request.json()
    if (typeof body?.search !== "string" || typeof body?.referrer !== "string" || body.search.length > 2048 || body.referrer.length > 2048) throw new Error()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    // A key per browser avoids lost increments during concurrent requests.
    const store = getStore({ name: "portfolio-visitors", consistency: "strong" })
    const existing = request.cookies.get("portfolio_visitor")?.value
    const id = existing && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(existing)
      ? existing : crypto.randomUUID()
    const source = trafficSource(new URLSearchParams(body.search), body.referrer)
    await store.set(`total/${id}`, "1", { onlyIfNew: true })
    if (source !== "direct") await store.set(`${source}/${id}`, "1", { onlyIfNew: true })
    const counts = await Promise.all(["total", "linkedin", "cv"].map(async (prefix) => {
      let count = 0
      for await (const page of store.list({ prefix: `${prefix}/`, paginate: true })) count += page.blobs.length
      return count
    }))
    const response = NextResponse.json({ total: counts[0], linkedin: counts[1], cv: counts[2] }, {
      headers: { "Cache-Control": "no-store" },
    })
    response.cookies.set("portfolio_visitor", id, {
      httpOnly: true, secure: request.nextUrl.protocol === "https:", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365,
    })
    return response
  } catch (error) {
    console.error("Visitor storage unavailable", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json({ error: "Visitor statistics unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } })
  }
}
