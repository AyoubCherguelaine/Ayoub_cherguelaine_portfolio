export type VisitorStats = { total: number; linkedin: number; cv: number }

export function trafficSource(params: URLSearchParams, referrer: string): "linkedin" | "cv" | "direct" {
  const source = (params.get("source") || params.get("utm_source"))?.trim().toLowerCase()
  if (source === "linkedin" || source === "cv") return source
  // Explicit campaign tags take precedence over inferred referrers.
  if (source) return "direct"
  try {
    const hostname = new URL(referrer).hostname
    if (hostname === "linkedin.com" || hostname.endsWith(".linkedin.com") || hostname === "lnkd.in") return "linkedin"
  } catch { /* A direct visit has no referrer. */ }
  return "direct"
}
