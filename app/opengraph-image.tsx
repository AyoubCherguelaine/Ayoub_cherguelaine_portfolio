import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const runtime = "edge"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 630,
}
export const alt = "Ayoub Cherguelaine portfolio"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#e6f8ff",
          background:
            "radial-gradient(1200px 630px at -5% -10%, #1b8fcf66 0%, transparent 50%), radial-gradient(800px 560px at 105% 0%, #00c2a866 0%, transparent 55%), linear-gradient(180deg, #0a1224 0%, #070d1a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 24,
            color: "#84dcff",
          }}
        >
          <span>AI</span>
          <span>•</span>
          <span>NLP</span>
          <span>•</span>
          <span>Automation</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#b7dcff" }}>{siteConfig.role}</div>
          <div style={{ fontSize: 24, color: "#9fb2cd", maxWidth: "88%" }}>
            Production-grade language systems, agentic workflows, and document intelligence projects.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9fe8ff" }}>
          <span>{new URL(siteConfig.url).hostname}</span>
          <span>Portfolio</span>
        </div>
      </div>
    ),
    size,
  )
}
