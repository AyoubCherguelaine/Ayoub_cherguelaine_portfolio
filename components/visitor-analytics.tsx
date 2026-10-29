"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { VisitorStats } from "@/lib/visitor-stats"

const VisitorContext = createContext<VisitorStats | null | undefined>(undefined)

// Reuse the request across Strict Mode effect replays and component remounts.
let visitRequest: Promise<VisitorStats | null> | undefined

export function VisitorAnalytics({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<VisitorStats | null | undefined>(undefined)
  useEffect(() => {
    let active = true
    visitRequest ??= fetch("/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ search: window.location.search, referrer: document.referrer }),
    }).then(async (response) => response.ok && response.status !== 204 ? response.json() : null).catch(() => null)
    visitRequest.then((data) => { if (active) setStats(data) })
    return () => { active = false }
  }, [])
  return <VisitorContext.Provider value={stats}>{children}</VisitorContext.Provider>
}

export function VisitorCounter() {
  const stats = useContext(VisitorContext)
  return (
    <span aria-live="polite" title="Unique browsers since tracking started. Returning browsers are counted once; source totals can overlap.">
      {stats ? `${stats.total.toLocaleString("en-US")} visitors · ${stats.linkedin.toLocaleString("en-US")} from LinkedIn · ${stats.cv.toLocaleString("en-US")} from CV` : stats === undefined ? "Loading visitor statistics…" : "Visitor statistics unavailable"}
    </span>
  )
}
