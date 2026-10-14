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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        color: "#f1f1e9",
        background:
          "linear-gradient(135deg, #10110f 0%, #191b17 65%, #344525 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          fontSize: 24,
          color: "#c1f760",
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
        <div style={{ fontSize: 34, color: "#d4dfc4" }}>{siteConfig.role}</div>
        <div style={{ fontSize: 24, color: "#a3a69b", maxWidth: "88%" }}>
          Production-grade language systems, agentic workflows, and document
          intelligence projects.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#c1f760",
        }}
      >
        <span>{new URL(siteConfig.url).hostname}</span>
        <span>Portfolio</span>
      </div>
    </div>,
    size,
  )
}
