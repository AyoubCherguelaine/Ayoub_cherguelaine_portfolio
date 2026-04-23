import { ImageResponse } from "next/og"

import { getProjectById } from "@/lib/portfolio-data"

export const runtime = "edge"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 630,
}
export const alt = "Project case study preview"

type ImageRouteProps = {
  params: { id: string } | Promise<{ id: string }>
}

async function resolveParams(params: ImageRouteProps["params"]) {
  if (params instanceof Promise) {
    return params
  }

  return params
}

export default async function ProjectOpenGraphImage({ params }: ImageRouteProps) {
  const { id } = await resolveParams(params)
  const project = getProjectById(id)

  const title = project?.title ?? "Project Case Study"
  const summary = project?.summary ?? "Applied AI and NLP implementation case study"
  const tags = project?.tags.slice(0, 3).join(" • ") ?? "AI • NLP • Automation"

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
          color: "#e9f7ff",
          background:
            "radial-gradient(980px 620px at -10% -15%, #1a8fd35e 0%, transparent 56%), radial-gradient(860px 540px at 105% 0%, #00c39f58 0%, transparent 58%), linear-gradient(180deg, #081121 0%, #050b16 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            fontSize: 22,
            color: "#98defe",
          }}
        >
          <span>Case Study</span>
          <span>•</span>
          <span>Ayoub Cherguelaine</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.04,
              maxWidth: "92%",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#b8d8f6",
              maxWidth: "90%",
            }}
          >
            {summary}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#95e3ff" }}>
          <span>{tags}</span>
          <span>Verified Snapshot • 2026-04-23</span>
        </div>
      </div>
    ),
    size,
  )
}
